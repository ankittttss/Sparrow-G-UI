# -*- coding: utf-8 -*-
"""Convert a Claude Design .dc.html template fragment into JSX.

Handles sc-for / sc-if, {{ }} bindings, style="" (with interpolation) ->
sx(`...`), style-hover="" -> a generated :hover class, DOM/SVG attribute
renaming, void elements, and text escaping.
"""
import re, sys, html, hashlib, json

VOID = {'img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'path', 'circle',
        'rect', 'line', 'polyline', 'polygon', 'ellipse', 'stop', 'use', 'area', 'col'}

ATTR_MAP = {
    'class': 'className', 'for': 'htmlFor', 'autofocus': 'autoFocus',
    'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin', 'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset', 'stroke-opacity': 'strokeOpacity',
    'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'clip-path': 'clipPath',
    'fill-opacity': 'fillOpacity', 'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity', 'text-anchor': 'textAnchor',
    'vector-effect': 'vectorEffect', 'viewbox': 'viewBox',
    'gradientunits': 'gradientUnits', 'preserveaspectratio': 'preserveAspectRatio',
    'maxlength': 'maxLength', 'readonly': 'readOnly', 'tabindex': 'tabIndex',
    'colspan': 'colSpan', 'rowspan': 'rowSpan', 'srcset': 'srcSet',
    'novalidate': 'noValidate', 'autocomplete': 'autoComplete',
    'inputmode': 'inputMode', 'contenteditable': 'contentEditable',
    'crossorigin': 'crossOrigin', 'datetime': 'dateTime',
}

# React types these as numbers (SVG width/height happily take strings, so they
# are deliberately absent).
NUMERIC = {'rows', 'cols', 'size', 'span', 'start', 'maxLength', 'minLength',
           'tabIndex', 'colSpan', 'rowSpan'}

hover_rules = {}   # css text -> class name

TOKEN = re.compile(r'<!--.*?-->|<[^>]*>', re.S)
ATTR = re.compile(r'([:@a-zA-Z_][-:.\w]*)\s*=\s*"([^"]*)"|([:@a-zA-Z_][-:.\w]*)')


def expr_of(v):
    """A value that is exactly one {{ ... }} -> the inner JS expression."""
    if v is None:
        return None
    m = re.fullmatch(r'\s*\{\{(.*?)\}\}\s*', v, re.S)
    return m.group(1).strip() if m else None


def to_template(v):
    """An attribute value with {{x}} interpolation -> a JS template-literal body."""
    out = v.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return re.sub(r'\{\{(.*?)\}\}', lambda m: '${' + m.group(1).strip() + '}', out, flags=re.S)


def fix_asset(val):
    """Make local asset paths root-relative.

    The design writes src="assets/x.png". That is fine on a single-page canvas
    but on /about/ it resolves to /about/assets/x.png, and since the dev server
    answers unknown paths with app HTML, the relative src inside *that* resolves
    one level deeper again - an infinite request loop.
    """
    return '/' + val if val.startswith('assets/') else val


def hover_class(css):
    css = css.strip().rstrip(';')
    if css in hover_rules:
        return hover_rules[css]
    name = 'hv-' + hashlib.md5(css.encode()).hexdigest()[:8]
    hover_rules[css] = name
    return name


def conv_text(t):
    """Escape a text node for JSX, turning {{ }} into { }."""
    parts = re.split(r'(\{\{.*?\}\})', t, flags=re.S)
    out = []
    for p in parts:
        if p.startswith('{{') and p.endswith('}}'):
            out.append('{' + p[2:-2].strip() + '}')
        elif p:
            p = html.unescape(p)
            p = p.replace('{', '&#123;').replace('}', '&#125;')
            p = p.replace('<', '&lt;').replace('>', '&gt;')
            out.append(p)
    return ''.join(out)


def conv_attrs(raw):
    attrs = [(m.group(1) or m.group(3), m.group(2)) for m in ATTR.finditer(raw)]
    out, classes, data_img = [], [], None

    for name, val in attrs:
        low = name.lower()
        if low.startswith('hint-'):
            continue
        if low == 'style-hover':
            classes.append(hover_class(val))
            continue
        if low == 'data-img':
            data_img = val
            continue
        if low == 'class':
            classes.append(val)
            continue
        if val is None:
            out.append('%s={true}' % ATTR_MAP.get(low, low))
            continue
        if low == 'style':
            out.append('style={sx(`%s`)}' % to_template(val))
            continue
        if low.startswith('on'):
            ev = {'oninput': 'onChange', 'onclick': 'onClick', 'onkeydown': 'onKeyDown',
                  'onmouseenter': 'onMouseEnter', 'onmouseleave': 'onMouseLeave',
                  'onchange': 'onChange', 'onsubmit': 'onSubmit',
                  'onfocus': 'onFocus', 'onblur': 'onBlur'}.get(low, name)
            e = expr_of(val)
            out.append('%s={%s}' % (ev, e if e else '() => {}'))
            continue
        jsname = ATTR_MAP.get(name, ATTR_MAP.get(low, low))
        e = expr_of(val)
        if e is not None:
            out.append('%s={%s}' % (jsname, e))
        elif jsname in NUMERIC and val.strip().isdigit():
            out.append('%s={%s}' % (jsname, val.strip()))
        elif '{{' in val:
            out.append('%s={`%s`}' % (jsname, to_template(val)))
        else:
            out.append('%s=%s' % (
                jsname,
                json.dumps(fix_asset(html.unescape(val)), ensure_ascii=False)))

    if data_img is not None:
        out = [a for a in out if not a.startswith('src=')]
        e = expr_of(data_img)
        out.append('src={%s}' % (e if e else '`%s`' % to_template(data_img)))

    if classes:
        joined = ' '.join(classes)
        if '{{' in joined:
            out.insert(0, 'className={`%s`}' % to_template(joined))
        else:
            out.insert(0, 'className=%s' % json.dumps(joined, ensure_ascii=False))

    return (' ' + ' '.join(out)) if out else ''


def convert(src):
    pos, out = 0, []
    for m in TOKEN.finditer(src):
        text = src[pos:m.start()]
        if text.strip():
            out.append(conv_text(text))
        elif '\n' in text:
            out.append('\n')
        pos = m.end()
        tok = m.group(0)
        if tok.startswith('<!--'):
            continue

        name_m = re.match(r'</?\s*([a-zA-Z][-\w:]*)', tok)
        if not name_m:
            continue
        tag = name_m.group(1)
        low = tag.lower()

        if tok.startswith('</'):
            if low in VOID:
                continue      # already emitted self-closed; drop the stray closer
            if low == 'sc-for':
                out.append('</React.Fragment>))}')
            elif low == 'sc-if':
                out.append('</>) : null}')
            else:
                out.append('</%s>' % tag)
            continue

        raw = tok[name_m.end():].rstrip('>').rstrip('/')
        self_closed = tok.rstrip().endswith('/>')

        if low in ('sc-for', 'sc-if'):
            a = {(mm.group(1) or mm.group(3)): mm.group(2) for mm in ATTR.finditer(raw)}
            if low == 'sc-for':
                lst = expr_of(a.get('list')) or '[]'
                as_ = a.get('as', 'it')
                out.append('{(%s ?? []).map((%s: any, _k: number) => '
                           '(<React.Fragment key={_k}>' % (lst, as_))
            else:
                out.append('{(%s) ? (<>' % (expr_of(a.get('value')) or 'false'))
            continue

        a = conv_attrs(raw)
        # images render through SafeImg so a missing file degrades to the
        # design's own fallback treatment instead of a broken-image icon
        emit = 'SafeImg' if low == 'img' else tag
        out.append('<%s%s />' % (emit, a) if (self_closed or low in VOID)
                   else '<%s%s>' % (emit, a))

    tail = src[pos:]
    if tail.strip():
        out.append(conv_text(tail))
    return ''.join(out)


if __name__ == '__main__':
    body = convert(open(sys.argv[1], encoding='utf-8').read())
    open(sys.argv[2], 'w', encoding='utf-8').write(body)
    if len(sys.argv) > 3:
        css = '\n'.join(
            '.%s:hover{%s}' % (cls, ';'.join(
                d.strip() + ' !important' for d in rule.split(';') if d.strip()))
            for rule, cls in sorted(hover_rules.items(), key=lambda kv: kv[1]))
        open(sys.argv[3], 'w', encoding='utf-8').write(css + '\n')
    sys.stderr.write('hover rules: %d\n' % len(hover_rules))

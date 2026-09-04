# -*- coding: utf-8 -*-
"""Wrap each converted JSX fragment in a React component.

Each component destructures exactly the view-model keys it references, so a
typo in the template surfaces as a TypeScript error rather than a silent
`undefined` at runtime.
"""
import io, os, re

OUT_JSX = 'tools/out'
CHROME = ['Header', 'SearchOverlay', 'MobileNav', 'CartDrawer', 'Footer', 'PayProcessing']
PAGES = ['Home', 'Shop', 'Product', 'Blog', 'Article', 'Solutions', 'About',
         'Contact', 'Login', 'Checkout', 'Success', 'Account']


def viewmodel_keys():
    """Top-level keys of the object literal returned by buildVals()."""
    src = io.open('src/lib/derived.ts', encoding='utf-8').read()
    # anchor inside buildVals, not scoreProduct's one-line return
    src = src[src.index('export function buildVals'):]
    i = src.index('{', src.index('\n    return {\n'))

    keys, depth, j = [], 0, i
    quote = None            # ' " or ` while inside a string literal
    prev = ''               # last significant (non-space) char seen at depth 1

    while j < len(src):
        c = src[j]

        if quote:
            if c == '\\':
                j += 2
                continue
            if c == quote:
                quote = None
            j += 1
            continue

        if c in '\'"`':
            quote = c
        elif c in '{[(':
            depth += 1
        elif c in '}])':
            depth -= 1
            if depth == 0:
                break
        elif depth == 1 and prev in '{,':
            m = re.match(r'([A-Za-z_$][\w$]*)\s*:', src[j:j + 80])
            if m:
                keys.append(m.group(1))

        if not c.isspace():
            prev = c
        j += 1

    return sorted(set(keys))


KEYS = viewmodel_keys()
print('view-model keys: %d' % len(KEYS))

TEMPLATE = """'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
%s
export default function %s() {
  const v = useVals();
%s
  return (
    <>
%s
    </>
  );
}
"""

for name in CHROME + PAGES:
    jsx = io.open(os.path.join(OUT_JSX, name + '.jsx.txt'), encoding='utf-8').read()
    used = [k for k in KEYS if re.search(r'(?<![.\w$])' + re.escape(k) + r'(?![\w$])', jsx)]

    if used:
        lines, cur = [], '  const {'
        for k in used:
            if len(cur) + len(k) + 2 > 92:
                lines.append(cur)
                cur = '   '
            cur += ' ' + k + ','
        lines.append(cur + ' } = v;')
        destructure = '\n'.join(lines).replace(', } = v;', ' } = v;')
    else:
        destructure = '  void v;'

    indented = '\n'.join(('      ' + ln) if ln.strip() else '' for ln in jsx.split('\n'))
    folder = 'src/components/pages' if name in PAGES else 'src/components'
    imp = "import SafeImg from '@/components/SafeImg';\n" if 'SafeImg' in jsx else ''
    io.open(os.path.join(folder, name + '.tsx'), 'w', encoding='utf-8').write(
        TEMPLATE % (imp, name, destructure, indented))
    print('%-14s %3d keys' % (name, len(used)))

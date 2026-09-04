# -*- coding: utf-8 -*-
"""Sanity-check the exported site: no leaked overlays, no conversion artifacts,
and every dynamic page carrying its own content."""
import re, io, glob, sys

BS = chr(92)                      # backslash, kept out of the regex literal
ESCAPE = re.compile(BS + BS + 'u[0-9a-fA-F]{4}')
ok = True


def visible(html):
    """Markup with <script> payloads stripped (Next serialises state there)."""
    return re.sub(r'<script.*?</script>', '', html, flags=re.S)


print('=== overlays must not render unless opened ===')
LEAKS = ['Completing your payment', 'Razorpay is confirming', 'Nothing here yet',
         'Search kits', 'Often bought together', 'Gift wrap this order']
for pat in LEAKS:
    pages = [f for f in glob.glob('out/**/*.html', recursive=True)
             if pat in visible(io.open(f, encoding='utf-8', errors='replace').read())]
    print('  %-26s %d pages' % (pat, len(pages)))
    ok &= not pages

print()
print('=== unicode escapes leaking into visible markup ===')
total = 0
for f in glob.glob('out/**/*.html', recursive=True):
    hits = ESCAPE.findall(visible(io.open(f, encoding='utf-8', errors='replace').read()))
    if hits:
        print('  %-44s %s' % (f, hits[:5]))
    total += len(hits)
print('  total:', total)
ok &= total == 0

print()
print('=== each product page carries its own name and dimensions ===')
NAMES = {'bucket-wheel-excavator': ('Bucket Wheel Excavator', '62 × 24 × 38 cm'),
         'excavator': ('Excavator', '46 × 20 × 26 cm'),
         'tower-crane': ('Tower Crane', '38 × 38 × 72 cm'),
         'seed-driller': ('Seed Driller', '34 × 22 × 20 cm'),
         'tractor': ('Tractor', '32 × 18 × 22 cm'),
         'tractor-seeder': ('Tractor Seeder', '58 × 20 × 22 cm')}
for pid, (nm, size) in NAMES.items():
    h = io.open('out/product/%s/index.html' % pid, encoding='utf-8', errors='replace').read()
    good = h.count(nm) > 0 and size in h
    print('  %-24s name=%-2d ownSize=%s' % (pid, h.count(nm), 'OK' if size in h else 'MISSING'))
    ok &= good

print()
print('=== each article page carries its own title ===')
ARTS = {'leadership': 'How STEM activities build leadership skills',
        'engineering-play': 'Teaching engineering concepts through play',
        'problem-solving': 'How hands-on learning improves problem-solving skills'}
for aid, title in ARTS.items():
    h = io.open('out/blog/%s/index.html' % aid, encoding='utf-8', errors='replace').read()
    print('  %-20s %s' % (aid, 'OK' if title in h else 'MISSING'))
    ok &= title in h

print()
print('=== template artifacts ===')
for pat in ['sc-for', 'sc-if', 'style-hover', 'data-img', '{{', '[object Object]']:
    n = sum(visible(io.open(f, encoding='utf-8', errors='replace').read()).count(pat)
            for f in glob.glob('out/**/*.html', recursive=True))
    print('  %-18s %d' % (pat, n))
    ok &= n == 0

print()
print('RESULT:', 'PASS' if ok else 'FAIL')
sys.exit(0 if ok else 1)

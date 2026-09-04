# -*- coding: utf-8 -*-
"""Slice the .dc.html template into per-region fragments and convert each to JSX."""
import io, os, sys, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import dc2jsx

SRC = 'design-source/SparrowG Unified Site.dc.html'
OUT = 'tools/out'

# name -> (first line, last line) inclusive, 1-based.
# Page regions are the INNER content of their sc-if (the route decides whether
# they show). Overlay regions INCLUDE their sc-if, because that condition
# (searchOpen / navOpen / cartOpen / payProcessing) is their visibility.
REGIONS = {
    'Header':        (72, 145),
    'SearchOverlay': (147, 178),
    'MobileNav':     (180, 205),
    'CartDrawer':    (207, 316),
    'Home':          (321, 982),
    'Shop':          (986, 1079),
    'Product':       (1083, 1220),
    'Blog':          (1224, 1267),
    'Article':       (1271, 1328),
    'Solutions':     (1332, 1373),
    'About':         (1377, 1449),
    'Contact':       (1453, 1493),
    'Login':         (1498, 1533),
    'Checkout':      (1537, 1666),
    'Success':       (1670, 1700),
    'Account':       (1704, 1727),
    'PayProcessing': (1731, 1742),
    'Footer':        (1746, 1776),
}

lines = io.open(SRC, encoding='utf-8').read().split('\n')
os.makedirs(OUT, exist_ok=True)

for name, (a, b) in REGIONS.items():
    frag = '\n'.join(lines[a - 1:b])
    jsx = dc2jsx.convert(frag)
    io.open(os.path.join(OUT, name + '.jsx.txt'), 'w', encoding='utf-8').write(jsx)
    print('%-14s lines %5d-%-5d  ->  %6d chars' % (name, a, b, len(jsx)))

css = '\n'.join(
    '.%s:hover{%s}' % (cls, ';'.join(
        d.strip() + ' !important' for d in rule.split(';') if d.strip()))
    for rule, cls in sorted(dc2jsx.hover_rules.items(), key=lambda kv: kv[1]))
io.open(os.path.join(OUT, 'hover.css'), 'w', encoding='utf-8').write(css + '\n')
print('hover rules:', len(dc2jsx.hover_rules))

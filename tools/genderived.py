# -*- coding: utf-8 -*-
"""Port renderVals() from the .dc.html class into a standalone builder function."""
import io, re

SRC = 'design-source/SparrowG Unified Site.dc.html'
lines = io.open(SRC, encoding='utf-8').read().split('\n')

body = '\n'.join(lines[2044:2692])          # 2045..2692 inclusive, 1-based

SUBS = [
    (r'\bthis\.state\b', 's'),
    (r'\bthis\.C\b', 'CDN'),
    (r'\bthis\.(PRODUCTS|POSTS|QUOTES|AGES|QUIZ|PARTNERS|FEATURED_IDS)\b', r'\1'),
    (r'\bthis\.fmt\(', 'fmt('),
    (r'\bthis\.prodById\(', 'prodById('),
    (r'\bthis\.postById\(', 'postById('),
    (r'\bthis\.scoreProduct\(', 'scoreProduct('),
    (r'\bthis\.card\(', 'card('),
    (r'\bthis\.setState\(', 'set('),
    (r'\bthis\.go\(', 'go('),
    (r'\bthis\.add\(', 'add('),
    (r'\bthis\._fbHover\b', 'fbHoverRef.current'),
]

for pat, rep in SUBS:
    body = re.sub(pat, rep, body)

# `s` already arrives from ctx; keep only the CDN alias the ported code uses.
body = body.replace('const s = s, C = CDN;', 'const C = CDN;', 1)

# The source is untyped JS. These are the only places TypeScript cannot infer a
# type on its own; each is a widening cast, never a behaviour change.
TYPE_FIXES = [
    # bare single-letter arrow params that have no contextual type
    (r'(?<![\w$(])\b([pe]) => ', r'(\1: any) => '),
    # string literals flowing into the narrow Route / viewport unions
    (r"set\(\{ vp: k \}\)", "set({ vp: k as SiteState['vp'] })"),
    (r'go\(k\)', 'go(k as Route)'),
    (r'go\(m\.route\)', 'go(m.route as Route)'),
    # [].concat(...) infers never[] for the empty literal
    (r'\[\]\.concat\(PARTNERS, PARTNERS\)', '([] as any[]).concat(PARTNERS, PARTNERS)'),
]
for pat, rep in TYPE_FIXES:
    body = re.sub(pat, rep, body)

leftover = sorted(set(re.findall(r'this\.\w+', body)))
if leftover:
    print('WARNING unresolved:', leftover)

HEADER = '''/* eslint-disable @typescript-eslint/no-explicit-any */
// Ported from renderVals() in the Claude Design source
// ("SparrowG Unified Site.dc.html"). Regenerate with `python tools/genderived.py`.
import type { MutableRefObject } from 'react';
import {
  AGES, CDN, FEATURED_IDS, PARTNERS, POSTS, PRODUCTS, QUIZ, QUOTES,
  type Product,
} from '@/data/catalog';
import type { Route, SiteState } from './state';

export const fmt = (n: number) => '\\u20B9' + n.toLocaleString('en-IN');

export const prodById = (id: string): Product =>
  PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

export const postById = (id: string) =>
  POSTS.find((p) => p.id === id) || POSTS[0];

export function scoreProduct(p: Product, a: any) {
'''

# scoreProduct body: lines 1943..1966 (inside the method braces)
score_body = '\n'.join(lines[1942:1966])
score_body = re.sub(r'\bthis\.fmt\(', 'fmt(', score_body)

MIDDLE = '''}

export interface BuildCtx {
  s: SiteState;
  set: (patch: Partial<SiteState> | ((prev: SiteState) => Partial<SiteState>)) => void;
  go: (route: Route, extra?: Partial<SiteState>) => void;
  add: (id: string) => void;
  fbHoverRef: MutableRefObject<boolean>;
}

export function buildVals(ctx: BuildCtx): any {
  const { s, set, go, add, fbHoverRef } = ctx;

  const card = (p: Product): any => ({
    ...p,
    img: CDN + p.img,
    priceLabel: fmt(p.price),
    mrpLabel: fmt(p.mrp),
    open: () => go('product', { pid: p.id, qty: 1, gi: 0 }),
    add: () => add(p.id),
  });

'''

out = HEADER + score_body + '\n' + MIDDLE + body + '\n}\n'
io.open('src/lib/derived.ts', 'w', encoding='utf-8').write(out)
print('wrote src/lib/derived.ts (%d lines)' % out.count('\n'))

# -*- coding: utf-8 -*-
"""Lift the literal data arrays out of the .dc.html script into a TS module."""
import io

SRC = 'design-source/SparrowG Unified Site.dc.html'
lines = io.open(SRC, encoding='utf-8').read().split('\n')


def block(a, b):
    """Grab lines a..b (1-based, inclusive) and strip the `NAME = ` prefix."""
    body = '\n'.join(lines[a - 1:b])
    return body.split('=', 1)[1].strip().rstrip(';')


BLOCKS = [
    ('AGES', 1798, 1803, 'AgeGroup[]'),
    ('QUOTES', 1805, 1810, 'Quote[]'),
    ('PRODUCTS', 1812, 1867, 'Product[]'),
    ('POSTS', 1869, 1901, 'Post[]'),
    ('PARTNERS', 1903, 1910, 'Partner[]'),
    ('QUIZ', 1912, 1940, 'QuizStep[]'),
]

HEADER = '''// Content lifted verbatim from the Claude Design source
// ("SparrowG Unified Site.dc.html"). Edit there, or regenerate with
// `python tools/gendata.py`.

export const CDN = 'https://kv80w4-fe.myshopify.com/cdn/shop/';

export interface Skill { title: string; text: string }
export interface InboxItem { name: string; qty: string }
export interface Spec { k: string; v: string }

export interface Product {
  id: string; name: string; category: string; badge: string;
  age: string; ageN: number; level: string; buildTime: string;
  price: number; mrp: number; reviews: number;
  blurb: string; long: string; img: string; img2: string;
  learnIntro: string; skills: Skill[]; inbox: InboxItem[]; specs: Spec[];
}

export interface AgeGroup {
  label: string; min: number; max: number; note: string; img: string;
}

export interface Quote {
  headline: string; quote: string; name: string; role: string;
  stars: number; img: string;
}

export interface PostBlock { t: 'p' | 'h' | 'q'; text: string }
export interface Post {
  id: string; cat: string; read: string; date: string; title: string;
  img: string; excerpt: string; body: PostBlock[];
}

export interface Partner {
  name: string; img: string; bg: string; fg: string;
  hasImg: boolean; isCap: boolean; isBulb: boolean;
}

export interface QuizOption { label: string; sub: string; value: string | number }
export interface QuizStep {
  id: string; title: string; note: string; options: QuizOption[];
}

export const FEATURED_IDS = [
  'bucket-wheel-excavator', 'excavator', 'tower-crane', 'tractor',
];
'''

# Three partner logos could not be imported from the design project (they
# exceed the API's 256 KiB file-read cap). They were supplied by hand under
# different names and formats, so the design's paths are remapped to the files
# that actually exist.
ASSET_OVERRIDES = {
    'assets/logo-cbse.png': 'assets/CBSE-logo.jpg',
    'assets/logo-icse.png': 'assets/ICSE.jpg',
    'assets/logo-iit-alumni-sq.png': 'assets/IIT.png',
}


# Local asset paths must be root-relative, or they resolve against the current
# route (/about/assets/... ) instead of the site root.
def block_fixed(a, b):
    body = block(a, b)
    for old, new in ASSET_OVERRIDES.items():
        body = body.replace("'%s'" % old, "'%s'" % new)
    return body.replace("'assets/", "'/assets/")


out = [HEADER]
for name, a, b, ts in BLOCKS:
    out.append('\nexport const %s: %s = %s;\n' % (name, ts, block_fixed(a, b)))

io.open('src/data/catalog.ts', 'w', encoding='utf-8').write('\n'.join(out))
print('wrote src/data/catalog.ts')

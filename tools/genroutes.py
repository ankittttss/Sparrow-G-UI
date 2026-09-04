# -*- coding: utf-8 -*-
"""Emit the thin app/ route files that mount each ported page component.

Which view is shown comes from the URL (see navFromPath in src/lib/state.ts),
so these files only have to pick the component — and, for the dynamic
segments, enumerate the ids to prerender.
"""
import io, os, shutil

SIMPLE = [
    ('', 'Home'),
    ('shop', 'Shop'),
    ('blog', 'Blog'),
    ('stem-solutions', 'Solutions'),
    ('about', 'About'),
    ('contact', 'Contact'),
    ('login', 'Login'),
    ('checkout', 'Checkout'),
    ('order-confirmed', 'Success'),
    ('account', 'Account'),
]

TPL = """import %s from '@/components/pages/%s';

export default function Page() {
  return <%s />;
}
"""

for path, comp in SIMPLE:
    d = os.path.join('src/app', path)
    os.makedirs(d, exist_ok=True)
    io.open(os.path.join(d, 'page.tsx'), 'w', encoding='utf-8').write(
        TPL % (comp, comp, comp))
    print('/%s -> %s' % (path, comp))

# --- dynamic routes -------------------------------------------------------

DYN = [
    ('product/[pid]', 'pid', 'Product', 'PRODUCTS', 'ProductRoute'),
    ('blog/[aid]', 'aid', 'Article', 'POSTS', 'ArticleRoute'),
]

SERVER = """import {{ {coll} }} from '@/data/catalog';
import {comp} from '@/components/pages/{comp}';

export function generateStaticParams() {{
  return {coll}.map((x) => ({{ {param}: x.id }}));
}}

export default function Page() {{
  return <{comp} />;
}}
"""

for path, param, comp, coll, stale in DYN:
    d = os.path.join('src/app', *path.split('/'))
    os.makedirs(d, exist_ok=True)
    io.open(os.path.join(d, 'page.tsx'), 'w', encoding='utf-8').write(
        SERVER.format(coll=coll, comp=comp, param=param))
    # the old effect-based wrapper is no longer needed
    old = os.path.join(d, stale + '.tsx')
    if os.path.exists(old):
        os.remove(old)
    print('/%s -> %s' % (path, comp))

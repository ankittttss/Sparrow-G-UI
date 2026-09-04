# -*- coding: utf-8 -*-
"""Regenerate every file derived from the Claude Design source.

    python tools/generate.py

Pipeline: catalogue data -> view-model -> template fragments -> components
-> route files. Nothing under src/ that this writes should be hand-edited;
change "design-source/SparrowG Unified Site.dc.html" and re-run.
"""
import io, os, re, runpy, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
sys.path.insert(0, os.path.join(ROOT, 'tools'))

STEPS = ['gendata.py', 'genderived.py', 'split.py', 'gencomponents.py', 'genroutes.py']

for step in STEPS:
    print('\n=== %s ===' % step)
    runpy.run_path(os.path.join('tools', step), run_name='__main__')

# The overlays are positioned against the page shell, which on a real (tall)
# page anchors them to the top of the document rather than the viewport.
print('\n=== overlay positioning ===')
for name in ('SearchOverlay', 'MobileNav', 'CartDrawer', 'PayProcessing'):
    path = os.path.join('src/components', name + '.tsx')
    src = io.open(path, encoding='utf-8').read()
    out, n = re.subn(r'position:absolute;inset:0', 'position:fixed;inset:0', src, count=1)
    io.open(path, 'w', encoding='utf-8').write(out)
    print('%-14s %s' % (name, 'fixed' if n else 'NO MATCH'))

print('\nDone. Run `npm run build`.')

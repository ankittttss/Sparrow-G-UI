# -*- coding: utf-8 -*-
"""Generate a stand-in for assets/about-classroom.png.

The real photograph could not be imported: it exceeds the 256 KiB cap on the
design API's file read and came back truncated. This draws a neutral
blueprint-style panel in the site palette so the "Who we are" band reads as
designed instead of showing broken-image alt text.

It is deliberately NOT a fake photograph of children - swap it for the real
export when you have it. Pure stdlib (no PIL/numpy), writes a PNG by hand.
"""
import math, struct, zlib

W, H = 1280, 800
INK_TOP = (0x22, 0x2A, 0x36)      # cool slate, lifts toward the top-right
INK_BOT = (0x0E, 0x13, 0x1A)      # near-black base
AMBER = (0xFF, 0xC5, 0x3D)        # SparrowG accent


def lerp(a, b, t):
    return a + (b - a) * t


def mix(c, d, t):
    return tuple(lerp(c[i], d[i], t) for i in range(3))


def px(x, y):
    u, v = x / (W - 1), y / (H - 1)

    # base: vertical gradient, warmed slightly toward the upper right
    t = v * 0.86 + (1 - u) * 0.14
    r, g, b = mix(INK_TOP, INK_BOT, min(1.0, t))

    # blueprint grid, fading out to the left where the headline sits
    grid = 64
    edge = min(x % grid, grid - x % grid, y % grid, grid - y % grid)
    if edge < 1:
        strength = 0.05 + 0.05 * u
        r, g, b = mix((r, g, b), (255, 255, 255), strength)

    # concentric rings, echoing the gear trains the kits are built around
    cx, cy = W * 0.74, H * 0.46
    d = math.hypot(x - cx, y - cy)
    for radius in (150, 232, 314):
        if abs(d - radius) < 1.4:
            r, g, b = mix((r, g, b), AMBER, 0.30)
    # radial spokes on the outer ring
    if abs(d - 314) < 26:
        ang = math.atan2(y - cy, x - cx)
        if (ang % (math.pi / 12)) < 0.036:
            r, g, b = mix((r, g, b), AMBER, 0.22)

    # a horizontal rule, as on an engineering drawing
    if abs(y - H * 0.78) < 1 and x > W * 0.52:
        r, g, b = mix((r, g, b), AMBER, 0.24)

    # vignette
    vig = 1 - 0.30 * ((u - 0.5) ** 2 + (v - 0.5) ** 2) * 2.4
    r, g, b = r * vig, g * vig, b * vig

    return (int(max(0, min(255, r))), int(max(0, min(255, g))), int(max(0, min(255, b))))


rows = bytearray()
for y in range(H):
    rows.append(0)                       # PNG filter byte: none
    for x in range(W):
        rows.extend(px(x, y))


def chunk(tag, data):
    out = struct.pack('>I', len(data)) + tag + data
    return out + struct.pack('>I', zlib.crc32(tag + data) & 0xFFFFFFFF)


png = (b'\x89PNG\r\n\x1a\n'
       + chunk(b'IHDR', struct.pack('>IIBBBBB', W, H, 8, 2, 0, 0, 0))
       + chunk(b'IDAT', zlib.compress(bytes(rows), 9))
       + chunk(b'IEND', b''))

with open('public/assets/about-classroom.png', 'wb') as fh:
    fh.write(png)

print('wrote public/assets/about-classroom.png  %dx%d  %.1f KB' % (W, H, len(png) / 1024))

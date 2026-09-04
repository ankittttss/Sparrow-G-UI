'use client';
/* eslint-disable @next/next/no-img-element */

import { useState, type ImgHTMLAttributes } from 'react';
import { sx } from '@/lib/sx';

/**
 * An <img> that degrades instead of showing a broken-image icon.
 *
 * Where the design defines an alternative treatment for a partner (its `press`
 * array carries a monogram and brand colours for each one) the fallback uses
 * that. Anything else falls back to a neutral tile, which keeps the surrounding
 * layout intact rather than collapsing it.
 *
 * Nothing here invents a logo: the monograms below are the design's own.
 */
const MARKS: Record<string, { mark: string; fg: string; bg: string }> = {
  'CBSE': { mark: 'CB', fg: '#3D6B33', bg: '#F0F4EC' },
  'ICSE': { mark: 'IC', fg: '#2C4C86', bg: '#EDF1F8' },
  'State Board': { mark: 'SB', fg: '#5B4B8A', bg: '#F2EFF8' },
  'IIT Alumni': { mark: 'IIT', fg: '#131A22', bg: '#F7F5F1' },
  'T-Works': { mark: 'TW', fg: '#FFFFFF', bg: '#131A22' },
  'EdTech': { mark: 'ET', fg: '#B58516', bg: '#FAF3E4' },
};

export default function SafeImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);
  const { alt, style, className, onError, ...rest } = props;

  if (!failed) {
    return (
      <img
        {...rest}
        alt={alt}
        style={style}
        className={className}
        onError={(e) => {
          setFailed(true);
          onError?.(e);
        }}
      />
    );
  }

  const known = alt ? MARKS[alt] : undefined;

  // The design's own radii and sizing come from `style`, so only the paint and
  // centring are overridden here. Partner tiles get a radius of their own,
  // since the source <img> carried none.
  const fallback =
    'display:grid;place-items:center;overflow:hidden;' +
    `background:${known ? known.bg : '#F1EEE8'};` +
    `color:${known ? known.fg : '#A6ADB6'};` +
    "font-family:'Space Grotesk',sans-serif;font-weight:700;" +
    'letter-spacing:.02em;line-height:1' +
    (known ? ';font-size:20px;border-radius:14px' : '');

  return (
    <span
      role="img"
      aria-label={alt}
      title={alt}
      className={className}
      style={{ ...style, ...sx(fallback) }}
    >
      {known ? known.mark : null}
    </span>
  );
}

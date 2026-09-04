import type { CSSProperties } from 'react';

/**
 * Parse a plain CSS declaration string into a React style object.
 *
 * The design source keeps every rule as an inline `style="a:b;c:d"` string, so
 * rather than hand-translating thousands of declarations we parse them at
 * render time and memoise the result. Splitting is paren-aware so values like
 * `linear-gradient(a, b)` and `url(data:image/gif;base64,...)` survive intact.
 */
const cache = new Map<string, CSSProperties>();

function splitDecls(css: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let start = 0;
  let quote: string | null = null;

  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) {
      if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'") quote = c;
    else if (c === '(') depth++;
    else if (c === ')') depth = Math.max(0, depth - 1);
    else if (c === ';' && depth === 0) {
      out.push(css.slice(start, i));
      start = i + 1;
    }
  }
  out.push(css.slice(start));
  return out;
}

function toCamel(prop: string): string {
  if (prop.startsWith('--')) return prop; // custom property, keep verbatim
  // -webkit-mask-image -> WebkitMaskImage ; font-size -> fontSize
  const leading = prop.startsWith('-');
  const camel = (leading ? prop.slice(1) : prop).replace(/-([a-z])/g, (_, ch: string) =>
    ch.toUpperCase(),
  );
  return leading ? camel.charAt(0).toUpperCase() + camel.slice(1) : camel;
}

export function sx(css: string): CSSProperties {
  const hit = cache.get(css);
  if (hit) return hit;

  const style: Record<string, string> = {};
  for (const decl of splitDecls(css)) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();
    // An unresolved binding (undefined interpolated into the template) is dropped
    // rather than emitted as the literal string "undefined".
    if (!prop || !value || value === 'undefined' || value === 'null') continue;
    style[toCamel(prop)] = value;
  }

  const frozen = style as CSSProperties;
  cache.set(css, frozen);
  return frozen;
}

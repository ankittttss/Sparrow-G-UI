'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  createContext, useCallback, useContext, useEffect, useMemo, useRef, useState,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FEATURED_IDS } from '@/data/catalog';
import { buildVals } from './derived';
import {
  INITIAL_STATE, navFromPath, pathFor, type Route, type SiteState,
} from './state';

interface SiteCtx {
  s: SiteState;
  set: (patch: Partial<SiteState> | ((prev: SiteState) => Partial<SiteState>)) => void;
  vals: any;
}

const Ctx = createContext<SiteCtx | null>(null);

export function useSite(): SiteCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>');
  return ctx;
}

/** The derived view-model, i.e. everything the ported templates bind against. */
export function useVals(): any {
  return useSite().vals;
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [stored, setState] = useState<SiteState>(INITIAL_STATE);
  const fbHoverRef = useRef(false);

  // Which view is showing (and the id it is showing) is a function of the URL,
  // not something the reducer owns. Layering it over the stored state keeps the
  // server render, the first client render and the address bar in agreement.
  const state = useMemo<SiteState>(
    () => ({ ...stored, ...navFromPath(pathname) }),
    [stored, pathname],
  );

  const set = useCallback<SiteCtx['set']>((patch) => {
    setState((prev) => ({
      ...prev,
      ...(typeof patch === 'function' ? patch(prev) : patch),
    }));
  }, []);

  // `go` reads the latest state through a ref rather than closing over it, so it
  // stays referentially stable and the view-model memo below is not invalidated
  // on every render.
  const stateRef = useRef(state);
  stateRef.current = state;

  const go = useCallback(
    (route: Route, extra: Partial<SiteState> = {}) => {
      setState((prev) => ({
        ...prev, ...extra, route, navOpen: false, cartOpen: false, menu: null,
      }));
      router.push(pathFor(route, { ...stateRef.current, ...extra }));
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [router],
  );

  const add = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      cart: { ...prev.cart, [id]: (prev.cart[id] || 0) + 1 },
      cartOpen: true,
    }));
  }, []);

  // Featured-build carousel autoplay (componentDidMount in the design source).
  useEffect(() => {
    const t = setInterval(() => {
      if (fbHoverRef.current) return;
      setState((prev) =>
        prev.fbHover ? prev : { ...prev, fb: (prev.fb + 1) % FEATURED_IDS.length });
    }, 1500);
    return () => clearInterval(t);
  }, []);

  // Testimonial strip: scale whichever card is nearest the centre, or hovered.
  useEffect(() => {
    let raf = 0;
    let hovered: Element | null = null;

    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      hovered = (t?.closest && t.closest('[data-feedcard]')) || null;
    };
    const out = () => { hovered = null; };

    document.addEventListener('mouseover', over, true);
    document.addEventListener('mouseleave', out, true);

    const tick = () => {
      const track = document.querySelector('[data-feedtrack]');
      if (track?.parentElement) {
        const r = track.parentElement.getBoundingClientRect();
        const mid = r.left + r.width / 2;
        for (const card of Array.from(track.querySelectorAll('[data-feedcard]'))) {
          const el = card as HTMLElement;
          const b = el.getBoundingClientRect();
          if (b.right < r.left - 200 || b.left > r.right + 200) continue;
          const dist = Math.abs(b.left + b.width / 2 - mid);
          const isHovered = hovered === el;
          const near = Math.max(0, 1 - dist / (b.width * 0.85));
          el.style.transform = `scale(${(isHovered ? 1.14 : 1 + near * 0.09).toFixed(3)})`;
          el.style.zIndex = isHovered ? '3' : near > 0.5 ? '2' : '1';
          el.style.boxShadow = isHovered
            ? '0 26px 54px rgba(19,26,34,.18)'
            : near > 0.45 ? '0 18px 40px rgba(19,26,34,.11)' : 'none';
          el.style.borderColor = isHovered ? '#D6D0C4' : '#EFEBE3';
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mouseover', over, true);
      document.removeEventListener('mouseleave', out, true);
    };
  }, []);

  const vals = useMemo(
    () => buildVals({ s: state, set, go, add, fbHoverRef }),
    [state, set, go, add],
  );

  return <Ctx.Provider value={{ s: state, set, vals }}>{children}</Ctx.Provider>;
}

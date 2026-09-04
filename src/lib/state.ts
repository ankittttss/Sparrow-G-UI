/* eslint-disable @typescript-eslint/no-explicit-any */

export type Route =
  | 'home' | 'shop' | 'product' | 'blog' | 'article' | 'solutions'
  | 'about' | 'contact' | 'login' | 'checkout' | 'success' | 'account';

export interface PlacedOrder {
  id: string; awb: string; name: string; total: string; img: string;
  date: string; status: string; statusBg: string; statusFg: string;
}

export interface SiteState {
  // routing (kept in state so the ported render logic reads unchanged; the
  // provider syncs these from the URL rather than the other way round)
  route: Route;
  pid: string;
  aid: string;

  // catalogue browsing
  cat: string; age: string; level: string; price: string; sort: string;
  blogCat: string; filterOpen: string | null;
  q: string; qDraft: string; searchOpen: boolean;

  // product detail
  qty: number; gi: number;

  // cart + gifting
  cart: Record<string, number>;
  cartOpen: boolean;
  wrap: boolean; giftNote: string; giftItems: Record<string, boolean>;
  coupon: string; couponApplied: number; couponChecked: boolean;

  // account + checkout
  user: { name: string; phone: string } | null;
  authStep: 'phone' | 'otp';
  phone: string;
  coStep: number; ship: string; pay: string; pincode: string; addr: string;
  payProcessing: boolean;
  placedOrders: PlacedOrder[];
  lastOrder: PlacedOrder | null;

  // home-page widgets
  fb: number; fbHover: boolean; qi: number; car: number; faq: number;
  qStep: number; answers: Record<string, any>;
  ageTab: string; step: number;

  // chrome
  navOpen: boolean; menu: string | null;
  enquiry: string;
  vp: 'desktop' | 'mobile';
}

export const INITIAL_STATE: SiteState = {
  route: 'home',
  pid: 'bucket-wheel-excavator',
  aid: 'leadership',

  cat: 'All', age: 'all', level: 'all', price: 'all', sort: 'featured',
  blogCat: 'All', filterOpen: null,
  q: '', qDraft: '', searchOpen: false,

  qty: 1, gi: 0,

  cart: {},
  cartOpen: false,
  wrap: false, giftNote: '', giftItems: {},
  coupon: '', couponApplied: 0, couponChecked: false,

  user: null,
  authStep: 'phone',
  phone: '',
  coStep: 0, ship: 'standard', pay: 'upi', pincode: '500081', addr: 'home',
  payProcessing: false,
  placedOrders: [],
  lastOrder: null,

  fb: 0, fbHover: false, qi: 0, car: 0, faq: 0,
  qStep: 0, answers: {},
  ageTab: '9 – 10 Years', step: 0,

  navOpen: false, menu: null,
  enquiry: 'Parent / general',
  vp: 'desktop',
};

/**
 * URL -> the view it names. Read during render (never from an effect) so the
 * prerendered HTML for /product/tractor is the tractor, not whatever `pid` the
 * initial state happened to hold.
 */
export function navFromPath(pathname: string): Partial<SiteState> {
  const seg = pathname.split('/').filter(Boolean);

  if (seg.length === 0) return { route: 'home' };

  switch (seg[0]) {
    case 'shop': return { route: 'shop' };
    case 'about': return { route: 'about' };
    case 'contact': return { route: 'contact' };
    case 'login': return { route: 'login' };
    case 'checkout': return { route: 'checkout' };
    case 'account': return { route: 'account' };
    case 'stem-solutions': return { route: 'solutions' };
    case 'order-confirmed': return { route: 'success' };
    case 'product':
      return seg[1] ? { route: 'product', pid: seg[1] } : { route: 'shop' };
    case 'blog':
      return seg[1] ? { route: 'article', aid: seg[1] } : { route: 'blog' };
    default: return { route: 'home' };
  }
}

/** Route -> URL. Product and article routes carry their id in the path. */
export function pathFor(route: Route, s: Partial<SiteState> = {}): string {
  switch (route) {
    case 'home': return '/';
    case 'shop': return '/shop';
    case 'product': return `/product/${s.pid}`;
    case 'blog': return '/blog';
    case 'article': return `/blog/${s.aid}`;
    case 'solutions': return '/stem-solutions';
    case 'success': return '/order-confirmed';
    default: return `/${route}`;
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// Ported from renderVals() in the Claude Design source
// ("SparrowG Unified Site.dc.html"). Regenerate with `python tools/genderived.py`.
import type { MutableRefObject } from 'react';
import {
  AGES, CDN, FEATURED_IDS, PARTNERS, POSTS, PRODUCTS, QUIZ, QUOTES,
  type Product,
} from '@/data/catalog';
import type { Route, SiteState } from './state';

export const fmt = (n: number) => '\u20B9' + n.toLocaleString('en-IN');

export const prodById = (id: string): Product =>
  PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

export const postById = (id: string) =>
  POSTS.find((p) => p.id === id) || POSTS[0];

export function scoreProduct(p: Product, a: any) {
    let score = 0; const reasons = [];
    if (a.age != null) {
      if (p.ageN <= a.age - 2) { score += 2; reasons.push('Comfortably within reach at age ' + a.age + ' — rated ' + p.age + '.'); }
      else if (p.ageN <= a.age) { score += 3; reasons.push('Pitched right at this age — rated ' + p.age + '.'); }
      else { score -= 3; reasons.push('Rated ' + p.age + ', so one to grow into.'); }
    }
    if (a.interest === 'Construction' || a.interest === 'Agriculture') {
      if (p.category === a.interest) { score += 3; reasons.push('Straight from the ' + p.category.toLowerCase() + ' range they already love.'); }
    } else if (a.interest === 'motor') {
      if (p.specs.some(x => /AA|Li-ion/.test(x.v))) { score += 2; reasons.push('Motorised — it actually drives once it is built.'); }
    }
    const hrs = parseInt(p.buildTime, 10);
    if (a.enjoy === 'long' && hrs >= 8) { score += 2; reasons.push('A ' + p.buildTime + ' build, so it lasts several sessions.'); }
    if (a.enjoy === 'quick' && hrs <= 7) { score += 2; reasons.push('Finished in ' + p.buildTime + ' — a satisfying weekend win.'); }
    if (a.enjoy === 'tinker' && p.level === 'Advanced') { score += 2; reasons.push('Enough mechanisms inside to keep pulling apart.'); }
    if (a.enjoy === 'method' && p.level === 'Intermediate') { score += 2; reasons.push('Rewards careful, step-by-step assembly.'); }
    if (a.level) {
      if (p.level === a.level) { score += 3; reasons.push(p.level + ' difficulty matches their experience.'); }
      else if (a.level === 'Beginner' && p.level === 'Advanced') score -= 3;
      else if (a.level === 'Advanced' && p.level === 'Beginner') score -= 1;
    }
    if (a.budget === 'u10') { if (p.price < 10000) { score += 3; reasons.push('Under ₹10,000, inside your budget.'); } else score -= 4; }
    if (a.budget === 'mid') { if (p.price >= 10000 && p.price <= 13000) { score += 3; reasons.push('Sits in your ₹10,000–₹13,000 range.'); } else score -= 1; }
    return { score, reasons: reasons.slice(0, 2) };
}

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

    const C = CDN;
    const prod = prodById(s.pid);
    const art = postById(s.aid);
    const cartIds = Object.keys(s.cart).filter(k => s.cart[k] > 0);
    const total = cartIds.reduce((a, k) => a + prodById(k).price * s.cart[k], 0);

    const routes = [['home', 'Home'], ['shop', 'Shop'], ['solutions', 'STEM Solutions'], ['blog', 'Blogs'], ['about', 'About'], ['contact', 'Contact']];
    const activeRoute = ['product'].includes(s.route) ? 'shop' : (s.route === 'article' ? 'blog' : s.route);

    const q = (s.q || '').trim().toLowerCase();
    const matches = (p: any) => {
      if (!q) return true;
      const hay = [p.name, p.category, p.level, p.blurb, p.age].join(' ').toLowerCase();
      return q.split(/\s+/).every(w => hay.includes(w));
    };
    const draft = (s.qDraft || '').trim().toLowerCase();
    const suggestions = draft ? PRODUCTS.filter(p => [p.name, p.category, p.blurb].join(' ').toLowerCase().includes(draft)).slice(0, 5) : [];

    let list = PRODUCTS.filter(p =>
      matches(p) &&
      (s.cat === 'All' || p.category === s.cat) &&
      (s.age === 'all' || p.ageN >= Number(s.age)) &&
      (s.level === 'all' || p.level === s.level) &&
      (s.price === 'all' || (s.price === 'u10' ? p.price < 10000 : s.price === '10to13' ? (p.price >= 10000 && p.price <= 13000) : p.price > 13000))
    );
    if (s.sort === 'low') list = list.slice().sort((a, b) => a.price - b.price);
    if (s.sort === 'high') list = list.slice().sort((a, b) => b.price - a.price);
    if (s.sort === 'age') list = list.slice().sort((a, b) => a.ageN - b.ageN);

    const gallerySrcs = [prod.img, prod.img2, prod.img, prod.img2];
    const blogVisible = POSTS.filter(p => s.blogCat === 'All' || p.cat === s.blogCat);
    const artKit = prodById(art.id === 'problem-solving' ? 'seed-driller' : art.id === 'engineering-play' ? 'tractor' : 'tower-crane');

    const mobile = s.vp === 'mobile';
    const ageGroup = AGES.find(a => a.label === s.ageTab) || AGES[0];
    const ageKits = PRODUCTS.filter(p => p.ageN >= ageGroup.min && p.ageN <= ageGroup.max);
    const quoteItem = QUOTES[s.qi % QUOTES.length];

    return {
      shellWidth: mobile ? '414px' : '100%',
      shellRadius: mobile ? '30px' : '0px',
      shellShadow: mobile ? '0 30px 80px rgba(19,26,34,.28)' : 'none',
      stagePad: mobile ? '28px 16px' : '0px',
      viewports: [['desktop', 'Desktop'], ['mobile', 'Mobile']].map(([k, label]) => ({
        label, active: s.vp === k, inactive: s.vp !== k, go: () => set({ vp: k as SiteState['vp'] })
      })),

      navLinks: routes.map(([k, label]) => ({ label, active: activeRoute === k, inactive: activeRoute !== k, go: () => go(k as Route) })),
      megaNav: [
        { key: 'shop', label: 'Shop', route: 'shop', items: [
          { label: 'Shop by age', note: 'Ages 9+, 10+, 12+', go: () => go('shop', { cat: 'All', age: 'all' }) },
          { label: 'Shop by category', note: 'Construction, Agriculture', go: () => go('shop', { cat: 'All' }) },
          { label: 'Shop by interest', note: 'Machines, farming, mechanisms', go: () => go('shop', { cat: 'All' }) },
          { label: 'All products', note: '6 kits in stock', go: () => go('shop', { cat: 'All', age: 'all', level: 'all', price: 'all' }) }
        ] },
        { key: 'experiences', label: 'Experiences', route: 'solutions', items: [
          { label: 'Workshops', note: 'Half-day expert-led builds', go: () => go('solutions') },
          { label: 'Summer camps', note: 'Multi-day holiday programs', go: () => go('solutions') },
          { label: 'Events', note: 'Showcase and build days', go: () => go('solutions') }
        ] },
        { key: 'learn', label: 'Learn', route: 'blog', items: [
          { label: 'Tutorials', note: 'Step-by-step build guides', go: () => go('blog') },
          { label: 'Experiments', note: 'Try it at home', go: () => go('blog') },
          { label: 'Projects', note: 'Go beyond the manual', go: () => go('blog') },
          { label: 'Blogs', note: 'The SparrowG Journal', go: () => go('blog') }
        ] }
      ].map(m => ({
        label: m.label,
        items: m.items,
        active: activeRoute === m.route,
        inactive: activeRoute !== m.route,
        showMenu: s.menu === m.key,
        open: () => set({ menu: m.key }),
        go: () => go(m.route as Route)
      })),
      closeMenu: () => set({ menu: null }),
      imgReady: true,

      serviceBullets: [
        { text: 'One team behind the kits, the workshops and the school programs.' },
        { text: 'Designed, prototyped and tested at T-Works, Hyderabad.' },
        { text: 'Reporting and outcomes for every school and corporate engagement.' }
      ],
      servicesLoop: (() => {
        const base = [
          { title: 'STEM learning kits', tagline: 'Hands-on learning that sparks curiosity', tags: ['Parents', 'Schools'], text: 'Six working machine kits — excavators, cranes, tractors, seed drills — built by hand and explained step by step.', tint: '#FFF4DA', ink: '#8A6100', d: 'M21 8 12 3 3 8l9 5 9-5ZM3 8v8l9 5 9-5V8M12 13v8', go: () => go('shop') },
          { title: 'Workshops & camps', tagline: 'Expert-led sessions, in person', tags: ['Ages 9–15'], text: 'Half-day builds, holiday camps and event days run by our engineers at T-Works or at your venue.', tint: '#F1F5EF', ink: '#3D6B33', d: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z', go: () => go('solutions') },
          { title: 'School programs', tagline: 'A STEM lab your teachers can run', tags: ['Schools'], text: 'Kits, lesson plans, teacher training and assessment, mapped to grades 5 to 10 with a skills report per student.', tint: '#F2EFF8', ink: '#5B4B8A', d: 'M2 8.5 12 4l10 4.5-10 4.5L2 8.5Zm4 2.2v4.6c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4.6M21 9.6v4.9', go: () => go('solutions') },
          { title: 'Corporate & CSR', tagline: 'Programs that stand up to a board review', tags: ['Corporates'], text: 'Measurable CSR education initiatives, employee-family build days, bulk gifting and co-branded kits.', tint: '#EDF1F8', ink: '#2C4C86', d: 'M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M8 8h3M8 12h3M8 16h3M3 21h18', go: () => go('solutions') },
          { title: 'AR / VR learning', tagline: 'Immersive education beyond textbooks', tags: ['Schools', 'Corporates'], text: 'Virtual walkthroughs of the machines children build, used alongside the physical kits in school labs.', tint: '#F2E9E6', ink: '#B4531F', d: 'M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v4A2.5 2.5 0 0 1 18.5 16h-2.6a2 2 0 0 1-1.5-.7l-1-1.1a2 2 0 0 0-2.9 0l-1 1.1a2 2 0 0 1-1.5.7H5.5A2.5 2.5 0 0 1 3 13.5v-4Z', go: () => go('solutions') }
        ].map(x => ({ title: x.title, tagline: x.tagline, text: x.text, tint: x.tint, ink: x.ink, d: x.d, go: x.go, tags: x.tags.map(label => ({ label })) }));
        return base.concat(base);
      })(),

      isLogin: s.route === 'login', isCheckout: s.route === 'checkout',
      isSuccess: s.route === 'success', isAccount: s.route === 'account',
      goCheckout: () => go(s.user ? 'checkout' : 'login'),
      goAccount: () => go(s.user ? 'account' : 'login'),

      authTitle: s.authStep === 'otp' ? 'Verify your number' : 'Sign in to SparrowG',
      authNote: s.authStep === 'otp' ? 'We sent a code to +91 ' + (s.phone || '98765 43210') + '.' : 'Track orders, save kits and check out faster.',
      authStepPhone: s.authStep !== 'otp',
      authStepOtp: s.authStep === 'otp',
      authPhone: s.phone || '',
      setPhone: (e: any) => set({ phone: e.target.value }),
      sendOtp: () => set({ authStep: 'otp' }),
      authBack: () => set({ authStep: 'phone' }),
      otpBoxes: ['4', '9', '1', '3'].map(d => ({ d })),
      verifyOtp: () => { set({ user: { name: 'Aarav Mehta', phone: '+91 ' + (s.phone || '98765 43210') }, authStep: 'phone' }); go('checkout'); },
      loginDemo: () => { set({ user: { name: 'Aarav Mehta', phone: 'aarav@email.com' } }); go('checkout'); },
      logout: () => { set({ user: null }); go('home'); },
      userName: (s.user && s.user.name) || 'Guest',
      userPhone: (s.user && s.user.phone) || '',
      userInitials: ((s.user && s.user.name) || 'SG').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),

      coSteps: ['Address', 'Shipping', 'Payment'].map((label, i) => {
        const done = i < s.coStep, active = i === s.coStep;
        return {
          label, n: done ? '✓' : String(i + 1),
          bg: active ? '#131A22' : (done ? '#F1F7F1' : '#FFFFFF'),
          border: active ? '#131A22' : (done ? '#DCEBDC' : '#E4DFD6'),
          fg: active ? '#FFFFFF' : (done ? '#2F6B33' : '#8A929C'),
          dotBg: active ? '#FFC53D' : (done ? '#2F6B33' : '#F4F1EC'),
          dotFg: active ? '#131A22' : (done ? '#FFFFFF' : '#8A929C')
        };
      }),
      coIsAddress: s.coStep === 0, coIsShipping: s.coStep === 1, coIsPayment: s.coStep === 2,
      coNext: () => set(x => ({ coStep: Math.min(2, x.coStep + 1) })),
      coBack: () => set(x => ({ coStep: Math.max(0, x.coStep - 1) })),
      pincode: s.pincode || '500081',
      setPincode: (e: any) => set({ pincode: e.target.value }),
      etaDays: s.ship === 'express' ? '1–2' : (s.ship === 'standard' ? '3–5' : '5–7'),
      shipOptions: [
        { key: 'standard', name: 'Standard delivery', courier: 'Delhivery Surface', eta: '3–5 days', price: 0 },
        { key: 'express', name: 'Express delivery', courier: 'Bluedart Air', eta: '1–2 days', price: 180 },
        { key: 'economy', name: 'Economy', courier: 'Xpressbees', eta: '5–7 days', price: 0 }
      ].map(o => ({
        name: o.name, courier: o.courier, eta: o.eta,
        priceLabel: o.price === 0 ? 'Free' : fmt(o.price),
        border: s.ship === o.key ? '#131A22' : '#E4DFD6',
        bg: s.ship === o.key ? '#FBF4E7' : '#FFFFFF',
        dot: s.ship === o.key ? '#131A22' : '#C9C3B7',
        dotFill: s.ship === o.key ? '#FFC53D' : 'transparent',
        pick: () => set({ ship: o.key })
      })),
      payOptions: [
        { key: 'upi', name: 'UPI', note: 'GPay, PhonePe, Paytm, BHIM', tag: 'Instant' },
        { key: 'card', name: 'Credit / debit card', note: 'Visa, Mastercard, RuPay, Amex', tag: 'Saved cards' },
        { key: 'netbanking', name: 'Netbanking', note: '58 banks supported', tag: '' },
        { key: 'wallet', name: 'Wallets & EMI', note: 'Amazon Pay, Mobikwik, no-cost EMI', tag: '3–12 mo' },
        { key: 'cod', name: 'Cash on delivery', note: '₹49 handling fee · select pincodes', tag: '' }
      ].map(p => ({
        name: p.name, note: p.note, tag: p.tag,
        border: s.pay === p.key ? '#131A22' : '#E4DFD6',
        bg: s.pay === p.key ? '#FBF4E7' : '#FFFFFF',
        dot: s.pay === p.key ? '#131A22' : '#C9C3B7',
        dotFill: s.pay === p.key ? '#FFC53D' : 'transparent',
        pick: () => set({ pay: p.key })
      })),
      payMethodLabel: ({ upi: 'UPI', card: 'card', netbanking: 'netbanking', wallet: 'wallet', cod: 'cash on delivery' })[s.pay] || 'UPI',
      shipLabel: (() => { const c = s.ship === 'express' ? 180 : 0; return c === 0 ? 'Free' : fmt(c); })(),
      gstLabel: (() => {
        const sub = Object.keys(s.cart).reduce((a, k) => a + prodById(k).price * s.cart[k], 0);
        return fmt(Math.round(sub - sub / 1.18));
      })(),
      orderTotal: (() => {
        const sub = Object.keys(s.cart).reduce((a, k) => a + prodById(k).price * s.cart[k], 0);
        const ship = s.ship === 'express' ? 180 : 0;
        const cod = s.pay === 'cod' ? 49 : 0;
        return fmt(sub + ship + cod);
      })(),
      payProcessing: !!s.payProcessing,
      payNow: () => {
        const ids = Object.keys(s.cart).filter(k => s.cart[k] > 0);
        const sub = ids.reduce((a, k) => a + prodById(k).price * s.cart[k], 0);
        const disc = s.couponApplied ? Math.round(sub * s.couponApplied / 100) : 0;
        const ship = s.ship === 'express' ? 180 : 0;
        const cod = s.pay === 'cod' ? 49 : 0;
        const first = ids.length ? prodById(ids[0]) : PRODUCTS[0];
        const placed = {
          id: 'SG-' + (24800 + ids.length * 7 + 13),
          awb: 'SR' + (7412000 + ids.length * 137 + sub % 97),
          name: ids.length > 1 ? first.name + ' + ' + (ids.length - 1) + ' more' : first.name,
          total: fmt(sub - disc + ship + cod + (s.wrap ? 149 : 0)),
          img: CDN + first.img,
          date: '3 Sep 2026',
          status: 'Order confirmed', statusBg: '#FFF2D0', statusFg: '#8A6100'
        };
        set({ payProcessing: true });
        setTimeout(() => {
          set(x => ({
            payProcessing: false, coStep: 0, cart: {}, wrap: false, giftItems: {},
            coupon: '', couponApplied: 0, couponChecked: false,
            placedOrders: [placed].concat(x.placedOrders || []), lastOrder: placed
          }));
          go('success');
        }, 2200);
      },
      detectLocation: () => set({ pincode: '500081', addr: 'home' }),
      savedAddresses: [
        { key: 'home', tag: 'Home', line: 'Jubilee Hills, Hyderabad 500033' },
        { key: 'work', tag: 'Work', line: 'T-Works, RaiDurg 500081' }
      ].map(a => ({
        tag: a.tag, line: a.line,
        border: (s.addr || 'home') === a.key ? '#131A22' : '#E4DFD6',
        bg: (s.addr || 'home') === a.key ? '#FBF4E7' : '#FFFFFF',
        pick: () => set({ addr: a.key, pincode: a.key === 'work' ? '500081' : '500033' })
      })),
      paidLabel: (s.lastOrder && s.lastOrder.total) || fmt(total),
      orderId: (s.lastOrder && s.lastOrder.id) || 'SG-' + (24800 + (Object.keys(s.cart).length * 7) + 13),
      awb: (s.lastOrder && s.lastOrder.awb) || 'SR' + (7412000 + (Object.keys(s.cart).length * 137)),
      tracking: [
        { label: 'Order confirmed', note: 'Payment captured by Razorpay', dot: '#2F6B33', line: '#2F6B33', fg: '#131A22' },
        { label: 'Packed at T-Works', note: 'Within 24 hours', dot: '#FFC53D', line: '#E4DFD6', fg: '#131A22' },
        { label: 'Shipped', note: 'Shiprocket assigns courier and AWB', dot: '#E4DFD6', line: '#E4DFD6', fg: '#8A929C' },
        { label: 'Out for delivery', note: 'You will get an SMS with a live link', dot: '#E4DFD6', line: 'transparent', fg: '#8A929C' }
      ],
      orders: (s.placedOrders || []).concat([
        { id: 'SG-24813', name: 'Bucket Wheel Excavator', date: '28 Aug 2026', awb: 'SR7401959', status: 'In transit', statusBg: '#FFF2D0', statusFg: '#8A6100', total: fmt(14000), img: C + prodById('bucket-wheel-excavator').img },
        { id: 'SG-24702', name: 'Tractor', date: '11 Aug 2026', awb: 'SR7398214', status: 'Delivered', statusBg: '#F1F7F1', statusFg: '#2F6B33', total: fmt(9500), img: C + prodById('tractor').img }
      ]),

      stack: [
        { num: '01', title: 'Build', hint: 'Open the box', headline: 'Open the box and start building', text: 'An illustrated manual written for a child to follow alone — parts sorted by stage, no jargon, no adult required.', tags: ['Illustrated manual', 'Sorted part bags', 'Real tools included'], img: C + 'files/WhatsApp_Image_2026-08-22_at_13.02.38.jpg?v=1787384022&width=1000' },
        { num: '02', title: 'Understand', hint: 'Learn the mechanism', headline: 'Understand every mechanism you add', text: 'Each stage stops to explain the mechanism it just added — the gear train, the linkage, the load path — and why it is built that way.', tags: ['Gears & linkages', 'Load paths', 'Plain-language physics'], img: C + 'files/ChatGPT_Image_Aug_10_2026_04_20_48_PM.png?v=1787132383&width=1000' },
        { num: '03', title: 'Experiment', hint: 'Change something', headline: 'Change something and see what happens', text: 'Swap gear ratios, add load, change an angle. The kit is built to be modified — and to fail informatively when a child pushes it too far.', tags: ['Ratio swaps', 'Load testing', 'Guided variants'], img: C + 'files/IMG_E3593.jpg?v=1785909791&width=1000' },
        { num: '04', title: 'Learn', hint: 'It sticks', headline: 'The learning sticks, because they proved it', text: 'The concept lands because they proved it themselves — and the finished machine sits on the shelf as evidence.', tags: ['Skills report', 'Showcase build', 'Next kit ready'], img: C + 'files/C0872T01.jpg?v=1785909769&width=1000' }
      ].map((it, i, arr) => ({
        num: it.num, title: it.title, hint: it.hint, headline: it.headline || it.title, text: it.text, img: it.img,
        tags: it.tags.map(label => ({ label })),
        top: (120 + i * 54) + 'px',
        inset: ((arr.length - 1 - i) * 14) + 'px',
        gap: '64px',
        z: i + 1
      })),

      fb: (() => {
        const p = prodById(FEATURED_IDS[s.fb % FEATURED_IDS.length]);
        return Object.assign({}, p, { img: C + p.img, open: () => go('product', { pid: p.id, qty: 1, gi: 0 }) });
      })(),
      fbCounter: ((s.fb % FEATURED_IDS.length) + 1) + ' / ' + FEATURED_IDS.length,
      fbDots: FEATURED_IDS.map((id, i) => ({
        w: i === s.fb % FEATURED_IDS.length ? '26px' : '10px',
        bg: i === s.fb % FEATURED_IDS.length ? '#FFC53D' : 'rgba(19,26,34,.22)',
        go: () => set({ fb: i })
      })),
      fbNext: () => set(x => ({ fb: (x.fb + 1) % FEATURED_IDS.length })),
      fbPrev: () => set(x => ({ fb: (x.fb + FEATURED_IDS.length - 1) % FEATURED_IDS.length })),
      fbPause: () => { fbHoverRef.current = true; if (!s.fbHover) set({ fbHover: true }); },
      fbResume: () => { fbHoverRef.current = false; if (s.fbHover) set({ fbHover: false }); },

      testimonialsLoop: (() => {
        const base = QUOTES.map(q => ({ quote: q.quote, name: q.name, role: q.role, img: C + q.img }));
        const set = base.concat(base);
        return set.concat(set).map((t, i) => {
          const big = i % 3 === 1;
          return Object.assign({}, t, {
            w: big ? '400px' : '306px',
            pad: big ? '32px' : '24px',
            avatar: big ? '52px' : '40px',
            nameSize: big ? '15.5px' : '14px',
            quoteSize: big ? '17px' : '14.5px',
            starSize: big ? '16px' : '13px',
            shadow: big ? '0 18px 40px rgba(19,26,34,.1)' : 'none'
          });
        });
      })(),
      sloganWords: ['Children', "don't", 'learn', 'engineering', 'from', 'a', 'screen.', 'They', 'build', 'it.']
        .map((word, i) => ({
          word,
          delay: (i * 0.16).toFixed(2) + 's',
          color: i >= 7 ? '#B4531F' : '#131A22',
          underline: i >= 7
        })),
      finderPoints: [
        { text: 'Only kits we actually make — nothing out of stock or unreleased.' },
        { text: 'Matched on age, difficulty, build length and budget together.' },
        { text: 'Every recommendation says why it suits your child.' }
      ],
      reels: [
        { title: 'A glimpse into our STEM summer camp', img: C + 'files/C0872T01.jpg?v=1785909769&width=900', dur: '14s', delay: '0s', durLabel: '0:14' },
        { title: 'Learning through play & innovation', img: C + 'files/IMG_E3593.jpg?v=1785909791&width=900', dur: '16s', delay: '-3s', durLabel: '0:16' },
        { title: 'Watch ideas come to life', img: C + 'files/WhatsApp_Image_2026-08-03_at_12.28.45.jpg?v=1785740343&width=900', dur: '15s', delay: '-6s', durLabel: '0:15' },
        { title: 'Inside a bucket wheel build', img: C + 'files/ChatGPT_Image_Aug_10_2026_04_17_51_PM.png?v=1786359222&width=900', dur: '18s', delay: '-9s', durLabel: '0:18' }
      ],

      quizAsking: s.qStep < QUIZ.length,
      quizDone: s.qStep >= QUIZ.length,
      quizProgress: Math.round((Math.min(s.qStep, QUIZ.length) / QUIZ.length) * 100) + '%',
      quizStepLabel: 'Step ' + Math.min(s.qStep + 1, QUIZ.length) + ' of ' + QUIZ.length,
      quizQuestion: (QUIZ[s.qStep] || QUIZ[0]).title,
      quizNote: (QUIZ[s.qStep] || QUIZ[0]).note,
      quizCanBack: s.qStep > 0,
      quizBack: () => set(x => ({ qStep: Math.max(0, x.qStep - 1) })),
      quizRestart: () => set({ qStep: 0, answers: {} }),
      quizOptions: (QUIZ[s.qStep] || QUIZ[0]).options.map(o => ({
        label: o.label, sub: o.sub,
        pick: () => set(x => {
          const id = QUIZ[x.qStep].id;
          return { answers: Object.assign({}, x.answers, { [id]: o.value }), qStep: x.qStep + 1 };
        })
      })),
      quizSummary: (() => {
        const a = s.answers || {};
        const bits = [];
        if (a.age) bits.push('age ' + (a.age === 14 ? '13+' : a.age === 12 ? '11–12' : '9–10'));
        if (a.level) bits.push(a.level.toLowerCase() + ' builder');
        if (a.budget === 'u10') bits.push('under ₹10,000');
        if (a.budget === 'mid') bits.push('₹10,000–₹13,000');
        return bits.length ? 'Matched for ' + bits.join(' · ') : 'Your matches';
      })(),
      quizResults: (() => {
        const a = s.answers || {};
        const scored = PRODUCTS.map(p => {
          const r = scoreProduct(p, a);
          return { p, score: r.score, reasons: r.reasons };
        }).sort((x, y) => y.score - x.score).slice(0, 4);
        return scored.map((item, i) => Object.assign({}, item.p, {
          img: C + item.p.img,
          priceLabel: fmt(item.p.price),
          mrpLabel: fmt(item.p.mrp),
          rank: i === 0 ? 'Best match' : 'Match ' + (i + 1),
          why: item.reasons.length ? item.reasons.join(' ') : item.p.blurb,
          skills: item.p.skills.slice(0, 3).map(sk => sk.title).join(', '),
          open: () => go('product', { pid: item.p.id, qty: 1, gi: 0 }),
          add: () => add(item.p.id)
        }));
      })(),
      marqueeWords: ['Build', 'Create', 'Explore', 'Invent', 'Design', 'Discover', 'Innovate', 'Play', 'Learn', 'Grow',
                     'Build', 'Create', 'Explore', 'Invent', 'Design', 'Discover', 'Innovate', 'Play', 'Learn', 'Grow'].map(label => ({ label })),

      faqs: [
        { q: 'What age group are SparrowG kits designed for?', a: 'SparrowG STEM kits are designed for curious learners aged 9 years and above, offering engaging projects that cater to both beginners and experienced builders.' },
        { q: 'What materials are used in the kits?', a: 'Our kits are made using high-quality, durable and child-safe materials, combined with precision-engineered components and electronics (where applicable) to ensure a reliable and enjoyable building experience.' },
        { q: 'What skills will children develop?', a: 'SparrowG kits help children develop problem-solving, logical thinking, creativity, fine motor skills and a practical understanding of STEM concepts. By building and experimenting with real working models, they also gain confidence and hands-on engineering experience.' },
        { q: 'Are the kits suitable for schools and STEM workshops?', a: 'Yes. SparrowG kits are widely used by schools, educators, STEM labs and workshop organisers. We also offer bulk orders and customised solutions for educational institutions and learning programs.' }
      ].map((f, i) => ({
        q: f.q, a: f.a,
        open: s.faq === i,
        closed: s.faq !== i,
        hover: () => set({ faq: i }),
        toggle: () => set(x => ({ faq: x.faq === i ? -1 : i }))
      })),

      interests: [
        { title: 'Machines that move', count: '4 kits', tint: '#F7F5F1', text: 'Motors, gearboxes and drives — anything that runs when you switch it on.', go: () => go('shop', { cat: 'All' }) },
        { title: 'Farming & food', count: '3 kits', tint: '#F1F5EF', text: 'Tractors, seeders and drills — the engineering behind what we eat.', go: () => go('shop', { cat: 'Agriculture' }) },
        { title: 'Big builds', count: '2 kits', tint: '#F0F2F8', text: 'Thousand-part machines for children who want a real project.', go: () => go('shop', { cat: 'Construction' }) },
        { title: 'First build', count: '2 kits', tint: '#FAF3E8', text: 'Finish-in-a-weekend kits for a confident start at age nine.', go: () => go('shop', { age: '9', level: 'Beginner' }) }
      ],

      experiences: [
        { title: 'Weekend workshops', mode: 'In person', dur: 'Half day', age: '9–14', cta: 'Book a workshop', img: C + 'files/IMG_E3593.jpg?v=1785909791&width=900', text: 'Small-group builds led by our engineers at T-Works, Hyderabad — or hosted at your venue.', go: () => go('solutions') },
        { title: 'Summer camps', mode: 'In person', dur: '5 days', age: '10–15', cta: 'See camp dates', img: C + 'files/C0872T01.jpg?v=1785909769&width=900', text: 'A full machine built across a week, ending in a showcase day for families.', go: () => go('solutions') },
        { title: 'Events & showcases', mode: 'Schools & venues', dur: '2–4 hrs', age: 'All ages', cta: 'Host an event', img: C + 'files/WhatsApp_Image_2026-08-03_at_12.28.45.jpg?v=1785740343&width=900', text: 'Build days, science fairs and demo stations we run with schools and companies.', go: () => go('solutions') }
      ],
      navRight: [
        { key: 'about', label: 'About', route: 'about', items: [
          { label: 'Our story', note: 'Why SparrowG exists', go: () => go('about') },
          { label: 'How we make kits', note: 'Designed at T-Works, Hyderabad', go: () => go('about') },
          { label: 'STEM Solutions', note: 'Schools, corporates, AR/VR', go: () => go('solutions') }
        ] },
        { key: 'contact', label: 'Contact', route: 'contact', items: [
          { label: 'Contact us', note: 'Reply within one working day', go: () => go('contact') },
          { label: 'Schools & corporates', note: 'Programs and proposals', go: () => go('contact') },
          { label: 'Order support', note: 'Shipping, parts and returns', go: () => go('contact') }
        ] }
      ].map(m => ({
        label: m.label,
        items: m.items,
        active: activeRoute === m.route,
        inactive: activeRoute !== m.route,
        showMenu: s.menu === m.key,
        open: () => set({ menu: m.key }),
        go: () => go(m.route as Route)
      })),
      isHome: s.route === 'home', isShop: s.route === 'shop', isProduct: s.route === 'product',
      isBlog: s.route === 'blog', isArticle: s.route === 'article', isSolutions: s.route === 'solutions',
      isAbout: s.route === 'about', isContact: s.route === 'contact',

      goHome: () => go('home'), goShop: () => go('shop'), goBlog: () => go('blog'),
      goAbout: () => go('about'), goContact: () => go('contact'), goSolutions: () => go('solutions'),
      openFeatured: () => go('product', { pid: 'bucket-wheel-excavator', qty: 1, gi: 0 }),

      navOpen: s.navOpen, toggleNav: () => set(x => ({ navOpen: !x.navOpen })),
      cartOpen: s.cartOpen, toggleCart: () => set(x => ({ cartOpen: !x.cartOpen })),
      cartCount: cartIds.reduce((a, k) => a + s.cart[k], 0),
      cartEmpty: cartIds.length === 0,
      cartTotal: fmt(total),
      cartHasItems: cartIds.length > 0,
      shipProgress: '100%',
      shipMsg: cartIds.length ? 'Free shipping unlocked — dispatch in 2 days' : 'Every order ships free across India',
      wrapOn: !!s.wrap,
      wrapTick: s.wrap ? '✓' : '',
      wrapBg: s.wrap ? '#FBF4E7' : '#FFFFFF',
      wrapBorder: s.wrap ? '#131A22' : '#E4DFD6',
      wrapDot: s.wrap ? '#131A22' : '#C9C3B7',
      wrapFill: s.wrap ? '#FFC53D' : 'transparent',
      toggleWrap: () => set(x => ({ wrap: !x.wrap })),
      giftNote: s.giftNote || '',
      setGiftNote: (e: any) => set({ giftNote: e.target.value }),
      coupon: s.coupon || '',
      setCoupon: (e: any) => set({ coupon: e.target.value }),
      applyCoupon: () => set(x => ({ couponApplied: (x.coupon || '').trim().toUpperCase() === 'SPARROW10' ? 10 : 0, couponChecked: true })),
      couponMsgShown: !!s.couponChecked,
      couponMsg: s.couponApplied ? '10% off applied — code SPARROW10' : 'That code is not valid. Try SPARROW10.',
      couponFg: s.couponApplied ? '#2F6B33' : '#B4531F',
      savedShown: cartIds.length > 0,
      savedLabel: (() => {
        const mrp = cartIds.reduce((a, k) => a + prodById(k).mrp * s.cart[k], 0);
        const disc = s.couponApplied ? Math.round(total * s.couponApplied / 100) : 0;
        return fmt(mrp - total + disc);
      })(),
      cartGrandTotal: (() => {
        const disc = s.couponApplied ? Math.round(total * s.couponApplied / 100) : 0;
        return fmt(total - disc + (s.wrap ? 149 : 0));
      })(),
      hasCartSuggestions: cartIds.length > 0 && PRODUCTS.some(p => !s.cart[p.id]),
      cartSuggestions: PRODUCTS.filter(p => !s.cart[p.id]).slice(0, 3).map(p => ({
        name: p.name, img: C + p.img, priceLabel: fmt(p.price),
        reason: p.level === 'Beginner' ? 'Great next-step build' : (p.category === 'Agriculture' ? 'Pairs with farm builds' : 'Same mechanisms, bigger build'),
        add: () => add(p.id)
      })),
      cartItems: cartIds.map(k => {
        const p = prodById(k);
        return { name: p.name, img: C + p.img, qty: s.cart[k],
          meta: p.age + ' · ' + p.level + ' · ' + p.buildTime,
          giftLabel: (s.giftItems || {})[k] ? '✓ Marked as a gift' : '+ Mark as a gift',
          giftFg: (s.giftItems || {})[k] ? '#2F6B33' : '#B4531F',
          giftToggle: () => set(x => { const g = Object.assign({}, x.giftItems || {}); g[k] = !g[k]; return { giftItems: g }; }),
          inc: () => set(x => ({ cart: Object.assign({}, x.cart, { [k]: x.cart[k] + 1 }) })),
          dec: () => set(x => { const c = Object.assign({}, x.cart); if (c[k] > 1) c[k] -= 1; else delete c[k]; return { cart: c }; }),
          priceLabel: fmt(p.price * s.cart[k]), remove: () => set(x => { const c = Object.assign({}, x.cart); delete c[k]; return { cart: c }; }) };
      }),

      collections: [
        { name: 'Construction', blurb: 'Excavators, cranes and the mechanics of moving earth. Three kits, ages 10 and up.', img: C + 'files/ChatGPT_Image_Aug_10_2026_04_20_48_PM.png?v=1787132383&width=900', hasImg: true, soon: false, tint: '#EFEBE3', go: () => go('shop', { cat: 'Construction' }) },
        { name: 'Agriculture', blurb: 'Tractors, seeders and drills — the engineering behind what we eat. Three kits from age nine.', img: C + 'files/ea12b9c9-515d-4add-83e2-803a751a6fbe.jpg?v=1787552907&width=900', hasImg: true, soon: false, tint: '#EFEBE3', go: () => go('shop', { cat: 'Agriculture' }) },
        { name: 'Military', blurb: 'In prototyping at our T-Works lab.', img: '', hasImg: false, soon: true, tint: '#E9EDE6', go: () => go('shop', { cat: 'All' }) },
        { name: 'Space', blurb: 'Rovers and landers, in development.', img: '', hasImg: false, soon: true, tint: '#E8EBF2', go: () => go('shop', { cat: 'All' }) },
        { name: 'F1', blurb: 'Suspension and aero, in development.', img: '', hasImg: false, soon: true, tint: '#F2E9E6', go: () => go('shop', { cat: 'All' }) }
      ],
      carX: (-(s.car || 0) * 348) + 'px',
      carPrev: () => set(x => ({ car: Math.max(0, (x.car || 0) - 1) })),
      carNext: () => set(x => ({ car: Math.min(2, (x.car || 0) + 1) })),

      featured: [PRODUCTS[1], PRODUCTS[0], PRODUCTS[2], PRODUCTS[4]].map(p => card(p)),

      ageTabs: AGES.map(a => ({ label: a.label, active: s.ageTab === a.label, inactive: s.ageTab !== a.label, go: () => set({ ageTab: a.label }) })),
      ageGroup: Object.assign({}, ageGroup, { img: C + ageGroup.img, count: ageKits.length + (ageKits.length === 1 ? ' kit' : ' kits') }),
      ageList: ageKits.slice(0, 3).map(p => card(p)),

      quote: Object.assign({}, quoteItem, { img: C + quoteItem.img }),
      quoteNext: () => set(x => ({ qi: (x.qi + 1) % QUOTES.length })),
      quotePrev: () => set(x => ({ qi: (x.qi + QUOTES.length - 1) % QUOTES.length })),
      feedback: [-1, 0, 1].map(off => {
        const q = QUOTES[(s.qi + off + QUOTES.length) % QUOTES.length];
        const mid = off === 0;
        return {
          name: q.name, role: q.role, quote: q.quote, img: C + q.img,
          stars: '★★★★★'.slice(0, q.stars || 5) + '☆☆☆☆☆'.slice(0, 5 - (q.stars || 5)),
          w: mid ? '354px' : '288px',
          pad: mid ? '30px' : '24px',
          avatar: mid ? '80px' : '58px',
          nameSize: mid ? '17px' : '14.5px',
          quoteSize: mid ? '16.5px' : '14px',
          starSize: mid ? '18px' : '14px',
          shadow: mid ? '0 22px 48px rgba(19,26,34,.14)' : 'none',
          opacity: mid ? '1' : '.72'
        };
      }),

      promises: [
        { kicker: 'We are', title: 'Here for you', bg: '#EFF2F8', text: 'Real humans on the phone and on WhatsApp, 10am to 6pm Monday to Saturday. Stuck on step 84? We will walk you through it.' },
        { kicker: 'We are', title: 'Built to last', bg: '#F1F4EC', text: 'Zinc-alloy gears and precision-cut ABS, not soft plastic. Kits are made to be rebuilt, handed down and kept on the shelf.' },
        { kicker: 'We have', title: 'Easy returns', bg: '#FBF3E7', text: 'Free replacement parts for a year and 7-day returns on unopened kits. Missing a bracket is never your problem.' }
      ],
      press: [
        { name: 'CBSE', mark: 'CB', bg: '#F0F4EC', fg: '#3D6B33', isText: true, isIcon: false },
        { name: 'ICSE', mark: 'IC', bg: '#EDF1F8', fg: '#2C4C86', isText: true, isIcon: false },
        { name: 'State Board', mark: 'cap', bg: '#F2EFF8', fg: '#5B4B8A', isText: false, isIcon: true, isCap: true, isBulb: false },
        { name: 'IIT Alumni', mark: 'IIT', bg: '#F7F5F1', fg: '#131A22', isText: true, isIcon: false },
        { name: 'T-Works', mark: 'TW', bg: '#131A22', fg: '#FFFFFF', isText: true, isIcon: false },
        { name: 'EdTech', mark: 'bulb', bg: '#FAF3E4', fg: '#B58516', isText: false, isIcon: true, isCap: false, isBulb: true }
      ],
      pressLoop: ([] as any[]).concat(PARTNERS, PARTNERS),
      pressOld: [{ name: 'T-Works' }, { name: 'Startup India' }, { name: 'Telangana Innovation' }, { name: 'Made in India' }, { name: 'NEP 2020 aligned' }],

      pillars: [
        { num: '01', title: 'Hands-on learning', text: 'Nothing is simulated. Every part is held, fitted and tested.' },
        { num: '02', title: 'Engineering thinking', text: 'Load, motion and force, understood by building them.' },
        { num: '03', title: 'Problem solving', text: 'When it jams, the child debugs it — not the parent.' },
        { num: '04', title: 'Creativity', text: 'Every kit has variants beyond the manual.' },
        { num: '05', title: 'Screen-free focus', text: 'Hours of concentration with no notifications.' },
        { num: '06', title: 'Learning through play', text: 'It has to be fun first, or none of the rest happens.' }
      ],

      steps: [
        { num: '01', title: 'Build', text: 'Follow an illustrated manual designed for a child to read alone.' },
        { num: '02', title: 'Understand', text: 'Each stage explains the mechanism it just added and why.' },
        { num: '03', title: 'Experiment', text: 'Change gear ratios, loads and angles to see what breaks.' },
        { num: '04', title: 'Learn', text: 'The concept sticks because they proved it themselves.' }
      ],

      paths: [
        { kicker: 'For parents', title: 'Kits for home', text: 'Weekend builds that hold attention for hours and leave something real on the shelf.', cta: 'Explore STEM kits', img: C + 'files/C0872T01.jpg?v=1785909769&width=900', go: () => go('shop') },
        { kicker: 'For schools', title: 'Classroom programs', text: 'Kits, lesson plans, teacher training and workshops built around your timetable.', cta: 'Explore school programs', img: C + 'files/IMG_E3593.jpg?v=1785909791&width=900', go: () => go('solutions') },
        { kicker: 'For corporates', title: 'CSR & gifting', text: 'Measurable STEM initiatives, employee build days and bulk kit programs.', cta: 'Explore corporate programs', img: C + 'files/WhatsApp_Image_2026-08-22_at_13.02.38.jpg?v=1787384022&width=900', go: () => go('solutions') }
      ],

      testimonials: [
        { quote: 'SparrowG kits have changed how my son learns. The engineering creativity and screen-free approach is exactly what we needed.', name: 'Aarav Mehta', role: 'Parent, Mumbai', img: C + 'files/C0872T01.jpg?v=1785909769&width=240' },
        { quote: 'As an educator I am impressed by how these kits make STEM engaging. My students develop real problem-solving skills while having fun.', name: 'Neha Jain', role: 'Teacher, Pune', img: C + 'files/IMG_E3593.jpg?v=1785909791&width=240' },
        { quote: 'Premium quality worth every rupee. These kits keep my kids engaged for hours — no more screen-time battles.', name: 'Sana Kapoor', role: 'Parent, Bangalore', img: C + 'files/ChatGPT_Image_Apr_11_2026_12_19_37_PM.png?v=1785911429&width=240' }
      ],

      posts: POSTS.map(p => ({ title: p.title, cat: p.cat, read: p.read, excerpt: p.excerpt, img: C + p.img, open: () => go('article', { aid: p.id }) })),

      shopCountLabel: list.length + (list.length === 1 ? ' kit' : ' kits'),
      shopEmpty: list.length === 0,
      shopTitle: q ? 'Search results' : 'All STEM kits',
      hasQuery: !!q,
      queryLabel: '“' + (s.q || '').trim() + '”',
      clearQuery: () => set({ q: '', qDraft: '' }),
      emptyMsg: q ? 'No kits match ' + '“' + (s.q || '').trim() + '”.' : 'No kits match those filters yet.',

      searchOpen: s.searchOpen,
      qDraft: s.qDraft || '',
      openSearch: () => set({ searchOpen: true, qDraft: s.q || '', menu: null }),
      closeSearch: () => set({ searchOpen: false }),
      onSearchInput: (e: any) => set({ qDraft: e.target.value }),
      onSearchKey: (e: any) => {
        if (e.key === 'Enter') { set({ searchOpen: false }); go('shop', { q: e.target.value, qDraft: e.target.value, cat: 'All', age: 'all', level: 'all', price: 'all' }); }
        if (e.key === 'Escape') set({ searchOpen: false });
      },
      submitSearch: () => { const v = s.qDraft || ''; set({ searchOpen: false }); go('shop', { q: v, cat: 'All', age: 'all', level: 'all', price: 'all' }); },
      hasSuggestions: suggestions.length > 0,
      noSuggestions: (s.qDraft || '').trim().length > 0 && suggestions.length === 0,
      suggestions: suggestions.map(p => ({
        name: p.name, category: p.category, priceLabel: fmt(p.price), img: C + p.img,
        go: () => { set({ searchOpen: false }); go('product', { pid: p.id, qty: 1, gi: 0 }); }
      })),
      shopList: list.map(p => card(p)),
      catChips: ['All', 'Construction', 'Agriculture'].map(label => ({ label, active: s.cat === label, inactive: s.cat !== label, go: () => set({ cat: label }) })),
      filters: [
        { key: 'age', name: 'Age', current: s.age, options: [['all', 'All ages'], ['9', '9 and up'], ['10', '10 and up'], ['12', '12 and up']] },
        { key: 'level', name: 'Level', current: s.level, options: [['all', 'Any level'], ['Beginner', 'Beginner'], ['Intermediate', 'Intermediate'], ['Advanced', 'Advanced']] },
        { key: 'price', name: 'Price', current: s.price, options: [['all', 'Any price'], ['u10', 'Under ₹10,000'], ['10to13', '₹10,000 – ₹13,000'], ['o13', 'Above ₹13,000']] },
        { key: 'sort', name: 'Sort', current: s.sort, options: [['featured', 'Featured'], ['low', 'Price: low to high'], ['high', 'Price: high to low'], ['age', 'Age: youngest first']] }
      ].map(f => {
        const isDefault = f.current === (f.key === 'sort' ? 'featured' : 'all');
        const match = f.options.find(o => o[0] === f.current) || f.options[0];
        return {
          name: f.name,
          valueLabel: match[1],
          open: s.filterOpen === f.key,
          bg: isDefault ? '#FFFFFF' : '#FBF4E7',
          border: isDefault ? '#E4DFD6' : '#131A22',
          fg: '#131A22',
          labelFg: isDefault ? '#A6ADB6' : '#B4531F',
          toggle: () => set(x => ({ filterOpen: x.filterOpen === f.key ? null : f.key })),
          options: f.options.map(([v, label]) => ({
            label,
            tick: v === f.current ? '✓' : '',
            weight: v === f.current ? '700' : '500',
            bg: v === f.current ? '#FBF4E7' : 'transparent',
            pick: () => set({ [f.key]: v, filterOpen: null })
          }))
        };
      }),
      filtersActive: !(s.age === 'all' && s.level === 'all' && s.price === 'all' && s.sort === 'featured'),
      clearFilters: () => set({ age: 'all', level: 'all', price: 'all', sort: 'featured', filterOpen: null }),

      prod: Object.assign({}, prod, { priceLabel: fmt(prod.price), mrpLabel: fmt(prod.mrp), save: 'Save ' + fmt(prod.mrp - prod.price) }),
      galleryMain: C + gallerySrcs[s.gi],
      gallery: gallerySrcs.map((src, i) => ({ src: C + src, pick: () => set({ gi: i }) })),
      qty: s.qty,
      incQty: () => set(x => ({ qty: x.qty + 1 })),
      decQty: () => set(x => ({ qty: Math.max(1, x.qty - 1) })),
      addCurrent: () => set(x => ({ cart: Object.assign({}, x.cart, { [x.pid]: (x.cart[x.pid] || 0) + x.qty }), cartOpen: true })),
      buyNow: () => set(x => ({ cart: Object.assign({}, x.cart, { [x.pid]: (x.cart[x.pid] || 0) + x.qty }), cartOpen: true })),
      trust: [
        { title: 'Free shipping', text: 'Across India, dispatched in 2 days' },
        { title: '12-month warranty', text: 'Free replacement parts' },
        { title: 'Manual + video tutorials', text: 'Step-by-step, child-readable' },
        { title: '7-day returns', text: 'Unopened kits, no questions' }
      ],
      related: PRODUCTS.filter(p => p.id !== prod.id).slice(0, 3).map(p => card(p)),

      featuredPost: Object.assign({}, POSTS[0], { img: C + POSTS[0].img, open: () => go('article', { aid: POSTS[0].id }) }),
      blogCats: ['All', 'Learning', 'Engineering', 'Parenting'].map(label => ({ label, active: s.blogCat === label, inactive: s.blogCat !== label, go: () => set({ blogCat: label }) })),
      blogList: blogVisible.map(p => ({ title: p.title, cat: p.cat, read: p.read, excerpt: p.excerpt, img: C + p.img, open: () => go('article', { aid: p.id }) })),

      art: Object.assign({}, art, {
        img: C + art.img,
        body: art.body.map(b => ({ text: b.text, isHead: b.t === 'h', isQuote: b.t === 'q', isPara: b.t === 'p' }))
      }),
      artProduct: Object.assign({}, artKit, { img: C + artKit.img, priceLabel: fmt(artKit.price), open: () => go('product', { pid: artKit.id, qty: 1, gi: 0 }) }),
      relatedPosts: POSTS.filter(p => p.id !== art.id).map(p => ({ title: p.title, read: p.read, img: C + p.img, open: () => go('article', { aid: p.id }) })),

      solutions: [
        { kicker: 'For schools', title: 'Classroom STEM programs', text: 'Term-long programs with kits, lesson plans, teacher training and assessment, mapped to grades 5 to 10.', cta: 'Request a school program', go: () => go('contact') },
        { kicker: 'Workshops', title: 'Expert-led sessions', text: 'Half-day builds, holiday camps and AR/VR sessions run by our engineers at T-Works or at your venue.', cta: 'Book a workshop', go: () => go('contact') },
        { kicker: 'For corporates', title: 'CSR & partnerships', text: 'Education initiatives with reporting, employee-family build days and co-branded bulk kits.', cta: 'Request a proposal', go: () => go('contact') },
        { kicker: 'AR / VR', title: 'Immersive learning', text: 'Virtual walkthroughs of the machines children build, used alongside the physical kits in labs.', cta: 'Talk to us', go: () => go('contact') }
      ],
      outcomes: [
        { n: '4', label: 'Stages in every program, from first build to showcase day' },
        { n: '9–15', label: 'Age range covered across kits and workshops' },
        { n: '1:6', label: 'Facilitator to student ratio in our workshops' }
      ],

      about: [
        { kicker: 'Why we exist', title: 'The gap between knowing and doing', text: 'Children can name the parts of a machine long before they can make one work. We close that gap with kits that behave like the real thing.' },
        { kicker: 'Our philosophy', title: 'Build, understand, experiment, learn', text: 'Every product and program runs the same loop. The build is the hook; the understanding is the point; the experiment is where it sticks.' },
        { kicker: 'Where we are', title: 'Made at T-Works, Hyderabad', text: 'Designed, prototyped and tested in India, at one of the country\'s largest prototyping centres — then put in the hands of children across the country.' }
      ],
      storyFacts: [
        { title: 'Educators + engineers', text: 'Every kit is reviewed by both before it ships.' },
        { title: 'Built at T-Works', text: 'Designed and prototyped in Hyderabad, India.' },
        { title: 'Ages 9 to 15', text: 'Difficulty graded so nothing is out of reach.' }
      ],
      aboutStats: [
        { n: '6', label: 'Machine kits in production' },
        { n: '380+', label: 'Verified parent and teacher reviews' },
        { n: '4.9', label: 'Average customer rating' },
        { n: '9+', label: 'Recommended from age nine' }
      ],

      contactInfo: [
        { label: 'Phone', value: '+91 94930 17356', note: 'Mon–Sat, 10am to 6pm IST' },
        { label: 'Email', value: 'support@sparrowg.com', note: 'We reply within one working day' },
        { label: 'Visit', value: 'T-Works, RaiDurg', note: 'Survey No. 83/1, Hyderabad, Telangana 500081' },
        { label: 'WhatsApp', value: 'Chat with us', note: 'Fastest for order and shipping questions' }
      ],
      enquiryTypes: [
        { label: 'Parent / general', d: 'M3 10.5 12 4l9 6.5M5 9.6V20h14V9.6M10 20v-5h4v5' },
        { label: 'School', d: 'M2 8.5 12 4l10 4.5-10 4.5L2 8.5Zm4 2.2v4.6c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4.6' },
        { label: 'Corporate', d: 'M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 10h4a1 1 0 0 1 1 1v10M8 8h3M8 12h3M8 16h3M3 21h18' },
        { label: 'Support', d: 'M4 13a8 8 0 0 1 16 0M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Zm-3 5v1a2 2 0 0 1-2 2h-3' }
      ].map(t => ({ label: t.label, d: t.d, active: s.enquiry === t.label, inactive: s.enquiry !== t.label, go: () => set({ enquiry: t.label }) })),

      footerCols: [
        { title: 'Shop', links: [{ label: 'All kits', go: () => go('shop') }, { label: 'Construction', go: () => go('shop', { cat: 'Construction' }) }, { label: 'Agriculture', go: () => go('shop', { cat: 'Agriculture' }) }, { label: 'Coming soon', go: () => go('shop') }] },
        { title: 'Learn', links: [{ label: 'STEM Solutions', go: () => go('solutions') }, { label: 'School programs', go: () => go('solutions') }, { label: 'Workshops', go: () => go('solutions') }, { label: 'Blogs', go: () => go('blog') }] },
        { title: 'Company', links: [{ label: 'About', go: () => go('about') }, { label: 'Contact', go: () => go('contact') }, { label: 'Corporate & CSR', go: () => go('solutions') }, { label: 'Privacy policy', go: () => go('about') }] }
      ]
    };
}

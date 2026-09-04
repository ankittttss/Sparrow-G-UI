'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Product() {
  const v = useVals();
  const { addCurrent, buyNow, decQty, gallery, galleryMain, goHome, goShop, incQty, prod,
    qty, related, trust } = v;
  return (
    <>
      <div className="sgrise" style={sx(`padding-bottom:90px`)}>
      <div data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:18px 26px 0;font-size:13px;color:#8A929C`)}>
      <span onClick={goHome} style={sx(`cursor:pointer`)}>Home</span> / <span onClick={goShop} style={sx(`cursor:pointer`)}>Shop</span> / <span style={sx(`color:#131A22;font-weight:600`)}>{prod.name}</span>
      </div>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:22px 26px 0`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:42px;align-items:start`)}>
      <div>
      <div style={sx(`border-radius:26px;overflow:hidden;background:#FFFFFF;border:1px solid #EFEBE3;aspect-ratio:1/1`)}>
      <SafeImg loading="lazy" alt={prod.name} style={sx(`width:100%;height:100%;object-fit:cover`)} src={galleryMain} /></div>
      <div style={sx(`display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px`)}>
      {(gallery ?? []).map((g: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-b582bf2f" onClick={g.pick} style={sx(`aspect-ratio:1/1;border-radius:14px;overflow:hidden;background:#FFFFFF;border:1px solid #EFEBE3;cursor:pointer;transition:border-color .2s`)}>
      <SafeImg alt="" style={sx(`width:100%;height:100%;object-fit:cover`)} src={g.src} />
      </div>
      </React.Fragment>))}
      </div>
      </div>
      <div>
      <div style={sx(`display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px`)}>
      <span style={sx(`background:#131A22;color:#FFFFFF;font-size:11.5px;font-weight:700;padding:6px 12px;border-radius:999px`)}>{prod.category}</span>
      <span style={sx(`background:#E7F5F4;color:#0B7A7A;font-size:11.5px;font-weight:700;padding:6px 12px;border-radius:999px`)}>In stock · ships in 2 days</span>
      </div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,3.9vw,48px);letter-spacing:-.035em;line-height:1.05;margin:0 0 12px;font-weight:700`)}>{prod.name}</h1>
      <div style={sx(`display:flex;align-items:center;gap:10px;margin-bottom:16px`)}>
      <span style={sx(`color:#FFC53D;font-size:14px`)}>★★★★★</span>
      <span style={sx(`font-size:13.5px;color:#5A6572`)}>{prod.reviews} verified reviews</span>
      </div>
      <p style={sx(`font-size:16px;line-height:1.6;color:#4A5462;margin:0 0 22px`)}>{prod.long}</p>
      <div style={sx(`display:flex;align-items:baseline;gap:12px;margin-bottom:20px;flex-wrap:wrap`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:33px;letter-spacing:-.03em`)}>{prod.priceLabel}</span>
      <span style={sx(`color:#A6ADB6;font-size:17px;text-decoration:line-through`)}>{prod.mrpLabel}</span>
      <span style={sx(`background:#FFF2D0;color:#8A6100;font-size:12.5px;font-weight:700;padding:5px 10px;border-radius:8px`)}>{prod.save}</span>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(106px,1fr));gap:10px;margin-bottom:22px`)}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Age</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{prod.age}</div></div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Difficulty</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{prod.level}</div></div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Build time</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{prod.buildTime}</div></div>
      </div>
      <div style={sx(`display:flex;gap:12px;align-items:stretch;flex-wrap:wrap;margin-bottom:16px`)}>
      <div style={sx(`display:flex;align-items:center;border:1px solid #E4DFD6;background:#FFFFFF;border-radius:13px;overflow:hidden`)}>
      <button onClick={decQty} style={sx(`border:0;background:transparent;width:44px;height:52px;font-size:18px;cursor:pointer;color:#5A6572`)}>−</button>
      <span style={sx(`width:34px;text-align:center;font-weight:700;font-size:15px`)}>{qty}</span>
      <button onClick={incQty} style={sx(`border:0;background:transparent;width:44px;height:52px;font-size:18px;cursor:pointer;color:#5A6572`)}>+</button>
      </div>
      <button className="hv-c28e8f3b" onClick={addCurrent} style={sx(`flex:1;min-width:140px;border:1px solid #131A22;background:#FFFFFF;color:#131A22;height:52px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s`)}>Add to cart</button>
      <button className="hv-1de5f70e" onClick={buyNow} style={sx(`flex:1;min-width:140px;border:0;background:#FFC53D;color:#131A22;height:52px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer;transition:transform .2s;box-shadow:0 8px 20px rgba(255,197,61,.42)`)}>Buy now</button>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px`)}>
      {(trust ?? []).map((t: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:9px;align-items:flex-start;padding:10px 0`)}>
      <span style={sx(`color:#0FA3A3;font-size:14px;line-height:1.3`)}>✓</span>
      <div><div style={sx(`font-weight:700;font-size:13.5px`)}>{t.title}</div><div style={sx(`color:#8A929C;font-size:12.5px;line-height:1.4`)}>{t.text}</div></div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:68px 26px 0`)}>
      <div style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;border-radius:30px;padding:clamp(28px,4vw,54px);color:#131A22`)}>
      <div style={sx(`max-width:600px;margin-bottom:32px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:12px`)}>The learning</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3.3vw,42px);letter-spacing:-.03em;line-height:1.05;margin:0 0 14px;font-weight:700`)}>What your child actually learns</h2>
      <p style={sx(`color:#5A6572;font-size:15.5px;line-height:1.6;margin:0`)}>{prod.learnIntro}</p>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(186px,1fr));gap:14px`)}>
      {(prod.skills ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-4646287a" style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:16px;padding:20px;transition:box-shadow .25s,transform .25s`)}>
      <div style={sx(`font-weight:700;font-size:15px;margin-bottom:6px`)}>{s.title}</div>
      <div style={sx(`color:#5A6572;font-size:12.5px;line-height:1.5`)}>{s.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:68px 26px 0`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:22px;align-items:start`)}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:30px`)}>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:23px;letter-spacing:-.02em;margin:0 0 16px;font-weight:700`)}>What's inside the box</h3>
      {(prod.inbox ?? []).map((i: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;justify-content:space-between;gap:16px;padding:13px 0;border-bottom:1px solid #F2EEE7;font-size:14.5px`)}>
      <span style={sx(`color:#2A323C`)}>{i.name}</span><span style={sx(`color:#8A929C;font-weight:600;white-space:nowrap`)}>{i.qty}</span>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:30px`)}>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:23px;letter-spacing:-.02em;margin:0 0 16px;font-weight:700`)}>Specifications</h3>
      {(prod.specs ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;justify-content:space-between;gap:16px;padding:13px 0;border-bottom:1px solid #F2EEE7;font-size:14.5px`)}>
      <span style={sx(`color:#8A929C`)}>{s.k}</span><span style={sx(`font-weight:600;text-align:right`)}>{s.v}</span>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:68px 26px 0`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3.1vw,38px);letter-spacing:-.03em;margin:0 0 22px;font-weight:700`)}>See it built</h2>
      <div style={sx(`border-radius:26px;overflow:hidden;position:relative;aspect-ratio:16/8;background:#131A22`)}>
      <SafeImg src="https://kv80w4-fe.myshopify.com/cdn/shop/files/ChatGPT_Image_Aug_10_2026_05_18_40_PM.png?v=1786363141&width=1600" alt="Build demonstration" style={sx(`width:100%;height:100%;object-fit:cover;opacity:.7`)} />
      <div style={sx(`position:absolute;inset:0;display:grid;place-items:center`)}>
      <button className="hv-244d20f7" style={sx(`border:0;background:rgba(255,255,255,.95);width:72px;height:72px;border-radius:999px;font-size:21px;cursor:pointer;color:#131A22;box-shadow:0 14px 34px rgba(0,0,0,.28);transition:transform .25s`)}>▶</button>
      </div>
      <div style={sx(`position:absolute;left:22px;bottom:20px;color:#FFFFFF`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.7`)}>Full build walkthrough</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;margin-top:3px`)}>{prod.name} · start to finish</div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:68px 26px 0`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:22px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3.1vw,38px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Builds like this one</h2>
      <button onClick={goShop} style={sx(`border:1px solid #D6D0C4;background:transparent;padding:11px 20px;border-radius:11px;font-size:14px;font-weight:600;cursor:pointer`)}>All kits →</button>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(216px,1fr));gap:18px`)}>
      {(related ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-8376a743" onClick={p.open} style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:20px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s`)}>
      <div style={sx(`aspect-ratio:4/3;background:#F4F1EC;overflow:hidden`)}><SafeImg alt={p.name} style={sx(`width:100%;height:100%;object-fit:cover`)} src={p.img} /></div>
      <div style={sx(`padding:16px`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;letter-spacing:-.01em`)}>{p.name}</div>
      <div style={sx(`color:#8A929C;font-size:12.5px;margin-top:3px`)}>{p.age} · {p.level}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:8px`)}>{p.priceLabel}</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <div data-mobile-bar={true} style={sx(`position:sticky;bottom:0;z-index:70;background:rgba(255,255,255,.97);border-top:1px solid #E4DFD6;padding:12px 16px;align-items:center;gap:12px;backdrop-filter:blur(12px);margin-top:40px`)}>
      <div style={sx(`flex:1;min-width:0`)}><div style={sx(`font-weight:700;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis`)}>{prod.name}</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px`)}>{prod.priceLabel}</div></div>
      <button onClick={addCurrent} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:14px 20px;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap`)}>Add to cart</button>
      </div>
      </div>
    </>
  );
}

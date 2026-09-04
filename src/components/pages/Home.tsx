'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Home() {
  const v = useVals();
  const { about, ageGroup, ageList, ageTabs, carNext, carPrev, carX, collections,
    contactInfo, enquiryTypes, experiences, faqs, fb, fbCounter, fbDots, fbNext, fbPause,
    fbPrev, fbResume, featured, finderPoints, goAbout, goBlog, goContact, goShop,
    goSolutions, interests, marqueeWords, paths, pillars, posts, pressLoop, promises,
    quizAsking, quizBack, quizCanBack, quizDone, quizNote, quizOptions, quizProgress,
    quizQuestion, quizRestart, quizResults, quizStepLabel, quizSummary, reels,
    serviceBullets, servicesLoop, sloganWords, stack, steps, testimonialsLoop } = v;
  return (
    <>
      <div className="sgrise">
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:54px 26px 20px`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:46px;align-items:center`)}>
      <div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(42px,5.4vw,74px);line-height:.98;letter-spacing:-.035em;margin:0 0 20px;font-weight:700`)}>Build<br />Play<br /><span style={sx(`color:#E0A100`)}>Learn</span></h1>
      <p style={sx(`font-size:17.5px;line-height:1.55;color:#4A5462;max-width:430px;margin:0 0 28px;text-wrap:pretty`)}>Real working machines your child builds by hand — excavators, cranes, seed drillers — with the engineering behind them explained step by step.</p>
      <div style={sx(`display:flex;flex-wrap:wrap;gap:12px;margin-bottom:36px`)}>
      <button className="hv-f77e6cf3" onClick={goShop} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:16px 26px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;box-shadow:0 8px 20px rgba(255,197,61,.42)`)}>Explore STEM Kits →</button>
      <button className="hv-4927a4c8" onClick={goAbout} style={sx(`border:1px solid #D6D0C4;background:transparent;color:#131A22;padding:16px 26px;border-radius:13px;font-size:15.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>Discover SparrowG</button>
      </div>
      <div style={sx(`display:flex;gap:32px;flex-wrap:wrap`)}>
      <div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:29px;font-weight:700;letter-spacing:-.02em`)}>6</div><div style={sx(`color:#8A929C;font-size:12.5px;font-weight:500`)}>Machine kits</div></div>
      <div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:29px;font-weight:700;letter-spacing:-.02em`)}>380+</div><div style={sx(`color:#8A929C;font-size:12.5px;font-weight:500`)}>Verified reviews</div></div>
      <div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:29px;font-weight:700;letter-spacing:-.02em`)}>4.9</div><div style={sx(`color:#8A929C;font-size:12.5px;font-weight:500`)}>Average rating</div></div>
      </div>
      </div>
      <div style={sx(`position:relative`)}>
      <div style={sx(`border-radius:28px;overflow:hidden;background:#E9E4DA;aspect-ratio:1/1;box-shadow:0 30px 70px rgba(19,26,34,.14)`)}>
      <SafeImg src="https://kv80w4-fe.myshopify.com/cdn/shop/files/IMG_E3593.jpg?v=1785909791&width=1400" alt="Child building a SparrowG STEM kit" style={sx(`width:100%;height:100%;object-fit:cover;object-position:50% 78%`)} />
      </div>
      <div data-hide-sm={true} style={sx(`position:absolute;left:-20px;bottom:36px;background:#FFFFFF;border-radius:18px;padding:14px 18px;box-shadow:0 16px 40px rgba(19,26,34,.14);animation:sgFloat 6s ease-in-out infinite`)}>
      <div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600;letter-spacing:.06em;text-transform:uppercase`)}>Now building</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:3px`)}>Bucket Wheel Excavator</div>
      <div style={sx(`display:flex;gap:5px;margin-top:9px`)}>
      <span style={sx(`height:5px;width:44px;border-radius:9px;background:#B4531F`)}></span>
      <span style={sx(`height:5px;width:26px;border-radius:9px;background:#FFC53D`)}></span>
      <span style={sx(`height:5px;width:14px;border-radius:9px;background:#E4DFD6`)}></span>
      </div>
      </div>
      </div>
      </div>
      </section>
      <div style={sx(`overflow:hidden;background:#FFFFFF;padding:26px 0 30px;margin-top:24px`)}>
      <div className="hv-88cacac1" style={sx(`display:flex;width:max-content;align-items:center;gap:34px;animation-name:sgMarquee;animation-duration:38s;animation-timing-function:linear;animation-iteration-count:infinite`)}>
      {(marqueeWords ?? []).map((w: any, _k: number) => (<React.Fragment key={_k}>
      <span style={sx(`display:flex;align-items:center;gap:34px;flex:none`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(30px,3.6vw,52px);color:#131A22;line-height:1`)}>+</span>
      <span className="hv-e326a6cd" style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:clamp(34px,4.4vw,62px);letter-spacing:-.02em;line-height:1;color:transparent;-webkit-text-stroke:1.4px #CFC9BE;cursor:default;transition:color .22s,-webkit-text-stroke-color .22s`)}>{w.label}</span>
      </span>
      </React.Fragment>))}
      </div>
      </div>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:26px`)}>
      <span style={sx(`display:inline-flex;align-items:center;gap:7px;background:#FFC53D;color:#131A22;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:7px 14px;border-radius:999px;flex:none;white-space:nowrap`)}>★ Bestsellers</span>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.4vw,44px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Kits parents keep coming back for</h2>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:20px`)}>
      {(featured ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-9e8a5fea" style={sx(`background:#FFFFFF;border-radius:22px;overflow:hidden;border:1px solid #EFEBE3;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s`)}>
      <div onClick={p.open} style={sx(`position:relative;aspect-ratio:4/3;background:#F4F1EC;cursor:pointer;overflow:hidden`)}>
      <SafeImg className="hv-cda3e551" alt={p.name} style={sx(`width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.3,1)`)} src={p.img} />
      <span style={sx(`position:absolute;top:12px;left:12px;background:#131A22;color:#FFFFFF;font-size:11px;font-weight:700;padding:5px 10px;border-radius:999px;letter-spacing:.03em`)}>{p.badge}</span>
      <span style={sx(`position:absolute;top:12px;right:12px;background:rgba(255,255,255,.94);font-size:11px;font-weight:700;padding:5px 10px;border-radius:999px`)}>{p.age}</span>
      </div>
      <div style={sx(`padding:18px;display:flex;flex-direction:column;gap:8px;flex:1`)}>
      <div onClick={p.open} style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17.5px;letter-spacing:-.015em;cursor:pointer`)}>{p.name}</div>
      <div style={sx(`color:#5A6572;font-size:13.5px;line-height:1.45;flex:1`)}>{p.blurb}</div>
      <div style={sx(`display:flex;align-items:baseline;gap:9px;margin-top:4px`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px`)}>{p.priceLabel}</span>
      <span style={sx(`color:#A6ADB6;font-size:13.5px;text-decoration:line-through`)}>{p.mrpLabel}</span>
      </div>
      <div style={sx(`display:flex;gap:8px;margin-top:6px`)}>
      <button className="hv-c28e8f3b" onClick={p.open} style={sx(`flex:1;border:1px solid #E4DFD6;background:transparent;padding:11px;border-radius:11px;font-size:13.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>View</button>
      <button className="hv-08c78e8f" onClick={p.add} style={sx(`flex:1;border:0;background:#131A22;color:#FFFFFF;padding:11px;border-radius:11px;font-size:13.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>Add to cart</button>
      </div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:52px 26px 0`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:22px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(24px,2.8vw,34px);letter-spacing:-.03em;margin:0;font-weight:700`)}>What parents tell us</h2>
      <div style={sx(`display:flex;align-items:center;gap:10px;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:999px;padding:9px 16px`)}>
      <span style={sx(`color:#FFC53D;font-size:14px`)}>★★★★★</span><span style={sx(`font-size:13.5px;font-weight:600`)}>4.9 · 380+ reviews</span>
      </div>
      </div>
      <div style={sx(`overflow:hidden;margin:0 -6px;padding:34px 6px 38px`)}>
      <div className="hv-88cacac1" data-feedtrack={true} style={sx(`display:flex;align-items:center;gap:20px;width:max-content;animation-name:sgFeedRight;animation-duration:46s;animation-timing-function:linear;animation-iteration-count:infinite`)}>
      {(testimonialsLoop ?? []).map((t: any, _k: number) => (<React.Fragment key={_k}>
      <div data-feedcard={true} style={sx(`width:330px;flex:none;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:22px;padding:26px;display:flex;flex-direction:column;gap:15px;transition:transform .45s cubic-bezier(.2,.7,.3,1),box-shadow .45s,border-color .3s`)}>
      <div style={sx(`color:#FFC53D;font-size:14px;letter-spacing:.06em`)}>★★★★★</div>
      <p style={sx(`margin:0;font-size:15px;line-height:1.6;color:#2A323C;flex:1`)}>{t.quote}</p>
      <div style={sx(`display:flex;align-items:center;gap:12px;padding-top:4px`)}>
      <SafeImg alt={t.name} style={sx(`width:44px;height:44px;border-radius:999px;object-fit:cover;background:#F4F1EC`)} src={t.img} />
      <div><div style={sx(`font-weight:700;font-size:14.5px`)}>{t.name}</div><div style={sx(`color:#8A929C;font-size:12.5px`)}>{t.role}</div></div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`text-align:center;margin-bottom:26px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0 0 18px;font-weight:700`)}>Shop by age</h2>
      <div style={sx(`display:flex;gap:8px;flex-wrap:wrap;justify-content:center`)}>
      {(ageTabs ?? []).map((a: any, _k: number) => (<React.Fragment key={_k}>
      {(a.active) ? (<>
      <button onClick={a.go} style={sx(`border:1px solid #131A22;background:#131A22;color:#FFFFFF;padding:11px 22px;border-radius:999px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;line-height:1.2`)}>{a.label}</button>
      </>) : null}
      {(a.inactive) ? (<>
      <button className="hv-4174ca2d" onClick={a.go} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#4A5462;padding:11px 22px;border-radius:999px;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;line-height:1.2;transition:border-color .2s,color .2s`)}>{a.label}</button>
      </>) : null}
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:20px;margin-bottom:20px`)}>
      <div style={sx(`position:relative;border-radius:22px;overflow:hidden;background:#E9E4DA;min-height:300px;display:flex;flex-direction:column;justify-content:flex-end;padding:24px`)}>
      <SafeImg alt={ageGroup.label} style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover`)} src={ageGroup.img} />
      <div style={sx(`position:absolute;inset:0;background:linear-gradient(to top,rgba(19,26,34,.82),rgba(19,26,34,.05) 62%)`)}></div>
      <div style={sx(`position:relative;color:#FFFFFF`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:26px;letter-spacing:-.02em`)}>{ageGroup.label}</div>
      <div style={sx(`font-size:13.5px;opacity:.8;margin-top:4px;margin-bottom:16px`)}>{ageGroup.count} · {ageGroup.note}</div>
      <button onClick={goShop} style={sx(`border:0;background:#FFFFFF;color:#131A22;padding:11px 20px;border-radius:999px;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:.06em;text-transform:uppercase`)}>Explore collection</button>
      </div>
      </div>
      {(ageList ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;flex-direction:column`)}>
      <div onClick={p.open} style={sx(`position:relative;border-radius:22px;overflow:hidden;background:#F4F1EC;aspect-ratio:1/1;cursor:pointer`)}>
      <SafeImg className="hv-cda3e551" alt={p.name} style={sx(`width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.3,1)`)} src={p.img} />
      <button className="hv-b93e05a6" onClick={p.add} style={sx(`position:absolute;bottom:12px;left:12px;right:12px;border:0;background:rgba(255,255,255,.95);color:#131A22;padding:12px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer;letter-spacing:.06em;text-transform:uppercase;transition:background .2s`)}>Quick add</button>
      </div>
      <div onClick={p.open} style={sx(`padding:14px 4px 0;cursor:pointer`)}>
      <div style={sx(`font-size:14.5px;font-weight:600;line-height:1.35`)}>{p.name}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px;margin-top:5px;color:#4A5462`)}>{p.priceLabel}</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`text-align:center;margin-bottom:26px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0 0 10px;font-weight:700`)}>Shop by interest</h2>
      <p style={sx(`color:#5A6572;font-size:15px;margin:0 auto;max-width:420px`)}>Start from what already fascinates them.</p>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(212px,1fr));gap:16px`)}>
      {(interests ?? []).map((i: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-3e91f11c" onClick={i.go} style={sx(`background:${i.tint};border:1px solid #EFEBE3;border-radius:22px;padding:26px;cursor:pointer;display:flex;flex-direction:column;min-height:186px;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s`)}>
      <div style={sx(`font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#8A929C;margin-bottom:12px`)}>{i.count}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-bottom:8px`)}>{i.title}</div>
      <div style={sx(`color:#5A6572;font-size:13.5px;line-height:1.5;flex:1`)}>{i.text}</div>
      <div style={sx(`font-size:13px;font-weight:700;color:#B4531F;margin-top:16px`)}>Browse kits →</div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:26px`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>Shop by world</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Pick a world to build in</h2>
      </div>
      <div style={sx(`display:flex;align-items:center;gap:10px`)}>
      <button className="hv-4da149b8" onClick={carPrev} style={sx(`border:1px solid #D6D0C4;background:#FFFFFF;width:48px;height:48px;border-radius:999px;cursor:pointer;color:#131A22;display:grid;place-items:center;transition:background .2s,border-color .2s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 6-6 6 6 6" /></svg>
      </button>
      <button className="hv-1de5f70e" onClick={carNext} style={sx(`border:0;background:#131A22;width:48px;height:48px;border-radius:999px;cursor:pointer;color:#FFFFFF;display:grid;place-items:center;transition:transform .2s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 6 6 6-6 6" /></svg>
      </button>
      </div>
      </div>
      <div style={sx(`overflow:hidden;margin:0 -6px;padding:6px`)}>
      <div style={sx(`display:flex;gap:22px;width:max-content;transition:transform .55s cubic-bezier(.22,.7,.24,1);transform:translateX(${carX})`)}>
      {(collections ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-58e3dce0" onClick={c.go} style={sx(`position:relative;width:326px;height:452px;border-radius:26px;overflow:hidden;cursor:pointer;background:${c.tint};flex:none;transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s`)}>
      {(c.hasImg) ? (<>
      <SafeImg alt={c.name} style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover`)} src={c.img} />
      <div style={sx(`position:absolute;inset:0;background:linear-gradient(to top,rgba(19,26,34,.88) 4%,rgba(19,26,34,.28) 42%,rgba(19,26,34,0) 68%)`)}></div>
      <div style={sx(`position:absolute;left:24px;right:78px;bottom:24px;color:#FFFFFF`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:27px;letter-spacing:-.025em;line-height:1.1`)}>{c.name}</div>
      <div style={sx(`font-size:14px;line-height:1.5;color:rgba(255,255,255,.84);margin-top:8px`)}>{c.blurb}</div>
      </div>
      <div className="hv-b93e05a6" style={sx(`position:absolute;right:22px;bottom:22px;width:44px;height:44px;border-radius:999px;background:rgba(255,255,255,.9);display:grid;place-items:center;color:#131A22;transition:background .25s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M9 7h8v8" /></svg>
      </div>
      </>) : null}
      {(c.soon) ? (<>
      <div style={sx(`position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:24px;border:1px solid rgba(19,26,34,.09);border-radius:26px`)}>
      <span style={sx(`align-self:flex-start;background:#FFFFFF;color:#5A6572;font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:999px;letter-spacing:.1em`)}>COMING SOON</span>
      <div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:27px;letter-spacing:-.025em;color:#131A22;line-height:1.1`)}>{c.name}</div>
      <div style={sx(`font-size:14px;line-height:1.5;color:#5A6572;margin-top:8px;max-width:220px`)}>{c.blurb}</div>
      </div>
      </div>
      </>) : null}
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:66px auto 0;padding:0 26px`)}>
      <div style={sx(`position:relative;border-radius:30px;overflow:hidden;background:#FBF4E7;border:1px solid #EFE3CC`)}>
      <SafeImg src="https://kv80w4-fe.myshopify.com/cdn/shop/files/ChatGPT_Image_Aug_10_2026_04_20_48_PM.png?v=1787132383&width=1400" alt="" style={sx(`position:absolute;right:-6%;bottom:-8%;width:52%;min-width:420px;opacity:.14;pointer-events:none`)} />
      <div style={sx(`position:absolute;left:-70px;top:-70px;width:230px;height:230px;border-radius:999px;background:#FFC53D;opacity:.14;pointer-events:none`)}></div>
      <div style={sx(`position:relative;padding:clamp(30px,4vw,56px);display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:clamp(28px,3.4vw,52px);align-items:start`)}>
      <div>
      <div style={sx(`display:inline-flex;align-items:center;gap:8px;background:#FFFFFF;border:1px solid #EFE3CC;border-radius:999px;padding:7px 14px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A6100;margin-bottom:18px`)}>
      <span style={sx(`width:6px;height:6px;border-radius:999px;background:#FFC53D`)}></span>Kit finder
                </div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.5vw,46px);letter-spacing:-.032em;line-height:1.04;margin:0 0 16px;font-weight:700;text-wrap:balance`)}>Tell us about your child.<br />We'll find what they'll love.</h2>
      <p style={sx(`color:#5A6572;font-size:16.5px;line-height:1.6;margin:0 0 26px;max-width:420px`)}>Five quick taps, under a minute. We match against the kits we actually make — and tell you why each one fits.</p>
      <div style={sx(`display:flex;flex-direction:column;gap:12px`)}>
      {(finderPoints ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:11px;align-items:flex-start`)}>
      <span style={sx(`width:20px;height:20px;border-radius:999px;background:#FFC53D;color:#131A22;font-size:11px;font-weight:700;display:grid;place-items:center;flex:none;margin-top:2px`)}>✓</span>
      <span style={sx(`font-size:14.5px;line-height:1.5;color:#3A424D`)}>{p.text}</span>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:clamp(22px,2.6vw,34px);box-shadow:0 22px 50px rgba(19,26,34,.08)`)}>
      {(quizAsking) ? (<>
      <div>
      <div style={sx(`display:flex;align-items:center;gap:14px;margin-bottom:24px`)}>
      <div style={sx(`flex:1;height:6px;background:#F2EEE7;border-radius:999px;overflow:hidden`)}>
      <div style={sx(`height:100%;background:#FFC53D;border-radius:999px;transition:width .45s cubic-bezier(.2,.7,.3,1);width:${quizProgress}`)}></div>
      </div>
      <span style={sx(`font-size:12px;font-weight:700;color:#8A929C;white-space:nowrap;letter-spacing:.04em`)}>{quizStepLabel}</span>
      </div>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(20px,2.2vw,26px);letter-spacing:-.02em;margin:0 0 6px;font-weight:700`)}>{quizQuestion}</h3>
      <p style={sx(`color:#8A929C;font-size:14px;margin:0 0 22px`)}>{quizNote}</p>
      <div style={sx(`display:flex;flex-direction:column;gap:10px`)}>
      {(quizOptions ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <button className="hv-32cd8e82" onClick={o.pick} style={sx(`display:flex;align-items:center;gap:14px;text-align:left;width:100%;border:1px solid #E4DFD6;background:#FFFFFF;color:#131A22;border-radius:16px;padding:16px 18px;cursor:pointer;transition:border-color .2s,background .2s,transform .2s`)}>
      <span style={sx(`flex:1`)}>
      <span style={sx(`display:block;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;letter-spacing:-.015em`)}>{o.label}</span>
      <span style={sx(`display:block;color:#8A929C;font-size:12.5px;margin-top:3px`)}>{o.sub}</span>
      </span>
      <span style={sx(`color:#B4531F;font-size:15px;flex:none`)}>→</span>
      </button>
      </React.Fragment>))}
      </div>
      {(quizCanBack) ? (<>
      <button onClick={quizBack} style={sx(`margin-top:20px;border:0;background:transparent;color:#8A929C;font-size:13.5px;font-weight:600;cursor:pointer;padding:0`)}>← Back</button>
      </>) : null}
      </div>
      </>) : null}
      {(quizDone) ? (<>
      <div>
      <div style={sx(`display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:20px`)}>
      <span style={sx(`font-size:13.5px;color:#5A6572;font-weight:600`)}>{quizSummary}</span>
      <button className="hv-b582bf2f" onClick={quizRestart} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#B4531F;padding:9px 16px;border-radius:999px;font-size:12.5px;font-weight:700;cursor:pointer;transition:border-color .2s`)}>Start again</button>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:14px`)}>
      {(quizResults ?? []).map((r: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-a65fdea7" style={sx(`display:flex;gap:16px;align-items:stretch;border:1px solid #EFEBE3;border-radius:18px;padding:14px;transition:border-color .2s,box-shadow .2s`)}>
      <div onClick={r.open} style={sx(`width:104px;flex:none;border-radius:14px;overflow:hidden;background:#F4F1EC;cursor:pointer`)}>
      <SafeImg alt={r.name} style={sx(`width:100%;height:100%;object-fit:cover`)} src={r.img} />
      </div>
      <div style={sx(`flex:1;min-width:0;display:flex;flex-direction:column;gap:7px`)}>
      <div style={sx(`display:flex;align-items:center;gap:9px;flex-wrap:wrap`)}>
      <span style={sx(`background:#FFF2D0;color:#8A6100;font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 9px;border-radius:999px`)}>{r.rank}</span>
      <span style={sx(`color:#8A929C;font-size:12px`)}>{r.age} · {r.level} · {r.buildTime}</span>
      </div>
      <div onClick={r.open} style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;letter-spacing:-.015em;cursor:pointer`)}>{r.name}</div>
      <div style={sx(`font-size:13px;line-height:1.5;color:#5A6572`)}>{r.why}</div>
      <div style={sx(`display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:auto;padding-top:6px`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px`)}>{r.priceLabel}</span>
      <button className="hv-c28e8f3b" onClick={r.open} style={sx(`border:1px solid #E4DFD6;background:transparent;padding:9px 15px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>View product</button>
      <button onClick={r.add} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:9px 15px;border-radius:10px;font-size:12.5px;font-weight:700;cursor:pointer`)}>Start building</button>
      </div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </>) : null}
      </div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:86px 26px 10px`)}>
      <div style={sx(`position:relative;max-width:940px;margin:0 auto;text-align:center`)}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFC53D" strokeWidth="1.7" strokeLinecap="round" style={sx(`position:absolute;left:2%;top:-10px;animation-name:sgSpark;animation-duration:4.5s;animation-iteration-count:infinite;animation-timing-function:ease-in-out`)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.4 6.4l2.8 2.8M14.8 14.8l2.8 2.8M17.6 6.4l-2.8 2.8M9.2 14.8l-2.8 2.8" /></svg>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B4531F" strokeWidth="1.7" strokeLinecap="round" style={sx(`position:absolute;right:3%;bottom:6px;animation-name:sgSpark;animation-duration:5.6s;animation-delay:-2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out`)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /></svg>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.6vw,62px);letter-spacing:-.035em;line-height:1.06;margin:0;font-weight:700;display:flex;flex-wrap:wrap;justify-content:center;gap:0 .32em`)}>
      {(sloganWords ?? []).map((w: any, _k: number) => (<React.Fragment key={_k}>
      <span style={sx(`position:relative;color:${w.color};animation-name:sgWord;animation-duration:9s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.2,.7,.3,1);animation-fill-mode:both;animation-delay:${w.delay}`)}>{w.word}
                  {(w.underline) ? (<>
      <span style={sx(`position:absolute;left:0;right:0;bottom:.02em;height:.16em;background:#FFC53D;border-radius:999px;z-index:-1;transform-origin:left center;animation-name:sgUnderline;animation-duration:9s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.2,.7,.3,1)`)}></span>
      </>) : null}
      </span>
      </React.Fragment>))}
      </h2>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:66px auto 0;padding:56px 26px 52px;background:#FBF4E7;border-radius:30px`)}>
      <div data-svgrid={true} style={sx(`display:grid;grid-template-columns:32fr 68fr;gap:clamp(28px,3.6vw,52px);align-items:center`)}>
      <div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.5vw,44px);letter-spacing:-.03em;margin:0 0 14px;font-weight:700`)}>Our <span style={sx(`color:#B4531F`)}>services</span></h2>
      <p style={sx(`color:#5A6572;font-size:16.5px;line-height:1.62;margin:0 0 24px;max-width:400px`)}>Everything we do — from a kit on your kitchen table to a term-long school program, run by the people who design the machines.</p>
      <div style={sx(`display:flex;flex-direction:column;gap:11px;margin-bottom:26px`)}>
      {(serviceBullets ?? []).map((b: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:11px;align-items:flex-start`)}>
      <span style={sx(`width:20px;height:20px;border-radius:999px;background:#FFC53D;color:#131A22;font-size:11px;font-weight:700;display:grid;place-items:center;flex:none;margin-top:2px`)}>✓</span>
      <span style={sx(`font-size:14.5px;line-height:1.5;color:#3A424D`)}>{b.text}</span>
      </div>
      </React.Fragment>))}
      </div>
      <button className="hv-76097081" onClick={goSolutions} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:15px 26px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Explore STEM Solutions →</button>
      </div>
      <div style={sx(`height:520px;overflow:hidden;position:relative;mask-image:linear-gradient(to bottom,transparent,#000 9%,#000 91%,transparent);-webkit-mask-image:linear-gradient(to bottom,transparent,#000 9%,#000 91%,transparent)`)}>
      <div className="hv-88cacac1" style={sx(`display:flex;flex-direction:column;gap:18px;animation-name:sgVert;animation-duration:34s;animation-timing-function:linear;animation-iteration-count:infinite`)}>
      {(servicesLoop ?? []).map((sv: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-2d44b3db" onClick={sv.go} style={sx(`display:grid;grid-template-columns:84px 1fr;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:22px;overflow:hidden;cursor:pointer;flex:none;transition:box-shadow .3s,border-color .3s`)}>
      <div style={sx(`background:${sv.tint};display:grid;place-items:center;min-height:158px`)}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={sv.ink} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={sv.d} /></svg>
      </div>
      <div style={sx(`padding:22px 26px;display:flex;flex-direction:column;gap:7px`)}>
      <div style={sx(`display:flex;gap:6px;flex-wrap:wrap`)}>
      {(sv.tags ?? []).map((tg: any, _k: number) => (<React.Fragment key={_k}>
      <span style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;color:#5A6572;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px`)}>{tg.label}</span>
      </React.Fragment>))}
      </div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em`)}>{sv.title}</div>
      <div style={sx(`color:#B4531F;font-size:13.5px;font-weight:600`)}>{sv.tagline}</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.55`)}>{sv.text}</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:66px auto 0;padding:0 26px`)}>
      <div style={sx(`position:relative;border-radius:30px;overflow:hidden;min-height:340px;display:grid;align-items:center`)}>
      <SafeImg src="/assets/about-classroom.png" alt="Children building SparrowG kits together" style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 32%`)} />
      <div style={sx(`position:absolute;inset:0;background:linear-gradient(100deg,rgba(19,26,34,.9) 8%,rgba(19,26,34,.62) 48%,rgba(19,26,34,.22) 100%)`)}></div>
      <div style={sx(`position:relative;padding:clamp(32px,4.4vw,60px);max-width:620px;color:#FFFFFF`)}>
      <div style={sx(`font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#FFC53D;margin-bottom:14px`)}>Who we are</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(27px,3.6vw,44px);letter-spacing:-.03em;line-height:1.06;margin:0 0 14px;font-weight:700`)}>Built by educators and engineers, in Hyderabad</h2>
      <p style={sx(`color:#C6CED7;font-size:16px;line-height:1.6;margin:0 0 26px;max-width:460px`)}>We design, prototype and test every kit at T-Works — because the gap between knowing about a machine and building one is where the real learning happens.</p>
      <button className="hv-76097081" onClick={goAbout} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:16px 28px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>About us →</button>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div style={sx(`background:#F4F1EC;border:1px solid #E4DFD6;border-radius:30px;padding:clamp(28px,4vw,56px);color:#131A22`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:38px;align-items:start`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:14px`)}>Why SparrowG</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,44px);letter-spacing:-.03em;margin:0 0 16px;line-height:1.05;font-weight:700`)}>Not a toy. A first engineering workshop.</h2>
      <p style={sx(`color:#5A6572;font-size:15.5px;line-height:1.6;margin:0 0 24px;max-width:390px`)}>Every kit is a real mechanism — gears, linkages, motors, load paths. Children build it, break it, and understand why it works.</p>
      <button className="hv-4927a4c8" onClick={goSolutions} style={sx(`border:1px solid #D6D0C4;background:transparent;color:#131A22;padding:14px 22px;border-radius:12px;font-size:14.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>See our learning framework →</button>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:13px`)}>
      {(pillars ?? []).map((w: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-5482e468" style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:16px;padding:18px;transition:box-shadow .25s,transform .25s`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:700;color:#A6ADB6;margin-bottom:10px`)}>{w.num}</div>
      <div style={sx(`font-weight:700;font-size:15px;margin-bottom:5px`)}>{w.title}</div>
      <div style={sx(`color:#5A6572;font-size:12.5px;line-height:1.5`)}>{w.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div style={sx(`text-align:center;max-width:560px;margin:0 auto 40px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>How it works</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Four steps, every single kit</h2>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:0;padding-bottom:8px`)}>
      {(stack ?? []).map((st: any, _k: number) => (<React.Fragment key={_k}>
      <div data-stackcard={true} style={sx(`position:sticky;top:${st.top};z-index:${st.z};margin:0 ${st.inset} ${st.gap}`)}>
      <div className="hv-8b7ffd55" style={sx(`background:#FFFFFF;border:1px solid #EFE3CC;border-radius:24px;box-shadow:0 -8px 30px rgba(19,26,34,.08);overflow:hidden;transition:box-shadow .3s,border-color .3s,transform .3s cubic-bezier(.2,.7,.3,1)`)}>
      <div style={sx(`display:flex;align-items:center;gap:14px;height:54px;padding:0 26px;background:#FBF4E7;border-bottom:1px solid #EFE3CC`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:12px;color:#B4531F;letter-spacing:.08em;flex:none`)}>STEP {st.num}</span>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;letter-spacing:-.018em;color:#131A22;flex:1`)}>{st.title}</span>
      <span data-hide-sm={true} style={sx(`font-size:13px;color:#8A929C;font-weight:600`)}>{st.hint}</span>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:clamp(24px,3.2vw,44px);align-items:center;padding:clamp(28px,3.4vw,46px);min-height:66vh`)} data-stackbody={true}>
      <div>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(25px,3.2vw,40px);letter-spacing:-.03em;line-height:1.05;margin:0 0 14px;font-weight:700;color:#131A22`)}>{st.headline}</h3>
      <p style={sx(`color:#5A6572;font-size:16px;line-height:1.62;margin:0 0 20px;max-width:420px`)}>{st.text}</p>
      <div style={sx(`display:flex;flex-wrap:wrap;gap:9px`)}>
      {(st.tags ?? []).map((tg: any, _k: number) => (<React.Fragment key={_k}>
      <span style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;color:#3A424D;font-size:12.5px;font-weight:600;padding:8px 14px;border-radius:999px;white-space:nowrap`)}>{tg.label}</span>
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`border-radius:20px;overflow:hidden;aspect-ratio:4/3;background:#F4F1EC`)}>
      <SafeImg alt={st.title} style={sx(`width:100%;height:100%;object-fit:cover`)} src={st.img} />
      </div>
      </div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div onMouseEnter={fbPause} onMouseLeave={fbResume} style={sx(`position:relative;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:30px;overflow:hidden;display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr))`)}>
      <div style={sx(`position:relative;background:#F4F1EC;min-height:400px;overflow:hidden`)}>
      <SafeImg alt={fb.name} style={sx(`width:100%;height:100%;object-fit:cover;transition:opacity .5s`)} src={fb.img} />
      <div style={sx(`position:absolute;left:18px;top:18px;display:flex;gap:7px`)}>
      {(fbDots ?? []).map((d: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={d.go} style={sx(`border:0;padding:0;cursor:pointer;width:${d.w};height:6px;border-radius:999px;background:${d.bg};transition:width .35s,background .35s`)}></button>
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`padding:clamp(26px,4vw,50px);display:flex;flex-direction:column;justify-content:center`)}>
      <div style={sx(`display:flex;align-items:center;gap:12px;margin-bottom:12px`)}>
      <span style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0FA3A3`)}>Featured build</span>
      <span style={sx(`font-size:12px;font-weight:600;color:#A6ADB6`)}>{fbCounter}</span>
      </div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3.1vw,40px);letter-spacing:-.03em;margin:0 0 14px;line-height:1.08;font-weight:700`)}>{fb.name}</h2>
      <p style={sx(`color:#5A6572;font-size:15.5px;line-height:1.6;margin:0 0 22px;min-height:76px`)}>{fb.long}</p>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(112px,1fr));gap:12px;margin-bottom:24px`)}>
      <div style={sx(`background:#F4F1EC;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Build time</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{fb.buildTime}</div></div>
      <div style={sx(`background:#F4F1EC;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Level</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{fb.level}</div></div>
      <div style={sx(`background:#F4F1EC;border-radius:13px;padding:13px 15px`)}><div style={sx(`font-size:11.5px;color:#8A929C;font-weight:600`)}>Age</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;margin-top:2px`)}>{fb.age}</div></div>
      </div>
      <div style={sx(`display:flex;gap:12px;flex-wrap:wrap;align-items:center`)}>
      <button className="hv-76097081" onClick={fb.open} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:15px 24px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:transform .2s`)}>View this kit →</button>
      <button className="hv-c28e8f3b" style={sx(`border:1px solid #E4DFD6;background:transparent;padding:15px 24px;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:9px;transition:background .2s`)}><span style={sx(`color:#B4531F`)}>▶</span> Watch the build</button>
      <div style={sx(`display:flex;gap:8px;margin-left:auto`)}>
      <button className="hv-4da149b8" onClick={fbPrev} style={sx(`border:1px solid #D6D0C4;background:#FFFFFF;width:46px;height:46px;border-radius:999px;cursor:pointer;color:#131A22;display:grid;place-items:center;transition:background .2s,border-color .2s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 6-6 6 6 6" /></svg>
      </button>
      <button className="hv-1de5f70e" onClick={fbNext} style={sx(`border:0;background:#131A22;width:46px;height:46px;border-radius:999px;cursor:pointer;color:#FFFFFF;display:grid;place-items:center;transition:transform .2s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 6 6 6-6 6" /></svg>
      </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div style={sx(`margin-bottom:26px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>Choose your path</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Built for homes, classrooms and companies</h2>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(268px,1fr));gap:18px`)}>
      {(paths ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-91ea777c" onClick={p.go} style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;overflow:hidden;cursor:pointer;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s`)}>
      <div style={sx(`aspect-ratio:16/10;background:#F4F1EC;overflow:hidden`)}>
      <SafeImg alt={p.title} style={sx(`width:100%;height:100%;object-fit:cover`)} src={p.img} />
      </div>
      <div style={sx(`padding:24px`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A929C;margin-bottom:8px`)}>{p.kicker}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-bottom:8px`)}>{p.title}</div>
      <div style={sx(`color:#5A6572;font-size:14.5px;line-height:1.55;margin-bottom:16px`)}>{p.text}</div>
      <div style={sx(`font-weight:700;font-size:14px;color:#B4531F`)}>{p.cta} →</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:18px`)}>
      {(promises ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:${p.bg};border-radius:26px;padding:32px 30px;min-height:240px;display:flex;flex-direction:column;justify-content:flex-end`)}>
      <div style={sx(`font-size:13px;font-weight:600;color:#5A6572;margin-bottom:2px`)}>{p.kicker}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(23px,2.4vw,30px);letter-spacing:-.025em;font-weight:700;margin-bottom:10px`)}>{p.title}</div>
      <div style={sx(`color:#4A5462;font-size:14.5px;line-height:1.6`)}>{p.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:26px`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>Experiences</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Build with us in person</h2>
      </div>
      <button className="hv-4927a4c8" onClick={goSolutions} style={sx(`border:1px solid #D6D0C4;background:transparent;padding:11px 20px;border-radius:11px;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s`)}>All experiences →</button>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(268px,1fr));gap:18px`)}>
      {(experiences ?? []).map((e: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-91ea777c" onClick={e.go} style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;overflow:hidden;cursor:pointer;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s`)}>
      <div style={sx(`aspect-ratio:16/10;background:#F4F1EC;overflow:hidden`)}>
      <SafeImg className="hv-cda3e551" alt={e.title} style={sx(`width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.3,1)`)} src={e.img} />
      </div>
      <div style={sx(`padding:24px;display:flex;flex-direction:column;gap:10px;flex:1`)}>
      <div style={sx(`display:flex;gap:7px;flex-wrap:wrap`)}>
      <span style={sx(`background:#F4F1EC;color:#5A6572;font-size:11.5px;font-weight:600;padding:5px 10px;border-radius:8px`)}>{e.mode}</span>
      <span style={sx(`background:#F4F1EC;color:#5A6572;font-size:11.5px;font-weight:600;padding:5px 10px;border-radius:8px`)}>{e.dur}</span>
      <span style={sx(`background:#F4F1EC;color:#5A6572;font-size:11.5px;font-weight:600;padding:5px 10px;border-radius:8px`)}>{e.age}</span>
      </div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;letter-spacing:-.02em`)}>{e.title}</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.55;flex:1`)}>{e.text}</div>
      <div style={sx(`font-size:13px;font-weight:700;color:#B4531F;margin-top:6px`)}>{e.cta} →</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:66px 26px 0;text-align:center`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3vw,38px);font-weight:700;letter-spacing:-.025em;color:#131A22;margin:0 0 30px`)}>Trusted by schools and partners</h2>
      <div className="sgpartners" style={sx(`overflow:hidden`)}>
      <div className="sgtrack hv-88cacac1" style={sx(`display:flex;width:max-content;gap:92px;animation-name:sgPartners;animation-duration:32s;animation-timing-function:linear;animation-iteration-count:infinite`)}>
      {(pressLoop ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;flex-direction:column;align-items:center;gap:12px;width:120px;flex:none`)}>
      <div style={sx(`width:96px;height:96px;display:grid;place-items:center`)}>
      {(p.hasImg) ? (<>
      <SafeImg alt={p.name} style={sx(`width:100%;height:100%;object-fit:contain`)} src={p.img} />
      </>) : null}
      {(p.isCap) ? (<>
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke={p.fg} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5 12 4l10 4.5-10 4.5L2 8.5Z" /><path d="M6 10.7v4.6c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4.6" /><path d="M21 9.6v4.9" /></svg>
      </>) : null}
      {(p.isBulb) ? (<>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={p.fg} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3Z" /></svg>
      </>) : null}
      </div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:13px;color:#5A6572;text-align:center;line-height:1.3`)}>{p.name}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:66px auto 0;padding:56px 26px 52px;background:#FBF4E7;border-radius:30px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.5vw,44px);letter-spacing:-.03em;margin:0 0 8px;font-weight:700;text-align:center`)}>Featured reels</h2>
      <p style={sx(`text-align:center;color:#5A6572;font-size:15.5px;margin:0 0 36px`)}>Real builds, real classrooms — playing now</p>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(228px,1fr));gap:20px`)}>
      {(reels ?? []).map((r: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-79fc015e" data-reel={true} style={sx(`position:relative;border-radius:22px;overflow:hidden;aspect-ratio:9/16;background:#131A22;cursor:pointer;transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s`)}>
      <SafeImg alt={r.title} style={sx(`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation-name:sgReel;animation-duration:${r.dur};animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-delay:${r.delay}`)} src={r.img} />
      <div style={sx(`position:absolute;inset:0;background:linear-gradient(to top,rgba(19,26,34,.88) 6%,rgba(19,26,34,.1) 46%,rgba(19,26,34,.44) 100%)`)}></div>
      <div style={sx(`position:absolute;top:14px;left:14px;right:14px;display:flex;align-items:center;gap:9px`)}>
      <span style={sx(`display:flex;align-items:center;gap:6px;background:rgba(255,255,255,.16);backdrop-filter:blur(6px);color:#FFFFFF;font-size:10.5px;font-weight:700;letter-spacing:.08em;padding:6px 10px;border-radius:999px`)}>
      <span style={sx(`width:6px;height:6px;border-radius:999px;background:#FF4B3E`)}></span>LIVE LOOP
                  </span>
      <span style={sx(`margin-left:auto;color:rgba(255,255,255,.82);font-size:11.5px;font-weight:600`)}>{r.durLabel}</span>
      </div>
      <div style={sx(`position:absolute;left:16px;right:16px;bottom:20px;color:#FFFFFF`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;letter-spacing:-.015em;line-height:1.25`)}>{r.title}</div>
      <div style={sx(`font-size:12.5px;color:rgba(255,255,255,.76);margin-top:5px`)}>SparrowG Community</div>
      <div style={sx(`height:3px;background:rgba(255,255,255,.22);border-radius:999px;margin-top:14px;overflow:hidden`)}>
      <div style={sx(`height:100%;background:#FFC53D;animation-name:sgReelBar;animation-duration:${r.dur};animation-timing-function:linear;animation-iteration-count:infinite;animation-delay:${r.delay}`)}></div>
      </div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:flex-end;gap:18px;flex-wrap:wrap;margin-bottom:26px`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>The SparrowG Journal</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Ideas for raising a builder</h2>
      </div>
      <button className="hv-4927a4c8" onClick={goBlog} style={sx(`border:1px solid #D6D0C4;background:transparent;padding:11px 20px;border-radius:11px;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s`)}>View all blogs →</button>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(268px,1fr));gap:20px`)}>
      {(posts ?? []).map((b: any, _k: number) => (<React.Fragment key={_k}>
      <div onClick={b.open} style={sx(`cursor:pointer`)}>
      <div style={sx(`aspect-ratio:16/10;border-radius:20px;overflow:hidden;background:#E9E4DA;margin-bottom:14px`)}>
      <SafeImg className="hv-cda3e551" alt={b.title} style={sx(`width:100%;height:100%;object-fit:cover;object-position:50% 0;transition:transform .5s cubic-bezier(.2,.7,.3,1);transform-origin:50% 0`)} src={b.img} />
      </div>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0FA3A3;margin-bottom:8px`)}>{b.cat} · {b.read}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px;line-height:1.25;letter-spacing:-.015em;margin-bottom:8px`)}>{b.title}</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.55`)}>{b.excerpt}</div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 0`)}>
      <div style={sx(`background:#F7F1E4;border-radius:30px;padding:clamp(28px,4vw,52px)`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.3vw,42px);letter-spacing:-.03em;margin:0 0 8px;font-weight:700`)}>FAQs</h2>
      <p style={sx(`color:#5A6572;font-size:15.5px;margin:0 0 24px`)}>The things parents ask us most.</p>
      <div style={sx(`display:flex;flex-direction:column`)}>
      {(faqs ?? []).map((f: any, _k: number) => (<React.Fragment key={_k}>
      <div onMouseEnter={f.hover} style={sx(`border-top:1px solid rgba(19,26,34,.14)`)}>
      <button onClick={f.toggle} style={sx(`width:100%;display:flex;align-items:center;gap:14px;text-align:left;border:0;background:transparent;padding:22px 2px;cursor:pointer;color:#131A22`)}>
      <span style={sx(`color:#B4531F;font-size:15px;flex:none`)}>→</span>
      <span style={sx(`flex:1;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17.5px;letter-spacing:-.015em`)}>{f.q}</span>
      {(f.open) ? (<>
      <span style={sx(`font-size:13px;color:#5A6572;flex:none`)}>▲</span>
      </>) : null}
      {(f.closed) ? (<>
      <span style={sx(`font-size:13px;color:#8A929C;flex:none`)}>▼</span>
      </>) : null}
      </button>
      {(f.open) ? (<>
      <div style={sx(`padding:0 2px 26px 31px;max-width:680px;color:#3A424D;font-size:16px;line-height:1.68`)}>{f.a}</div>
      </>) : null}
      </div>
      </React.Fragment>))}
      <div style={sx(`border-top:1px solid rgba(19,26,34,.14)`)}></div>
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:74px 26px 90px`)}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:30px;padding:clamp(28px,4vw,52px);display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:40px;align-items:start`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:12px`)}>Get in touch</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.4vw,44px);letter-spacing:-.03em;line-height:1.04;margin:0 0 14px;font-weight:700`)}>Not sure which kit fits? Ask us.</h2>
      <p style={sx(`color:#5A6572;font-size:16px;line-height:1.6;margin:0 0 26px;max-width:400px`)}>Tell us your child's age and what they're into — we'll reply with a recommendation within one working day. Schools and companies welcome too.</p>
      <div style={sx(`display:flex;flex-direction:column;gap:12px`)}>
      {(contactInfo ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:14px;align-items:baseline;padding-bottom:12px;border-bottom:1px solid #F2EEE7`)}>
      <span style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A929C;width:82px;flex:none`)}>{c.label}</span>
      <span style={sx(`flex:1`)}>
      <span style={sx(`display:block;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15.5px;letter-spacing:-.01em`)}>{c.value}</span>
      <span style={sx(`display:block;color:#8A929C;font-size:12.5px;margin-top:2px`)}>{c.note}</span>
      </span>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`background:#F7F5F1;border:1px solid #EFEBE3;border-radius:24px;padding:clamp(22px,2.6vw,32px)`)}>
      <div style={sx(`display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px`)}>
      {(enquiryTypes ?? []).map((e: any, _k: number) => (<React.Fragment key={_k}>
      {(e.active) ? (<>
      <button onClick={e.go} style={sx(`border:1px solid #131A22;background:#131A22;color:#FFFFFF;padding:9px 16px;border-radius:999px;font-size:12.5px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:7px`)}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={e.d} /></svg>{e.label}</button>
      </>) : null}
      {(e.inactive) ? (<>
      <button className="hv-b582bf2f" onClick={e.go} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#4A5462;padding:9px 16px;border-radius:999px;font-size:12.5px;font-weight:600;cursor:pointer;transition:border-color .2s;display:inline-flex;align-items:center;gap:7px`)}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A6572" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={e.d} /></svg>{e.label}</button>
      </>) : null}
      </React.Fragment>))}
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:12px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Name</div><input placeholder="Your name" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#FFFFFF`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Email</div><input placeholder="you@email.com" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#FFFFFF`)} /></div>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:12px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Phone</div><input placeholder="+91" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#FFFFFF`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Child's age</div><input placeholder="e.g. 10" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#FFFFFF`)} /></div>
      </div>
      <div style={sx(`margin-bottom:16px`)}><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>How can we help?</div><textarea rows={4} placeholder="Tell us a little about what you need" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#FFFFFF;resize:vertical`)}></textarea></div>
      <button className="hv-1de5f70e" onClick={goContact} style={sx(`width:100%;border:0;background:#FFC53D;color:#131A22;padding:16px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Send enquiry</button>
      <div style={sx(`text-align:center;color:#8A929C;font-size:12.5px;margin-top:12px`)}>Or WhatsApp us on +91 94930 17356</div>
      </div>
      </div>
      </section>
      </div>
    </>
  );
}

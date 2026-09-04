'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Shop() {
  const v = useVals();
  const { catChips, clearFilters, clearQuery, emptyMsg, filters, filtersActive, hasQuery,
    queryLabel, shopCountLabel, shopEmpty, shopList, shopTitle } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:42px 26px 90px`)}>
      <div style={sx(`margin-bottom:28px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>Shop</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(32px,4.3vw,54px);letter-spacing:-.035em;margin:0 0 10px;font-weight:700`)}>{shopTitle}</h1>
      <p style={sx(`color:#5A6572;font-size:16px;margin:0`)}>{shopCountLabel} · Free shipping across India</p>
      {(hasQuery) ? (<>
      <div style={sx(`display:inline-flex;align-items:center;gap:10px;margin-top:14px;background:#F4F1EC;border:1px solid #E4DFD6;border-radius:999px;padding:8px 10px 8px 16px`)}>
      <span style={sx(`font-size:13.5px;font-weight:600;color:#131A22`)}>{queryLabel}</span>
      <button onClick={clearQuery} style={sx(`border:0;background:#FFFFFF;width:26px;height:26px;border-radius:999px;cursor:pointer;color:#5A6572;font-size:12px`)}>✕</button>
      </div>
      </>) : null}
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px`)}>
      {(catChips ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      {(c.active) ? (<>
      <button onClick={c.go} style={sx(`border:1px solid #131A22;background:#131A22;color:#FFFFFF;padding:10px 18px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer`)}>{c.label}</button>
      </>) : null}
      {(c.inactive) ? (<>
      <button className="hv-4174ca2d" onClick={c.go} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#4A5462;padding:10px 18px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer;transition:border-color .2s,color .2s`)}>{c.label}</button>
      </>) : null}
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:28px`)}>
      {(filters ?? []).map((f: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`position:relative`)}>
      <button className="hv-b582bf2f" onClick={f.toggle} style={sx(`display:flex;align-items:center;gap:10px;border:1px solid ${f.border};background:${f.bg};color:${f.fg};padding:12px 16px;border-radius:14px;font-size:13.5px;font-weight:600;cursor:pointer;transition:border-color .2s,background .2s`)}>
      <span style={sx(`color:${f.labelFg};font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase`)}>{f.name}</span>
      <span>{f.valueLabel}</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {(f.open) ? (<>
      <div style={sx(`position:absolute;top:100%;left:0;margin-top:8px;z-index:40;min-width:196px;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:16px;padding:7px;box-shadow:0 22px 48px rgba(19,26,34,.14)`)}>
      {(f.options ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <button className="hv-c1fcff06" onClick={o.pick} style={sx(`display:flex;align-items:center;gap:10px;width:100%;text-align:left;border:0;background:${o.bg};color:#131A22;padding:11px 13px;border-radius:11px;cursor:pointer;font-size:14px;font-weight:${o.weight};transition:background .16s`)}>
      <span style={sx(`flex:1`)}>{o.label}</span>
      <span style={sx(`color:#B4531F;font-size:13px`)}>{o.tick}</span>
      </button>
      </React.Fragment>))}
      </div>
      </>) : null}
      </div>
      </React.Fragment>))}
      {(filtersActive) ? (<>
      <button onClick={clearFilters} style={sx(`border:0;background:transparent;color:#B4531F;font-size:13.5px;font-weight:700;cursor:pointer;padding:12px 6px`)}>Clear all</button>
      </>) : null}
      <span style={sx(`margin-left:auto;font-size:13.5px;color:#8A929C;font-weight:600`)}>{shopCountLabel}</span>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(248px,1fr));gap:20px`)}>
      {(shopList ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-9e8a5fea" style={sx(`background:#FFFFFF;border-radius:22px;overflow:hidden;border:1px solid #EFEBE3;display:flex;flex-direction:column;transition:transform .3s cubic-bezier(.2,.7,.3,1),box-shadow .3s`)}>
      <div onClick={p.open} style={sx(`position:relative;aspect-ratio:4/3;background:#F4F1EC;cursor:pointer;overflow:hidden`)}>
      <SafeImg className="hv-cda3e551" alt={p.name} style={sx(`width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.3,1)`)} src={p.img} />
      <span style={sx(`position:absolute;top:12px;left:12px;background:#131A22;color:#FFFFFF;font-size:11px;font-weight:700;padding:5px 10px;border-radius:999px`)}>{p.badge}</span>
      <span style={sx(`position:absolute;top:12px;right:12px;background:rgba(255,255,255,.94);font-size:11px;font-weight:700;padding:5px 10px;border-radius:999px`)}>{p.age}</span>
      </div>
      <div style={sx(`padding:18px;display:flex;flex-direction:column;gap:8px;flex:1`)}>
      <div style={sx(`display:flex;gap:6px;flex-wrap:wrap`)}>
      <span style={sx(`background:#F4F1EC;color:#5A6572;font-size:11px;font-weight:600;padding:4px 9px;border-radius:7px`)}>{p.category}</span>
      <span style={sx(`background:#F4F1EC;color:#5A6572;font-size:11px;font-weight:600;padding:4px 9px;border-radius:7px`)}>{p.level}</span>
      </div>
      <div onClick={p.open} style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17.5px;letter-spacing:-.015em;cursor:pointer`)}>{p.name}</div>
      <div style={sx(`color:#5A6572;font-size:13.5px;line-height:1.45;flex:1`)}>{p.blurb}</div>
      <div style={sx(`display:flex;align-items:baseline;gap:9px;margin-top:4px`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px`)}>{p.priceLabel}</span>
      <span style={sx(`color:#A6ADB6;font-size:13.5px;text-decoration:line-through`)}>{p.mrpLabel}</span>
      </div>
      <div style={sx(`display:flex;gap:8px;margin-top:6px`)}>
      <button className="hv-c28e8f3b" onClick={p.open} style={sx(`flex:1;border:1px solid #E4DFD6;background:transparent;padding:11px;border-radius:11px;font-size:13.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>View</button>
      <button className="hv-08c78e8f" onClick={p.add} style={sx(`flex:1;border:0;background:#131A22;color:#FFFFFF;padding:11px;border-radius:11px;font-size:13.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>Add</button>
      </div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      {(shopEmpty) ? (<>
      <div style={sx(`text-align:center;padding:70px 0`)}>
      <div style={sx(`color:#8A929C;font-size:15px;margin-bottom:16px`)}>{emptyMsg}</div>
      <button onClick={clearQuery} style={sx(`border:1px solid #D6D0C4;background:transparent;padding:11px 20px;border-radius:11px;font-size:14px;font-weight:600;cursor:pointer`)}>Clear search</button>
      </div>
      </>) : null}
      <div style={sx(`margin-top:44px;background:#FFFFFF;border:1px dashed #D6D0C4;border-radius:24px;padding:30px`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A929C;margin-bottom:10px`)}>In development</div>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:22px;letter-spacing:-.02em;margin:0 0 8px;font-weight:700`)}>Military, Space and F1 kits are on the way</h3>
      <p style={sx(`color:#5A6572;font-size:14.5px;line-height:1.55;margin:0 0 18px;max-width:520px`)}>These ranges are in prototyping at our T-Works lab. Join the list and we'll tell you the day they ship.</p>
      <div style={sx(`display:flex;align-items:center;background:#F9F7F4;border:1px solid #E4DFD6;border-radius:12px;padding:4px 4px 4px 15px;max-width:360px`)}>
      <input placeholder="Email for launch alerts" style={sx(`border:0;outline:0;background:transparent;font-size:14px;width:100%`)} />
      <button style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:10px 16px;border-radius:9px;font-size:13.5px;font-weight:700;cursor:pointer;white-space:nowrap`)}>Notify me</button>
      </div>
      </div>
      </div>
    </>
  );
}

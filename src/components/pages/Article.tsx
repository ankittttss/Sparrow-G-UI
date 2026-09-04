'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Article() {
  const v = useVals();
  const { art, artProduct, goBlog, relatedPosts } = v;
  return (
    <>
      <div className="sgrise" style={sx(`padding-bottom:90px`)}>
      <div data-pad={true} style={sx(`max-width:800px;margin:0 auto;padding:38px 26px 0`)}>
      <div onClick={goBlog} style={sx(`font-size:13.5px;color:#B4531F;font-weight:600;cursor:pointer;margin-bottom:20px`)}>← All articles</div>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0FA3A3;margin-bottom:14px`)}>{art.cat}</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.3vw,52px);letter-spacing:-.035em;line-height:1.06;margin:0 0 20px;font-weight:700;text-wrap:balance`)}>{art.title}</h1>
      <div style={sx(`display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding-bottom:24px;border-bottom:1px solid #E4DFD6`)}>
      <div style={sx(`width:38px;height:38px;border-radius:999px;background:#131A22;color:#FFC53D;display:grid;place-items:center;font-weight:700;font-size:13px`)}>SG</div>
      <div style={sx(`font-size:13.5px`)}><div style={sx(`font-weight:700`)}>SparrowG Community</div><div style={sx(`color:#8A929C`)}>{art.date} · {art.read}</div></div>
      <div style={sx(`margin-left:auto;display:flex;gap:8px`)}>
      <button style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;padding:9px 14px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer`)}>Share</button>
      <button style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;padding:9px 14px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer`)}>Save</button>
      </div>
      </div>
      </div>
      <div data-pad={true} style={sx(`max-width:1040px;margin:30px auto 0;padding:0 26px`)}>
      <div style={sx(`border-radius:26px;overflow:hidden;aspect-ratio:16/8;background:#E9E4DA`)}><SafeImg alt={art.title} style={sx(`width:100%;height:100%;object-fit:contain;background:#FFFFFF`)} src={art.img} /></div>
      </div>
      <article data-pad={true} style={sx(`max-width:700px;margin:0 auto;padding:42px 26px 0`)}>
      {(art.body ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      {(p.isHead) ? (<>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:26px;letter-spacing:-.025em;margin:36px 0 14px;font-weight:700`)}>{p.text}</h2>
      </>) : null}
      {(p.isQuote) ? (<>
      <blockquote style={sx(`margin:32px 0;padding:24px 28px;background:#FFFFFF;border-radius:20px;border:1px solid #EFEBE3;font-family:'Space Grotesk',sans-serif;font-size:20px;line-height:1.4;letter-spacing:-.015em;font-weight:500`)}>{p.text}</blockquote>
      </>) : null}
      {(p.isPara) ? (<>
      <p style={sx(`font-size:17.5px;line-height:1.72;color:#2A323C;margin:0 0 20px;text-wrap:pretty`)}>{p.text}</p>
      </>) : null}
      </React.Fragment>))}
      </article>
      <div data-pad={true} style={sx(`max-width:700px;margin:44px auto 0;padding:0 26px`)}>
      <div style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;border-radius:24px;padding:28px;display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:22px;align-items:center;color:#131A22`)}>
      <div>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B4531F;margin-bottom:8px`)}>Try it at home</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-bottom:8px`)}>{artProduct.name}</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.5;margin-bottom:16px`)}>{artProduct.blurb}</div>
      <button onClick={artProduct.open} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:12px 20px;border-radius:11px;font-size:14px;font-weight:700;cursor:pointer`)}>View kit · {artProduct.priceLabel}</button>
      </div>
      <div style={sx(`border-radius:18px;overflow:hidden;aspect-ratio:4/3;background:#FFFFFF`)}><SafeImg alt={artProduct.name} style={sx(`width:100%;height:100%;object-fit:cover`)} src={artProduct.img} /></div>
      </div>
      </div>
      <div data-pad={true} style={sx(`max-width:1040px;margin:60px auto 0;padding:0 26px`)}>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:25px;letter-spacing:-.025em;margin:0 0 18px;font-weight:700`)}>Keep reading</h3>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px`)}>
      {(relatedPosts ?? []).map((b: any, _k: number) => (<React.Fragment key={_k}>
      <div onClick={b.open} style={sx(`cursor:pointer`)}>
      <div style={sx(`aspect-ratio:16/10;border-radius:18px;overflow:hidden;background:#E9E4DA;margin-bottom:12px`)}><SafeImg alt={b.title} style={sx(`width:100%;height:100%;object-fit:cover;object-position:50% 0`)} src={b.img} /></div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;line-height:1.28;letter-spacing:-.015em`)}>{b.title}</div>
      <div style={sx(`color:#8A929C;font-size:12.5px;margin-top:5px`)}>{b.read}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </div>
    </>
  );
}

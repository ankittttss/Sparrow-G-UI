'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Blog() {
  const v = useVals();
  const { blogCats, blogList, featuredPost } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:42px 26px 90px`)}>
      <div style={sx(`margin-bottom:28px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>The SparrowG Journal</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(32px,4.3vw,54px);letter-spacing:-.035em;margin:0 0 10px;font-weight:700`)}>Writing on STEM, play and parenting</h1>
      <p style={sx(`color:#5A6572;font-size:16px;margin:0;max-width:500px`)}>Practical thinking from the people who design the kits — and the teachers who use them.</p>
      </div>
      <div onClick={featuredPost.open} style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));background:#FFFFFF;border:1px solid #EFEBE3;border-radius:28px;overflow:hidden;cursor:pointer;margin-bottom:34px`)}>
      <div style={sx(`min-height:300px;background:#E9E4DA`)}><SafeImg alt={featuredPost.title} style={sx(`width:100%;height:100%;object-fit:cover;object-position:50% 0`)} src={featuredPost.img} /></div>
      <div style={sx(`padding:clamp(26px,3.6vw,46px);display:flex;flex-direction:column;justify-content:center`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0FA3A3;margin-bottom:12px`)}>Featured · {featuredPost.cat}</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(24px,3vw,36px);letter-spacing:-.03em;line-height:1.12;margin:0 0 14px;font-weight:700`)}>{featuredPost.title}</h2>
      <p style={sx(`color:#5A6572;font-size:15.5px;line-height:1.6;margin:0 0 18px`)}>{featuredPost.excerpt}</p>
      <div style={sx(`font-size:13px;color:#8A929C`)}>{featuredPost.date} · {featuredPost.read}</div>
      </div>
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:24px`)}>
      {(blogCats ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      {(c.active) ? (<>
      <button onClick={c.go} style={sx(`border:1px solid #131A22;background:#131A22;color:#FFFFFF;padding:10px 18px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer`)}>{c.label}</button>
      </>) : null}
      {(c.inactive) ? (<>
      <button className="hv-4174ca2d" onClick={c.go} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#4A5462;padding:10px 18px;border-radius:999px;font-size:13.5px;font-weight:600;cursor:pointer;transition:border-color .2s`)}>{c.label}</button>
      </>) : null}
      </React.Fragment>))}
      <div style={sx(`margin-left:auto;display:flex;align-items:center;gap:8px;background:#FFFFFF;border:1px solid #E4DFD6;border-radius:999px;padding:9px 16px;min-width:190px`)}>
      <span style={sx(`color:#8A929C`)}>⌕</span><input placeholder="Search articles" style={sx(`border:0;outline:0;background:transparent;font-size:13.5px;width:100%`)} />
      </div>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(268px,1fr));gap:22px`)}>
      {(blogList ?? []).map((b: any, _k: number) => (<React.Fragment key={_k}>
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
      </div>
    </>
  );
}

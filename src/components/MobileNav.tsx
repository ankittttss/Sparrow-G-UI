'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function MobileNav() {
  const v = useVals();
  const { goShop, megaNav, navOpen, navRight, toggleNav } = v;
  return (
    <>
      {(navOpen) ? (<>
      <div style={sx(`position:fixed;inset:0;z-index:80;background:#FFFFFF;padding:22px;overflow:auto`)}>
      <div style={sx(`display:flex;justify-content:space-between;align-items:center;margin-bottom:24px`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px`)}>Sparrow<span style={sx(`color:#E0A100`)}>G</span></span>
      <button onClick={toggleNav} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;width:44px;height:44px;border-radius:12px;font-size:17px;cursor:pointer`)}>✕</button>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:22px`)}>
      {(megaNav ?? []).map((m: any, _k: number) => (<React.Fragment key={_k}>
      <div>
      <button onClick={m.go} style={sx(`border:0;background:transparent;text-align:left;font-family:'Space Grotesk',sans-serif;font-size:24px;font-weight:700;padding:0 0 10px;cursor:pointer;color:#131A22`)}>{m.label}</button>
      <div style={sx(`display:flex;flex-direction:column;gap:0;border-top:1px solid #E4DFD6`)}>
      {(m.items ?? []).map((i: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={i.go} style={sx(`border:0;border-bottom:1px solid #F2EEE7;background:transparent;text-align:left;font-size:15px;font-weight:500;padding:14px 2px;cursor:pointer;color:#4A5462`)}>{i.label}</button>
      </React.Fragment>))}
      </div>
      </div>
      </React.Fragment>))}
      <div style={sx(`display:flex;flex-direction:column;gap:0;border-top:1px solid #E4DFD6`)}>
      {(navRight ?? []).map((l: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={l.go} style={sx(`border:0;border-bottom:1px solid #F2EEE7;background:transparent;text-align:left;font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:600;padding:15px 2px;cursor:pointer;color:#131A22`)}>{l.label}</button>
      </React.Fragment>))}
      </div>
      </div>
      <button onClick={goShop} style={sx(`margin-top:26px;width:100%;border:0;background:#FFC53D;color:#131A22;padding:18px;border-radius:14px;font-size:16px;font-weight:700;cursor:pointer`)}>Explore STEM Kits</button>
      </div>
      </>) : null}
    </>
  );
}

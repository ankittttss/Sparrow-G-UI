'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Header() {
  const v = useVals();
  const { cartCount, closeMenu, goAccount, goHome, megaNav, navRight, openSearch,
    toggleCart, toggleNav } = v;
  return (
    <>
      <header style={sx(`position:sticky;top:0;z-index:60;background:rgba(255,255,255,.92);backdrop-filter:blur(16px);border-bottom:1px solid #E4DFD6`)}>
      <div style={sx(`background:#131A22;color:#F4F1EC;font-size:12.5px;letter-spacing:.03em;text-align:center;padding:9px 16px;font-weight:500`)}>Free shipping across India · New STEM kits in stock</div>
      <div data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:16px 26px;display:flex;align-items:center;gap:26px`)}>
      <div onClick={goHome} style={sx(`display:flex;flex-direction:column;align-items:flex-start;gap:2px;cursor:pointer;flex:none`)}>
      <span style={sx(`display:flex;align-items:center;gap:9px`)}>
      <SafeImg src="/assets/sparrowg-mark.png" alt="" style={sx(`width:28px;height:28px;object-fit:contain`)} />
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:24px;letter-spacing:-.03em`)}>Sparrow<span style={sx(`color:#E0A100`)}>G</span></span>
      </span>
      <span data-hide-sm={true} style={sx(`font-size:9.5px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#8A929C`)}>Build · Play · Learn</span>
      </div>
      <nav data-nav-desk={true} style={sx(`display:flex;align-items:center;justify-content:center;gap:2px;flex:1`)}>
      {(megaNav ?? []).map((m: any, _k: number) => (<React.Fragment key={_k}>
      <div onMouseEnter={m.open} onMouseLeave={closeMenu} style={sx(`position:relative`)}>
      {(m.active) ? (<>
      <button onClick={m.go} style={sx(`display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#131A22;font-size:15.5px;font-weight:700;padding:9px 14px;cursor:pointer;letter-spacing:.01em;border-bottom:2px solid #131A22`)}>{m.label}<span style={sx(`font-size:10px;color:#131A22`)}>▾</span></button>
      </>) : null}
      {(m.inactive) ? (<>
      <button className="hv-06d8f0d3" onClick={m.go} style={sx(`display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#2A323C;font-size:15.5px;font-weight:600;padding:9px 14px;cursor:pointer;letter-spacing:.01em;border-bottom:2px solid transparent;transition:color .18s,border-color .18s`)}>{m.label}<span style={sx(`font-size:10px;color:#5A6572`)}>▾</span></button>
      </>) : null}
      {(m.showMenu) ? (<>
      <div style={sx(`position:absolute;top:100%;left:0;padding-top:10px;z-index:70`)}>
      <div style={sx(`min-width:232px;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:16px;padding:8px;box-shadow:0 20px 44px rgba(19,26,34,.13)`)}>
      {(m.items ?? []).map((i: any, _k: number) => (<React.Fragment key={_k}>
      <button className="hv-c1fcff06" onClick={i.go} style={sx(`display:block;width:100%;text-align:left;border:0;background:transparent;padding:11px 13px;border-radius:11px;cursor:pointer;transition:background .16s`)}>
      <span style={sx(`display:block;font-size:14px;font-weight:600;color:#131A22`)}>{i.label}</span>
      <span style={sx(`display:block;font-size:12px;color:#8A929C;margin-top:2px`)}>{i.note}</span>
      </button>
      </React.Fragment>))}
      </div>
      </div>
      </>) : null}
      </div>
      </React.Fragment>))}
      {(navRight ?? []).map((m: any, _k: number) => (<React.Fragment key={_k}>
      <div onMouseEnter={m.open} onMouseLeave={closeMenu} style={sx(`position:relative`)}>
      {(m.active) ? (<>
      <button onClick={m.go} style={sx(`display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#131A22;font-size:15.5px;font-weight:700;padding:9px 14px;cursor:pointer;letter-spacing:.01em;border-bottom:2px solid #131A22`)}>{m.label}<span style={sx(`font-size:10px;color:#131A22`)}>▾</span></button>
      </>) : null}
      {(m.inactive) ? (<>
      <button className="hv-06d8f0d3" onClick={m.go} style={sx(`display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#2A323C;font-size:15.5px;font-weight:600;padding:9px 14px;cursor:pointer;letter-spacing:.01em;border-bottom:2px solid transparent;transition:color .18s,border-color .18s`)}>{m.label}<span style={sx(`font-size:10px;color:#5A6572`)}>▾</span></button>
      </>) : null}
      {(m.showMenu) ? (<>
      <div style={sx(`position:absolute;top:100%;right:0;padding-top:10px;z-index:70`)}>
      <div style={sx(`min-width:232px;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:16px;padding:8px;box-shadow:0 20px 44px rgba(19,26,34,.13)`)}>
      {(m.items ?? []).map((i: any, _k: number) => (<React.Fragment key={_k}>
      <button className="hv-c1fcff06" onClick={i.go} style={sx(`display:block;width:100%;text-align:left;border:0;background:transparent;padding:11px 13px;border-radius:11px;cursor:pointer;transition:background .16s`)}>
      <span style={sx(`display:block;font-size:14px;font-weight:600;color:#131A22`)}>{i.label}</span>
      <span style={sx(`display:block;font-size:12px;color:#8A929C;margin-top:2px`)}>{i.note}</span>
      </button>
      </React.Fragment>))}
      </div>
      </div>
      </>) : null}
      </div>
      </React.Fragment>))}
      </nav>
      <div data-nav-mob={true} onClick={toggleNav} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;width:40px;height:40px;flex:none;border-radius:12px;cursor:pointer;align-items:center;justify-content:center;font-size:16px`)}>☰</div>
      <div style={sx(`display:flex;align-items:center;gap:8px;margin-left:auto`)}>
      <button className="hv-4174ca2d" onClick={openSearch} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;width:38px;height:38px;border-radius:999px;cursor:pointer;color:#5A6572;display:grid;place-items:center;transition:border-color .18s`)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></svg>
      </button>
      <button className="hv-4174ca2d" onClick={goAccount} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;width:38px;height:38px;border-radius:999px;cursor:pointer;color:#5A6572;display:grid;place-items:center;transition:border-color .18s`)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8.5" r="3.6" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></svg>
      </button>
      <button className="hv-1de5f70e" onClick={toggleCart} style={sx(`position:relative;border:0;background:#131A22;color:#FFFFFF;width:38px;height:38px;border-radius:999px;cursor:pointer;display:grid;place-items:center;transition:transform .18s`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
      <span style={sx(`position:absolute;top:-3px;right:-3px;background:#FFC53D;color:#131A22;min-width:18px;height:18px;border-radius:999px;display:grid;place-items:center;font-size:10.5px;font-weight:700;padding:0 4px;border:2px solid #FFFFFF`)}>{cartCount}</span>
      </button>
      </div>
      </div>
      </header>
    </>
  );
}

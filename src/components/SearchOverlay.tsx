'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function SearchOverlay() {
  const v = useVals();
  const { closeSearch, hasSuggestions, noSuggestions, onSearchInput, onSearchKey, qDraft,
    searchOpen, submitSearch, suggestions } = v;
  return (
    <>
      {(searchOpen) ? (<>
      <div style={sx(`position:fixed;inset:0;z-index:95`)}>
      <div onClick={closeSearch} style={sx(`position:absolute;inset:0;background:rgba(19,26,34,.35)`)}></div>
      <div style={sx(`position:relative;background:#FFFFFF;border-bottom:1px solid #E4DFD6;padding:22px 26px 26px`)}>
      <div style={sx(`max-width:680px;margin:0 auto`)}>
      <div style={sx(`display:flex;align-items:center;gap:12px;border:1px solid #D6D0C4;border-radius:14px;padding:14px 16px;background:#FFFFFF`)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8A929C" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.6-3.6" /></svg>
      <input autoFocus={true} value={qDraft} onChange={onSearchInput} onKeyDown={onSearchKey} placeholder="Search kits — excavator, tractor, crane…" style={sx(`border:0;outline:0;background:transparent;font-size:16px;width:100%;color:#131A22`)} />
      <button onClick={submitSearch} style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:10px 18px;border-radius:10px;font-size:13.5px;font-weight:700;cursor:pointer;white-space:nowrap`)}>Search</button>
      <button onClick={closeSearch} style={sx(`border:0;background:#F4F1EC;width:34px;height:34px;border-radius:10px;cursor:pointer;color:#5A6572;flex:none`)}>✕</button>
      </div>
      {(hasSuggestions) ? (<>
      <div style={sx(`margin-top:14px;display:flex;flex-direction:column;gap:2px`)}>
      {(suggestions ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <button className="hv-c1fcff06" onClick={s.go} style={sx(`display:flex;align-items:center;gap:14px;width:100%;text-align:left;border:0;background:transparent;padding:10px;border-radius:12px;cursor:pointer;transition:background .16s`)}>
      <SafeImg alt={s.name} style={sx(`width:46px;height:46px;border-radius:10px;object-fit:cover;background:#F4F1EC`)} src={s.img} />
      <span style={sx(`flex:1;min-width:0`)}>
      <span style={sx(`display:block;font-size:14.5px;font-weight:600;color:#131A22`)}>{s.name}</span>
      <span style={sx(`display:block;font-size:12.5px;color:#8A929C;margin-top:2px`)}>{s.category}</span>
      </span>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:14.5px`)}>{s.priceLabel}</span>
      </button>
      </React.Fragment>))}
      </div>
      </>) : null}
      {(noSuggestions) ? (<>
      <div style={sx(`margin-top:18px;text-align:center;color:#8A929C;font-size:14px;padding:14px 0`)}>No kits match that search.</div>
      </>) : null}
      </div>
      </div>
      </div>
      </>) : null}
    </>
  );
}

'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Footer() {
  const v = useVals();
  const { footerCols } = v;
  return (
    <>
      <footer data-pad={true} style={sx(`background:#F4F1EC;color:#131A22;border-top:1px solid #E4DFD6;padding:58px 26px 30px`)}>
      <div style={sx(`max-width:1280px;margin:0 auto`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:36px;padding-bottom:40px;border-bottom:1px solid #E4DFD6`)}>
      <div style={sx(`min-width:210px`)}>
      <div style={sx(`display:flex;align-items:center;gap:10px;margin-bottom:14px`)}>
      <SafeImg src="/assets/sparrowg-mark.png" alt="" style={sx(`width:26px;height:26px;object-fit:contain`)} />
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;letter-spacing:-.02em`)}>Sparrow<span style={sx(`color:#E0A100`)}>G</span></span>
      </div>
      <p style={sx(`color:#5A6572;font-size:14.5px;line-height:1.6;margin:0 0 18px;max-width:270px`)}>Where curiosity becomes creation. Hands-on STEM kits that turn ideas into real-world skills.</p>
      <div style={sx(`display:flex;align-items:center;background:#FFFFFF;border:1px solid #E4DFD6;border-radius:11px;padding:4px 4px 4px 14px;max-width:280px`)}>
      <input placeholder="Email for new kit drops" style={sx(`border:0;outline:0;background:transparent;color:#131A22;font-size:13.5px;width:100%`)} />
      <button style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:9px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap`)}>Join</button>
      </div>
      </div>
      {(footerCols ?? []).map((f: any, _k: number) => (<React.Fragment key={_k}>
      <div>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8A929C;margin-bottom:15px`)}>{f.title}</div>
      <div style={sx(`display:flex;flex-direction:column;gap:11px`)}>
      {(f.links ?? []).map((l: any, _k: number) => (<React.Fragment key={_k}>
      <span className="hv-4f9eb692" onClick={l.go} style={sx(`color:#4A5462;font-size:14px;cursor:pointer;transition:color .18s`)}>{l.label}</span>
      </React.Fragment>))}
      </div>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:22px;color:#8A929C;font-size:12.5px`)}>
      <span>© 2026 SparrowG. All rights reserved.</span>
      <span>T-Works, RaiDurg, Hyderabad 500081 · support@sparrowg.com</span>
      </div>
      </div>
      </footer>
    </>
  );
}

'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function Contact() {
  const v = useVals();
  const { about, contactInfo, enquiryTypes } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:46px 26px 90px`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:38px;align-items:start`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>Contact</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.1vw,50px);letter-spacing:-.035em;line-height:1.04;margin:0 0 16px;font-weight:700`)}>Tell us what you're building</h1>
      <p style={sx(`color:#5A6572;font-size:16px;line-height:1.6;margin:0 0 28px;max-width:390px`)}>Parents, schools and companies all reach us here. We reply within one working day.</p>
      <div style={sx(`display:flex;flex-direction:column;gap:12px`)}>
      {(contactInfo ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:18px;padding:20px`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A929C;margin-bottom:6px`)}>{c.label}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16.5px;letter-spacing:-.01em`)}>{c.value}</div>
      <div style={sx(`color:#8A929C;font-size:13px;margin-top:4px`)}>{c.note}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:26px;padding:clamp(24px,3vw,36px)`)}>
      <div style={sx(`display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px`)}>
      {(enquiryTypes ?? []).map((e: any, _k: number) => (<React.Fragment key={_k}>
      {(e.active) ? (<>
      <button onClick={e.go} style={sx(`border:1px solid #131A22;background:#131A22;color:#FFFFFF;padding:9px 16px;border-radius:999px;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:7px`)}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={e.d} /></svg>{e.label}</button>
      </>) : null}
      {(e.inactive) ? (<>
      <button className="hv-b582bf2f" onClick={e.go} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;color:#4A5462;padding:9px 16px;border-radius:999px;font-size:13px;font-weight:600;cursor:pointer;transition:border-color .2s;display:inline-flex;align-items:center;gap:7px`)}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A6572" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={e.d} /></svg>{e.label}</button>
      </>) : null}
      </React.Fragment>))}
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin-bottom:14px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Name</div><input placeholder="Your name" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Email</div><input placeholder="you@email.com" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:14px;margin-bottom:14px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Phone</div><input placeholder="+91" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Organisation</div><input placeholder="Optional" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      </div>
      <div style={sx(`margin-bottom:18px`)}><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>How can we help?</div><textarea rows={5} placeholder="Tell us a little about what you need" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4;resize:vertical`)}></textarea></div>
      <button className="hv-1de5f70e" style={sx(`width:100%;border:0;background:#FFC53D;color:#131A22;padding:16px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Send enquiry</button>
      <div style={sx(`text-align:center;color:#8A929C;font-size:12.5px;margin-top:12px`)}>Or WhatsApp us on +91 94930 17356</div>
      </div>
      </div>
      </div>
    </>
  );
}

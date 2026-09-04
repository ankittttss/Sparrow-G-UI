'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function Solutions() {
  const v = useVals();
  const { goContact, outcomes, solutions, steps } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:46px 26px 90px`)}>
      <div style={sx(`max-width:600px;margin-bottom:38px`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:10px`)}>STEM Solutions</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(32px,4.3vw,54px);letter-spacing:-.035em;line-height:1.03;margin:0 0 14px;font-weight:700`)}>The SparrowG learning framework</h1>
      <p style={sx(`color:#5A6572;font-size:16.5px;line-height:1.6;margin:0`)}>Kits, workshops, school programs and corporate initiatives all run on the same four-stage loop. It is what turns a toy into an education.</p>
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-bottom:48px`)}>
      {(steps ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:22px;padding:28px`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:50px;font-weight:700;color:#EFEBE3;line-height:1;letter-spacing:-.04em`)}>{s.num}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;margin:12px 0 8px;letter-spacing:-.015em`)}>{s.title}</div>
      <div style={sx(`color:#5A6572;font-size:14.5px;line-height:1.55`)}>{s.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-bottom:48px`)}>
      {(solutions ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-6e577fca" style={sx(`background:#FFFFFF;color:#131A22;border:1px solid #EFEBE3;border-radius:24px;padding:30px;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#B4531F;margin-bottom:12px`)}>{s.kicker}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-bottom:10px`)}>{s.title}</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.55;margin-bottom:18px;flex:1`)}>{s.text}</div>
      <button className="hv-1de5f70e" onClick={s.go} style={sx(`border:1px solid #E4DFD6;background:#FFC53D;color:#131A22;padding:11px 18px;border-radius:11px;font-size:13.5px;font-weight:700;cursor:pointer;align-self:flex-start;transition:transform .2s`)}>{s.cta} →</button>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:28px;padding:clamp(28px,4vw,52px);display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:30px;align-items:center`)}>
      <div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(24px,3vw,36px);letter-spacing:-.03em;line-height:1.06;margin:0 0 12px;font-weight:700`)}>Outcomes we report back</h2>
      <p style={sx(`color:#5A6572;font-size:15px;line-height:1.6;margin:0 0 20px`)}>Every school and corporate program ends with a student-level skills report and a showcase build day.</p>
      <button className="hv-76097081" onClick={goContact} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:15px 24px;border-radius:12px;font-size:15px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Talk to SparrowG</button>
      </div>
      {(outcomes ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:42px;font-weight:700;letter-spacing:-.035em;color:#B4531F;line-height:1`)}>{o.n}</div>
      <div style={sx(`color:#5A6572;font-size:14px;margin-top:8px;line-height:1.5`)}>{o.label}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
    </>
  );
}

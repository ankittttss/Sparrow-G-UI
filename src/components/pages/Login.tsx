'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function Login() {
  const v = useVals();
  const { authBack, authNote, authPhone, authStepOtp, authStepPhone, authTitle, goShop,
    loginDemo, otpBoxes, sendOtp, setPhone, verifyOtp } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:56px 26px 90px`)}>
      <div style={sx(`max-width:440px;margin:0 auto;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:26px;padding:clamp(26px,3.4vw,40px)`)}>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:30px;letter-spacing:-.03em;margin:0 0 8px;font-weight:700`)}>{authTitle}</h1>
      <p style={sx(`color:#5A6572;font-size:14.5px;line-height:1.6;margin:0 0 24px`)}>{authNote}</p>
      {(authStepPhone) ? (<>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Mobile number</div>
      <div style={sx(`display:flex;align-items:center;border:1px solid #E4DFD6;border-radius:12px;background:#F9F7F4;overflow:hidden;margin-bottom:16px`)}>
      <span style={sx(`padding:14px 12px 14px 15px;font-size:14.5px;color:#5A6572;border-right:1px solid #E4DFD6`)}>+91</span>
      <input value={authPhone} onChange={setPhone} placeholder="98765 43210" style={sx(`border:0;outline:0;background:transparent;font-size:15px;padding:14px;width:100%`)} />
      </div>
      <button onClick={sendOtp} style={sx(`width:100%;border:0;background:#FFC53D;color:#131A22;padding:15px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer`)}>Send OTP</button>
      <div style={sx(`display:flex;align-items:center;gap:12px;margin:20px 0`)}>
      <span style={sx(`flex:1;height:1px;background:#EFEBE3`)}></span><span style={sx(`font-size:12px;color:#A6ADB6;font-weight:600`)}>OR</span><span style={sx(`flex:1;height:1px;background:#EFEBE3`)}></span>
      </div>
      <button className="hv-c1fcff06" onClick={loginDemo} style={sx(`width:100%;border:1px solid #E4DFD6;background:#FFFFFF;padding:14px;border-radius:13px;font-size:14.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:background .2s`)}>Continue with Google</button>
      <button onClick={goShop} style={sx(`width:100%;margin-top:10px;border:0;background:transparent;color:#8A929C;padding:12px;font-size:13.5px;font-weight:600;cursor:pointer`)}>Continue as guest</button>
      </div>
      </>) : null}
      {(authStepOtp) ? (<>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Enter the 4-digit OTP</div>
      <div style={sx(`display:flex;gap:10px;margin-bottom:8px`)}>
      {(otpBoxes ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`flex:1;height:56px;border:1px solid #E4DFD6;border-radius:12px;background:#F9F7F4;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px`)}>{o.d}</div>
      </React.Fragment>))}
      </div>
      <div style={sx(`color:#8A929C;font-size:12.5px;margin-bottom:18px`)}>Demo OTP prefilled · resend in 0:28</div>
      <button onClick={verifyOtp} style={sx(`width:100%;border:0;background:#FFC53D;color:#131A22;padding:15px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer`)}>Verify & continue</button>
      <button onClick={authBack} style={sx(`width:100%;margin-top:10px;border:0;background:transparent;color:#8A929C;padding:10px;font-size:13.5px;font-weight:600;cursor:pointer`)}>← Change number</button>
      </div>
      </>) : null}
      </div>
      </div>
    </>
  );
}

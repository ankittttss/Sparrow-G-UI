'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function PayProcessing() {
  const v = useVals();
  const { orderTotal, payMethodLabel, payProcessing } = v;
  return (
    <>
      {(payProcessing) ? (<>
      <div style={sx(`position:fixed;inset:0;z-index:120;background:rgba(19,26,34,.55);display:grid;place-items:center;padding:24px`)}>
      <div style={sx(`background:#FFFFFF;border-radius:24px;padding:34px 32px;max-width:380px;width:100%;text-align:center;box-shadow:0 30px 70px rgba(19,26,34,.3)`)}>
      <div style={sx(`width:54px;height:54px;border-radius:999px;border:3px solid #F2EEE7;border-top-color:#FFC53D;margin:0 auto 20px;animation-name:sgSpin;animation-duration:.9s;animation-timing-function:linear;animation-iteration-count:infinite`)}></div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px;letter-spacing:-.02em;margin-bottom:8px`)}>Completing your payment</div>
      <div style={sx(`color:#5A6572;font-size:14px;line-height:1.55;margin-bottom:18px`)}>Razorpay is confirming {orderTotal} via {payMethodLabel}. Do not close this window.</div>
      <div style={sx(`height:5px;background:#F2EEE7;border-radius:999px;overflow:hidden`)}>
      <div style={sx(`height:100%;background:#FFC53D;animation-name:sgReelBar;animation-duration:2.2s;animation-timing-function:linear;animation-iteration-count:1;animation-fill-mode:forwards`)}></div>
      </div>
      </div>
      </div>
      </>) : null}
    </>
  );
}

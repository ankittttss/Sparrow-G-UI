'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';

export default function Success() {
  const v = useVals();
  const { awb, etaDays, goAccount, goShop, orderId, paidLabel, payMethodLabel, tracking } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:56px 26px 90px`)}>
      <div style={sx(`max-width:660px;margin:0 auto;text-align:center`)}>
      <div style={sx(`width:72px;height:72px;border-radius:999px;background:#FFC53D;display:grid;place-items:center;margin:0 auto 22px;font-size:30px`)}>✓</div>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.6vw,44px);letter-spacing:-.03em;margin:0 0 12px;font-weight:700`)}>Payment successful</h1>
      <p style={sx(`color:#5A6572;font-size:16px;line-height:1.6;margin:0 0 30px`)}>Order {orderId} confirmed · {paidLabel} paid via {payMethodLabel}. A confirmation is on its way to your email and WhatsApp.</p>
      </div>
      <div style={sx(`max-width:660px;margin:0 auto;background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:clamp(24px,3vw,34px)`)}>
      <div style={sx(`display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:22px`)}>
      <div><div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A929C`)}>Shiprocket AWB</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;margin-top:3px`)}>{awb}</div></div>
      <div style={sx(`text-align:right`)}><div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8A929C`)}>Expected delivery</div><div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:17px;margin-top:3px`)}>{etaDays} days</div></div>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:0`)}>
      {(tracking ?? []).map((t: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:14px;align-items:flex-start`)}>
      <div style={sx(`display:flex;flex-direction:column;align-items:center;flex:none`)}>
      <span style={sx(`width:14px;height:14px;border-radius:999px;background:${t.dot};border:2px solid #FFFFFF;box-shadow:0 0 0 1.5px ${t.dot}`)}></span>
      <span style={sx(`width:2px;flex:1;min-height:34px;background:${t.line}`)}></span>
      </div>
      <div style={sx(`padding-bottom:18px`)}>
      <div style={sx(`font-weight:700;font-size:14.5px;color:${t.fg}`)}>{t.label}</div>
      <div style={sx(`color:#8A929C;font-size:12.5px;margin-top:2px`)}>{t.note}</div>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;margin-top:8px`)}>
      <button onClick={goAccount} style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:14px 24px;border-radius:12px;font-size:14.5px;font-weight:700;cursor:pointer`)}>Track this order</button>
      <button onClick={goShop} style={sx(`border:1px solid #E4DFD6;background:transparent;padding:14px 24px;border-radius:12px;font-size:14.5px;font-weight:600;cursor:pointer`)}>Continue shopping</button>
      </div>
      </div>
      </div>
    </>
  );
}

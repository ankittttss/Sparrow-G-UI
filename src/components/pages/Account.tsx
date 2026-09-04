'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Account() {
  const v = useVals();
  const { logout, orders, userInitials, userName, userPhone } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:46px 26px 90px`)}>
      <div style={sx(`display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:30px`)}>
      <div style={sx(`width:56px;height:56px;border-radius:999px;background:#131A22;color:#FFC53D;display:grid;place-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:19px`)}>{userInitials}</div>
      <div style={sx(`flex:1`)}>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(24px,2.8vw,34px);letter-spacing:-.03em;margin:0;font-weight:700`)}>{userName}</h1>
      <div style={sx(`color:#8A929C;font-size:13.5px;margin-top:3px`)}>{userPhone}</div>
      </div>
      <button onClick={logout} style={sx(`border:1px solid #E4DFD6;background:#FFFFFF;padding:11px 18px;border-radius:11px;font-size:13.5px;font-weight:600;cursor:pointer`)}>Sign out</button>
      </div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:20px;letter-spacing:-.02em;margin:0 0 16px;font-weight:700`)}>Your orders</h2>
      <div style={sx(`display:flex;flex-direction:column;gap:14px`)}>
      {(orders ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:20px;padding:20px;display:flex;gap:16px;align-items:center;flex-wrap:wrap`)}>
      <SafeImg alt={o.name} style={sx(`width:74px;height:74px;border-radius:14px;object-fit:cover;background:#F4F1EC;flex:none`)} src={o.img} />
      <div style={sx(`flex:1;min-width:180px`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16.5px;letter-spacing:-.015em`)}>{o.name}</div>
      <div style={sx(`color:#8A929C;font-size:12.5px;margin-top:3px`)}>{o.id} · {o.date} · AWB {o.awb}</div>
      </div>
      <span style={sx(`background:${o.statusBg};color:${o.statusFg};font-size:12px;font-weight:700;padding:7px 13px;border-radius:999px`)}>{o.status}</span>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px`)}>{o.total}</div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
    </>
  );
}

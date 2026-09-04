'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function Checkout() {
  const v = useVals();
  const { cartEmpty, cartItems, cartTotal, coBack, coIsAddress, coIsPayment, coIsShipping,
    coNext, coSteps, detectLocation, etaDays, gstLabel, orderTotal, payNow, payOptions,
    pincode, savedAddresses, setPincode, shipLabel, shipOptions, trust } = v;
  return (
    <>
      <div className="sgrise" data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:42px 26px 90px`)}>
      <div style={sx(`display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:28px`)}>
      <h1 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(26px,3.2vw,38px);letter-spacing:-.03em;margin:0;font-weight:700`)}>Checkout</h1>
      <span style={sx(`font-size:13px;color:#8A929C;font-weight:600`)}>Secure · 256-bit encrypted</span>
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px`)}>
      {(coSteps ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;align-items:center;gap:10px;padding:11px 18px;border-radius:999px;background:${c.bg};border:1px solid ${c.border}`)}>
      <span style={sx(`width:22px;height:22px;border-radius:999px;background:${c.dotBg};color:${c.dotFg};font-size:11.5px;font-weight:700;display:grid;place-items:center`)}>{c.n}</span>
      <span style={sx(`font-size:13.5px;font-weight:600;color:${c.fg}`)}>{c.label}</span>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;align-items:start`)}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:clamp(24px,3vw,34px)`)}>
      {(coIsAddress) ? (<>
      <div>
      <div style={sx(`display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:16px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:21px;letter-spacing:-.02em;margin:0;font-weight:700`)}>Delivery address</h2>
      <button className="hv-b582bf2f" onClick={detectLocation} style={sx(`display:flex;align-items:center;gap:8px;border:1px solid #E4DFD6;background:#FFFFFF;color:#B4531F;padding:9px 14px;border-radius:11px;font-size:12.5px;font-weight:700;cursor:pointer;transition:border-color .2s`)}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
                    Use my location
                  </button>
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px`)}>
      {(savedAddresses ?? []).map((a: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={a.pick} style={sx(`text-align:left;border:1.5px solid ${a.border};background:${a.bg};border-radius:14px;padding:12px 15px;cursor:pointer;min-width:170px;transition:border-color .2s,background .2s`)}>
      <span style={sx(`display:block;font-size:11.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#8A929C`)}>{a.tag}</span>
      <span style={sx(`display:block;font-size:13.5px;font-weight:600;margin-top:4px;color:#131A22`)}>{a.line}</span>
      </button>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-bottom:12px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Full name</div><input placeholder="Aarav Mehta" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Mobile</div><input placeholder="+91 98765 43210" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      </div>
      <div style={sx(`margin-bottom:12px`)}><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Flat / house / street</div><input placeholder="12, Jubilee Hills Road 4" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;margin-bottom:12px`)}>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>Pincode</div><input value={pincode} onChange={setPincode} placeholder="500081" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>City</div><input placeholder="Hyderabad" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      <div><div style={sx(`font-size:12.5px;font-weight:600;color:#5A6572;margin-bottom:7px`)}>State</div><input placeholder="Telangana" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:13px 15px;font-size:14.5px;outline:0;background:#F9F7F4`)} /></div>
      </div>
      <div style={sx(`display:flex;align-items:center;gap:9px;background:#F1F7F1;border:1px solid #DCEBDC;border-radius:12px;padding:12px 14px;font-size:13px;color:#2F6B33;margin-bottom:20px`)}>
      <span>✓</span><span>Serviceable by Shiprocket · delivery in {etaDays} days to {pincode}</span>
      </div>
      <button onClick={coNext} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:15px 26px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer`)}>Continue to shipping →</button>
      </div>
      </>) : null}
      {(coIsShipping) ? (<>
      <div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:21px;letter-spacing:-.02em;margin:0 0 6px;font-weight:700`)}>Shipping method</h2>
      <p style={sx(`color:#8A929C;font-size:13.5px;margin:0 0 18px`)}>Live rates from Shiprocket for pincode {pincode}</p>
      <div style={sx(`display:flex;flex-direction:column;gap:10px;margin-bottom:20px`)}>
      {(shipOptions ?? []).map((o: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={o.pick} style={sx(`display:flex;align-items:center;gap:14px;text-align:left;width:100%;border:1.5px solid ${o.border};background:${o.bg};border-radius:16px;padding:16px 18px;cursor:pointer;transition:border-color .2s,background .2s`)}>
      <span style={sx(`width:18px;height:18px;border-radius:999px;border:1.5px solid ${o.dot};background:${o.dotFill};flex:none`)}></span>
      <span style={sx(`flex:1`)}>
      <span style={sx(`display:block;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15.5px`)}>{o.name}</span>
      <span style={sx(`display:block;color:#8A929C;font-size:12.5px;margin-top:3px`)}>{o.courier} · {o.eta}</span>
      </span>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px`)}>{o.priceLabel}</span>
      </button>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap`)}>
      <button onClick={coNext} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:15px 26px;border-radius:13px;font-size:15px;font-weight:700;cursor:pointer`)}>Continue to payment →</button>
      <button onClick={coBack} style={sx(`border:1px solid #E4DFD6;background:transparent;padding:15px 22px;border-radius:13px;font-size:14.5px;font-weight:600;cursor:pointer`)}>Back</button>
      </div>
      </div>
      </>) : null}
      {(coIsPayment) ? (<>
      <div>
      <div style={sx(`display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:18px`)}>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:21px;letter-spacing:-.02em;margin:0;font-weight:700`)}>Payment</h2>
      <span style={sx(`display:flex;align-items:center;gap:7px;font-size:12px;font-weight:700;color:#5A6572;background:#F4F1EC;border-radius:999px;padding:7px 13px`)}>Secured by Razorpay</span>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:10px;margin-bottom:18px`)}>
      {(payOptions ?? []).map((p: any, _k: number) => (<React.Fragment key={_k}>
      <button onClick={p.pick} style={sx(`display:flex;align-items:center;gap:14px;text-align:left;width:100%;border:1.5px solid ${p.border};background:${p.bg};border-radius:16px;padding:15px 18px;cursor:pointer;transition:border-color .2s,background .2s`)}>
      <span style={sx(`width:18px;height:18px;border-radius:999px;border:1.5px solid ${p.dot};background:${p.dotFill};flex:none`)}></span>
      <span style={sx(`flex:1`)}>
      <span style={sx(`display:block;font-weight:700;font-size:15px`)}>{p.name}</span>
      <span style={sx(`display:block;color:#8A929C;font-size:12.5px;margin-top:2px`)}>{p.note}</span>
      </span>
      <span style={sx(`font-size:12px;color:#A6ADB6;font-weight:600`)}>{p.tag}</span>
      </button>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;gap:10px;flex-wrap:wrap`)}>
      <button className="hv-1de5f70e" onClick={payNow} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:16px 28px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Pay {orderTotal}</button>
      <button onClick={coBack} style={sx(`border:1px solid #E4DFD6;background:transparent;padding:15px 22px;border-radius:13px;font-size:14.5px;font-weight:600;cursor:pointer`)}>Back</button>
      </div>
      <div style={sx(`color:#8A929C;font-size:12px;margin-top:14px`)}>By paying you agree to our terms. UPI, cards, netbanking and wallets handled by Razorpay; we never store card details.</div>
      </div>
      </>) : null}
      </div>
      <div style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;border-radius:24px;padding:clamp(22px,2.6vw,30px)`)}>
      <h3 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:17px;letter-spacing:-.015em;margin:0 0 16px;font-weight:700`)}>Order summary</h3>
      {(cartEmpty) ? (<>
      <div style={sx(`color:#8A929C;font-size:14px;line-height:1.6;margin-bottom:18px`)}>Your cart is empty.<br />Add a kit to continue.</div>
      </>) : null}
      <div style={sx(`display:flex;flex-direction:column;gap:12px;margin-bottom:18px`)}>
      {(cartItems ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:12px;align-items:center`)}>
      <SafeImg alt={c.name} style={sx(`width:56px;height:56px;border-radius:11px;object-fit:cover;background:#FFFFFF`)} src={c.img} />
      <div style={sx(`flex:1;min-width:0`)}><div style={sx(`font-weight:600;font-size:14px`)}>{c.name}</div><div style={sx(`color:#8A929C;font-size:12.5px`)}>Qty {c.qty}</div></div>
      <div style={sx(`font-weight:700;font-size:14px`)}>{c.priceLabel}</div>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:9px;padding-top:16px;border-top:1px solid #EFE3CC;font-size:14px`)}>
      <div style={sx(`display:flex;justify-content:space-between`)}><span style={sx(`color:#5A6572`)}>Subtotal</span><span style={sx(`font-weight:600`)}>{cartTotal}</span></div>
      <div style={sx(`display:flex;justify-content:space-between`)}><span style={sx(`color:#5A6572`)}>Shipping</span><span style={sx(`font-weight:600`)}>{shipLabel}</span></div>
      <div style={sx(`display:flex;justify-content:space-between`)}><span style={sx(`color:#5A6572`)}>GST (18%, incl.)</span><span style={sx(`font-weight:600`)}>{gstLabel}</span></div>
      <div style={sx(`display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid #EFE3CC;font-size:16.5px`)}><span style={sx(`font-weight:700`)}>Total</span><span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700`)}>{orderTotal}</span></div>
      </div>
      <div style={sx(`display:flex;flex-direction:column;gap:8px;margin-top:18px`)}>
      {(trust ?? []).map((t: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:9px;align-items:flex-start;font-size:12.5px;color:#5A6572`)}><span style={sx(`color:#0FA3A3`)}>✓</span><span>{t.title}</span></div>
      </React.Fragment>))}
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

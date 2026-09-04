'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function CartDrawer() {
  const v = useVals();
  const { applyCoupon, cartCount, cartEmpty, cartGrandTotal, cartHasItems, cartItems,
    cartOpen, cartSuggestions, cartTotal, coupon, couponFg, couponMsg, couponMsgShown,
    giftNote, goCheckout, goShop, hasCartSuggestions, savedLabel, savedShown, setCoupon,
    setGiftNote, shipMsg, shipProgress, toggleCart, toggleWrap, wrapBg, wrapBorder, wrapDot,
    wrapFill, wrapOn, wrapTick } = v;
  return (
    <>
      {(cartOpen) ? (<>
      <div style={sx(`position:fixed;inset:0;z-index:90;display:flex;justify-content:flex-end`)}>
      <div onClick={toggleCart} style={sx(`position:absolute;inset:0;background:rgba(19,26,34,.42)`)}></div>
      <div style={sx(`position:relative;width:428px;max-width:94%;background:#FFFFFF;height:100%;display:flex;flex-direction:column;box-shadow:-24px 0 60px rgba(19,26,34,.2)`)}>
      <div style={sx(`padding:18px 22px;border-bottom:1px solid #EFEBE3;display:flex;justify-content:space-between;align-items:center`)}>
      <span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px`)}>Your cart <span style={sx(`color:#8A929C;font-weight:600;font-size:14px`)}>({cartCount})</span></span>
      <button onClick={toggleCart} style={sx(`border:0;background:#F4F1EC;width:34px;height:34px;border-radius:10px;cursor:pointer`)}>✕</button>
      </div>
      <div style={sx(`padding:14px 22px;background:#FBF4E7;border-bottom:1px solid #EFE3CC`)}>
      <div style={sx(`display:flex;align-items:center;gap:9px;font-size:12.5px;font-weight:600;color:#8A6100;margin-bottom:9px`)}>
      <span>🚚</span><span>{shipMsg}</span>
      </div>
      <div style={sx(`height:6px;background:#F0E6D2;border-radius:999px;overflow:hidden`)}>
      <div style={sx(`height:100%;background:#FFC53D;border-radius:999px;transition:width .4s;width:${shipProgress}`)}></div>
      </div>
      </div>
      <div style={sx(`flex:1;overflow:auto;padding:16px 22px;display:flex;flex-direction:column;gap:16px`)}>
      {(cartEmpty) ? (<>
      <div style={sx(`text-align:center;padding:44px 0`)}>
      <div style={sx(`color:#8A929C;font-size:14.5px;line-height:1.6;margin-bottom:18px`)}>Nothing here yet.<br />Add a kit to get started.</div>
      <button onClick={goShop} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:13px 22px;border-radius:12px;font-size:14px;font-weight:700;cursor:pointer`)}>Browse kits</button>
      </div>
      </>) : null}
      {(cartItems ?? []).map((c: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`display:flex;gap:13px;align-items:flex-start`)}>
      <SafeImg alt={c.name} style={sx(`width:74px;height:74px;object-fit:cover;border-radius:12px;background:#F4F1EC;flex:none`)} src={c.img} />
      <div style={sx(`flex:1;min-width:0`)}>
      <div style={sx(`display:flex;gap:10px;align-items:flex-start`)}>
      <div style={sx(`flex:1;min-width:0`)}>
      <div style={sx(`font-weight:600;font-size:14.5px;line-height:1.35`)}>{c.name}</div>
      <div style={sx(`color:#8A929C;font-size:12px;margin-top:3px`)}>{c.meta}</div>
      </div>
      <button onClick={c.remove} style={sx(`border:0;background:transparent;color:#A6ADB6;font-size:13px;cursor:pointer;padding:2px 4px`)}>✕</button>
      </div>
      <div style={sx(`display:flex;align-items:center;gap:12px;margin-top:10px`)}>
      <div style={sx(`display:flex;align-items:center;border:1px solid #E4DFD6;border-radius:10px;overflow:hidden`)}>
      <button onClick={c.dec} style={sx(`border:0;background:#FFFFFF;width:32px;height:32px;font-size:15px;cursor:pointer;color:#5A6572`)}>−</button>
      <span style={sx(`width:30px;text-align:center;font-weight:700;font-size:13.5px`)}>{c.qty}</span>
      <button onClick={c.inc} style={sx(`border:0;background:#FFFFFF;width:32px;height:32px;font-size:15px;cursor:pointer;color:#5A6572`)}>+</button>
      </div>
      <span style={sx(`margin-left:auto;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15px`)}>{c.priceLabel}</span>
      </div>
      <button onClick={c.giftToggle} style={sx(`border:0;background:transparent;color:${c.giftFg};font-size:12px;font-weight:600;cursor:pointer;padding:8px 0 0`)}>{c.giftLabel}</button>
      </div>
      </div>
      </React.Fragment>))}
      {(hasCartSuggestions) ? (<>
      <div style={sx(`border-top:1px solid #EFEBE3;padding-top:16px`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:14.5px;margin-bottom:4px`)}>Often bought together</div>
      <div style={sx(`color:#8A929C;font-size:12px;margin-bottom:12px`)}>Parents who bought this also added</div>
      <div style={sx(`display:flex;flex-direction:column;gap:10px`)}>
      {(cartSuggestions ?? []).map((sg: any, _k: number) => (<React.Fragment key={_k}>
      <div className="hv-500ffa86" style={sx(`display:flex;gap:12px;align-items:center;border:1px solid #EFEBE3;border-radius:14px;padding:10px;transition:border-color .2s`)}>
      <SafeImg alt={sg.name} style={sx(`width:48px;height:48px;object-fit:cover;border-radius:10px;background:#F4F1EC;flex:none`)} src={sg.img} />
      <div style={sx(`flex:1;min-width:0`)}>
      <div style={sx(`font-weight:600;font-size:13.5px;line-height:1.3`)}>{sg.name}</div>
      <div style={sx(`color:#8A929C;font-size:11.5px;margin-top:2px`)}>{sg.reason}</div>
      </div>
      <div style={sx(`text-align:right;flex:none`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13.5px`)}>{sg.priceLabel}</div>
      <button onClick={sg.add} style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:6px 12px;border-radius:8px;font-size:11.5px;font-weight:700;cursor:pointer;margin-top:5px`)}>Add</button>
      </div>
      </div>
      </React.Fragment>))}
      </div>
      </div>
      </>) : null}
      {(cartHasItems) ? (<>
      <div style={sx(`border-top:1px solid #EFEBE3;padding-top:16px;display:flex;flex-direction:column;gap:12px`)}>
      <button onClick={toggleWrap} style={sx(`display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:1px solid ${wrapBorder};background:${wrapBg};border-radius:14px;padding:13px 15px;cursor:pointer;transition:border-color .2s,background .2s`)}>
      <span style={sx(`width:18px;height:18px;border-radius:5px;border:1.5px solid ${wrapDot};background:${wrapFill};color:#131A22;font-size:11px;display:grid;place-items:center;flex:none`)}>{wrapTick}</span>
      <span style={sx(`flex:1`)}><span style={sx(`display:block;font-size:13.5px;font-weight:600`)}>Gift wrap this order</span><span style={sx(`display:block;color:#8A929C;font-size:11.5px;margin-top:2px`)}>Kraft paper, ribbon and a handwritten note</span></span>
      <span style={sx(`font-weight:700;font-size:13.5px`)}>+₹149</span>
      </button>
      {(wrapOn) ? (<>
      <input value={giftNote} onChange={setGiftNote} placeholder="Gift note (optional)" style={sx(`width:100%;border:1px solid #E4DFD6;border-radius:12px;padding:12px 14px;font-size:13.5px;outline:0;background:#F9F7F4`)} />
      </>) : null}
      <div style={sx(`display:flex;gap:8px`)}>
      <input value={coupon} onChange={setCoupon} placeholder="Coupon code" style={sx(`flex:1;border:1px solid #E4DFD6;border-radius:12px;padding:12px 14px;font-size:13.5px;outline:0;background:#F9F7F4;text-transform:uppercase`)} />
      <button onClick={applyCoupon} style={sx(`border:1px solid #131A22;background:#FFFFFF;color:#131A22;padding:12px 16px;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer`)}>Apply</button>
      </div>
      {(couponMsgShown) ? (<>
      <div style={sx(`font-size:12.5px;font-weight:600;color:${couponFg}`)}>{couponMsg}</div>
      </>) : null}
      </div>
      </>) : null}
      </div>
      <div style={sx(`padding:18px 22px;border-top:1px solid #EFEBE3`)}>
      <div style={sx(`display:flex;flex-direction:column;gap:7px;margin-bottom:14px;font-size:13.5px`)}>
      <div style={sx(`display:flex;justify-content:space-between`)}><span style={sx(`color:#5A6572`)}>Subtotal</span><span style={sx(`font-weight:600`)}>{cartTotal}</span></div>
      {(savedShown) ? (<>
      <div style={sx(`display:flex;justify-content:space-between;color:#2F6B33`)}><span>You save</span><span style={sx(`font-weight:700`)}>−{savedLabel}</span></div>
      </>) : null}
      <div style={sx(`display:flex;justify-content:space-between`)}><span style={sx(`color:#5A6572`)}>Shipping</span><span style={sx(`font-weight:600;color:#2F6B33`)}>Free</span></div>
      <div style={sx(`display:flex;justify-content:space-between;padding-top:9px;border-top:1px solid #EFEBE3;font-size:16.5px`)}><span style={sx(`font-weight:700`)}>Total</span><span style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700`)}>{cartGrandTotal}</span></div>
      </div>
      <button className="hv-1de5f70e" onClick={goCheckout} style={sx(`width:100%;border:0;background:#FFC53D;color:#131A22;padding:16px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Checkout</button>
      <div style={sx(`display:flex;justify-content:center;gap:16px;margin-top:12px;color:#8A929C;font-size:11.5px;font-weight:600`)}>
      <span>7-day returns</span><span>·</span><span>12-month warranty</span><span>·</span><span>Razorpay secure</span>
      </div>
      </div>
      </div>
      </div>
      </>) : null}
    </>
  );
}

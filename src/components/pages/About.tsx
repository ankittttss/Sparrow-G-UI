'use client';
/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element */
// Generated from the Claude Design template by `python tools/split.py` +
// `python tools/gencomponents.py`. Edit the design source, not this file.
import React from 'react';
import { sx } from '@/lib/sx';
import { useVals } from '@/lib/store';
import SafeImg from '@/components/SafeImg';

export default function About() {
  const v = useVals();
  const { about, aboutStats, experiences, goContact, goShop, goSolutions, sloganWords,
    storyFacts } = v;
  return (
    <>
      <div className="sgrise" style={sx(`padding-bottom:90px`)}>
      <section data-pad={true} style={sx(`max-width:880px;margin:0 auto;padding:60px 26px 0;text-align:center`)}>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:14px`)}>About SparrowG</div>
      <div style={sx(`position:relative;max-width:940px;margin:0 auto;text-align:center`)}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFC53D" strokeWidth="1.7" strokeLinecap="round" style={sx(`position:absolute;left:2%;top:-10px;animation-name:sgSpark;animation-duration:4.5s;animation-iteration-count:infinite;animation-timing-function:ease-in-out`)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.4 6.4l2.8 2.8M14.8 14.8l2.8 2.8M17.6 6.4l-2.8 2.8M9.2 14.8l-2.8 2.8" /></svg>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#B4531F" strokeWidth="1.7" strokeLinecap="round" style={sx(`position:absolute;right:3%;bottom:6px;animation-name:sgSpark;animation-duration:5.6s;animation-delay:-2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out`)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /></svg>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(30px,4.6vw,58px);letter-spacing:-.035em;line-height:1.06;margin:0;font-weight:700;display:flex;flex-wrap:wrap;justify-content:center;gap:0 .32em`)}>
      {(sloganWords ?? []).map((w: any, _k: number) => (<React.Fragment key={_k}>
      <span style={sx(`position:relative;color:${w.color};animation-name:sgWord;animation-duration:9s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.2,.7,.3,1);animation-fill-mode:both;animation-delay:${w.delay}`)}>{w.word}
                  {(w.underline) ? (<>
      <span style={sx(`position:absolute;left:0;right:0;bottom:.02em;height:.16em;background:#FFC53D;border-radius:999px;z-index:-1;transform-origin:left center;animation-name:sgUnderline;animation-duration:9s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.2,.7,.3,1)`)}></span>
      </>) : null}
      </span>
      </React.Fragment>))}
      </h2>
      </div>
      <div style={sx(`height:22px`)}></div>
      <p style={sx(`font-size:17.5px;line-height:1.65;color:#4A5462;margin:0 auto;max-width:600px;text-wrap:pretty`)}>We build SparrowG at T-Works in Hyderabad because the gap between knowing about a machine and building one is where all the real learning happens. So we make machines children can build.</p>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:52px 26px 0`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:48px;align-items:start`)}>
      <div>
      <div style={sx(`font-size:12.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#B4531F;margin-bottom:12px`)}>Our story</div>
      <h2 style={sx(`font-family:'Space Grotesk',sans-serif;font-size:clamp(28px,3.4vw,44px);letter-spacing:-.03em;line-height:1.05;margin:0 0 18px;font-weight:700`)}>Why we started SparrowG</h2>
      <p style={sx(`font-size:16.5px;line-height:1.68;color:#4A5462;margin:0 0 18px;text-wrap:pretty`)}>SparrowG was born from a simple observation: traditional education often fails to ignite the natural curiosity that every child possesses. We saw students memorising formulas instead of understanding concepts, learning theories without ever applying them.</p>
      <p style={sx(`font-size:16.5px;line-height:1.68;color:#4A5462;margin:0 0 28px;text-wrap:pretty`)}>Founded by a team of educators and engineers, we set out to bridge this gap. Our mission is not just to teach STEM — it's to redefine how learning happens. Through hands-on kits, immersive experiences and expert-led workshops, we bring science, technology, engineering and maths to life.</p>
      <blockquote style={sx(`margin:0 0 26px;padding:0 0 0 20px;border-left:3px solid #FFC53D;font-family:'Space Grotesk',sans-serif;font-size:19px;line-height:1.42;letter-spacing:-.015em;font-weight:500;color:#131A22`)}>If a child can build the machine, they never have to memorise how it works.</blockquote>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px;margin-bottom:26px`)}>
      {(storyFacts ?? []).map((f: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:#F7F5F1;border:1px solid #EFEBE3;border-radius:16px;padding:18px`)}>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:15.5px;letter-spacing:-.01em;margin-bottom:5px`)}>{f.title}</div>
      <div style={sx(`color:#5A6572;font-size:13px;line-height:1.5`)}>{f.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      <div style={sx(`display:flex;gap:12px;flex-wrap:wrap`)}>
      <button className="hv-08c78e8f" onClick={goSolutions} style={sx(`border:0;background:#131A22;color:#FFFFFF;padding:15px 24px;border-radius:12px;font-size:14.5px;font-weight:700;cursor:pointer;transition:background .2s`)}>See how we teach →</button>
      <button className="hv-c28e8f3b" onClick={goShop} style={sx(`border:1px solid #D6D0C4;background:transparent;padding:15px 24px;border-radius:12px;font-size:14.5px;font-weight:600;cursor:pointer;transition:background .2s`)}>Browse the kits</button>
      </div>
      </div>
      <div style={sx(`border-radius:26px;overflow:hidden;background:#E9E4DA;aspect-ratio:4/5;box-shadow:0 24px 60px rgba(19,26,34,.12)`)}>
      <SafeImg src="/assets/about-classroom.png" alt="Students building a SparrowG kit together in class" style={sx(`width:100%;height:100%;object-fit:cover`)} />
      </div>
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:52px 26px 0`)}>
      <div style={sx(`display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:18px`)}>
      {(about ?? []).map((a: any, _k: number) => (<React.Fragment key={_k}>
      <div style={sx(`background:#FFFFFF;border:1px solid #EFEBE3;border-radius:24px;padding:30px`)}>
      <div style={sx(`font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0FA3A3;margin-bottom:12px`)}>{a.kicker}</div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-bottom:10px`)}>{a.title}</div>
      <div style={sx(`color:#5A6572;font-size:15px;line-height:1.6`)}>{a.text}</div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:44px 26px 0`)}>
      <div style={sx(`background:#FBF4E7;border:1px solid #EFE3CC;border-radius:30px;padding:clamp(28px,4vw,52px);display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:26px;color:#131A22`)}>
      {(aboutStats ?? []).map((s: any, _k: number) => (<React.Fragment key={_k}>
      <div>
      <div style={sx(`font-family:'Space Grotesk',sans-serif;font-size:42px;font-weight:700;letter-spacing:-.035em;line-height:1`)}>{s.n}</div>
      <div style={sx(`color:#5A6572;font-size:13.5px;margin-top:8px;line-height:1.5`)}>{s.label}</div>
      </div>
      </React.Fragment>))}
      </div>
      </section>
      <section data-pad={true} style={sx(`max-width:1280px;margin:0 auto;padding:44px 26px 0;text-align:center`)}>
      <button className="hv-76097081" onClick={goContact} style={sx(`border:0;background:#FFC53D;color:#131A22;padding:16px 28px;border-radius:13px;font-size:15.5px;font-weight:700;cursor:pointer;transition:transform .2s`)}>Get in touch</button>
      </section>
      </div>
    </>
  );
}

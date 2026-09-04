'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { sx } from '@/lib/sx';
import { SiteProvider, useVals } from '@/lib/store';
import Header from './Header';
import SearchOverlay from './SearchOverlay';
import MobileNav from './MobileNav';
import CartDrawer from './CartDrawer';
import PayProcessing from './PayProcessing';
import Footer from './Footer';

function Chrome({ children }: { children: React.ReactNode }) {
  const v = useVals();
  const { stagePad, shellWidth, shellRadius, shellShadow } = v;

  return (
    <div
      style={sx(
        `min-height:100vh;background:#FFFFFF;padding:${stagePad};` +
          `display:flex;justify-content:center`,
      )}
    >
      <div
        className="sgshell"
        style={sx(
          `width:${shellWidth};max-width:100%;background:#FFFFFF;` +
            `border-radius:${shellRadius};overflow:clip;` +
            `box-shadow:${shellShadow};position:relative`,
        )}
      >
        <Header />
        <SearchOverlay />
        <MobileNav />
        <CartDrawer />
        <main>{children}</main>
        <PayProcessing />
        <Footer />
      </div>
    </div>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <SiteProvider>
      <Chrome>{children}</Chrome>
    </SiteProvider>
  );
}

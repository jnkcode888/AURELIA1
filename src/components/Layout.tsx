import React from 'react';
import { Navigation } from './Navigation';
import { ParallaxBackground } from './ParallaxBackground';
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="relative w-full min-h-screen">
      <ParallaxBackground />
      <Navigation />
      <main className="relative z-10 w-full">{children}</main>
    </div>;
};
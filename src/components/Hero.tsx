import React, { useEffect, useRef } from 'react';
import { ThreeScene } from './ThreeScene';
import { FloatingIcons } from './FloatingIcons';
export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);
  return <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        <ThreeScene />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            STEPHANIE AURELIA
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/80 font-syncopate mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
            VOICE ARTIST • MC • MODEL • CREATOR
          </p>
          <div className="relative h-24 opacity-0 animate-fadeIn animation-delay-700">
            <FloatingIcons />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>;
};
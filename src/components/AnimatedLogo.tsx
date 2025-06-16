import React, { useEffect, useRef } from 'react';
export const AnimatedLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const letters = 'SIMPLYAURELIA';
    let interval: NodeJS.Timeout | null = null;
    const startAnimation = () => {
      let iteration = 0;
      clearInterval(interval as NodeJS.Timeout);
      interval = setInterval(() => {
        if (logoRef.current) {
          logoRef.current.innerText = letters.split('').map((letter, index) => {
            if (index < iteration) {
              return letters[index];
            }
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
          }).join('');
          if (iteration >= letters.length) {
            clearInterval(interval as NodeJS.Timeout);
          }
          iteration += 1 / 3;
        }
      }, 30);
    };
    startAnimation();
    const refreshAnimation = () => {
      if (Math.random() > 0.98) {
        startAnimation();
      }
    };
    const animInterval = setInterval(refreshAnimation, 3000);
    return () => {
      clearInterval(interval as NodeJS.Timeout);
      clearInterval(animInterval);
    };
  }, []);
  return <div className="flex items-center">
      <div ref={logoRef} className="text-xl md:text-2xl font-orbitron text-white relative overflow-hidden font-bold tracking-wider">
        SIMPLYAURELIA
      </div>
      <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-70"></div>
    </div>;
};
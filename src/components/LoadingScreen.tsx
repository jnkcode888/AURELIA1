import React, { useEffect, useRef } from 'react';
export const LoadingScreen = () => {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const letters = 'SIMPLYAURELIA';
    let interval: NodeJS.Timeout | null = null;
    const startAnimation = () => {
      let iteration = 0;
      clearInterval(interval as NodeJS.Timeout);
      interval = setInterval(() => {
        if (textRef.current) {
          textRef.current.innerText = letters.split('').map((letter, index) => {
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
    return () => {
      clearInterval(interval as NodeJS.Timeout);
    };
  }, []);
  return <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div ref={textRef} className="text-4xl md:text-6xl font-orbitron text-white relative overflow-hidden font-bold tracking-wider">
          SIMPLYAURELIA
        </div>
        <div className="mt-8 flex justify-center">
          {[...Array(5)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full bg-electric-blue mx-1" style={{
          animation: `bounce 1s infinite alternate ease-in-out`,
          animationDelay: `${i * 0.1}s`
        }}></div>)}
        </div>
      </div>
    </div>;
};
import React, { useEffect, useRef } from 'react';
export const ParallaxBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div className="fixed inset-0 z-0">
      <div ref={backgroundRef} className="absolute inset-0 transition-transform duration-200 ease-out" style={{
      background: 'linear-gradient(125deg, #0a0014 0%, #120027 40%, #1a0033 70%, #10001f 100%)'
    }}>
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(78, 0, 146, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 116, 217, 0.3) 0%, transparent 50%)
            `
      }}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute rounded-full" style={{
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 4 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          background: `rgba(${Math.random() * 255}, ${Math.random() * 100 + 155}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.5})`,
          boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(${Math.random() * 255}, ${Math.random() * 100 + 155}, ${Math.random() * 255}, 0.8)`,
          animation: `pulse ${Math.random() * 5 + 3}s infinite alternate ease-in-out`
        }}></div>)}
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
    </div>;
};
import React, { useEffect, useRef } from 'react';
export const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const {
        clientX,
        clientY
      } = e;
      // Add a slight delay for a trailing effect
      setTimeout(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${clientX}px`;
          cursorRef.current.style.top = `${clientY}px`;
        }
      }, 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div ref={cursorRef} className="fixed w-40 h-40 rounded-full pointer-events-none z-50 opacity-20 mix-blend-screen hidden md:block" style={{
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 80%)',
    filter: 'blur(20px)',
    transform: 'translate(-50%, -50%)'
  }}></div>;
};
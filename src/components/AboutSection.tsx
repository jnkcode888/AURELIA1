import React, { useEffect, useRef } from 'react';
import stephImage from '/images/steph.png';

export const AboutSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);
  const textPanelsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!orbRef.current || !textPanelsRef.current) return;
      const orbRect = orbRef.current.getBoundingClientRect();
      const scrollProgress = 1 - orbRect.top / window.innerHeight;
      if (scrollProgress > 0 && scrollProgress < 1.5) {
        orbRef.current.style.transform = `rotate(${scrollProgress * 180}deg)`;
        textPanelsRef.current.style.opacity = Math.min(1, scrollProgress * 2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="about" className="relative min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-gold to-electric-blue">
            About Aurelia
          </span>
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div ref={orbRef} className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden transition-transform duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-transparent"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[url('/steph.png')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute inset-0 rounded-full border border-electric-blue/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-electric-blue/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-electric-blue/20 animate-ping"></div>
              </div>
            </div>
          </div>
          <div ref={textPanelsRef} className="max-w-lg space-y-6 opacity-0 transition-opacity duration-1000">
            <div className="p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/80 font-light leading-relaxed">
                Stephanie Aurelia is a multifaceted creative force in the
                digital media landscape. As @simplyaurelia, she brings her
                unique blend of charisma, professionalism, and artistic vision
                to every project.
              </p>
            </div>
            <div className="p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/80 font-light leading-relaxed">
                With a background spanning voice-over artistry, event hosting,
                modeling, and content creation, Stephanie offers a versatile
                skill set that has made her a sought-after talent across
                multiple industries.
              </p>
            </div>
            <div className="p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <p className="text-white/80 font-light leading-relaxed">
                Her distinctive voice, commanding stage presence, and
                eye-catching visual aesthetic have earned her collaborations
                with leading brands and a dedicated following across social
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
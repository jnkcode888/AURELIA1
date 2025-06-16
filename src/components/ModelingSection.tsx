import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export const ModelingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const images = [{
    url: '/steph.png',
    brand: 'LUXE Fashion'
  }, {
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    brand: 'Moderna Style'
  }, {
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    brand: 'Elegance Co.'
  }, {
    url: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    brand: 'Avant Garde'
  }];
  const brands = ['LUXE', 'Moderna', 'Elegance', 'AvantGarde', 'Celestial', 'Noir'];
  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };
  const handleNext = () => {
    setActiveIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };
  useEffect(() => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    el.style.transform = `translateX(-${activeIndex * 100}%)`;
  }, [activeIndex]);
  return <section id="modeling" className="relative min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-gold to-violet-600">
            Modeling & Collaborations
          </span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div ref={carouselRef} className="flex transition-transform duration-700 ease-in-out" style={{
            width: `${images.length * 100}%`
          }}>
              {images.map((image, index) => <div key={index} className="relative w-full" style={{
              width: `${100 / images.length}%`
            }}>
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <img src={image.url} alt={`Modeling for ${image.brand}`} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-orbitron text-white">
                        {image.brand}
                      </h3>
                      <p className="text-white/70">Campaign 2023</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-electric-blue/50 transition-all duration-300 z-10">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-electric-blue/50 transition-all duration-300 z-10">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-syncopate text-center mb-8">
            Brand Collaborations
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => <div key={index} className="relative">
                <div className="w-24 h-24 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-electric-blue/50 transition-all duration-300 group" style={{
              animation: `float 3s infinite alternate ease-in-out`,
              animationDelay: `${index * 0.2}s`
            }}>
                  <span className="font-orbitron text-white/70 group-hover:text-white transition-colors duration-300">
                    {brand}
                  </span>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600/10 to-rose-gold/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
import React, { useEffect, useState } from 'react';
import { AnimatedLogo } from './AnimatedLogo';
import { XIcon, MenuIcon } from 'lucide-react';
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/70 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <AnimatedLogo />
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Voice', 'Modeling', 'Reels', 'Connect'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-white/80 hover:text-electric-blue transition-colors duration-300 font-syncopate text-sm tracking-wider">
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-gold transition-all duration-300 group-hover:w-full"></span>
            </a>)}
        </div>
        {/* Mobile Menu Button */}
        <button onClick={handleMenuClick} className="md:hidden relative w-10 h-10 flex items-center justify-center" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <XIcon className="w-6 h-6 text-white transition-transform duration-300 transform rotate-90" /> : <MenuIcon className="w-6 h-6 text-white transition-transform duration-300" />}
        </button>
        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-lg md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={handleMenuClick} />
        {/* Mobile Menu Panel */}
        <div className={`fixed top-0 right-0 w-64 h-full bg-black/95 backdrop-blur-xl md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center pt-20 px-6">
            {['About', 'Voice', 'Modeling', 'Reels', 'Connect'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={handleLinkClick} className="relative w-full text-center py-4 text-white/80 hover:text-electric-blue transition-colors duration-300 font-syncopate text-sm tracking-wider border-b border-white/10">
                {item}
              </a>)}
          </div>
        </div>
      </div>
    </nav>;
};
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VoiceSection } from './components/VoiceSection';
import { ModelingSection } from './components/ModelingSection';
import { ReelsSection } from './components/ReelsSection';
import { ContactSection } from './components/ContactSection';
import { LoadingScreen } from './components/LoadingScreen';
import { CursorEffect } from './components/CursorEffect';
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }
  return <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <CursorEffect />
      <Layout>
        <Hero />
        <AboutSection />
        <VoiceSection />
        <ModelingSection />
        <ReelsSection />
        <ContactSection />
      </Layout>
    </div>;
}
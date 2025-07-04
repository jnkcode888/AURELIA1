import React, { useState, useRef } from 'react';
import { PlayCircleIcon, PauseCircleIcon } from 'lucide-react';
export const VoiceSection = () => {
  const [activeAudio, setActiveAudio] = useState<string | null>(null);
  const audioRefs = useRef<{
    [key: string]: HTMLAudioElement | null;
  }>({});
  const audioSamples = [{
    id: 'commercial',
    title: 'Commercial VO',
    source: '#'
  }, {
    id: 'narration',
    title: 'Narration',
    source: '#'
  }, {
    id: 'character',
    title: 'Character Voice',
    source: '#'
  }, {
    id: 'promo',
    title: 'Event Promo',
    source: '#'
  }];
  const handlePlay = (id: string) => {
    // Pause current audio if any
    if (activeAudio && audioRefs.current[activeAudio]) {
      audioRefs.current[activeAudio]?.pause();
    }
    // Play new audio
    if (id !== activeAudio) {
      audioRefs.current[id]?.play();
      setActiveAudio(id);
    } else {
      setActiveAudio(null);
    }
  };
  return <section id="voice" className="relative min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue to-violet-600">
            Voice & Stage
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-syncopate mb-6">
              Voice Samples
            </h3>
            <div className="space-y-4">
              {audioSamples.map((sample) => <div key={sample.id} className="p-4 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-between group hover:border-electric-blue/50 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <img src="/steph.png" alt="voice sample" className="w-12 h-12 rounded object-cover" />
                  <div>
                    <h4 className="font-orbitron text-white/90">{sample.title}</h4>
                    <div className="mt-2 relative h-8">
                      <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => <div key={i} className="absolute bottom-0 bg-electric-blue/70" style={{
                          left: `${i * 5}%`,
                          height: `${Math.random() * 100}%`,
                          width: '2px',
                          animation: activeAudio === sample.id ? `equalizer 0.5s infinite alternate ease-in-out` : 'none',
                          animationDelay: `${i * 0.05}s`
                        }}></div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => handlePlay(sample.id)} className="relative z-10">
                  {activeAudio === sample.id ? <PauseCircleIcon className="w-10 h-10 text-electric-blue" /> : <PlayCircleIcon className="w-10 h-10 text-white/70 group-hover:text-electric-blue transition-colors duration-300" />}
                </button>
                <audio ref={el => audioRefs.current[sample.id] = el} src={sample.source} onEnded={() => setActiveAudio(null)} />
              </div>)}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-syncopate mb-6">
              Event Highlights
            </h3>
            <div className="aspect-video bg-black/40 rounded-lg overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="event highlight" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircleIcon className="w-16 h-16 text-white/50 hover:text-electric-blue transition-colors duration-300 cursor-pointer" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="font-orbitron text-lg">Tech Conference 2023</h4>
                <p className="text-white/70 text-sm">Main Stage Host</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Brand Launch", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" },
                { title: "Music Festival", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
                { title: "Award Show", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
                { title: "Charity Gala", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" }
              ].map((item, i) => (
                <div key={i} className="aspect-square bg-black/40 rounded-lg overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <h4 className="font-orbitron text-sm">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
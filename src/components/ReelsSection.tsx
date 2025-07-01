import React from 'react';
import { PlayIcon, InstagramIcon } from 'lucide-react';
export const ReelsSection = () => {
  const reels = [{
    thumbnail: '/Steph.mp4',
    title: 'Behind the Scenes',
    views: '124K',
    platform: 'Instagram',
    link: 'https://www.instagram.com/simplyaurelia/reel/DLh-hb2IbxY/'
  }, {
    thumbnail: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Studio Day',
    views: '87K',
    platform: 'TikTok'
  }, {
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Voice Acting Tips',
    views: '56K',
    platform: 'Instagram'
  }, {
    thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Event Highlights',
    views: '203K',
    platform: 'TikTok'
  }, {
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Photoshoot Vlog',
    views: '98K',
    platform: 'Instagram'
  }];
  return <section id="reels" className="relative min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-electric-blue">
            Reels & Highlights
          </span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reels.map((reel, index) => {
              const isVideo = reel.thumbnail.endsWith('.mp4');
              const content = (
                <>
                  {isVideo ? (
                    <video src={reel.thumbnail} className="w-full h-full object-cover object-center" muted playsInline preload="metadata" poster="/steph-poster.jpg" autoPlay loop />
                  ) : (
                    <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover object-center" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {reel.platform === 'Instagram' ? <InstagramIcon className="w-6 h-6 text-white/70" /> : <div className="w-6 h-6 text-white/70" />}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:border-electric-blue/50 transition-all duration-300">
                      <PlayIcon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-orbitron text-white">{reel.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-white/70 text-sm">{reel.views} views</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1 h-4 bg-electric-blue/70 rounded-full" style={{
                            height: `${Math.random() * 12 + 4}px`,
                            animation: `equalizer 0.5s infinite alternate ease-in-out`,
                            animationDelay: `${i * 0.1}s`
                          }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              );
              return (
                <a
                  key={index}
                  href={reel.link ? reel.link : '#'}
                  target={reel.link ? '_blank' : undefined}
                  rel={reel.link ? 'noopener noreferrer' : undefined}
                  className="group relative rounded-lg overflow-hidden aspect-[9/16] bg-black/30 backdrop-blur-sm border border-white/10 hover:border-electric-blue/50 transition-all duration-300 block"
                  style={{ textDecoration: 'none' }}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>;
};
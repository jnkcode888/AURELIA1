import React from 'react';
import { CameraIcon, MonitorIcon, InstagramIcon, TwitchIcon, BoxIcon } from 'lucide-react';
export const FloatingIcons = () => {
  const icons = [{
    Icon: BoxIcon,
    label: 'Voice',
    delay: '0s'
  }, {
    Icon: CameraIcon,
    label: 'Model',
    delay: '0.2s'
  }, {
    Icon: MonitorIcon,
    label: 'MC',
    delay: '0.4s'
  }, {
    Icon: InstagramIcon,
    label: 'Social',
    delay: '0.6s'
  }, {
    Icon: TwitchIcon,
    label: 'Content',
    delay: '0.8s'
  }];
  return <div className="flex justify-center items-center space-x-8 md:space-x-16">
      {icons.map(({
      Icon,
      label,
      delay
    }, index) => <div key={index} className="group flex flex-col items-center" style={{
      animation: `float 3s infinite alternate ease-in-out`,
      animationDelay: delay
    }}>
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-sm border border-white/10 group-hover:border-electric-blue/50 transition-all duration-300">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/70 group-hover:text-electric-blue transition-colors duration-300" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600/20 to-electric-blue/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="mt-2 text-xs font-syncopate text-white/50 group-hover:text-white/90 transition-colors duration-300">
            {label}
          </span>
        </div>)}
    </div>;
};
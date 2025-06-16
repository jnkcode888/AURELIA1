import React, { useState, useRef } from 'react';
import { SendIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormState(prev => ({
      ...prev,
      submitted: true
    }));
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: false
      });
    }, 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <section id="connect" className="relative min-h-screen w-full flex items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-orbitron text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-gold to-electric-blue">
            Connect With Me
          </span>
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-syncopate mb-4">
                Get In Touch
              </h3>
              <p className="text-white/70 leading-relaxed">
                For bookings, collaborations, or any inquiries, please reach
                out. I'm always interested in connecting with creative minds and
                brands that share my vision.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-orbitron text-white/90">Follow Me</h4>
              <div className="flex space-x-4">
                {[InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, index) => <a key={index} href="#" className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:border-electric-blue/50 transition-all duration-300 group">
                      <Icon className="w-5 h-5 text-white/70 group-hover:text-electric-blue transition-colors duration-300" />
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600/10 to-electric-blue/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>)}
              </div>
            </div>
            <div>
              <h4 className="font-orbitron text-white/90 mb-2">Management</h4>
              <p className="text-white/70">
                For business inquiries:
                <br />
                <a href="mailto:management@simplyaurelia.com" className="text-electric-blue hover:text-rose-gold transition-colors duration-300">
                  management@simplyaurelia.com
                </a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative p-6 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => <div key={i} className="absolute bg-electric-blue/10" style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 5 + 3}s infinite alternate ease-in-out`
              }}></div>)}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-orbitron mb-6">Send Message</h3>
                {formState.submitted ? <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-electric-blue/20 flex items-center justify-center mb-4">
                      <SendIcon className="w-8 h-8 text-electric-blue" />
                    </div>
                    <p className="text-white font-orbitron">
                      Message sent successfully!
                    </p>
                    <p className="text-white/70 mt-2">
                      Thank you for reaching out.
                    </p>
                  </div> : <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-2 text-white focus:border-electric-blue/70 focus:outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-2 text-white focus:border-electric-blue/70 focus:outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                        Message
                      </label>
                      <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className="w-full bg-black/50 border border-white/20 rounded-md px-4 py-2 text-white focus:border-electric-blue/70 focus:outline-none transition-colors duration-300"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-electric-blue rounded-md font-orbitron text-white hover:from-electric-blue hover:to-rose-gold transition-all duration-500 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <SendIcon className="w-4 h-4" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-electric-blue to-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </button>
                  </form>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
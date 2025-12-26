import React from 'react';
import { trustLogos } from '../data/mock';

const TrustBar = () => {
  // Guard clause to prevent app crash if data is missing
  if (!trustLogos || trustLogos.length === 0) return null;

  return (
    <section className="py-10 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">
          Our DNA — Built by Leaders from
        </p>
        
        <div className="relative">
          {/* Gradient Overlays: Creates the "fade-in/fade-out" effect on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex items-center gap-12 lg:gap-20 animate-scroll whitespace-nowrap">
            {/* We map twice to create a seamless infinite loop */}
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex-shrink-0 group flex items-center justify-center"
              >
                {/* NORMALIZATION BOX:
                  This is the secret to fixing the "small logo" problem. 
                  By forcing every logo into this 140x45 box, tall logos 
                  scale to the height, and wide logos scale to the width.
                */}
                <div className="w-[140px] h-[45px] flex items-center justify-center">
                  {logo.Component ? (
                    <logo.Component 
                      className="max-h-full max-w-full w-auto h-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" 
                    />
                  ) : (
                    <span className="text-slate-400 font-bold">{logo.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

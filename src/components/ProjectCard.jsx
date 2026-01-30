import React from 'react';
import { skills } from '../content';

// Helper to map tech stack strings to icons
const getTechIcon = (techName) => {
  const normalizedTech = techName.toLowerCase().trim();
  
  // Direct match
  const skill = skills.find(s => s.name.toLowerCase() === normalizedTech);
  if (skill) return skill.icon;
  
  // Partial match (e.g. "Django" matching "Django")
  const partial = skills.find(s => normalizedTech.includes(s.name.toLowerCase()));
  return partial ? partial.icon : null;
};

export default function ProjectCard({ work, reverse = false }) {
  const techList = work.techStack.split(',').map(t => t.trim());

  return (
    <div className={`group relative grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'md:direction-rtl' : ''}`}>
      
      {/* Background Decor (Optional specific glow for each card) */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${reverse ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-1/4'} w-96 h-96 bg-[var(--color-primary)]/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      {/* Image Section */}
      <div className={`relative ${reverse ? 'md:order-2' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-[var(--color-primary)]/30 transition-colors duration-500">
          
          {/* Image Overlay/Tint */}
          <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          <img
            src={work.image}
            alt={work.title}
            className="w-full aspect-[16/10] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className={`relative z-10 space-y-6 ${reverse ? 'md:order-1 md:text-right' : ''}`}>
        
        {/* Header */}
        <div className="space-y-3">
          <div className={`flex items-center gap-3 text-xs font-medium tracking-widest text-[var(--color-primary)] uppercase ${reverse ? 'md:justify-end' : ''}`}>
            <span>{work.year}</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>{work.role}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold heading-text text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
            {work.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
          {work.description}
        </p>

        {/* Tech Stack Icons/Pills */}
        <div className={`flex flex-wrap gap-3 items-center pt-2 ${reverse ? 'md:justify-end' : ''}`}>
          {techList.map((tech, i) => {
            const icon = getTechIcon(tech);
            return (
              <div 
                key={i} 
                className="group/tech relative flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 transition-all duration-300"
                title={tech}
              >
                {icon ? (
                  <img src={icon} alt={tech} className="w-5 h-5 object-contain opacity-70 group-hover/tech:opacity-100 transition-opacity" />
                ) : (
                  <span className="text-xs font-medium text-[var(--text-secondary)] group-hover/tech:text-[var(--color-primary)] px-1">{tech}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Links */}
        <div className={`flex items-center gap-5 pt-4 ${reverse ? 'md:justify-end' : ''}`}>
          {work.demo && (
            <a
              href={work.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-0.5 hover:opacity-80 transition-opacity"
            >
              <span className="font-semibold text-sm tracking-wide">VISIT SITE</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
          
          {work.github && (
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white border-b border-white pb-0.5 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
            >
              <span className="font-semibold text-sm tracking-wide">Source Code</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

import React from 'react'
import { profile, social, about, experiences, education } from '../content'

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl w-full mx-auto px-4">
          
          <div className="space-y-2">
            <p className="section-title">About Me</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold heading-text">
              I build things<br/>for the web.
            </h1>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg font-medium text-[var(--text-primary)]">
                I am a front-end developer based in Sikkim with a Computer Science & Engineering background.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={profile.resume}
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] px-5 py-3 rounded-full text-black font-semibold text-sm hover:glow-primary hover:scale-105 transition-all duration-300"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>
              </a>

              <a
                className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
                href={social[1].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z
                        M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941
                        C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z
                        M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533
                        c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531
                        c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
                  />
                </svg>
              </a>

              <a
                className="w-11 h-11 rounded-full bg-[var(--bg-card)] border border-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 transition-all duration-300"
                href={social[0].link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github profile"
              >
                <svg 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  className="w-5 h-5"
                >
                  <g transform="translate(-140.000000, -7559.000000)">
                    <g transform="translate(56.000000, 160.000000)">
                      <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>            
        </div>
        
        {/* Wide image */}
        <div className="max-w-6xl w-full mx-auto px-4 mt-12">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-transparent" />
            <img className="w-full rounded-2xl" src="images/avatar-wide.avif" alt="Tushar Rai" />
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-separator" />

      {/* Experience Section */}
      <section className="py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl w-full mx-auto px-4">
          
          <div className="space-y-2">
            <p className="section-title">Experience</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-text">
              Where I've<br/>worked.
            </h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative flex gap-5">
                {/* Timeline line */}
                <div className="relative flex flex-col items-center">
                  {/* Glowing dot */}
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-white/10 group-hover:border-[var(--color-primary)]/50 transition-colors duration-300">
                    {exp.iconType === 'svg' ? (
                      <svg className="w-5 h-5 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                    ) : (
                      <img src={exp.icon} alt={exp.title} className="w-5 h-5 object-contain" />
                    )}
                  </div>
                  {/* Line */}
                  {index < experiences.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="font-semibold text-base">{exp.title}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{exp.date}</p>
                  </div>

                  {exp.organization && (
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{exp.organization}</p>
                  )}

                  {exp.description && (
                    <p className="text-sm text-[var(--text-secondary)]">{exp.description}</p>
                  )}

                  {exp.bullets.length > 0 && (
                    <ul className="list-disc ml-5 mt-3 space-y-1.5">
                      {exp.bullets.map((point, i) => (
                        <li key={i} className="text-sm text-[var(--text-secondary)]">{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-separator" />

      {/* Education Section */}
      <section className="py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl w-full mx-auto px-4">
          
          <div className="space-y-2">
            <p className="section-title">Education</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold heading-text">
              Academic<br/>background.
            </h2>
          </div>

          <div className="space-y-0">
            {education.map((edu, index) => (
              <div key={index} className="group relative flex gap-5">
                {/* Timeline */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-white/10 group-hover:border-[var(--color-primary)]/50 transition-colors duration-300">
                    {edu.iconType === 'svg' ? (
                      <svg className="w-5 h-5 text-[var(--color-primary)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    ) : (
                      <img src={edu.icon} alt={edu.institution} className="w-5 h-5 object-contain" />
                    )}
                  </div>
                  {index < education.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <div className="flex flex-col gap-1 mb-2">
                    <h3 className="font-semibold text-base">{edu.degree}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{edu.date}</p>
                  </div>

                  <p className="text-sm text-[var(--color-primary)] font-medium">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

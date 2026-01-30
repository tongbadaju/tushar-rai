import React from 'react';

export default function ProjectCard({ work, reverse = false }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'md:direction-rtl' : ''}`}>
      {/* Image */}
      <div className={`relative group ${reverse ? 'md:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 lg:p-8 hover-lift">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative image-overlay rounded-lg overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className={`space-y-6 ${reverse ? 'md:order-1 md:text-right' : ''}`}>
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold heading-text tracking-wide">
            {work.title}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {work.description}
          </p>
        </div>

        <div className="text-sm">
          <div className="text-xs font-medium tracking-widest text-[var(--text-muted)] uppercase mb-3">
            Project Info
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-[var(--text-muted)]">Year</span>
              <span className="font-medium">{work.year}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-[var(--text-muted)]">Role</span>
              <span className="font-medium">{work.role}</span>
            </div>

            <div className="flex justify-between items-start py-2 border-b border-white/10">
              <span className="text-[var(--text-muted)]">Tech Stack</span>
              <span className="font-medium text-right max-w-[60%]">{work.techStack}</span>
            </div>
          </div>
        </div>

        <div className={`flex gap-4 pt-2 ${reverse ? 'md:justify-end' : ''}`}>
          {work.demo && (
            <a
              href={work.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:glow-primary-sm px-4 py-2 rounded-full border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300"
            >
              <span>Live Demo</span>
              <svg
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--color-primary)] px-4 py-2 rounded-full border border-white/10 hover:border-[var(--color-primary)]/30 transition-all duration-300"
            >
              <span>GitHub</span>
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
              >
                <g transform="translate(-140.000000, -7559.000000)">
                  <g transform="translate(56.000000, 160.000000)">
                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" />
                  </g>
                </g>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

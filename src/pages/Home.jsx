import React from 'react'
import { skills, works, profile, social, about } from '../content'
import { NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function Home() {

    const projectsToShow = works.slice(0, 3);

    return(
        <div className="pt-16">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex items-center py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl w-full mx-auto px-4">
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-4">
                            <p className="section-title">Front-End Developer</p>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold heading-text leading-tight">
                                Hi, I'm <br/>
                                <span className="text-gradient-primary">{profile.name}</span>.
                            </h1>
                            <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-md">
                                {about.shortDescription}
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
                                aria-label="GitHub profile"
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
                    
                    {/* Image */}
                    <div className="w-full flex md:justify-end animate-fade-in-up animation-delay-200">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-transparent rounded-2xl blur-xl opacity-50" />
                            <img 
                                width="400" 
                                height="400" 
                                className="relative max-w-sm w-full rounded-2xl shadow-2xl" 
                                src="images/avatar.avif" 
                                alt="Tushar Rai" 
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                
                </div>
            </section>

            {/* Gradient separator */}
            <div className="gradient-separator" />

            {/* Skills Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl w-full mx-auto px-4">

                    <div className="text-center mb-14 space-y-4">
                        <p className="section-title">Skills</p>
                        <h2 className="text-2xl md:text-3xl font-semibold heading-text">
                            Technologies I Work With
                        </h2>
                        <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-md mx-auto">
                            The skills, tools and technologies I am proficient in.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6 md:gap-8">
                        {skills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.site || "#"}
                            target={skill.site ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-3"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-[var(--bg-card)] border border-white/5 group-hover:border-[var(--color-primary)]/30 group-hover:bg-[var(--bg-card-hover)] transition-all duration-300 group-hover:scale-110">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} logo`}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                />
                            </div>
                            <p className="text-xs text-[var(--text-muted)] capitalize group-hover:text-[var(--text-secondary)] transition-colors">
                                {skill.name}
                            </p>
                        </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gradient separator */}
            <div className="gradient-separator" />

            {/* Projects Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <div className="text-center mb-14 space-y-4">
                        <p className="section-title">Featured Work</p>
                        <h2 className="text-2xl md:text-3xl font-semibold heading-text">
                            Selected Projects
                        </h2>
                        <p className="text-[var(--text-secondary)] text-sm md:text-base max-w-md mx-auto">
                            Here are some projects that showcase my passion for building great digital experiences.
                        </p>
                    </div>

                    <div className="space-y-20 md:space-y-28">
                        {projectsToShow.map((work, index) => (
                            <ProjectCard key={index} work={work} reverse={index % 2 === 1} />
                        ))}
                    </div>

                    <div className="mt-16 md:mt-20 text-center">
                        <NavLink 
                            to="/works" 
                            className="group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black transition-all duration-300"
                        >
                            <span>View All Projects</span>
                            <svg 
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </NavLink>
                    </div>
                </div>

            </section>
        </div>
    )
}

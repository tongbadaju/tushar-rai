import React from 'react'
import { profile, social, about, experiences, education } from '../content'

export default function About() {
  return (
        <>
            <section className="py-9 lg:py-15">
                <div className="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-20 md:items-start max-w-6xl w-full mx-auto px-4">
               
                    <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-tight text-primary heading-text">About me</h1>
          

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="block text-base/tight md:text-lg/tight font-semibold">I am a front-end developer based in Sikkim. Has Computer Science & Engineering background. </p>
                            <p className="mt-1 text-sm">
                                {about.description}
                            </p>
                        </div>

                        <div className="flex gap-2 items-center">

                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={profile.resume}
                            className="cursor-pointer flex justify-between bg-[var(--color-primary)] px-3 py-2 rounded-full text-neutral-800 tracking-wider shadow-xl hover:bg-neutral-800 hover:text-[var(--color-primary)] hover:scale-105 duration-500 heading-text text-xl w-[150px]"
                            >
                                Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-5 animate-bounce"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </a>

                            <a
                            className="p-3 rounded-full bg-neutral-800 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black hover:scale-105 duration-500"
                            href={social[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            >
                                <svg
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5 h-5 shrink-0"
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
                                className="p-3 rounded-full bg-neutral-800 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black hover:scale-105 duration-500"
                                href={social[0].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github profile"
                                >
                                <svg 
                                    viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="currentColor" 
                                    className="w-5 h-5 shrink-0"
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
                
                <div className="max-w-6xl w-full mx-auto px-4 mt-8">
                    <img className="w-full rounded-md" src="images/avatar-wide.avif" alt="Tushar Rai" />
                </div>
            </section>

            <section className="py-18 border-b border-neutral-700">
                <div className="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-20 md:items-start max-w-6xl w-full mx-auto px-4">
                    <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-tight text-primary heading-text">My Experience</h1>

                    <div>
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative flex gap-x-5">
                            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                {exp.iconType === 'svg' ? (
                                    <svg className="shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 12h.01" />
                                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                        <rect width="20" height="14" x="2" y="6" rx="2" />
                                    </svg>
                                ) : (
                                    <img src={exp.icon} alt={exp.title} />
                                )}
                                </div>
                            </div>

                            <div className="grow pb-8 group-last:pb-0">
                                <div className="flex justify-between mb-1 flex-col md:flex-row text-sm">
                                    <p className="font-semibold text-base">{exp.title}</p>
                                    <p className="mb-1 text-sm">{exp.date}</p>
                                </div>

                                {exp.organization && (
                                    <p className="mb-1 text-sm text-[var(--color-primary)] font-medium">{exp.organization}</p>
                                )}

                                {exp.description && (
                                    <p className="mt-1 text-sm">{exp.description}</p>
                                )}

                                {exp.bullets.length > 0 && (
                                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                                    {exp.bullets.map((point, i) => (
                                        <li key={i} className="ps-1 text-sm">{point}</li>
                                    ))}
                                </ul>
                                )}
                            </div>
                        </div>
                    ))}
                    </div>
  
                </div>
            </section>

            <section className="py-18 border-b border-neutral-700">
                <div className="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-20 md:items-start max-w-6xl w-full mx-auto px-4">
                    <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-tight text-primary heading-text">My Education</h1>

                    <div>
                    {education.map((edu, index) => (
                        <div key={index} className="group relative flex gap-x-5">
                        <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 size-8 flex justify-center items-center">
                            {edu.iconType === 'svg' ? (
                                <svg className="shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 12h.01" />
                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                <rect width="20" height="14" x="2" y="6" rx="2" />
                                </svg>
                            ) : (
                                <img src={edu.icon} alt={edu.institution} />
                            )}
                            </div>
                        </div>

                        <div className="grow pb-8 group-last:pb-0">
                            <div className="flex justify-between flex-col md:flex-row mb-1 text-sm">
                            <p className="font-semibold text-base">{edu.degree}</p>
                            <p className="mb-1 text-sm">{edu.date}</p>
                            </div>

                            <p className="mb-1 text-sm text-[var(--color-primary)] font-medium">{edu.institution}</p>
                        </div>
                        </div>
                    ))}
                    </div>

                </div>
            </section>

        </>
    );
}

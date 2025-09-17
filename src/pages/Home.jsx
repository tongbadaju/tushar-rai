import React from 'react'
import { skills, works, profile, social, about, /* testimonials */ } from '../content'
import { NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function Home() {

    const projectsToShow = works.slice(0, 3);

    return(

        <div>
            {/* Introduction Col */}
            <section className="flex justify-center py-9 md:py-18 border-b border-neutral-800">
                <div className="grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-20 md:items-center max-w-6xl w-full mx-auto px-4">
                    <div className="space-y-8">
                        <div>
                            <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-xs heading-text">Hi, I am <br/> {profile.name}.</h1>
                            <p className="mt-1 text-sm md:text-base">
                                {about.shortDescription}
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
                                aria-label="GitHub profile"
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
                    
                    {/* Image Col */}
                    <div className="w-full flex md:justify-end">
                        <img width="400" height="400" className="max-w-sm w-full rounded-md" src="images/avatar.avif" alt="Tushar Rai" fetchpriority="high"/>
                    </div>
                
                </div>
            </section>


            {/* Skills */}
            <section className="flex justify-center py-9 md:py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4">

                    <div className="text-center mb-10 space-y-3">
                        <h2 className="bg-gray-200 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Skills</h2>
                        <p className="text-base">
                            The skills, tools and technologies I am good at.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
                        {skills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.site || "#"}
                            target={skill.site ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                        >
                            <div className="h-10 w-10 md:w-13 md:h-13 flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} logo`}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <p className="text-sm mt-2 capitalize">
                                {skill.name}
                            </p>
                        </a>
                        ))}
                    </div>
                </div>
            </section>


            {/* Projects */}
            <section className="flex justify-center py-9 md:py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="bg-gray-200 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Work</h2>
                        <p className="text-base">
                            Here are some of the selected projects that<br/>
                            showcase my passion for front-end development.
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {projectsToShow.map((work, index) => (
                            <ProjectCard key={index} work={work} />
                        ))}
                    </div>

                    <div className="mt-16 md:mt-20 text-center">
                        <NavLink to="/works" className="relative inline-flex items-center text-sm font-semibold justify-center px-5 py-2 overflow-hidden text-[var(--color-primary)] transition duration-300 ease-out border-2 border-[var(--color-primary)] rounded-full group cursor-pointer">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[var(--color-primary)] group-hover:translate-x-0 ease-out">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 group-hover:translate-x-full ease-out">
                                VIEW ALL
                            </span>
                            <span className="relative invisible">
                                VIEW ALL
                            </span>
                        </NavLink>
                    </div>
                </div>

            </section>


{/*         <section className="flex justify-center py-9 md:py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4 text-center">
                    <div className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-lg md:text-2xl font-medium">"{testimonials.message}"</p>
                        </blockquote>   
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://niten-design.vercel.app/avatar.png" alt="profile picture"/>
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <div className="pr-3 font-medium text-sm md:text-base">{testimonials.name}</div>
                                <div className="pl-3 text-sm font-light text-gray-200">{testimonials.designation} at {testimonials.company}</div>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </section> */}

        </div>

    )
}


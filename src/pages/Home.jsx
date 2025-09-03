import React from 'react'
import { skills, works, profile, about } from '../content'

export default function Home() {
    return(

        <div>
            {/* Introduction Col */}
            <section className="flex justify-center py-18 border-b border-neutral-800">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-20 md:items-center max-w-6xl w-full mx-auto px-4">
                    <div className="space-y-8">
                        <div>
                            <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-tight text-primary heading-text">Hi, I'm {profile.firstName}</h1>
                            <p className="mt-1 text-sm md:text-base">
                                {about.shortDescription}
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-1 text-sm">
                                <svg className="shrink-0 size-5.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"></path>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"></path>
                                </svg>

                                <p>Namchi, Sikkim</p>
                            </div>

                            <div className="flex gap-2 text-sm items-center ml-1.5">
                                <div className="bg-green-600 p-1 h-2 w-2 rounded-full"></div>

                                <p>Available for new projects</p>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <a className="py-3 px-6 inline-flex justify-center items-center gap-x-2.5 text-sm font-bold rounded-full bg-[var(--color-primary)] text-black" href="{{resume}}">
                                RESUME
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 18L18 6M18 6H9M18 6V15"></path>
                                </svg>
                            </a>

                            <a
                            className="p-3 rounded-full bg-neutral-800 text-[var(--color-primary)]"
                            href="{{linkedin}}"
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
                                className="p-3 rounded-full bg-neutral-800 text-[var(--color-primary)]"
                                href="{{github}}"
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
                    <div className="relative me-4 lg:me-0 w-full max-w-sm">
                        <img className="w-full rounded-md" src="" alt="Hero Image" />
                        <div className="absolute inset-0 -z-1 bg-linear-to-tr from-gray-100 via-white/30 to-white/10 w-full max-w-sm rounded-md mt-4 -mb-4 ms-4 -me-4 lg:mt-6 lg:-mb-6 lg:ms-6 lg:-me-6"></div>

                    </div>
                
                </div>
            </section>


            <section className="flex justify-center py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="bg-gray-200/80 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Skills</h2>
                        <p className="text-base">
                            The skills, tools and technologies I am good at.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 place-items-center">
                        {skills.map((skill, index) => (
                        <a
                            key={index}
                            href={skill.site || "#"}
                            target={skill.site ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
                        >
                            <div className="w-14 h-14 flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
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


            <section className="flex justify-center py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="bg-gray-200/80 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Work</h2>
                        <p className="text-base">
                            Here are some of the selected projects that<br/>
                            showcase my passion for front-end development.
                        </p>
                    </div>

                    <div className="grid gap-12">
                        {works.map((work, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Image */}
                            <div className="relative w-full max-w-md mx-auto px-5 py-10 bg-neutral-900 rounded-lg">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full rounded-md shadow-md"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-semibold">{work.title}</h3>
                                    <p className="text-sm/normal font-light">{work.description}</p>
                                </div>

                                <div className="text-sm">
                                    <div className="font-semibold"> PROJECT INFO </div>
                                    <hr className="my-2 text-gray-700"/>

                                    <div className="flex justify-between">
                                        <p>Year</p>
                                        <p>{work.year}</p>
                                    </div>
                                    
                                    <hr className="my-2 text-gray-700"/>

                                    <div className="flex justify-between">
                                        <p>Role</p>
                                        <p>{work.role}</p>
                                    </div>

                                    <hr className="mt-2 text-gray-700"/>
                                </div>

                                <div className="flex gap-3 mt-6">
                                    <a
                                    href={work.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex gap-1 items-center text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-0.5 font-semibold"
                                    >
                                        <p>LIVE DEMO</p>
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 18L18 6M18 6H9M18 6V15"></path>
                                        </svg>

                                    </a>
                                    <a
                                    href={work.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex gap-1 items-center text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-0.5 font-semibold"
                                    >
                                        <p>SEE ON GITHUB</p>
                                        <img src="icons/github.svg" className="shrink-0 size-4 ml-0.5"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="flex justify-center py-18 border-b border-neutral-800">
                <div className="md:items-center max-w-6xl w-full mx-auto px-4 text-center">
                    <div className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-lg md:text-2xl font-medium">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                            <div className="flex items-center divide-x-2 divide-gray-500">
                                <div className="pr-3 font-medium text-sm md:text-base">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500">CEO at Google</div>
                            </div>
                        </figcaption>
                    </div>
                </div>
            </section>
        </div>

    )
}

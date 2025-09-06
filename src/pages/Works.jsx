import React from 'react'
import { works } from '../content';

export default function Works() {
  return (
    <div className="border-b border-neutral-700">
        <div className="md:items-center max-w-6xl w-full mx-auto px-4 py-9 lg:py-15">
            <div className="text-center mb-10">
                <h2 className="bg-gray-200/80 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Works</h2>
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
                            <h3 className="text-2xl font-semibold heading-text">{work.title}</h3>
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

                            <hr className="my-2 text-gray-700"/>

                            <div className="flex justify-between">
                                <p>Tech Stack</p>
                                <p>{work.techStack}</p>
                            </div>

                            <hr className="mt-2 text-gray-700"/>
                        </div>

                        <div className="flex gap-3 mt-6">
                        {work.demo && (
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
                        )}

                        {work.github && (
                            <a
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex gap-1 items-center text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-0.5 font-semibold"
                            >
                                <p>SEE ON GITHUB</p>
                                <img src="icons/github.svg" className="shrink-0 size-4 ml-0.5"></img>
                            </a>
                        )}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

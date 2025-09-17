import React from 'react'
import { works } from '../content';
import ProjectCard from '../components/ProjectCard';

export default function Works() {
  return (
    <div className="border-b border-neutral-700">
    
        <section className="grid md:grid-cols-2 gap-8 md:items-start max-w-[65rem] w-full mx-auto px-4 py-9 lg:py-15">
        
            <h1 className="block text-3xl font-semibold sm:text-4xl lg:text-6xl lg:leading-tight text-primary heading-text">Works</h1>

            <div className="space-y-2">
                <p className="block text-base md:text-lg font-semibold">List of my works and projects.</p>
                <p className="mt-1 text-sm">
                    Here is a collection of all my projects. 
                    I invite you to explore my work and see my dedication 
                    to building things.  
                </p>
            </div>

        </section>


        <section className="md:items-center max-w-6xl w-full mx-auto px-4 py-9 lg:py-15">
            <div className="grid gap-12">
                {works.map((work, index) => (
                    <ProjectCard key={index} work={work} />
                ))}
            </div>
        </section>
    </div>
  );
}

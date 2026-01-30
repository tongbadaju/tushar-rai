import React from 'react'
import { works } from '../content';
import ProjectCard from '../components/ProjectCard';

export default function Works() {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl w-full mx-auto px-4">
          
          <div className="space-y-2">
            <p className="section-title">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold heading-text">
              My Works
            </h1>
          </div>

          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg font-medium text-[var(--text-primary)]">
              A collection of projects I've built.
            </p>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Here is a collection of all my projects. I invite you to explore my work and see my dedication to building great digital experiences.
            </p>
          </div>

        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-separator" />

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl w-full mx-auto px-4">
          <div className="space-y-20 md:space-y-28">
            {works.map((work, index) => (
              <ProjectCard key={index} work={work} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import {
  Github,
  FolderOpen,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
} from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  summary: string;
  fullDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const allProjects = siteConfig.projects as Project[];
  const totalProjects = allProjects.length;

  const visibleCount = 3;

  const prevProject = () => {
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const nextProject = () => {
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % totalProjects;
    if (i >= totalProjects) break;
    visibleProjects.push(allProjects[index]);
  }

  const showNavigation = totalProjects > visibleCount;

  return (
    <>
      <section
        id="projects"
        className="section-dark flex min-h-screen items-center px-6 py-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Portfolio
            </span>
            <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-[var(--section-muted)]">
              A selection of my recent work showcasing web development, AI, and software engineering projects.
            </p>
          </div>

          <div className="relative flex items-center gap-4 md:gap-8">
            {/* Left Arrow */}
            {showNavigation && (
              <button
                onClick={prevProject}
                className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Project Grid */}
            <div className="flex-1">
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => (
                  <article
                    key={`${project.title}-${index}`}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--section-border)] bg-[var(--section-card)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--section-card)] via-transparent to-transparent opacity-60" />
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[var(--section-border)]">
                          <FolderOpen className="h-16 w-16 text-[var(--section-muted)]/40" />
                        </div>
                      )}
                      
                      {/* Quick Action Buttons - Visible on Hover */}
                      <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/90 text-background backdrop-blur-sm transition-all hover:scale-110 hover:bg-foreground"
                            aria-label={`View ${project.title} on GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground backdrop-blur-sm transition-all hover:scale-110 hover:bg-primary/90"
                            aria-label={`Visit ${project.title} website`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Globe className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-2 text-xl font-bold text-[var(--section-fg)] transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--section-muted)]">
                        {project.summary}
                      </p>

                      {/* Tech Tags */}
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-[var(--section-bg)]/50 px-3 py-1 text-xs font-medium text-[var(--section-fg)]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-full bg-[var(--section-bg)]/50 px-3 py-1 text-xs font-medium text-[var(--section-muted)]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links Row */}
                      <div className="flex items-center gap-4 border-t border-[var(--section-border)] pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-[var(--section-muted)] transition-colors hover:text-[var(--section-fg)]"
                            aria-label={`View ${project.title} on GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                            <span>Source</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                            aria-label={`Visit ${project.title} website`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Globe className="h-4 w-4" />
                            <span>Visit Site</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            {showNavigation && (
              <button
                onClick={nextProject}
                className="hidden md:flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Progress Dots */}
          {showNavigation && (
            <div className="mt-10 flex justify-center gap-2">
              {allProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setStartIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === startIndex 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-[var(--section-border)] hover:bg-[var(--section-muted)]'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile Navigation */}
          {showNavigation && (
            <div className="mt-8 flex justify-center gap-4 md:hidden">
              <button
                onClick={prevProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--section-border)] bg-[var(--section-card)] text-[var(--section-fg)] transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal - Enhanced */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl bg-card p-0 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            {selectedProject.image && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-background transition-all hover:bg-foreground hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="mb-4 text-3xl font-bold text-foreground">
                {selectedProject.title}
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {selectedProject.fullDescription}
              </p>

              <div className="mb-8">
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 border-t border-border pt-6">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border-2 border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-foreground hover:bg-secondary"
                  >
                    <Github className="h-5 w-5" />
                    <span>View Source Code</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Globe className="h-5 w-5" />
                    <span>Visit Live Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

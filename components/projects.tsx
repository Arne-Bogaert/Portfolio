'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config';
import {
  ArrowUpRight,
  Github,
  FolderOpen,
  X,
  ChevronLeft,
  ChevronRight,
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

  // We tonen altijd 3 items tegelijk
  const visibleCount = 3;

  // Functie voor vorig project (looping)
  const prevProject = () => {
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Functie voor volgend project (looping)
  const nextProject = () => {
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  // Bereken welke 3 projecten getoond moeten worden op basis van de startIndex
  // Dit zorgt voor het "roterende" effect
  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % totalProjects;
    // Als er minder dan 3 projecten in totaal zijn, stop dan met toevoegen om duplicaten te voorkomen
    if (i >= totalProjects) break;
    visibleProjects.push(allProjects[index]);
  }

  // Bepaal of we navigatiepijltjes moeten tonen (alleen als er meer projecten zijn dan we tonen)
  const showNavigation = totalProjects > visibleCount;

  return (
    <>
      <section
        id="projects"
        className="section-dark flex min-h-screen items-center px-6 py-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          {' '}
          {/* Iets breder gemaakt voor de pijltjes */}
          <h2 className="mb-16 text-center text-3xl font-semibold">
            My Projects
          </h2>
          <div className="relative flex items-center gap-4 md:gap-8">
            {/* Linker Pijl */}
            {showNavigation && (
              <button
                onClick={prevProject}
                className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:bg-secondary disabled:opacity-50"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Project Grid */}
            <div className="flex-1">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => (
                  <article
                    // Key is belangrijk voor de animatie bij het wisselen
                    key={`${project.title}-${index}`}
                    className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg animate-in fade-in slide-in-from-right-4 duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image/Placeholder */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <FolderOpen className="h-16 w-16 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>

                      {/* Links */}
                      <div className="flex gap-3 border-t border-border pt-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`View ${project.title} on GitHub`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`View ${project.title} live`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            <span>Live</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Rechter Pijl */}
            {showNavigation && (
              <button
                onClick={nextProject}
                className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-110 hover:bg-secondary disabled:opacity-50"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          {/* Mobiele navigatie knoppen*/}
          {showNavigation && (
            <div className="mt-8 flex justify-center gap-4 md:hidden">
              <button
                onClick={prevProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextProject}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-secondary"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal (Ongewijzigd) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {selectedProject.image && (
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {selectedProject.title}
            </h3>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              {selectedProject.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 border-t border-border pt-6">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                >
                  <Github className="h-4 w-4" />
                  <span>View Code</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  <span>View Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

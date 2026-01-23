"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/config"
import { ArrowUpRight, Github, FolderOpen, X } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  summary: string
  fullDescription: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Take first 3 projects for featured display
  const featuredProjects = siteConfig.projects.slice(0, 3) as Project[]

  return (
    <>
      <section
        id="projects"
        className="section-light flex min-h-screen items-center px-6 py-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-16 text-center text-3xl font-semibold text-foreground">
            Projects
          </h2>

          {/* 3-column grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={index}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image/Placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  {project.image ? (
                    <Image
                      src={project.image || "/placeholder.svg"}
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
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Project Image */}
            {selectedProject.image && (
              <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {selectedProject.title}
            </h3>

            {/* Full Description */}
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {selectedProject.fullDescription}
            </p>

            {/* Tech Stack */}
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

            {/* Links in modal */}
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
  )
}

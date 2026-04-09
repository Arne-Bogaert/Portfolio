'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { ExternalLink, Briefcase } from 'lucide-react';

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const sortedExperiences = [...siteConfig.experiences].sort(
    (a, b) => b.startYear - a.startYear,
  );

  return (
    <section
      id="experience"
      className="section-light flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Career Journey
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Experience
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            My professional journey and educational background in technology and software development.
          </p>
        </div>

        {/* Experience Cards - Modern Stack Layout */}
        <div className="space-y-6">
          {sortedExperiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isExpanded 
                    ? 'border-primary bg-card shadow-xl shadow-primary/5' 
                    : 'border-border bg-card/50 hover:border-primary/30 hover:bg-card'
                }`}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {/* Main Content */}
                <div className="cursor-pointer p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center">
                    {/* Logo */}
                    <div className="shrink-0">
                      {exp.logo ? (
                        <div className={`h-16 w-16 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                          isExpanded ? 'border-primary' : 'border-border'
                        }`}>
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                          isExpanded ? 'border-primary bg-primary/10' : 'border-border bg-secondary'
                        }`}>
                          <Briefcase className={`h-7 w-7 transition-colors ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          exp.endYear === null 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-secondary text-muted-foreground'
                        }`}>
                          {exp.startYear} - {exp.endYear || 'Present'}
                        </span>
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Expand Indicator */}
                    <div className={`hidden h-10 w-10 items-center justify-center rounded-full border-2 transition-all md:flex ${
                      isExpanded 
                        ? 'rotate-180 border-primary bg-primary text-primary-foreground' 
                        : 'border-border bg-secondary text-muted-foreground group-hover:border-primary/50'
                    }`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'mt-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-border pt-6">
                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active indicator line */}
                {isExpanded && (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

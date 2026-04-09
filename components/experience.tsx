'use client';

import { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Sort experiences by startYear descending (most recent first)
  const sortedExperiences = [...siteConfig.experiences].sort(
    (a, b) => b.startYear - a.startYear,
  );

  return (
    <section
      id="experience"
      className="section-light flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-semibold">Experience</h2>

        {/* Centered Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--section-border)]" />

          {/* Experience entries */}
          <div className="space-y-12">
            {sortedExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline dot or logo */}
                  <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
                    {exp.logo ? (
                      <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[var(--section-border)] bg-[var(--section-card)]">
                        <Image
                          src={exp.logo || '/placeholder.svg'}
                          alt={`${exp.company} logo`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-3 w-3 rounded-full border-2 border-[var(--section-fg)] bg-[var(--section-bg)]" />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    className={`relative w-[calc(50%-2rem)] cursor-pointer transition-all duration-300 ${
                      isLeft
                        ? 'mr-auto pr-8 text-right'
                        : 'ml-auto pl-8 text-left'
                    }`}
                  >
                    {/* Connector line to center */}
                    <div
                      className={`absolute top-7 h-px w-8 bg-[var(--section-border)] ${
                        isLeft ? 'right-0' : 'left-0'
                      }`}
                    />

                    {/* Card */}
                    <div
                      className={`rounded-lg border border-[var(--section-border)] bg-[var(--section-card)] p-5 transition-all duration-300 ${
                        isHovered ? 'shadow-lg' : ''
                      }`}
                    >
                      {/* Date */}
                      <div className="mb-2 text-sm text-[var(--section-muted)]">
                        {exp.startYear} - {exp.endYear || 'Present'}
                      </div>

                      {/* Role */}
                      <h3 className="text-lg font-semibold">{exp.role}</h3>

                      {/* Company */}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--section-muted)] transition-colors hover:text-[var(--section-fg)] hover:underline"
                      >
                        {exp.company}
                      </a>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isHovered
                            ? 'mt-4 max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="mb-4 text-sm leading-relaxed text-[var(--section-muted)]">
                          {exp.description}
                        </p>

                        {/* Tech stack */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isLeft ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-[var(--section-bg)] px-2 py-1 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

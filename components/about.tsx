import { siteConfig } from '@/lib/config';
import { Music, BookOpen, Code2, Cpu } from 'lucide-react';
import Image from 'next/image';

const interests = [
  { icon: Music, label: 'Making Music' },
  { icon: BookOpen, label: 'Reading Books' },
  { icon: Code2, label: 'New Technologies' },
  { icon: Cpu, label: 'Chess' },
];

export function About() {
  return (
    <section
      id="about"
      className="section-dark flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[var(--section-card)] px-4 py-1.5 text-sm font-medium text-[var(--section-fg)]">
            Get to Know Me
          </span>
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left side - Profile Photo */}
          <div className="flex items-center justify-center lg:col-span-2">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[var(--section-border)] opacity-50" />
              <div className="absolute -inset-8 rounded-3xl border border-[var(--section-border)] opacity-30" />
              
              {/* Profile Photo */}
              <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-3xl border-2 border-[var(--section-border)] shadow-2xl md:w-80">
                <Image
                  src="/arne-profile.jpg"
                  alt="Arne Bogaert"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="flex flex-col justify-center space-y-8 lg:col-span-3">
            {/* About text */}
            <div className="space-y-4">
              <p className="text-xl font-medium leading-relaxed text-[var(--section-fg)]">
                {siteConfig.about.intro}
              </p>
              <p className="leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.description}
              </p>
              <p className="leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.currentRole}
              </p>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl border border-[var(--section-border)] bg-[var(--section-card)] p-6">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--section-muted)]">
                Education
              </h3>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/20 p-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--section-fg)]">Applied Computer Science</p>
                  <p className="text-sm text-[var(--section-muted)]">HoGent</p>
                  <p className="mt-1 inline-block rounded-full bg-[var(--section-bg)] px-3 py-1 text-xs font-medium text-[var(--section-fg)]">
                    2023 - Present
                  </p>
                </div>
              </div>
            </div>

            {/* Interests Grid */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--section-muted)]">
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-[var(--section-border)] bg-[var(--section-card)] p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                  >
                    <interest.icon className="h-6 w-6 text-[var(--section-muted)] transition-colors group-hover:text-primary" />
                    <span className="text-center text-xs font-medium text-[var(--section-fg)]">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from '@/lib/config';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

// Refined code particles with better visual hierarchy
const codeParticles = [
  { symbol: '{', top: '10%', left: '5%', delay: '0s', duration: '25s', size: 'text-4xl', opacity: 'opacity-20' },
  { symbol: 'const', top: '20%', left: '15%', delay: '2s', duration: '30s', size: 'text-lg', opacity: 'opacity-15' },
  { symbol: '=>', top: '15%', left: '85%', delay: '5s', duration: '20s', size: 'text-4xl', opacity: 'opacity-20' },
  { symbol: '</>', top: '40%', left: '8%', delay: '7s', duration: '32s', size: 'text-2xl', opacity: 'opacity-25' },
  { symbol: '[]', top: '45%', left: '92%', delay: '3s', duration: '26s', size: 'text-3xl', opacity: 'opacity-20' },
  { symbol: 'async', top: '35%', left: '80%', delay: '18s', duration: '31s', size: 'text-lg', opacity: 'opacity-15' },
  { symbol: 'await', top: '80%', left: '8%', delay: '20s', duration: '24s', size: 'text-lg', opacity: 'opacity-15' },
  { symbol: ';', top: '85%', left: '85%', delay: '15s', duration: '24s', size: 'text-5xl', opacity: 'opacity-20' },
  { symbol: 'return', top: '75%', left: '75%', delay: '6s', duration: '27s', size: 'text-lg', opacity: 'opacity-15' },
  { symbol: 'import', top: '5%', left: '50%', delay: '0s', duration: '36s', size: 'text-sm', opacity: 'opacity-10' },
];

export function Hero() {
  return (
    <section className="section-light relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Animated code particles */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {codeParticles.map((item, index) => (
          <div
            key={index}
            className={`animate-fly absolute font-mono font-bold text-foreground ${item.size} ${item.opacity}`}
            style={{
              top: item.top,
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Name */}
        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {siteConfig.name}
        </h1>

        {/* Roles with visual separator */}
        <div className="mb-6 flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <span className="text-lg font-medium text-foreground sm:text-xl">{siteConfig.role}</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block"></span>
          <span className="text-lg font-medium text-foreground sm:text-xl">{siteConfig.roleSecondary}</span>
        </div>

        {/* Location */}
        <p className="mb-10 text-muted-foreground">
          Based in <span className="font-medium text-foreground">{siteConfig.location}</span>
        </p>

        {/* Social Links - Enhanced */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background hover:shadow-lg"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-muted-foreground transition-all duration-300 hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-background hover:shadow-lg"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#projects"
          className="group mt-12 inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-foreground/90 hover:shadow-xl hover:shadow-foreground/20"
        >
          View My Work
          <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}

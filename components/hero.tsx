import { siteConfig } from '@/lib/config';
import { Github, Linkedin, Mail } from 'lucide-react';

// Een grotere lijst met meer symbolen en variatie
const codeParticles = [
  // Links boven
  {
    symbol: '{',
    top: '10%',
    left: '5%',
    delay: '0s',
    duration: '25s',
    size: 'text-4xl',
  },
  {
    symbol: 'const',
    top: '20%',
    left: '15%',
    delay: '2s',
    duration: '30s',
    size: 'text-lg',
  },
  {
    symbol: '&&',
    top: '15%',
    left: '25%',
    delay: '12s',
    duration: '28s',
    size: 'text-3xl',
  },

  // Rechts boven
  {
    symbol: '}',
    top: '15%',
    left: '85%',
    delay: '5s',
    duration: '20s',
    size: 'text-5xl',
  },
  {
    symbol: '=>',
    top: '25%',
    left: '75%',
    delay: '8s',
    duration: '22s',
    size: 'text-4xl',
  },
  {
    symbol: 'try',
    top: '10%',
    left: '60%',
    delay: '15s',
    duration: '35s',
    size: 'text-xl',
  },

  // Midden gebieden
  {
    symbol: '</>',
    top: '40%',
    left: '10%',
    delay: '7s',
    duration: '32s',
    size: 'text-2xl',
  },
  {
    symbol: '!=',
    top: '50%',
    left: '90%',
    delay: '1s',
    duration: '29s',
    size: 'text-3xl',
  },
  {
    symbol: '[]',
    top: '45%',
    left: '5%',
    delay: '3s',
    duration: '26s',
    size: 'text-4xl',
  },
  {
    symbol: 'async',
    top: '35%',
    left: '80%',
    delay: '18s',
    duration: '31s',
    size: 'text-lg',
  },

  // Links onder
  {
    symbol: '/>',
    top: '70%',
    left: '15%',
    delay: '4s',
    duration: '30s',
    size: 'text-3xl',
  },
  {
    symbol: 'await',
    top: '80%',
    left: '8%',
    delay: '20s',
    duration: '24s',
    size: 'text-lg',
  },
  {
    symbol: 'function',
    top: '65%',
    left: '25%',
    delay: '10s',
    duration: '33s',
    size: 'text-sm',
  },

  // Rechts onder
  {
    symbol: ';',
    top: '85%',
    left: '80%',
    delay: '15s',
    duration: '24s',
    size: 'text-5xl',
  },
  {
    symbol: 'return',
    top: '75%',
    left: '70%',
    delay: '6s',
    duration: '27s',
    size: 'text-lg',
  },
  {
    symbol: '*',
    top: '90%',
    left: '60%',
    delay: '9s',
    duration: '23s',
    size: 'text-3xl',
  },

  // Extra opvulling
  {
    symbol: '||',
    top: '60%',
    left: '95%',
    delay: '11s',
    duration: '29s',
    size: 'text-3xl',
  },
  {
    symbol: 'import',
    top: '5%',
    left: '45%',
    delay: '0s',
    duration: '36s',
    size: 'text-sm',
  },
  {
    symbol: 'export',
    top: '95%',
    left: '35%',
    delay: '14s',
    duration: '34s',
    size: 'text-sm',
  },
  {
    symbol: ':',
    top: '30%',
    left: '95%',
    delay: '16s',
    duration: '25s',
    size: 'text-4xl',
  },
];

export function Hero() {
  return (
    <section className="section-light relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* --- ACHTERGROND: Vliegende deeltjes --- */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        {codeParticles.map((item, index) => (
          <div
            key={index}
            className={`animate-fly absolute font-mono font-bold text-muted-foreground/60 ${item.size}`}
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
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mb-2 text-lg text-muted-foreground">{siteConfig.role}</p>
        <p className="mb-2 text-lg text-muted-foreground">
          {siteConfig.roleSecondary}
        </p>
        <p className="mb-8 text-lg text-muted-foreground">
          Based in {siteConfig.location}
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

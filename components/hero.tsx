import { siteConfig } from '@/lib/config';
import { Github, Linkedin, Mail } from 'lucide-react';

// Configuratie voor de zwevende symbolen
const codeParticles = [
  {
    symbol: '{',
    top: '15%',
    left: '10%',
    delay: '0s',
    duration: '25s',
    size: 'text-4xl',
  },
  {
    symbol: '}',
    top: '25%',
    left: '85%',
    delay: '5s',
    duration: '20s',
    size: 'text-5xl',
  },
  {
    symbol: '/>',
    top: '60%',
    left: '15%',
    delay: '2s',
    duration: '30s',
    size: 'text-3xl',
  },
  {
    symbol: '=>',
    top: '70%',
    left: '80%',
    delay: '8s',
    duration: '22s',
    size: 'text-4xl',
  },
  {
    symbol: '&&',
    top: '10%',
    left: '60%',
    delay: '12s',
    duration: '28s',
    size: 'text-3xl',
  },
  {
    symbol: ';',
    top: '85%',
    left: '40%',
    delay: '15s',
    duration: '24s',
    size: 'text-5xl',
  },
  {
    symbol: '[]',
    top: '40%',
    left: '5%',
    delay: '3s',
    duration: '26s',
    size: 'text-4xl',
  },
  {
    symbol: '</>',
    top: '30%',
    left: '50%',
    delay: '7s',
    duration: '35s',
    size: 'text-2xl',
  },
];

export function Hero() {
  return (
    <section className="section-light relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/*  De zwevende symbolen  */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none">
        {codeParticles.map((item, index) => (
          <div
            key={index}
            className={`animate-float-slow absolute font-mono font-bold text-muted-foreground/20 ${item.size}`}
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

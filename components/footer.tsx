import { siteConfig } from '@/lib/config';
import { Github, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground">{siteConfig.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.role} & {siteConfig.roleSecondary}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-all hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-border" />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-primary" /> using Next.js & Tailwind CSS
            </p>
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

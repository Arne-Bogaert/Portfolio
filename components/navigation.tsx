'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = siteConfig.navLinks.map((link) =>
        link.href.replace('#', ''),
      );

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <nav className={cn(
          "relative flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 md:justify-center md:px-8",
          isScrolled 
            ? "border-border/60 bg-background/90 shadow-lg backdrop-blur-xl" 
            : "border-border/30 bg-background/70 backdrop-blur-md"
        )}>
          {/* Logo - visible on mobile */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-foreground md:hidden"
            onClick={() => window.scrollTo(0, 0)}
          >
            AB
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-all hover:bg-secondary/80 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={cn(
          "mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/95 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}>
          <ul className="flex flex-col gap-1 p-4">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-all',
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}

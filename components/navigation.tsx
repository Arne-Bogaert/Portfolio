'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/config';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Deze functie houdt bij waar je scrollt
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navLinks.map((link) =>
        link.href.replace('#', ''),
      );

      // Zoek welke sectie nu in beeld is
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Als de sectie in het bovenste deel van het scherm is (met wat marge)
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
    <header className="fixed top-0 z-50 w-full px-6 py-4">
      <div className="mx-auto max-w-5xl">
        <nav className="relative flex items-center justify-between md:justify-center rounded-full border border-border/40 bg-background/80 px-6 py-3 shadow-sm backdrop-blur-md transition-all">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
            onClick={() => window.scrollTo(0, 0)}
          ></Link>

          {/* Desktop Navigatie */}
          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      isActive
                        ? 'text-primary font-semibold' // Actieve stijl
                        : 'text-muted-foreground', // Inactieve stijl
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobiele Hamburger Menu Knop */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobiel Menu Uitklap */}
        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-border/40 bg-background/95 p-6 shadow-xl backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

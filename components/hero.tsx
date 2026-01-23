import { siteConfig } from "@/lib/config"
import { Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="section-light flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {siteConfig.name}
        </h1>
        
        <p className="mb-2 text-lg text-muted-foreground">
          {siteConfig.role}
        </p>
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
  )
}

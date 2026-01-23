import { siteConfig } from "@/lib/config"

export function About() {
  return (
    <section id="about" className="section-dark flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-16 text-center text-3xl font-semibold">
          About Me
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg border-2 border-dashed border-[var(--section-border)] bg-[var(--section-card)]">
              {/* Replace this div with your image:
                  <Image 
                    src="/your-photo.jpg" 
                    alt="Your Name" 
                    fill 
                    className="object-cover" 
                  />
              */}
              <div className="absolute inset-0 flex items-center justify-center text-[var(--section-muted)]">
                <span className="text-sm">Your Photo Here</span>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* About text */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.intro}
              </p>
              <p className="leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.description}
              </p>
              <p className="leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.currentRole}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Education
              </h3>
              <div className="border-l-2 border-[var(--section-border)] pl-4">
                <p className="font-medium">Computer Science</p>
                <p className="text-sm text-[var(--section-muted)]">Your University</p>
                <p className="text-sm text-[var(--section-muted)]">2018 - 2022</p>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Interests
              </h3>
              <p className="leading-relaxed text-[var(--section-muted)]">
                {siteConfig.about.interests}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

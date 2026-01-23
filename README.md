# Portfolio Website Documentation

A modern, customizable portfolio website built with Next.js 16, Tailwind CSS, and TypeScript. Features a clean cream/dark alternating color scheme, interactive timeline, project modals, and a working contact form.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Quick Start Customization](#quick-start-customization)
3. [Detailed Customization Guide](#detailed-customization-guide)
   - [Personal Information](#personal-information)
   - [About Section](#about-section)
   - [Adding Your Photo](#adding-your-photo)
   - [Experience Timeline](#experience-timeline)
   - [Projects](#projects)
   - [Skills](#skills)
   - [Social Links](#social-links)
4. [Styling & Colors](#styling--colors)
5. [Contact Form Setup](#contact-form-setup)
6. [File Reference](#file-reference)
7. [Deployment](#deployment)

---

## Project Structure

```
/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API endpoint
│   ├── globals.css             # Global styles & color themes
│   ├── layout.tsx              # Root layout with fonts & metadata
│   └── page.tsx                # Main page assembling all sections
├── components/
│   ├── about.tsx               # About section with photo placeholder
│   ├── contact.tsx             # Contact form section
│   ├── experience.tsx          # Interactive timeline
│   ├── footer.tsx              # Footer with social links
│   ├── hero.tsx                # Hero/landing section
│   ├── navigation.tsx          # Fixed navigation bar
│   └── projects.tsx            # Projects grid with modal
├── lib/
│   ├── config.ts               # ** MAIN CONFIGURATION FILE **
│   └── utils.ts                # Utility functions
└── public/
    └── projects/               # Project images folder
```

---

## Quick Start Customization

**90% of customization happens in one file: `/lib/config.ts`**

Open this file and update:

1. Your name, role, and location
2. Your email and social links
3. Your about section text
4. Your experiences (they auto-sort by date)
5. Your projects (first 3 show as featured cards)
6. Your skills/tech stack

---

## Detailed Customization Guide

### Personal Information

In `/lib/config.ts`, update the top section:

```typescript
export const siteConfig = {
  // Personal Information
  name: "Your Name",                    // Displayed in hero section
  role: "AI & Data Engineer",           // Primary role title
  roleSecondary: "Fullstack Web Developer", // Secondary role title
  email: "hello@yourname.com",          // Contact email
  location: "Belgium",                  // Your location
  // ...
}
```

### About Section

Update the `about` object in `/lib/config.ts`:

```typescript
about: {
  intro: "I'm a developer passionate about...",      // Opening statement
  description: "My favorite work lies at...",        // More detail about you
  currentRole: "Currently, I'm a Full Stack...",    // What you're doing now
  interests: "In my spare time, I enjoy...",        // Hobbies/interests
},
```

**Education & University**: To change the education info, edit `/components/about.tsx` directly:

```tsx
{/* Education */}
<div>
  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
    Education
  </h3>
  <div className="border-l-2 border-[var(--section-border)] pl-4">
    <p className="font-medium">Your Degree</p>           {/* Change this */}
    <p className="text-sm text-[var(--section-muted)]">Your University</p>  {/* Change this */}
    <p className="text-sm text-[var(--section-muted)]">2018 - 2022</p>      {/* Change this */}
  </div>
</div>
```

### Adding Your Photo

In `/components/about.tsx`, find the image placeholder section and replace it:

**Before (placeholder):**
```tsx
<div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg border-2 border-dashed border-[var(--section-border)] bg-[var(--section-card)]">
  <div className="absolute inset-0 flex items-center justify-center text-[var(--section-muted)]">
    <span className="text-sm">Your Photo Here</span>
  </div>
</div>
```

**After (with your image):**
```tsx
import Image from "next/image"  // Add this import at the top of the file

// Then replace the placeholder div with:
<div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-lg">
  <Image 
    src="/your-photo.jpg"    // Place image in /public folder
    alt="Your Name" 
    fill 
    className="object-cover" 
  />
</div>
```

**Steps:**
1. Add your photo to the `/public` folder (e.g., `/public/your-photo.jpg`)
2. Import the `Image` component at the top of `/components/about.tsx`
3. Replace the placeholder div with the Image component

### Experience Timeline

Experiences are defined in `/lib/config.ts`. The timeline automatically:
- Sorts by `startYear` (newest first)
- Alternates items left/right on the timeline
- Expands on hover to show description and tech stack

**Add a new experience:**

```typescript
experiences: [
  {
    company: "Company Name",           // Organization name
    companyUrl: "https://company.com", // Link to company (optional)
    role: "Your Job Title",            // Your role/position
    startYear: 2023,                   // Start year (number)
    endYear: null,                     // End year (number) or null for "Present"
    description: "What you did there. Key achievements and responsibilities.",
    technologies: ["React", "Node.js", "PostgreSQL"],  // Tech stack used
  },
  // Add more experiences here...
],
```

**Example with multiple experiences:**

```typescript
experiences: [
  {
    company: "Google",
    companyUrl: "https://google.com",
    role: "Senior Software Engineer",
    startYear: 2023,
    endYear: null,  // Currently working here
    description: "Leading frontend architecture for Google Cloud Console.",
    technologies: ["Angular", "TypeScript", "GCP"],
  },
  {
    company: "HoGent",
    companyUrl: "https://hogent.be",
    role: "Student Developer",
    startYear: 2020,
    endYear: 2023,
    description: "Studied Applied Computer Science with focus on web development.",
    technologies: ["Java", "JavaScript", "SQL"],
  },
  {
    company: "Freelance",
    companyUrl: null,
    role: "Web Developer",
    startYear: 2019,
    endYear: 2020,
    description: "Built websites for local businesses.",
    technologies: ["WordPress", "PHP", "CSS"],
  },
],
```

### Projects

Projects are defined in `/lib/config.ts`. The first 3 projects display as featured cards.

**Add a new project:**

```typescript
projects: [
  {
    title: "Project Name",                    // Project title
    summary: "Short one-line description.",   // Shows on card (keep brief)
    fullDescription: "Detailed description that appears in the modal when clicked. Include features, challenges, and outcomes.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],  // Tech stack
    liveUrl: "https://yourproject.com",       // Live demo link (optional)
    githubUrl: "https://github.com/you/repo", // GitHub link (optional)
    image: "/projects/project-1.jpg",         // Image path (optional)
  },
  // Add more projects...
],
```

**Adding project images:**
1. Create images (recommended size: 800x600px or 16:9 ratio)
2. Place them in `/public/projects/` folder
3. Reference them as `/projects/your-image.jpg` in the config

### Skills

Skills are categorized automatically. Update in `/lib/config.ts`:

```typescript
skills: [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  // Add your own...
],
```

### Social Links

Update your social media links in `/lib/config.ts`:

```typescript
socials: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",  // Optional
},
```

---

## Styling & Colors

### Color Scheme

The site uses two alternating color schemes defined in `/app/globals.css`:

**Light sections (Hero, Projects):**
```css
.section-light {
  --section-bg: oklch(0.96 0.01 85);      /* Cream background */
  --section-fg: oklch(0.25 0.02 60);      /* Dark brown text */
  --section-muted: oklch(0.50 0.02 60);   /* Muted text */
  --section-card: oklch(0.98 0.008 85);   /* Card background */
  --section-border: oklch(0.88 0.02 85);  /* Border color */
}
```

**Dark sections (About, Experience, Contact):**
```css
.section-dark {
  --section-bg: oklch(0.25 0.02 60);      /* Dark brown background */
  --section-fg: oklch(0.96 0.01 85);      /* Cream text */
  --section-muted: oklch(0.75 0.01 85);   /* Muted text */
  --section-card: oklch(0.30 0.02 60);    /* Card background */
  --section-border: oklch(0.35 0.02 60);  /* Border color */
}
```

### Changing Colors

To change the color scheme, modify the OKLCH values in `/app/globals.css`:

**OKLCH format:** `oklch(lightness chroma hue)`
- Lightness: 0 (black) to 1 (white)
- Chroma: 0 (gray) to ~0.4 (vivid)
- Hue: 0-360 degrees (0=red, 60=yellow, 120=green, 180=cyan, 240=blue, 300=magenta)

**Example - Change to blue theme:**
```css
.section-dark {
  --section-bg: oklch(0.20 0.02 240);     /* Dark blue */
  --section-fg: oklch(0.95 0.01 240);     /* Light blue-white */
  /* ... */
}
```

### Fonts

Fonts are configured in `/app/layout.tsx` and `/app/globals.css`:

```typescript
// layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google'
```

```css
/* globals.css */
@theme inline {
  --font-sans: 'Inter', 'Inter Fallback', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'JetBrains Mono Fallback', monospace;
}
```

To change fonts:
1. Import new fonts in `layout.tsx`
2. Update the font variables in `globals.css`

---

## Contact Form Setup

The contact form submits to `/app/api/contact/route.ts`. By default, it logs submissions to the console.

### Enable Email Notifications

To send actual emails, integrate with an email service like [Resend](https://resend.com):

1. Install Resend: `npm install resend`
2. Add your API key as environment variable: `RESEND_API_KEY`
3. Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'your@email.com',
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
  })

  return Response.json({ success: true })
}
```

---

## File Reference

| File | Purpose |
|------|---------|
| `/lib/config.ts` | Main configuration - personal info, experiences, projects, skills |
| `/app/globals.css` | Color schemes and global styles |
| `/app/layout.tsx` | Site metadata (title, description) and fonts |
| `/components/hero.tsx` | Hero/landing section |
| `/components/about.tsx` | About section with photo placeholder |
| `/components/experience.tsx` | Interactive timeline component |
| `/components/projects.tsx` | Project cards with modal |
| `/components/contact.tsx` | Contact form |
| `/components/navigation.tsx` | Fixed navigation bar |
| `/components/footer.tsx` | Footer with social links |
| `/app/api/contact/route.ts` | Contact form API endpoint |

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

### Environment Variables (if using email)

Add these in your Vercel dashboard under Settings > Environment Variables:
- `RESEND_API_KEY` - Your Resend API key (for contact form emails)

---

## Summary Checklist

Before launching, make sure you've:

- [ ] Updated your name, role, and location in `/lib/config.ts`
- [ ] Added your email and social links
- [ ] Written your about section text
- [ ] Added your experiences to the timeline
- [ ] Added your projects with images
- [ ] Updated your skills/tech stack
- [ ] Added your photo to the about section
- [ ] Updated education info in `/components/about.tsx`
- [ ] Updated site metadata in `/app/layout.tsx`
- [ ] (Optional) Set up email for contact form

---

## Need Help?

- **Colors not working?** Make sure you're using the `var(--section-*)` CSS variables in dark/light sections
- **Image not showing?** Check that the image is in `/public` and the path starts with `/`
- **Timeline order wrong?** Check that `startYear` is a number, not a string
- **Modal not opening?** Make sure you have both `summary` and `fullDescription` in your project config

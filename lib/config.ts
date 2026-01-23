// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
  // Personal Information
  name: "Your Name",
  role: "AI & Data Engineer",
  roleSecondary: "Fullstack Web Developer",
  email: "hello@yourname.com",
  location: "Belgium",
  
  // About Section
  about: {
    intro: "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.",
    description: "My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    currentRole: "Currently, I'm a Full Stack Developer building modern web applications with a focus on user experience and clean code architecture.",
    interests: "In my spare time, I enjoy contributing to open source, exploring new technologies, reading about software architecture, and occasionally playing chess.",
  },

  // Social Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  // Skills/Tech Stack
  skills: [
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
  ],

  // Experience - Timeline automatically sorts by startYear (descending)
  // Add new experiences and they will appear in the correct chronological order
  experiences: [
    {
      company: "Acme Corporation",
      companyUrl: "https://example.com",
      role: "Senior Full Stack Developer",
      startYear: 2023,
      endYear: null, // null means "Present"
      description: "Leading the development of microservices architecture and mentoring junior developers. Implemented CI/CD pipelines that reduced deployment time by 60%.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      company: "TechStart Inc",
      companyUrl: "https://example.com",
      role: "Full Stack Developer",
      startYear: 2021,
      endYear: 2023,
      description: "Built and maintained full-stack web applications serving 50,000+ users. Led migration from legacy systems to modern React stack.",
      technologies: ["Next.js", "Python", "MongoDB", "Docker"],
    },
  ],

  // Projects - First 3 projects will be displayed as featured cards
  // Simply add/remove projects from this array - the first 3 are shown as main cards
  projects: [
    {
      title: "E-Commerce Platform",
      summary: "A full-stack e-commerce solution with real-time inventory management.",
      fullDescription: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built with modern technologies for optimal performance and scalability. Features include user authentication, product catalog, shopping cart, order management, and admin dashboard.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/project-1.jpg",
    },
    {
      title: "Task Management App",
      summary: "A collaborative task management application with real-time updates.",
      fullDescription: "A collaborative task management application with real-time updates, team workspaces, and productivity insights. Features include drag-and-drop task organization, team collaboration tools, deadline tracking, notifications, and detailed analytics to help teams stay productive.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/project-2.jpg",
    },
    {
      title: "AI Content Generator",
      summary: "An AI-powered tool that helps marketers create content.",
      fullDescription: "An AI-powered content generation tool that helps marketers create blog posts, social media content, and ad copy. Leverages OpenAI's GPT models to generate high-quality, engaging content tailored to your brand voice and target audience.",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      image: "/projects/project-3.jpg",
    },
  ],
}

export type SiteConfig = typeof siteConfig

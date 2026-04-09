// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
  // Personal information
  name: 'Arne Bogaert',
  role: 'AI & Data Engineer',
  roleSecondary: 'Fullstack Web Developer',
  email: 'arnebogaert81@gmail.com',
  location: 'Belgium',

  // About Section
  about: {
    intro:
      "I'm a developer passionate about pixel-perfect Web Development and Ai & Data Engineering.",
    description:
      'My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.',
    currentRole:
      "Currently, I'm a student at HoGent where i am learning everything i need to know for honing my skills",
    interests:
      'In my spare time, I enjoy making music, reading books, exploring new technologies and playing chess ',
  },

  // Social Links
  socials: {
    github: 'https://github.com/Arne-Bogaert',
    linkedin: 'https://www.linkedin.com/in/arne-bogaert/',
  },

  // Navigation Links
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  // Skills/Tech Stack
  skills: [
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Python', category: 'Languages' },
    { name: 'Java', category: 'Languages' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Git', category: 'Tools' },
    { name: 'Scratch', category: 'Tools' },
  ],

  // Experience - Timeline automatically sorts by startYear (descending)
  // Add new experiences and they will appear in the correct chronological order
  experiences: [
    {
      company: 'Hogent',
      companyUrl: 'https://hogent.be',
      role: 'Student',
      startYear: 2023,
      endYear: null, // null means "Present"
      description: 'Currently studying applied computer science at Hogent',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'MySQL',
        'Java',
        'Javascript',
        'Bash',
        'Next.js',
      ],
      logo: '/logos/logo-1.jpg',
    },
    {
      company: 'Codefever',
      companyUrl: 'https://codefever.be/nl',
      role: 'Assistent Teacher',
      startYear: 2026,
      endYear: null, // null means "Present"
      description:
        'Assistant teacher for Codefever, Codefever is a platform that organises coding lessons for kids to learn in an interactive manner. I help teaching Scratch, HTML/CSS, Javascript and Python',
      technologies: ['Javascript', 'Python', 'HTML', 'CSS', 'Scratch'],
      logo: '/logos/codeFever logo.png',
    },
  ],

  // Projects - First 3 projects will be displayed as featured cards
  // Simply add/remove projects from this array - the first 3 are shown as main cards
  projects: [
    {
      title: 'RS Projects Website',
      summary: 'Custom designed photography portfolio website',
      fullDescription:
        'A beautiful, custom-designed website for RS Projects showcasing photography work. Built with modern web technologies and featuring an elegant, minimalist design that puts the visual content front and center. The site includes smooth animations and a responsive layout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://rs-projects-website.vercel.app',
      githubUrl: 'https://github.com/Arne-Bogaert/RS_Projects_Website',
      image: '/projects/rs-projects.jpg',
    },
    {
      title: 'Quiwie Band Website',
      summary: 'Modern website for indie band Quiwie',
      fullDescription:
        'A stylish website created for my band Quiwie. Built with Astro framework featuring a modern, dark aesthetic that matches the band\'s musical style. The site includes social media links, music streaming integration, and band information. Hosted on Vercel for optimal performance.',
      technologies: ['Astro', 'CSS', 'JavaScript'],
      liveUrl: 'https://quiwie-site.vercel.app',
      githubUrl: 'https://github.com/Arne-Bogaert/Quiwie-Site',
      image: '/projects/quiwie-site.jpg',
    },
    {
      title: 'KingDomino',
      summary: 'A full Java implementation of the Kingdomino boardgame',
      fullDescription:
        'An online boardgame called Kingdomino made in Java for a school project, It is entirely written in Java and JavaFx for the visuals. Also includes extensive Javadoc',
      technologies: ['Java', 'JavaFX'],
      githubUrl: 'https://github.com/Arne-Bogaert/KingDomino',
      image: '/projects/kingdomino.webp',
    },
    {
      title: 'Ticket & Event Manager',
      summary:
        'Fully integrated backend for a Ticket & Event managing platform',
      fullDescription:
        'This is a complete Backend for a Ticket & Event managing platform, it was made with Node.js and includes full API routing with authentication and follows best REST API practices. The project also includes a feature to convert tickets to real-time PDF files',
      technologies: ['TypeScript', 'Node.js', 'MySQL'],
      liveUrl: 'https://frontendweb-2526-bogaertarne.onrender.com',
      githubUrl:
        'https://github.com/Arne-Bogaert/Event-Ticket-Manager-API-Backend',
      image: '/projects/Ticket.png',
    },
    {
      title: 'AI Learns Flappy Bird',
      summary: 'Flappy Bird learns to play using NEAT AI',
      fullDescription:
        'Using the NEAT framework i developed a machine learning model that trains itself to learn the popular game Flappy Bird',
      technologies: ['Python', 'NEAT', 'PyGame'],
      githubUrl: 'https://github.com/Arne-Bogaert/Flappy-Bird-AI',
      image: '/projects/FlappyBird.webp',
    },
  ],
};

export type SiteConfig = typeof siteConfig;

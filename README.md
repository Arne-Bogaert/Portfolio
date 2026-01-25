# Arne Bogaert - Portfolio Website

A modern, responsive, and minimalist portfolio built with Next.js, designed to showcase my skills as an AI & Data Engineer and Fullstack Developer.

**Portfolio URL** [https://arnebogaert.vercel.app](https://arnebogaert.vercel.app)

## Key Features

### Design & UI

* **"Flying Code" Hero Animation:** A custom-built, infinite loop animation featuring floating code symbols (`{`, `}`, `=>`, `/>`) that fade in and out, creating a dynamic background without distracting from the content.
* **Glassmorphism Navigation:** A floating, pill-shaped navigation bar with backdrop blur and semi-transparent borders.
* **Responsive Layout:**
  * **Desktop:** Centered navigation links for a clean look.
  * **Mobile:** A fully functional hamburger menu with smooth transitions.

### Functionality

* **Active State Tracking (ScrollSpy):** The navigation bar automatically highlights the current section as you scroll down the page.
* **Smooth Scrolling:** Seamless gliding behavior when navigating between sections.
* **Project Carousel:** An interactive grid to display featured projects.
* **Experience Timeline:** A vertical timeline showcasing professional history.
* **Custom 404 Page:** A styled "Not Found" page to maintain professionalism even on error pages.

### Developer Tools

* **Resume Download:** Integrated button for direct PDF resume download.
* **Contact Form:** Fully functional form powered by **Resend**.
* **SEO Optimized:** Custom metadata, Open Graph tags, and dynamic favicons for better social sharing and search visibility.

## 🚀 Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** Custom CSS Keyframes & Tailwind Utilities

## Running it local

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/Arne-Bogaert/portfolio.git](https://github.com/Arne-Bogaert/portfolio.git)
    cd portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

The entire portfolio is data-driven. You can easily update content without touching the code structure by editing:

* **`lib/config.ts`**: Contains all text, links, projects, and experience data.
* **`app/globals.css`**: Adjust the `--section-bg` and `--section-fg` variables to tweak the color theme.

---

© 2026 Arne Bogaert. Built with Next.js.

/**
 * Every piece of copy on the site lives here.
 * Edit this file and the whole portfolio updates - no component changes needed.
 */

export const profile = {
  name: 'Seto Yoki',
  badge: 'Welcome to my universe',
  // The hero pill cycles through these, typewriter style.
  roles: [
    'Full-Stack Developer & UI/UX Enthusiast',
    'JavaScript Developer & Open Source Contributor',
  ],
  tagline: 'JavaScript lover 🚀 | Full-Stack Developer 🔧 | Building for the web 💻✨',
  ctaLabel: 'Learn More',
  avatar: '/avatar.jpg', // square image in public/, 400px+
}

// Floating chips scattered around the hero.
export const heroChips = [
  { label: 'UI Magic', icon: 'sparkles', tone: 'purple' },
  { label: 'Clean Code', icon: 'code', tone: 'blue' },
  { label: 'Innovation', icon: 'bulb', tone: 'amber' },
]

// Rendered as the syntax-highlighted `developer.js` window in the hero.
export const heroSnippet = `const profile = {
  name: 'Seto Yoki',
  title: 'Full-Stack Developer',
  skills: [
    'React', 'NextJS', 'Redux', 'Express', 'Node.js',
    'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
    'GraphQL', 'Git', 'Linux', 'Tailwind'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 5,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 10 &&
      this.yearsOfExperience >= 5
    );
  },
  status: "🔥 Open To Work!"
};`

export const about = {
  heading: 'About me',
  subheading: 'Full-Stack Developer, UI/UX Engineer, Problem Solver',
  paragraphs: [
    "Hello! I'm Seto Yoki, a passionate JavaScript developer specializing in creating innovative web solutions and user-friendly interfaces. I'm dedicated to simplifying development workflows.",
    "My focus is on making web development faster, easier, and accessible to all developers. Currently, I'm expanding into backend development to grow as a full-stack developer and create seamless, robust web applications.",
  ],
  quote: "I'm a lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.",
  quoteAuthor: 'Seto Yoki, Full-Stack Developer',
}

/**
 * Six skill cards. `icon` values are Simple Icons component names from
 * react-icons/si, bundled locally in components/ui/icons.js.
 */
export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'code',
    accent: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Vue.js', icon: 'SiVuedotjs' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss' },
    ],
  },
  {
    title: 'Backend Development',
    icon: 'server',
    accent: 'from-emerald-400 to-teal-400',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'GraphQL', icon: 'SiGraphql' },
      { name: 'Redis', icon: 'SiRedis' },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: 'palette',
    accent: 'from-fuchsia-400 to-purple-400',
    skills: [
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Framer', icon: 'SiFramer' },
      { name: 'Storybook', icon: 'SiStorybook' },
      { name: 'Sketch', icon: 'SiSketch' },
      { name: 'Responsive Design', icon: null },
      { name: 'Prototyping', icon: null },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    accent: 'from-amber-400 to-orange-400',
    skills: [
      // Simple Icons dropped the AWS mark over trademark policy, so there is no
      // icon to reference. SkillIcon renders a lettered badge instead.
      { name: 'AWS', icon: null },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Kubernetes', icon: 'SiKubernetes' },
      { name: 'Terraform', icon: 'SiTerraform' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'Cloudflare', icon: 'SiCloudflare' },
      { name: 'Linux', icon: 'SiLinux' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'wrench',
    accent: 'from-sky-400 to-indigo-400',
    skills: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'Vite', icon: 'SiVite' },
      { name: 'Vitest', icon: 'SiVitest' },
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'Firebase', icon: 'SiFirebase' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Postman', icon: 'SiPostman' },
    ],
  },
  {
    title: 'Creative Skills',
    icon: 'sparkles',
    accent: 'from-rose-400 to-pink-400',
    skills: [
      { name: 'Three.js', icon: 'SiThreedotjs' },
      { name: 'GSAP', icon: 'SiGreensock' },
      { name: 'Blender', icon: 'SiBlender' },
      { name: 'Lottie', icon: 'SiLottiefiles' },
      { name: 'UI Animation', icon: null },
      { name: 'Motion Graphics', icon: null },
    ],
  },
]

// Icon names for the rotating cloud above the skill cards.
export const cloudIcons = [
  'SiReact',
  'SiNextdotjs',
  'SiVuedotjs',
  'SiTypescript',
  'SiJavascript',
  'SiTailwindcss',
  'SiHtml5',
  'SiCss',
  'SiNodedotjs',
  'SiExpress',
  'SiPython',
  'SiPostgresql',
  'SiMysql',
  'SiMongodb',
  'SiGraphql',
  'SiRedis',
  'SiDocker',
  'SiKubernetes',
  'SiGit',
  'SiLinux',
  'SiVite',
  'SiRedux',
  'SiFirebase',
  'SiVercel',
  'SiFigma',
  'SiThreedotjs',
]

export const experience = [
  {
    role: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description:
      'Lead development on client web platforms end to end: architecture, React frontends, Node APIs, and deployment. Cut page load times by 60% on the largest account.',
    tags: ['React', 'Node.js', 'AWS'],
  },
  {
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    description:
      'Built and shipped customer-facing features for a SaaS product used by 30k+ monthly users. Owned the design system and the component library it grew into.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description:
      'Delivered marketing sites and internal dashboards for agency clients. Introduced automated visual regression testing that caught layout breaks before release.',
    tags: ['JavaScript', 'Vue.js', 'CSS'],
  },
]

export const education = [
  {
    emoji: '📗',
    degree: 'Bachelor of Computer Science (BSCS)',
    school: 'Your University',
    period: '2014 - 2018',
    description:
      'Developed strong analytical and critical thinking skills through comprehensive study of computer science and algorithms.',
    achievements: ['GPA: 3.8 / 4.0', 'Subject: Computer Science'],
    tags: ['Computer Science', 'Data Structures', 'Algorithms'],
  },
]

/**
 * Project screenshots: drop images into public/projects/ and reference them as
 * '/projects/name.png'. Any missing image falls back to a generated gradient,
 * so the layout never breaks while you are still gathering assets.
 */
export const projects = [
  {
    title: 'Olova - A Lightweight JavaScript Library',
    description:
      'A small reactive UI library focused on a tiny runtime and a readable API. Ships in under 4kb gzipped with zero dependencies.',
    image: '/projects/project-1.svg',
    tech: ['JavaScript', 'Vite', 'Rollup'],
    link: 'https://example.com',
    contribution: 'Core maintainer - built the reactivity system and docs site.',
  },
  {
    title: 'Commerce Storefront',
    description:
      'Headless storefront with server-side rendering, cart persistence and a checkout that survives flaky mobile connections.',
    image: '/projects/project-2.svg',
    tech: ['Next.js', 'TypeScript', 'Stripe'],
    link: 'https://example.com',
    contribution: 'Lead developer - full build from design handoff to launch.',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Real-time metrics dashboard rendering 100k+ data points without dropping frames, built on a virtualised chart layer.',
    image: '/projects/project-3.svg',
    tech: ['React', 'D3', 'WebSocket'],
    link: 'https://example.com',
    contribution: 'Frontend architecture and the charting engine.',
  },
  {
    title: 'Job Data Extractor',
    description:
      'Chrome extension that pulls structured listing data into CSV, JSON or Excel. Manifest v3, no backend, everything runs locally.',
    image: '/projects/project-4.svg',
    tech: ['Chrome Extension', 'JavaScript', 'Manifest v3'],
    link: 'https://example.com',
    contribution: 'Solo build - scraping logic, UI and store submission.',
  },
  {
    title: 'AI Content Assistant',
    description:
      'SaaS platform for drafting, evaluating and versioning prompts, with streaming responses and per-team usage limits.',
    image: '/projects/project-5.svg',
    tech: ['React', 'Node.js', 'OpenAI'],
    link: 'https://example.com',
    contribution: 'Backend API design and the streaming response pipeline.',
  },
  {
    title: 'Travel Journal Platform',
    description:
      'Trip tracker that maps routes automatically and turns them into shareable multimedia journals, online or offline.',
    image: '/projects/project-6.svg',
    tech: ['React Native', 'AWS', 'MapBox'],
    link: 'https://example.com',
    contribution: 'Offline sync layer and map rendering performance work.',
  },
  {
    title: 'Realtime Collaboration Editor',
    description:
      'Multiplayer document editor with conflict-free merging, presence indicators and offline edits that reconcile on reconnect.',
    image: '/projects/project-7.svg',
    tech: ['React', 'CRDT', 'WebSocket'],
    link: 'https://example.com',
    contribution: 'Built the CRDT sync layer and presence system.',
  },
  {
    title: 'Design System & Component Library',
    description:
      'Accessible component library with tokens, docs and visual regression tests, consumed by four product teams.',
    image: '/projects/project-8.svg',
    tech: ['React', 'Storybook', 'Tailwind'],
    link: 'https://example.com',
    contribution: 'Sole author - API design, a11y audit and release pipeline.',
  },
  {
    title: 'Booking & Scheduling Platform',
    description:
      'Timezone-correct scheduling with calendar sync, automated reminders and a booking flow that handles double-book races.',
    image: '/projects/project-9.svg',
    tech: ['Next.js', 'PostgreSQL', 'Redis'],
    link: 'https://example.com',
    contribution: 'Backend scheduling engine and conflict resolution.',
  },
  {
    title: 'Data Visualisation Toolkit',
    description:
      'Composable charting primitives that stay readable at 100k points, with accessible tooltips and keyboard navigation.',
    image: '/projects/project-10.svg',
    tech: ['TypeScript', 'D3', 'Canvas'],
    link: 'https://example.com',
    contribution: 'Author - rendering pipeline and accessibility layer.',
  },
]

export const featuredProject = {
  title: 'Robo Apply - AI Resume Scoring',
  description:
    'An advanced web application that leverages AI to analyse and score resumes, providing actionable feedback and suggestions for improvement. Built with React, Node.js and OpenAI API integration.',
  image: '/projects/featured.svg',
  tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  link: 'https://example.com',
  contribution: 'Full-stack build - scoring engine, API and interface.',
}

export const contact = {
  heading: '-Contact Me-',
  intro: 'Have a question or want to work together?',
  channels: [
    { label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com', icon: 'mail' },
    { label: 'Telegram', value: '@yourhandle', href: 'https://t.me/yourhandle', icon: 'telegram' },
    { label: 'GitHub', value: '@setoyoki0221-gif', href: 'https://github.com/setoyoki0221-gif', icon: 'github' },
  ],
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

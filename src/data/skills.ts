import { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    category: 'Frontend Engineering',
    description: 'Building reactive, component-driven, and high-conversion client interfaces.',
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Custom hooks, Context API, state patterns, Vite workflow, modular architecture' },
      { name: 'TypeScript', level: 'Proficient', description: 'Strict type contracts, interfaces, generics, preventing runtime bugs' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Async/await, DOM manipulation, closures, performance profiling' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first design, custom design tokens, dark mode systems, responsive grids' },
      { name: 'HTML5 & Semantic Markup', level: 'Advanced', description: 'Accessible ARIA standards, crawlable document structures, SEO hierarchy' },
      { name: 'Framer Motion', level: 'Proficient', description: 'Fluid micro-interactions, scroll-triggered reveals, layout transitions' }
    ]
  },
  {
    category: 'Backend & APIs',
    description: 'Designing reliable server architectures, predictable endpoints, and secure middleware.',
    skills: [
      { name: 'Node.js', level: 'Proficient', description: 'Event-driven server runtimes, stream processing, asynchronous workflows' },
      { name: 'Express.js', level: 'Advanced', description: 'RESTful routing, custom middleware, rate-limiting, centralized error handling' },
      { name: 'REST API Architecture', level: 'Advanced', description: 'Standard HTTP status codes, structured JSON payloads, idempotency' },
      { name: 'Authentication & Security', level: 'Proficient', description: 'JWT tokens, bcrypt password hashing, CORS policies, XSS prevention' },
      { name: 'Third-Party Webhooks', level: 'Proficient', description: 'Signature verification, transactional event listeners, retry mechanisms' }
    ]
  },
  {
    category: 'Databases & Storage',
    description: 'Data modeling, query optimization, and persistent storage solutions.',
    skills: [
      { name: 'MongoDB', level: 'Proficient', description: 'Document schemas, Mongoose ODM, aggregation pipelines, indexed queries' },
      { name: 'MySQL', level: 'Proficient', description: 'Relational table normalization, foreign keys, ACID transactions, join optimization' },
      { name: 'LocalStorage & IndexedDB', level: 'Advanced', description: 'Client-side state caching, persistent carts, offline-first data stores' }
    ]
  },
  {
    category: 'Mobile Application Development',
    description: 'Native Android and mobile experiences with offline caching.',
    skills: [
      { name: 'Java (Android SDK)', level: 'Proficient', description: 'Activity/Fragment lifecycles, Material 3 XML layouts, Room DB, background services' },
      { name: 'React Native', level: 'Foundational', description: 'Cross-platform mobile interfaces, responsive native styling, device bridging' },
      { name: 'SQLite / Room Database', level: 'Proficient', description: 'Local device persistence, fast offline data read/writes' }
    ]
  },
  {
    category: 'DevOps, Tools & Workflow',
    description: 'Testing, containerization, version control, and cloud continuous deployment.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branch management, pull request workflows, merge conflict resolution' },
      { name: 'Docker', level: 'Proficient', description: 'Containerized environments, Dockerfile builds, multi-container compose' },
      { name: 'Vercel & Cloud Hosting', level: 'Advanced', description: 'Automated CI/CD deployments, environment variables, edge caching' },
      { name: 'Postman', level: 'Advanced', description: 'API contract testing, environment variable automation, mock servers' },
      { name: 'Technical SEO & Core Web Vitals', level: 'Advanced', description: 'Lighthouse scoring, lazy-loading, meta optimization, search indexing' }
    ]
  }
];

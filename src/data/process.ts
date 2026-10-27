import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Requirement Deep-Dive',
    tagline: 'Understanding your business model, target audience, and precise goals.',
    description: 'We begin with an in-depth discussion about your product vision, target market, functional requirements, technical constraints, and deadline expectations. No guesswork or assumptions.',
    deliverables: [
      'Comprehensive requirement checklist',
      'Recommended technical architecture & stack',
      'Target user persona & core user stories',
      'Initial feasibility assessment'
    ],
    timeline: '1 - 3 Days'
  },
  {
    step: '02',
    title: 'Scope, Transparent Proposal & Milestones',
    tagline: 'Clear deliverables, fixed pricing agreements, and phased milestones.',
    description: 'I deliver a detailed, itemized project scope and proposal document. You receive transparent pricing, milestone breakdown, payment schedule, and an agreed-upon delivery timeline before a single line of code is written.',
    deliverables: [
      'Detailed statement of work (SOW)',
      'Phased delivery milestones & dates',
      'Fixed-price quote or sprint retainer agreement',
      'Sign-off on technical boundaries & deliverables'
    ],
    timeline: '1 - 2 Days'
  },
  {
    step: '03',
    title: 'UI/UX Wireframing & Architecture Design',
    tagline: 'Visualizing layout flow, user journeys, and database entity relationships.',
    description: 'Before coding begins, we align on visual hierarchy, navigation flows, and database schemas. You review design prototypes or interactive mockups to ensure the look and feel matches your brand identity.',
    deliverables: [
      'Interactive layout structure & component plans',
      'Database schema & REST API endpoint blueprints',
      'Design token palette (typography, colors, dark mode)',
      'Client feedback loop & approval sign-off'
    ],
    timeline: '3 - 7 Days'
  },
  {
    step: '04',
    title: 'Agile Development & Milestone Previews',
    tagline: 'Clean code, periodic progress demos, and continuous transparency.',
    description: 'Development proceeds in focused sprints using clean, maintainable TypeScript/React and Node.js. You receive private staging demo links at every milestone so you can test features and provide feedback in real time.',
    deliverables: [
      'Live staging URL with demo previews',
      'Regular video or written progress updates',
      'Frontend and backend component construction',
      'Weekly or milestone-based check-in reviews'
    ],
    timeline: '1 - 4 Weeks (depending on scope)'
  },
  {
    step: '05',
    title: 'Testing, Cross-Device QA & Security',
    tagline: 'Rigorous cross-browser checks, mobile responsiveness, and input hardening.',
    description: 'Every form, button, and API endpoint undergoes thorough testing. We test across modern mobile devices, tablets, and desktop browsers, verify edge cases, inspect network payloads, and optimize Core Web Vitals.',
    deliverables: [
      'Cross-browser & cross-device responsive validation',
      'Form validation, error boundary, and security tests',
      'Google Lighthouse performance optimization',
      'API payload and error handling verification'
    ],
    timeline: '2 - 5 Days'
  },
  {
    step: '06',
    title: 'Production Deployment, Handover & Support',
    tagline: 'Live launch on your domain, complete source code transfer, and warranty support.',
    description: 'We push the production build to your live domain (Vercel, AWS, or custom server), configure custom SSL, setup DNS records, and hand over 100% of the repository and credentials. Includes post-launch warranty support.',
    deliverables: [
      'Live production deployment on your custom domain',
      '100% full GitHub repository ownership transferred',
      'Admin credentials, API keys, and environment handover',
      'Video walkthrough or documentation guide',
      '14-30 days of post-launch bug-fix warranty'
    ],
    timeline: '1 - 2 Days'
  }
];

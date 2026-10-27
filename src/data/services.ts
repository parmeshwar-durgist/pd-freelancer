import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'business-websites',
    slug: 'business-websites',
    title: 'Business Website Development',
    iconName: 'Globe',
    shortDesc: 'Modern, high-conversion corporate websites engineered to convert casual visitors into qualified inquiries.',
    badge: 'Popular',
    clientProblem: 'Most business websites are slow, generic, look outdated on mobile devices, and fail to generate genuine sales inquiries or build buyer credibility.',
    whatIBuild: 'Bespoke, high-performance business websites featuring custom branding, clean typography, fast load speeds, interactive quote forms, and WhatsApp integration.',
    keyFeatures: [
      'Mobile-first responsive design engineered for all screen sizes',
      'SEO-friendly semantic HTML, metadata, and structured schema',
      'Direct WhatsApp and email lead capture integration',
      'Fast CDN deployment with sub-second page loads',
      'Content management simplicity without bloated plugins'
    ],
    suitableFor: ['B2B Companies', 'Consultants & Agencies', 'Industrial Manufacturers', 'Professional Services'],
    deliverables: [
      'Complete production-ready source code',
      'Responsive design across mobile, tablet, and desktop',
      'Contact & RFQ form routing to your email/phone',
      'Vercel or custom hosting setup with SSL certificate',
      'Post-launch walkthrough and documentation'
    ]
  },
  {
    id: 'custom-web-apps',
    slug: 'custom-web-apps',
    title: 'Custom Web Application Development',
    iconName: 'Layout',
    shortDesc: 'Tailored full-stack web applications with authentication, custom workflows, and database architecture.',
    badge: 'High Value',
    clientProblem: 'Off-the-shelf software tools often do not fit unique business operations, charge prohibitive recurring subscriptions, or lock your proprietary data into closed ecosystems.',
    whatIBuild: 'Custom full-stack web applications built on React, Node.js, Express, and modern databases, engineered specifically for your exact business rules and operational workflows.',
    keyFeatures: [
      'Secure authentication with role-based permissions (JWT / Session)',
      'Real-time data updates, status tracking, and automated logic',
      'Relational or NoSQL database modeling tailored to your scale',
      'Interactive dashboards, data tables, and reporting exports',
      'Modular microservice or clean monolith codebase'
    ],
    suitableFor: ['Startups', 'Growing SMBs', 'Operations Teams', 'Internal Tooling Needs'],
    deliverables: [
      'Frontend React application and backend REST API',
      'Database schema scripts and migrations',
      'Role-based access control setup',
      'Environment configuration and deployment to cloud',
      'Architecture documentation & API reference'
    ]
  },
  {
    id: 'ecommerce-platforms',
    slug: 'ecommerce-platforms',
    title: 'E-commerce Website Development',
    iconName: 'ShoppingCart',
    shortDesc: 'Fast, secure online stores with persistent shopping carts, inventory sync, and seamless payment gateway checkouts.',
    badge: 'Featured',
    clientProblem: 'Generic e-commerce templates can feel clunky on mobile devices, suffer high cart abandonment, and impose heavy transaction transaction fees or rigid checkout customization limits.',
    whatIBuild: 'Tailored e-commerce stores with instant product filtering, persistent shopping carts, automated order notifications, and verified payment gateway integrations (Razorpay, Stripe, etc.).',
    keyFeatures: [
      'Frictionless mobile checkout with one-click payment options',
      'Real-time cart state, discount vouchers, and shipping calculation',
      'Product catalog with variant management (sizes, weights, packs)',
      'Automated email/SMS order status updates for customers',
      'Admin order management and inventory overview'
    ],
    suitableFor: ['D2C Brands', 'Food & Specialty Retailers', 'Wholesale Distributors', 'Merchandise Stores'],
    deliverables: [
      'Complete e-commerce web platform',
      'Integrated payment gateway sandbox & production mode',
      'Admin dashboard for managing products and orders',
      'Transactional email notification templates',
      'Security audit and SSL configuration'
    ]
  },
  {
    id: 'react-frontend-dev',
    slug: 'react-frontend-dev',
    title: 'React.js Frontend Engineering',
    iconName: 'Code',
    shortDesc: 'Pixel-perfect, component-driven user interfaces built with React, TypeScript, and modern CSS.',
    clientProblem: 'You have a backend API or design mockups (Figma/Adobe XD), but need an experienced frontend developer who can translate them into clean, performant, responsive code without technical debt.',
    whatIBuild: 'Production-ready React applications using modern hooks, clean component hierarchies, TypeScript type safety, and accessible UI interactions.',
    keyFeatures: [
      'Strict TypeScript interfaces and type validation',
      'Component modularity with reusable design systems',
      'Fluid state management (Zustand, Context, or React Query)',
      'Smooth micro-animations using Framer Motion',
      'Lighthouse score optimization (Accessibility, SEO, Performance)'
    ],
    suitableFor: ['Product Teams', 'Agencies needing Frontend Overflow', 'SaaS Founders', 'Existing System Upgrades'],
    deliverables: [
      'Organized React + TypeScript component repository',
      'API client layer with error handling and loading skeletons',
      'Responsive design matching design tokens exactly',
      'Storybook / Component documentation where requested'
    ]
  },
  {
    id: 'backend-rest-api',
    slug: 'backend-rest-api',
    title: 'Backend Development & REST APIs',
    iconName: 'Server',
    shortDesc: 'Secure, scalable Node.js and Express backend services engineered with clean database schemas and predictable endpoints.',
    clientProblem: 'Frontends fall apart when backends lack consistent data contracts, have slow unindexed database queries, or leave sensitive endpoints exposed to unauthorized access.',
    whatIBuild: 'Hardened RESTful APIs using Node.js, Express, MongoDB, and MySQL, with strict schema validation, password hashing, and clean endpoint documentation.',
    keyFeatures: [
      'Predictable REST API contracts with JSON responses',
      'Zod / Joi payload validation preventing bad input crashes',
      'Bcrypt password encryption and secure JWT session handling',
      'Optimized database queries with indexing and connection pooling',
      'Centralized error handling and structured logging'
    ],
    suitableFor: ['Web and Mobile App Backends', 'Third-Party Integration Middleware', 'Data-Driven Services'],
    deliverables: [
      'Modular Node.js API server codebase',
      'Database connection and migration scripts',
      'Postman API collection with sample request/response payloads',
      'Deployment scripts with environment variable protection'
    ]
  },
  {
    id: 'dashboards-crm',
    slug: 'dashboards-crm',
    title: 'Admin Dashboards & CRM Solutions',
    iconName: 'BarChart3',
    shortDesc: 'Intuitive operational dashboards to monitor metrics, track customer interactions, and manage backend data.',
    clientProblem: 'Business teams waste dozens of hours every week entering data into messy spreadsheets, struggling to get a single source of truth for leads, revenue, and customer records.',
    whatIBuild: 'Streamlined admin consoles, CRM portals, and metric dashboards with interactive charts, filterable tables, CSV exports, and granular permission controls.',
    keyFeatures: [
      'Real-time business KPI cards and metric visualizations',
      'Searchable, sortable, and paginated data tables',
      'Bulk actions, status transitions, and CSV/Excel exports',
      'Role-based permissions (Owner, Manager, Staff)',
      'Audit logging for sensitive updates'
    ],
    suitableFor: ['Sales Operations', 'Customer Support Teams', 'Service Providers', 'Platform Administrators'],
    deliverables: [
      'Full-featured admin dashboard frontend and backend routes',
      'Role-permission mapping configuration',
      'Database tables and schema updates',
      'Step-by-step administrator usage guide'
    ]
  },
  {
    id: 'mobile-applications',
    slug: 'mobile-applications',
    title: 'Android & Cross-Platform Mobile Apps',
    iconName: 'Smartphone',
    shortDesc: 'Native Android and cross-platform mobile solutions featuring offline-first storage and smooth touch experiences.',
    clientProblem: 'Customers and field staff demand mobile access on the go, but mobile applications can be prone to crashes, memory leaks, and poor offline performance.',
    whatIBuild: 'Reliable Android applications using Java and cross-platform tools, connected to REST APIs with local caching (Room / SQLite) for offline stability.',
    keyFeatures: [
      'Native Material Design layouts and smooth touch interactions',
      'Offline-first data caching with background cloud sync',
      'Push notification hooks and device permission handling',
      'Camera, barcode, or geolocation hardware integrations',
      'APK / App Bundle generation ready for Google Play Store testing'
    ],
    suitableFor: ['Field Inspection', 'Delivery & Logistics', 'Internal Staff Portals', 'Consumer Utilities'],
    deliverables: [
      'Mobile application source code and Gradle configurations',
      'Signed release APK / AAB build file',
      'API communication layer and local SQLite schema',
      'Device testing report across popular screen sizes'
    ]
  },
  {
    id: 'api-payment-integration',
    slug: 'api-payment-integration',
    title: 'API & Payment Gateway Integrations',
    iconName: 'CreditCard',
    shortDesc: 'Seamless integration of payment gateways, transactional email, SMS, and third-party SaaS services.',
    clientProblem: 'Failing webhooks, double charges, expired tokens, and silent API failures result in lost sales and frustrated customers.',
    whatIBuild: 'Rock-solid integrations for payment gateways (Razorpay, Stripe, PayPal), transactional services (EmailJS, SendGrid, Twilio), and Google / Meta APIs.',
    keyFeatures: [
      'Secure server-to-server webhook verification and idempotency',
      'Automated reconciliation preventing duplicate transactions',
      'Graceful error handling and retry queues for network hiccups',
      'Zero client-side credential exposure (strict environment variable separation)',
      'Instant customer invoice and receipt dispatches'
    ],
    suitableFor: ['E-commerce Stores', 'Subscription Platforms', 'Lead Generation Funnels', 'Business Automation'],
    deliverables: [
      'Tested integration code with webhook verification endpoints',
      'Sandbox testing logs and end-to-end transaction proofs',
      'Production configuration guide for API keys and webhooks'
    ]
  },
  {
    id: 'redesign-maintenance',
    slug: 'redesign-maintenance',
    title: 'Website Redesign, Bug Fixes & Maintenance',
    iconName: 'Wrench',
    shortDesc: 'Transform sluggish, outdated websites into sleek, modern, error-free digital assets with ongoing peace of mind.',
    clientProblem: 'Old websites accumulate broken links, vulnerable dependencies, mobile display glitches, and slow load times that silently repel prospective clients.',
    whatIBuild: 'Complete UI/UX redesigns, thorough code cleanups, bug troubleshooting, package upgrades, and ongoing retainer maintenance.',
    keyFeatures: [
      'Comprehensive UI modernization while preserving existing brand equity',
      'Fixing layout shifts, mobile responsiveness bugs, and console errors',
      'Dependency security auditing and vulnerable package upgrades',
      'Database cleanup and dead asset purging',
      'Scheduled backups, uptime monitoring, and priority technical support'
    ],
    suitableFor: ['Established Businesses with Legacy Sites', 'Agencies Needing Quick Fixes', 'Founders Preparing for Marketing Campaigns'],
    deliverables: [
      'Detailed pre-audit highlighting all resolved bugs and bottlenecks',
      'Modernized, cleanly commented code update',
      'Deployment verification without downtime',
      'Optional monthly maintenance support agreement'
    ]
  },
  {
    id: 'seo-performance-deployment',
    slug: 'seo-performance-deployment',
    title: 'Performance, Technical SEO & Deployment',
    iconName: 'Zap',
    shortDesc: 'Speed optimization, Google Core Web Vitals compliance, search engine crawlability, and CI/CD pipelines.',
    clientProblem: 'Websites that take longer than 3 seconds to load lose over 40% of their traffic, and missing technical SEO tags keeps you invisible on Google search.',
    whatIBuild: 'Audited performance engineering with image optimization, code splitting, Open Graph metadata, semantic HTML, and automated deployment pipelines.',
    keyFeatures: [
      'Google Core Web Vitals optimization (LCP, FID/INP, CLS)',
      'Open Graph, Twitter Cards, and schema markup for rich snippets',
      'Robots.txt, dynamic sitemaps, and canonical URL structure',
      'Continuous deployment via GitHub to Vercel, Netlify, or AWS',
      'Custom domain configuration, DNS records, and SSL certification'
    ],
    suitableFor: ['All Commercial Websites', 'High-Traffic Portals', 'Startups Launching on Product Hunt / Google'],
    deliverables: [
      'Before-and-after Google Lighthouse diagnostic report',
      'Configured sitemap and robots.txt verified in search engines',
      'Automated Git-to-Vercel CI/CD pipeline setup',
      'Custom domain DNS propagation verification'
    ]
  },
  {
    id: 'it-erp-automation',
    slug: 'it-erp-automation',
    title: 'Custom ERP, Automation & IT Industry Solutions',
    iconName: 'Server',
    shortDesc: 'Tailored enterprise resource planning, billing systems, and operational workflow automation for growing businesses.',
    badge: 'Enterprise',
    clientProblem: 'Manual paperwork, disconnected spreadsheets, and fragmented tracking cause severe operational errors in manufacturing, student housing, billing, and educational institutions.',
    whatIBuild: 'Bespoke ERP and management software with relational data models (MySQL/PostgreSQL), multi-role authentication, automated billing, inventory stock registers, and reporting exports.',
    keyFeatures: [
      'Production order progression, machine scheduling, and Bill of Materials (BOM)',
      'Retail POS & mobile billing with barcode scanning and automated receipt dispatch',
      'Institutional management (hostel bed matrix, student admissions, fee ledgers)',
      'Exam and competitive preparation portals (timed test engines, subject analytics)',
      'Modular architecture ready for cloud deployment with zero subscription lock-in'
    ],
    suitableFor: ['Manufacturing Units', 'Educational Academies & Hostels', 'Retail Chains & Distributors', 'IT Service Clients'],
    deliverables: [
      'Full-stack ERP / Management web application',
      'Relational database architecture and migration scripts',
      'Role-based permissions (Admin, Accountant, Operator, Student/User)',
      'Admin training walkthrough and technical support documentation'
    ]
  },
  {
    id: 'idea-to-digital-product',
    slug: 'idea-to-digital-product',
    title: 'Business Idea to Digital Solution (MVP & Transformation)',
    iconName: 'Lightbulb',
    shortDesc: 'Turn your business concept or operational bottleneck into a functional, revenue-generating digital product or MVP.',
    badge: 'Strategy & Build',
    clientProblem: 'You have a promising business idea or a painful manual workflow, but lack the technical roadmap and full-stack capabilities to build an MVP without wasting months or paying exorbitant agency markups.',
    whatIBuild: 'I analyze your exact business problem, define the core user flows, design the technical architecture, and rapidly develop a functional Minimum Viable Product (MVP) or automated web solution ready for real customers.',
    keyFeatures: [
      'Business problem analysis and technical roadmap formulation',
      'Rapid MVP development prioritizing high-impact customer features',
      'Interactive wireframes and responsive prototypes before full build',
      'Elimination of manual spreadsheets through automated web workflows',
      'Scalable foundation ready for customer onboarding or investor demos'
    ],
    suitableFor: ['Startup Founders', 'Traditional Business Owners', 'Solo Entrepreneurs', 'Firms Transitioning from Offline to Online'],
    deliverables: [
      'Functional MVP web application or digital product',
      'User flow diagrams and database schema architecture',
      'Core feature implementation (auth, customer dashboard, transactions)',
      'Live cloud deployment with analytics integration',
      'Product iteration roadmap for future feature phases'
    ]
  },
  {
    id: 'social-media-digital-channels',
    slug: 'social-media-digital-channels',
    title: 'Social Media & Multi-Channel Digital Integration',
    iconName: 'Share2',
    shortDesc: 'Bridge your website with WhatsApp, Instagram, Meta Pixel, and multi-channel lead funnels for automated customer capture.',
    badge: 'High Conversion',
    clientProblem: 'Traffic on social platforms (Instagram, WhatsApp, LinkedIn, Facebook) remains disconnected from your website, resulting in dropped leads, manual chat follow-ups, and zero ad conversion tracking.',
    whatIBuild: 'Seamless integrations connecting your web presence directly to social channels: click-to-WhatsApp order triggers, Instagram product routing, Meta Pixel tracking, social sharing, and automated lead notifications.',
    keyFeatures: [
      'One-click WhatsApp floating widgets with pre-filled product/quote messages',
      'Facebook Pixel & Meta Conversions API tracking for ad attribution',
      'Dynamic Open Graph social cards ensuring rich previews on LinkedIn, Twitter, and WhatsApp',
      'Instagram catalog integration & social feed embedding',
      'Automated lead notification dispatches to your phone or team chat'
    ],
    suitableFor: ['D2C Brands', 'Local Businesses', 'Service Providers', 'Influencer Brands & Creators'],
    deliverables: [
      'Full social channel website integration setup',
      'Verified Meta Pixel / Google conversion event tracking',
      'Optimized OpenGraph and Twitter card image configurations',
      'Automated WhatsApp lead capture triggers',
      'Multi-channel tracking audit report'
    ]
  }
];

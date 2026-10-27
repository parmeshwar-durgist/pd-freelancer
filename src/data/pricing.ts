import { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'landing-page',
    name: 'High-Impact Landing Page',
    tagline: 'Ideal for product launches, lead generation campaigns, or event marketing.',
    priceNote: 'Starting from competitive project rates (Custom Quote)',
    targetAudience: 'Startups, course creators, event organizers, and marketing launches',
    estimatedTimeline: '5 - 7 Business Days',
    features: [
      'Custom single-page high-conversion responsive design',
      'Hero section with dynamic headline & call-to-action',
      'Lead capture form with email / WhatsApp dispatch',
      'Technical SEO tags, OpenGraph preview cards & favicon',
      'Lightning-fast page load score (90+ on Lighthouse)',
      '100% full source code transfer & Vercel deployment'
    ],
    ctaText: 'Request Landing Page Quote'
  },
  {
    id: 'business-website',
    name: 'Corporate Business Website',
    tagline: 'Complete digital presence for companies, agencies, and professional firms.',
    priceNote: 'Tailored to page count & feature scope (Custom Quote)',
    targetAudience: 'B2B companies, industrial manufacturers, service agencies, consultants',
    estimatedTimeline: '2 - 3 Weeks',
    isPopular: true,
    features: [
      'Multi-page structure (Home, About, Services, Case Studies, Contact)',
      'Custom branding tokens, typography, and light/dark theme',
      'Interactive Request-For-Quote (RFQ) and contact pipeline',
      'Downloadable datasheets / product catalog displays',
      'On-page technical SEO, XML sitemap & search console setup',
      '30 days post-launch warranty bug-fix guarantee'
    ],
    ctaText: 'Start Business Website'
  },
  {
    id: 'ecommerce-solution',
    name: 'E-commerce Digital Store',
    tagline: 'Complete online storefront with persistent cart, payment gateways, and order tracking.',
    priceNote: 'Scoped by catalog complexity & integrations (Custom Quote)',
    targetAudience: 'D2C retailers, specialty food brands, merchandise stores',
    estimatedTimeline: '3 - 5 Weeks',
    features: [
      'Dynamic product catalog with instant search & multi-filters',
      'Persistent shopping cart & checkout funnel',
      'Payment gateway integration (Razorpay, Stripe, or PayPal)',
      'Automated email order receipts & customer notifications',
      'Administrative order management console',
      'Security audit, SSL encryption & cloud deployment'
    ],
    ctaText: 'Build E-commerce Store'
  },
  {
    id: 'custom-web-application',
    name: 'Full-Stack Custom Web App',
    tagline: 'Bespoke software systems with databases, auth, and complex business logic.',
    priceNote: 'Sprint-based or phased milestone quotes (Custom Quote)',
    targetAudience: 'Tech startups, logistics, internal ops teams, SaaS MVPs',
    estimatedTimeline: '4 - 8 Weeks',
    features: [
      'Custom React frontend + Node.js/Express REST backend',
      'Relational (MySQL) or Document (MongoDB) database architecture',
      'Role-based JWT authentication & permission management',
      'Administrative dashboard with real-time KPI data visualizations',
      'Comprehensive API documentation & Postman collections',
      'Staging demo server with weekly milestone reviews'
    ],
    ctaText: 'Discuss Custom Web App'
  },
  {
    id: 'mobile-app',
    name: 'Android & Mobile Development',
    tagline: 'Native Android or cross-platform applications with offline-first local storage.',
    priceNote: 'Scoped by native device hardware & cloud sync (Custom Quote)',
    targetAudience: 'Field service teams, utility tools, companion apps',
    estimatedTimeline: '4 - 6 Weeks',
    features: [
      'Native Android (Java) or cross-platform mobile interface',
      'Offline-first data storage (SQLite / Room DB)',
      'REST API cloud synchronization & error recovery',
      'Hardware integration (Camera, Barcode/QR, Geolocation)',
      'Signed APK / Google Play-ready build deliverable',
      'Device testing across multiple screen sizes'
    ],
    ctaText: 'Discuss Mobile App'
  },
  {
    id: 'maintenance-retainer',
    name: 'Ongoing Maintenance & Support',
    tagline: 'Continuous monitoring, performance audits, security patches, and feature updates.',
    priceNote: 'Monthly retainer or on-demand hourly blocks (Custom Quote)',
    targetAudience: 'Businesses seeking peace of mind without a full-time in-house hire',
    estimatedTimeline: 'Ongoing Monthly / Ad-Hoc',
    features: [
      'Regular dependency security updates & bug fixes',
      'Continuous uptime and health monitoring',
      'Performance re-audits and Core Web Vitals checks',
      'Minor content, styling, and asset modifications',
      'Priority emergency turnaround within 24 business hours',
      'Monthly health summary report'
    ],
    ctaText: 'Inquire About Retainer'
  }
];

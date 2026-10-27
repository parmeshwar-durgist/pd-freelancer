import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'manyyata-foods',
    slug: 'manyyata-foods',
    title: 'The Gooseberry Project',
    subtitle: 'By Manyyata Foods — 100% Pure & Farm-Fresh Amla Products E-Commerce Store',
    category: 'E-commerce',
    tags: ['Node.js', 'Express.js', 'EJS', 'MySQL', 'Razorpay', 'JavaScript', 'NimbusPost'],
    client: 'Manyyata Foods (Ahilyanagar)',
    year: '2024',
    isVerified: true,
    isFeatured: true,
    status: 'Live',
    previewImage: '/the-gooseberry-project.png',
    liveDemoUrl: 'https://manyyatafoods.com/',
    summary: 'A direct-to-consumer e-commerce platform built for The Gooseberry Project by Manyyata Foods. Specializing in 100% pure, farm-fresh, chemical-free amla (Indian gooseberry) wellness products handcrafted in Ahilyanagar, featuring combo offers, search, shopping cart, checkout, Razorpay payment gateway, and NimbusPost shipping integration.',
    problem: 'Manyyata Foods needed a dedicated digital storefront to transition from telephone orders to a full online sales channel, enabling customers across India to browse farm-fresh amla products, claim combo deals, and purchase securely.',
    goals: [
      'Create an organic, farm-fresh brand presence highlighting chemical-free amla benefits',
      'Implement full product listings with search, instant filtering, and customer reviews',
      'Engineer persistent shopping cart management with dynamic combo discounts (e.g. Buy Any 3 Products & Get Flat 10% Off)',
      'Integrate Razorpay payment gateway alongside order tracking and NimbusPost shipping workflows'
    ],
    solution: 'Developed an end-to-end e-commerce web platform utilizing Node.js, Express.js, EJS templates, and a normalized MySQL relational database. Integrated Razorpay checkout, automated email/SMS order alerts, and prepared NimbusPost API logistics integration for automated tracking.',
    keyFeatures: [
      'Complete amla product catalog with nutritional highlights and customer feedback',
      'Dynamic combo promotional engine (Buy Any 3 Products & Get 10% Off) computed in cart',
      'Razorpay payment gateway integration supporting UPI, cards, and netbanking',
      'NimbusPost shipping and order tracking integration workflow',
      'Customer order history and admin order management console'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'EJS Templating Engine'],
      backend: ['Node.js', 'Express.js', 'REST Endpoints'],
      database: ['MySQL Relational Database'],
      tools: ['Razorpay Gateway', 'NimbusPost Logistics API', 'Git', 'Cloud Hosting']
    },
    challenges: 'Handling promotional bundle rules, shipping address validation across all Indian pincodes, and synchronizing payment webhooks reliably.',
    outcome: 'Successfully established the online commercial channel at manyyatafoods.com, driving direct consumer orders from multiple states and eliminating manual order processing.'
  },
  {
    id: 'ask-compaire',
    slug: 'ask-compaire',
    title: 'ASK Compaire',
    subtitle: 'Industrial Air Compressor Equipment & Corporate Inquiry Portal',
    category: 'Websites',
    tags: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript', 'Web3Forms', 'SEO'],
    client: 'ASK Compaire Systems',
    year: '2024',
    isVerified: true,
    isFeatured: true,
    status: 'Live',
    previewImage: '/ask-compaire-showcase.jpg',
    liveDemoUrl: 'https://www.askcompaire.co.in/',
    summary: 'A corporate B2B website engineered for industrial air compressor machinery, technical product categories, downloadable specification brochures, career forms, and high-intent customer inquiry capture with instant WhatsApp routing.',
    problem: 'Industrial buyers and engineering contractors struggled to find detailed compressor specifications, PSI/CFM ratings, and contact sales engineers for quotation without friction.',
    goals: [
      'Showcase industrial equipment lines (screw compressors, reciprocating units, air dryers) with detailed technical specs',
      'Build structured inquiry forms and career application pipelines using Web3Forms',
      'Enable direct 1-click WhatsApp customer communication for rapid sales responses',
      'Optimize technical SEO and search visibility for regional industrial machinery buyers'
    ],
    solution: 'Designed and deployed a responsive corporate website using WordPress and Elementor, enhanced with custom HTML/CSS/JavaScript components, Web3Forms integration for lead routing, and mobile-optimized layouts for factory engineers.',
    keyFeatures: [
      'Comprehensive machinery catalog categorized by pressure, capacity, and horsepower',
      'Integrated contact forms and career inquiry submissions via Web3Forms',
      'Direct WhatsApp chat shortcut for immediate quotation discussions',
      'Downloadable engineering technical datasheets and brochures',
      'Mobile-responsive layout with sub-second page rendering'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
      backend: ['WordPress Core', 'Elementor Builder Engine'],
      database: ['MySQL Database'],
      tools: ['Web3Forms', 'WhatsApp Business API Hooks', 'SEO Optimization']
    },
    challenges: 'Structuring complex industrial machinery data and heavy technical brochures in an intuitive format accessible to both procurement managers and shop-floor engineers.',
    outcome: 'Delivered a credible corporate portal at askcompaire.co.in that generates consistent inbound sales leads and simplifies technical product evaluation.'
  },
  {
    id: 'perfect-tyre',
    slug: 'perfect-tyre',
    title: 'Perfect Tyre & Wheels',
    subtitle: 'Tyre Sales, Showroom Services & Customer Engagement Portal',
    category: 'Websites',
    tags: ['React.js', 'Tyre Sales', 'Bridgestone Select', 'Yokohama Club Network', 'Responsive UI'],
    client: 'Perfect Tyre & Showroom Services',
    year: '2024',
    isVerified: false,
    isFeatured: true,
    status: 'Concept',
    previewImage: '/perfect-tyres-showcase.png',
    summary: 'A comprehensive automotive web concept engineered for tyre sales, showroom services, and customer engagement. Encompasses authorized dealership offerings including Bridgestone Select – Perfect Tyre and Yokohama Club Network – Perfect Wheels.',
    problem: 'Vehicle owners and commercial fleets often lack transparent access to tyre models, size compatibility guides, wheel alignment booking, and showroom warranty information.',
    goals: [
      'Create a digital hub for tyre sales showcasing top brands (Bridgestone Select, Yokohama Club Network)',
      'Provide an interactive tyre size & vehicle model selector (width, aspect ratio, rim diameter)',
      'Enable service appointment booking for wheel balancing, 3D alignment, and tyre fitting',
      'Provide instant quote requests and customer inquiry capture'
    ],
    solution: 'Architected a modern React.js web interface featuring tyre filter selectors, showroom service galleries, warranty registration guides, and direct WhatsApp quote consultation.',
    keyFeatures: [
      'Tyre catalog showcasing passenger car, SUV, and commercial fleet tyres',
      'Showcase for Bridgestone Select – Perfect Tyre & Yokohama Club Network – Perfect Wheels',
      'Interactive tyre size lookup by vehicle brand and model',
      'Online appointment inquiry for wheel alignment, balancing, and nitrogen inflation',
      'Responsive mobile-first touch UI with location maps and click-to-call'
    ],
    techStack: {
      frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      backend: ['Node.js API Middleware (Proposed)'],
      database: ['Product Catalog JSON / SQL Schema'],
      tools: ['Git', 'Vercel Deployment']
    },
    challenges: 'Designing a clear tyre lookup flow that helps vehicle owners find exact tyre dimensions without needing technical automotive knowledge.',
    outcome: 'Created a high-impact digital showroom concept ready for production deployment to capture regional automotive service customers.'
  },
  {
    id: 'developer-portfolio-series',
    slug: 'developer-portfolio-series',
    title: 'The Series Developer Portfolio',
    subtitle: 'Cinematic Developer Showcase & Technical Profile Platform',
    category: 'Web Apps',
    tags: ['React.js', 'Motion', 'Tailwind CSS', 'Vite', 'Vercel', 'Cinematic UI'],
    client: 'Personal Portfolio (Parmeshwar Durgist)',
    year: '2024',
    isVerified: true,
    isFeatured: true,
    status: 'Live',
    previewImage: '/the-series-portfolio.jpg',
    liveDemoUrl: 'https://parmeshwar-the-series.vercel.app/',
    summary: 'A cinematic, high-performance personal developer portfolio presenting Parmeshwar Durgist’s professional engineering trajectory, technical stack, verified projects, and freelance service capabilities.',
    problem: 'Traditional software portfolios often look like plain resumes and fail to convey technical craftsmanship, motion design, and real full-stack capability.',
    goals: [
      'Build a memorable, cinematic user experience highlighting real full-stack competencies',
      'Implement fluid micro-interactions and smooth scroll transitions using Motion',
      'Showcase production projects, verified client works, and direct communication links',
      'Achieve top-tier performance scores on mobile and desktop'
    ],
    solution: 'Built with React.js, Vite, and Motion for fluid animations. Hosted on Vercel with edge deployment, custom typography (Bebas Neue, Instrument Serif, Inter), and dark aesthetic.',
    keyFeatures: [
      'Cinematic project storytelling with interactive cards and detail modals',
      'Technical stack matrix covering frontend, backend, database, and mobile',
      'Responsive navigation and mobile-first touch gestures',
      'Direct contact triggers with email and social integration'
    ],
    techStack: {
      frontend: ['React.js', 'Motion for React', 'Tailwind CSS', 'HTML5/CSS3'],
      tools: ['Vite', 'Vercel Edge Hosting', 'Git/GitHub']
    },
    challenges: 'Balancing cinematic animations and high visual richness while preserving fast initial page load speeds.',
    outcome: 'Live at parmeshwar-the-series.vercel.app, serving as the authentic visual testament to engineering excellence.'
  },
  {
    id: 'mobile-billing-system',
    slug: 'mobile-billing-system',
    title: 'Mobile Billing & POS System',
    subtitle: 'Point-of-Sale Invoicing & Customer Transaction Application',
    category: 'Mobile & APIs',
    tags: ['Android', 'Java', 'SQLite', 'Invoicing', 'POS Billing', 'Offline First'],
    client: 'Retail & Commercial Software Concept',
    year: '2023',
    isVerified: false,
    isFeatured: false,
    status: 'Concept',
    previewImage: '/mobile-billing-pos.jpg',
    summary: 'A mobile billing application concept designed for small-to-medium retail outlets and distributors to create instant GST-compliant invoices, track customer accounts, and process transactions on handheld Android devices.',
    problem: 'Small retail merchants lose revenue and time using paper ledger books or bulky desktop computers that require continuous AC power and expensive software licenses.',
    goals: [
      'Enable rapid invoice generation in under 30 seconds on smartphones or Android POS tablets',
      'Support offline-first operation with local SQLite storage for uninterrupted billing during internet cuts',
      'Track customer credit balances, outstanding payments, and daily revenue reports'
    ],
    solution: 'Architected an Android application in Java with SQLite database persistence, barcode camera scanning hooks, itemized tax calculations, and thermal printer Bluetooth receipt generation.',
    keyFeatures: [
      'Quick billing interface with barcode/QR code product lookup',
      'Offline invoice generation with automated local data persistence',
      'Customer credit/debit ledger with WhatsApp invoice sharing',
      'Daily and monthly sales reports with CSV export capability'
    ],
    techStack: {
      frontend: ['Java', 'Android SDK', 'Material Design XML'],
      database: ['SQLite', 'Android Room DB'],
      tools: ['Android Studio', 'Gradle']
    },
    challenges: 'Optimizing memory usage and preventing database contention during fast consecutive billing entries on budget Android devices.',
    outcome: 'Demonstrated solid Android SDK fundamentals, local relational database management, and mobile UX design for commercial transactions.'
  },
  {
    id: 'addon-manufacturing-erp',
    slug: 'addon-manufacturing-erp',
    title: 'Add-On Manufacturing ERP',
    subtitle: 'Production Workflow, Bill of Materials & Inventory System',
    category: 'Web Apps',
    tags: ['Full-Stack', 'Node.js', 'MySQL', 'ERP System', 'Production Workflow'],
    client: 'Industrial Operations Concept',
    year: '2024',
    isVerified: false,
    isFeatured: false,
    status: 'Concept',
    previewImage: '/manufacturing-erp.jpg',
    summary: 'An enterprise web architecture concept engineered for manufacturing facilities to streamline shop-floor production stages, bill of materials (BOM), raw material inventory, and work order tracking.',
    problem: 'Manufacturing units frequently experience production delays and inventory stockouts due to disconnected spreadsheets and lack of real-time material tracking.',
    goals: [
      'Provide a centralized system for multi-stage production orders and machine scheduling',
      'Track raw material inventory levels with automated low-stock alerts',
      'Manage complex multi-level Bill of Materials (BOM) with unit cost tracking'
    ],
    solution: 'Designed a modular ERP web system with relational MySQL schemas, Node.js backend controllers, and interactive dashboard views to monitor work order progression from raw material issue to final quality inspection.',
    keyFeatures: [
      'Multi-stage production order tracking (Issued, In-Process, Inspection, Completed)',
      'Raw material inventory register with minimum stock threshold alerts',
      'Bill of Materials (BOM) creation with automated costing calculations',
      'Operator shift logging and machine utilization summaries'
    ],
    techStack: {
      frontend: ['React.js / HTML5', 'Tailwind CSS', 'Interactive Data Tables'],
      backend: ['Node.js', 'Express.js', 'Transaction Middleware'],
      database: ['MySQL Relational Database'],
      tools: ['Docker', 'Postman']
    },
    challenges: 'Designing relational database schemas that maintain data consistency across nested BOM parts and concurrent work orders.',
    outcome: 'Created a hardened industrial ERP foundation ready for deployment in small and mid-sized manufacturing plants.'
  },
  {
    id: 'upsc-mpsc-education-platform',
    slug: 'upsc-mpsc-education-platform',
    title: 'UPSC / MPSC Education Platform',
    subtitle: 'Competitive Exam Preparation, Mock Tests & Student Portal',
    category: 'Web Apps',
    tags: ['React.js', 'EdTech', 'Node.js', 'MongoDB', 'Mock Tests', 'Exam Portal'],
    client: 'EdTech & Learning Academy Concept',
    year: '2024',
    isVerified: false,
    isFeatured: false,
    status: 'Concept',
    previewImage: '/edtech-upsc-mpsc.jpg',
    summary: 'An interactive online learning and test preparation portal concept tailored for civil services aspirants (UPSC and MPSC), featuring timed mock tests, syllabus trackers, and lecture notes.',
    problem: 'Competitive exam candidates struggle to evaluate their performance systematically with timed mock exams, chapter-wise analytics, and organized study resources in regional languages.',
    goals: [
      'Build a timed online test engine replicating the official examination pattern',
      'Provide instant score calculations with negative marking and subject-wise accuracy analysis',
      'Organize categorized study materials, previous years questions (PYQs), and syllabus roadmaps'
    ],
    solution: 'Architected an educational web platform with a React.js client interface and a MongoDB database capable of storing extensive question banks, student answer sheets, and test analytics.',
    keyFeatures: [
      'Online examination simulator with countdown timers, question pallets, and negative marking',
      'Automated result analysis breaking down accuracy by subject (Polity, History, Economy, CSAT)',
      'Downloadable PDF study notes and syllabus completion progress tracker',
      'Student profile dashboard showing historical test score trends'
    ],
    techStack: {
      frontend: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'RESTful API'],
      database: ['MongoDB Document Store'],
      tools: ['Vercel', 'Postman']
    },
    challenges: 'Designing state persistence for long 100-question timed exams so that students do not lose answers on accidental page reloads.',
    outcome: 'Constructed an intuitive, scalable examination engine designed to handle concurrent student test sessions without lag.'
  },
  {
    id: 'hostel-management-system',
    slug: 'hostel-management-system',
    title: 'Hostel & Housing Management System',
    subtitle: 'Student Records, Room Allocation & Administration Software',
    category: 'Web Apps',
    tags: ['React.js', 'Management System', 'MySQL', 'Room Allocation', 'Fee Invoicing'],
    client: 'Institutional Housing Concept',
    year: '2023',
    isVerified: false,
    isFeatured: false,
    status: 'Concept',
    previewImage: '/hostel-management.jpg',
    summary: 'An administrative web software concept designed for university hostels and student residencies to manage room allotments, student admission profiles, fee payments, and visitor check-ins.',
    problem: 'Hostel wardens and admin staff spend hours searching physical logbooks for vacant beds, uncollected hostel fees, and student emergency contact details.',
    goals: [
      'Provide a visual floor-by-floor bed and room occupancy map',
      'Track student hostel admissions, ID documents, and emergency guardian details',
      'Automate monthly hostel fee invoicing and outstanding dues tracking'
    ],
    solution: 'Developed an administrative dashboard with role-based access for wardens and accountants, backed by relational MySQL schemas to manage blocks, rooms, beds, and student profiles.',
    keyFeatures: [
      'Visual room matrix displaying available, occupied, and maintenance beds in real time',
      'Student admission records with photo ID storage and parent contact information',
      'Fee receipt generation with status flags (Paid, Pending, Overdue)',
      'Digital visitor logbook with entry/exit timestamps'
    ],
    techStack: {
      frontend: ['React.js', 'Tailwind CSS', 'Lucide React'],
      backend: ['Node.js', 'Express.js'],
      database: ['MySQL Database with Foreign Key Integrity'],
      tools: ['Git', 'Vercel']
    },
    challenges: 'Preventing double-booking of beds during peak admission seasons through database-level transactional locks.',
    outcome: 'Delivered a clean, transparent administrative management portal that replaces manual hostel logbooks.'
  },
  {
    id: 'enterprise-crm-application',
    slug: 'enterprise-crm-application',
    title: 'LeadFlow Studio CRM & Pipeline',
    subtitle: 'Customer Relationship, Lead Pipeline & Quotation Platform',
    category: 'Web Apps',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Kanban'],
    client: 'Proposed CRM Application',
    year: '2024',
    isVerified: false,
    isFeatured: false,
    status: 'In Development',
    previewImage: '/leadflow-crm.jpg',
    summary: 'A proposed full-stack CRM application engineered for sales teams and freelance agencies to organize inbound leads, schedule follow-ups, dispatch quotation proposals, and track conversion rates.',
    problem: 'Sales teams frequently lose high-value prospects due to delayed follow-ups, scattered contact information, and lack of visibility into lead pipeline stages.',
    goals: [
      'Provide a visual drag-and-drop Kanban pipeline for lead status transitions (New, Contacted, Proposal, Won, Lost)',
      'Centralize customer interaction history, call notes, and email records',
      'Generate professional quotation PDFs directly from lead requirements'
    ],
    solution: 'Designed a modern React.js frontend with drag-and-drop pipeline stages, connected to a secure Express.js API with JWT authentication and MongoDB storage.',
    keyFeatures: [
      'Interactive Kanban lead board with stage-by-stage status updating',
      'Contact directory with complete communication history and scheduled reminders',
      'One-click quotation generator with itemized line items and tax calculations',
      'Team role permissions (Admin, Sales Rep, Viewer)'
    ],
    techStack: {
      frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'JWT Authentication'],
      database: ['MongoDB Atlas / MySQL'],
      tools: ['Postman', 'Docker']
    },
    challenges: 'Maintaining responsive state sync when moving lead cards across kanban columns while updating database timestamps simultaneously.',
    outcome: 'Offers a modular, production-ready CRM architecture for client businesses seeking custom lead workflows without expensive SaaS monthly fees.'
  },
  {
    id: 'professional-3d-portfolio',
    slug: 'professional-3d-portfolio',
    title: '3D Interactive Developer Studio',
    subtitle: 'Advanced Three.js & Motion Interactive Portfolio Experience',
    category: 'Web Apps',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Three.js (Proposed)'],
    client: 'Proposed 3D Developer Portfolio',
    year: '2025',
    isVerified: false,
    isFeatured: false,
    status: 'Concept',
    previewImage: '/threejs-portfolio.jpg',
    summary: 'A proposed next-generation interactive portfolio architecture integrating 3D visual elements, smooth GSAP/Motion micro-animations, dynamic theme shaders, and high-conversion freelance project inquiry funnels.',
    problem: 'Standing out in a competitive global freelance market demands cutting-edge visual presentation that immediately demonstrates mastery over advanced web technologies and 3D rendering.',
    goals: [
      'Implement interactive 3D elements that respond to cursor movement and scroll gestures without draining mobile batteries',
      'Create custom shader backgrounds and smooth layout transitions',
      'Showcase enterprise-grade software capabilities with editorial design sophistication'
    ],
    solution: 'Conceived with React.js, TypeScript, and Three.js (via React Three Fiber) paired with Tailwind CSS, utilizing responsive fallbacks on lower-power devices to maintain 60 FPS performance.',
    keyFeatures: [
      'Interactive 3D geometry and shader particle effects',
      'Smooth page transitions and scroll-driven choreography',
      'Accessible responsive fallback for mobile devices',
      'High-conversion service package estimators and inquiry routing'
    ],
    techStack: {
      frontend: ['React.js', 'TypeScript', 'Tailwind CSS', 'Three.js (Proposed)', 'Motion'],
      tools: ['Vite', 'Vercel Edge']
    },
    challenges: 'Ensuring seamless WebGL rendering performance without hurting Core Web Vitals or mobile responsiveness.',
    outcome: 'Represents the frontier of modern web creative engineering, designed to impress tech founders and enterprise design teams.'
  },
  {
    id: 'manisha-infracon',
    slug: 'manisha-infracon',
    title: 'Manisha Infracon',
    subtitle: 'Infrastructure, Heavy Civil Engineering & Construction Corporate Portal',
    category: 'Websites',
    tags: ['Infrastructure', 'Civil Engineering', 'Corporate Website', 'Responsive UI', 'Inquiry Routing'],
    client: 'Manisha Infracon',
    year: '2024',
    isVerified: true,
    isFeatured: true,
    status: 'Live',
    previewImage: '/manisha-infracon.jpg',
    liveDemoUrl: 'https://manishainfracon.com/',
    summary: 'A robust corporate infrastructure and construction website engineered for Manisha Infracon, showcasing large-scale civil engineering projects, heavy machinery fleet, corporate credentials, and RFQ inquiry workflows for government and private tenders.',
    problem: 'Infrastructure and construction firms need a commanding digital presence to validate project execution credentials, equipment capacity, and ISO certifications when competing for large tenders.',
    goals: [
      'Showcase high-scale civil infrastructure projects across highways, bridges, and commercial structures',
      'Display heavy equipment fleet, technical personnel capacity, and safety compliance standards',
      'Provide streamlined contact and Request For Quotation (RFQ) inquiry channels',
      'Ensure fast, responsive access for field contractors, government clients, and partners'
    ],
    solution: 'Engineered a modern, responsive corporate portal with clear sector categorization (Highways, Heavy Engineering, Industrial, Commercial), interactive equipment showcases, credential badges, and direct lead routing.',
    keyFeatures: [
      'Structured project portfolio categorized by civil engineering sector and milestone',
      'State-of-the-art machinery and equipment fleet showcase with technical specs',
      'Corporate credentials, ISO quality certifications, and client trust logos',
      'Interactive Request a Quote inquiry form and direct contact routing',
      'Mobile-optimized responsive architecture with sub-second page rendering'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Modern CSS Architecture'],
      backend: ['Modern Web Architecture / CMS'],
      database: ['Project Catalog / Form Records'],
      tools: ['Git', 'SEO Optimization', 'Cloud Hosting']
    },
    challenges: 'Presenting heavy infrastructure specifications and high-resolution civil project imagery in a clean, rapidly loading layout accessible on field mobile connections.',
    outcome: 'Deployed at manishainfracon.com, giving Manisha Infracon a competitive, authoritative online presence for tender bids and corporate client inquiries.'
  },
  {
    id: 'karale-club-house',
    slug: 'karale-club-house',
    title: 'Karale Club House',
    subtitle: 'Resort Amenities, Hospitality Facility & Event Booking Showcase',
    category: 'Websites',
    tags: ['Hospitality', 'Club House', 'Resort Amenities', 'Photo Gallery', 'Event Booking'],
    client: 'Karale Club House',
    year: '2024',
    isVerified: true,
    isFeatured: true,
    status: 'Live',
    previewImage: '/karale-clubhouse.jpg',
    liveDemoUrl: 'https://karaleclubhouse.com/',
    summary: 'An elegant hospitality and club house web experience built for Karale Club House, featuring resort amenities (luxury swimming pool, banquet lawns, sports facilities, indoor games), guest accommodations, event photo galleries, and visitor inquiry booking forms.',
    problem: 'Hospitality venues lose bookings and day visitors when amenities, accommodation photos, banquet options, and pricing inquiries are difficult to locate on smartphones.',
    goals: [
      'Create an inviting, luxurious digital presence reflecting resort amenities and leisure facilities',
      'Present comprehensive amenity sections: swimming pool, banquet lawns, sports facilities, indoor games',
      'Showcase high-resolution photo galleries of weddings, corporate events, and guest villas',
      'Enable direct visitor inquiry submissions and WhatsApp booking consultations'
    ],
    solution: 'Designed and deployed a responsive hospitality web portal featuring warm, welcoming aesthetics, tabbed amenity explorations, rich image carousels, and an integrated reservation inquiry form.',
    keyFeatures: [
      'Comprehensive amenity highlights: infinity swimming pool, grand banquet lawns, sports facilities, and indoor games',
      'Guest accommodation room showcase with amenity breakdowns and photo galleries',
      'Filterable event photo gallery capturing celebrations, corporate meets, and gatherings',
      'Instant visitor inquiry & event booking form with direct WhatsApp contact shortcut',
      'Touch-friendly mobile navigation with interactive Google Map directions'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layout', 'Photo Gallery Grid'],
      backend: ['Inquiry Form Processing / Cloud Functions'],
      tools: ['Git', 'Vercel / Cloud CDN', 'SEO Meta Tags']
    },
    challenges: 'Delivering rich visual photo galleries and lush landscape imagery while keeping page load speeds lightning-fast on mobile devices.',
    outcome: 'Live at karaleclubhouse.com, driving consistent event inquiries, weekend club visits, and private party lawn bookings.'
  }
];

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ExternalLink,
  Phone,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Building2,
  ShoppingBag,
  Factory,
  Hotel,
  Car,
  Layers,
  Code2
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { servicesData } from '../../data/services';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  links?: { label: string; url: string; isExternal?: boolean }[];
}

const starterSuggestions = [
  '👋 Say Hello',
  '💡 Have a Business Idea / MVP',
  '💼 Show Live Client Projects',
  '🛠️ Services & Technologies',
  '💰 Pricing & Timelines',
  '📞 Contact Parmeshwar Directly'
];

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hello! 👋 I'm **Parmeshwar Durgist's AI Assistant** at **PD Freelancer**.\n\nI can answer any questions about our live projects, software services, business idea solutions, technology stack, pricing, and how to hire Parmeshwar for your next project!\n\nHow can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickReplies: starterSuggestions
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  // Comprehensive Knowledge & Intent Analyzer
  const analyzeQuery = (query: string): { text: string; links?: { label: string; url: string; isExternal?: boolean }[] } => {
    const raw = query.toLowerCase().trim();
    // Normalize punctuation
    const q = raw.replace(/[?!.,;:()]/g, ' ');

    // 1. GREETINGS & INTRODUCTIONS
    if (/^(hi|hii|hiii|hello|helo|hey|heya|yo|namaste|hola)(\s|$)/.test(raw) || q === 'hi' || q === 'hello') {
      return {
        text: "Hello there! 😊 Great to connect with you!\n\nI'm Parmeshwar Durgist's AI assistant. Whether you're exploring a new digital business idea, need a custom web application, or want to review Parmeshwar's verified client projects, feel free to ask me anything!\n\nWhat kind of software project or question is on your mind today?",
        links: [
          { label: 'Explore Services', url: '/services' },
          { label: 'View 12 Projects', url: '/portfolio' },
          { label: 'Chat on WhatsApp', url: 'https://wa.me/919657847967', isExternal: true }
        ]
      };
    }

    if (q.includes('how are you') || q.includes('how r u') || q.includes('how do you do') || q.includes('how are u')) {
      return {
        text: "I'm doing fantastic, thank you for asking! 🚀 Ready and energized to help you build outstanding software.\n\nParmeshwar is currently open for select new freelance projects, web application development, and technical consulting. How can we help your business today?",
        links: [
          { label: 'Start Project Discussion', url: '/contact' },
          { label: 'Browse Portfolio', url: '/portfolio' }
        ]
      };
    }

    if (q.includes('who are you') || q.includes('what is your name') || q.includes('who made you') || q.includes('what do you do')) {
      return {
        text: "I am the virtual AI assistant for **PD Freelancer**, created for **Parmeshwar Durgist** — a Software Engineer & Full-Stack Developer with 2+ years of production experience.\n\nParmeshwar specializes in building modern websites, custom web apps, e-commerce platforms, ERP systems, and REST APIs. I'm trained on all his project case studies, services, and engineering standards to give you instant answers!",
        links: [
          { label: 'Read Parmeshwar’s Story', url: '/about' },
          { label: 'The Series Portfolio', url: 'https://parmeshwar-the-series.vercel.app/', isExternal: true }
        ]
      };
    }

    if (q.includes('thank') || q.includes('thanks') || q.includes('thx') || q.includes('awesome') || q.includes('great') || q.includes('cool')) {
      return {
        text: "You're very welcome! 😊 Always happy to assist. If you’d like to discuss a project in detail or get a custom timeline and proposal, Parmeshwar is just a WhatsApp message or call away at **+91 9657847967**.",
        links: [
          { label: 'Chat on WhatsApp', url: 'https://wa.me/919657847967', isExternal: true },
          { label: 'Send Project Brief', url: '/contact' }
        ]
      };
    }

    if (q.includes('bye') || q.includes('goodbye') || q.includes('see you') || q.includes('later')) {
      return {
        text: "Have a great day ahead! 👋 Feel free to return anytime or reach Parmeshwar directly on WhatsApp at **+91 9657847967** whenever you're ready to start your project.",
        links: [
          { label: 'Bookmark Contact Page', url: '/contact' }
        ]
      };
    }

    // 2. BUSINESS IDEAS, DIGITAL PROBLEM SOLVING & STARTUP MVPs
    if (
      q.includes('business idea') ||
      q.includes('idea') ||
      q.includes('problem') ||
      q.includes('solution') ||
      q.includes('startup') ||
      q.includes('mvp') ||
      q.includes('prototype') ||
      q.includes('concept') ||
      q.includes('automate') ||
      q.includes('paperwork') ||
      q.includes('digital transformation')
    ) {
      return {
        text: "💡 **Transforming Business Ideas into Working Digital Products**\n\nParmeshwar specializes in helping founders and business owners turn raw concepts into functional, revenue-generating software:\n\n1. **Business Problem Analysis**: Deconstructing operational bottlenecks (e.g. manual spreadsheets, lost customer inquiries, paper invoices).\n2. **Rapid MVP Development**: Building a clean, high-impact Minimum Viable Product in 2 to 4 weeks using React, Node.js, and modern databases.\n3. **Validation & Customer Funnels**: Integrating payment gateways (Razorpay), automated WhatsApp/email alerts, and user authentication from day one.\n4. **Scalable Architecture**: Zero lock-in, clean code, and 100% full source code ownership handed over to you.",
        links: [
          { label: 'Explore Idea-to-MVP Service', url: '/services#idea-to-digital-product' },
          { label: 'Discuss Your Idea on WhatsApp', url: 'https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I%20have%20a%20business%20idea%20I%20want%20to%20develop.', isExternal: true },
          { label: 'Submit Confidential Brief', url: '/contact' }
        ]
      };
    }

    // 3. SOCIAL MEDIA & MULTI-CHANNEL INTEGRATION
    if (
      q.includes('social media') ||
      q.includes('social') ||
      q.includes('instagram') ||
      q.includes('facebook') ||
      q.includes('meta pixel') ||
      q.includes('pixel') ||
      q.includes('lead funnel')
    ) {
      return {
        text: "📱 **Social Media & Digital Channel Integration Service**\n\nWe connect your web platform directly with your customer acquisition channels:\n\n• **1-Click WhatsApp Routing**: Floating widgets with pre-filled product/quotation chats.\n• **Meta Pixel & Conversions API**: Accurate tracking for Facebook and Instagram advertising ROI.\n• **Dynamic OpenGraph Previews**: Rich thumbnail and title cards when sharing links on WhatsApp, LinkedIn, and Twitter.\n• **Automated Lead Alerts**: Instant notification directly to your phone whenever someone submits an inquiry.",
        links: [
          { label: 'View Social Integration Details', url: '/services#social-media-digital-channels' },
          { label: 'Request Integration', url: '/contact' }
        ]
      };
    }

    // 4. SPECIFIC PROJECT DEEP-DIVES
    // Manyyata Foods
    if (q.includes('manyyata') || q.includes('gooseberry') || q.includes('amla') || q.includes('food')) {
      return {
        text: "🌿 **The Gooseberry Project (Manyyata Foods)**\n\n• **Type**: D2C Health & Wellness E-Commerce Store\n• **Live Website**: [manyyatafoods.com](https://manyyatafoods.com/)\n• **Tech Stack**: Node.js, Express.js, EJS, MySQL, Razorpay Gateway, NimbusPost Shipping API\n• **Key Highlights**: Built for 100% farm-fresh, chemical-free amla products handcrafted in Ahilyanagar. Features persistent shopping carts, combo deals ('Buy 3, get 10% off'), secure checkout, and logistics tracking.",
        links: [
          { label: 'Visit Live Website', url: 'https://manyyatafoods.com/', isExternal: true },
          { label: 'Read Case Study', url: '/portfolio/manyyata-foods' }
        ]
      };
    }

    // ASK Compaire
    if (q.includes('ask compaire') || q.includes('compaire') || q.includes('compressor') || q.includes('industrial equipment')) {
      return {
        text: "🏭 **ASK Compaire — Industrial Machinery Portal**\n\n• **Type**: Corporate B2B Engineering Website\n• **Live Website**: [askcompaire.co.in](https://www.askcompaire.co.in/)\n• **Tech Stack**: WordPress, Elementor, HTML5, CSS3, JavaScript, Web3Forms\n• **Key Highlights**: Corporate catalog for high-performance industrial screw air compressors and air dryers. Features PSI/CFM technical specs, downloadable engineering brochures, career applications, and instant WhatsApp sales lead capture.",
        links: [
          { label: 'Visit Live Website', url: 'https://www.askcompaire.co.in/', isExternal: true },
          { label: 'Read Case Study', url: '/portfolio/ask-compaire' }
        ]
      };
    }

    // Manisha Infracon
    if (q.includes('manisha') || q.includes('infracon') || q.includes('infrastructure') || q.includes('construction') || q.includes('civil')) {
      return {
        text: "🏗️ **Manisha Infracon — Civil Infrastructure Portal**\n\n• **Type**: Heavy Civil Engineering & Construction Corporate Website\n• **Live Website**: [manishainfracon.com](https://manishainfracon.com/)\n• **Tech Stack**: Modern Responsive Architecture, HTML5, CSS3, JavaScript, Cloud CDN\n• **Key Highlights**: Showcases multi-crore civil infrastructure projects across highways, bridges, heavy industrial complexes, equipment fleet capabilities, ISO certifications, and government tender RFQ channels.",
        links: [
          { label: 'Visit Live Website', url: 'https://manishainfracon.com/', isExternal: true },
          { label: 'Read Case Study', url: '/portfolio/manisha-infracon' }
        ]
      };
    }

    // Karale Club House
    if (q.includes('karale') || q.includes('clubhouse') || q.includes('club house') || q.includes('resort') || q.includes('hospitality') || q.includes('lawn') || q.includes('swimming pool')) {
      return {
        text: "🏨 **Karale Club House — Resort & Hospitality Showcase**\n\n• **Type**: Luxury Hospitality & Leisure Facility Website\n• **Live Website**: [karaleclubhouse.com](https://karaleclubhouse.com/)\n• **Tech Stack**: Responsive UI, Photo Gallery Grid, Cloud CDN, Booking Forms\n• **Key Highlights**: Highlights resort amenities including infinity swimming pool, grand banquet lawns, sports facilities, indoor games, guest accommodations, celebration photo galleries, and visitor event booking inquiry channels.",
        links: [
          { label: 'Visit Live Website', url: 'https://karaleclubhouse.com/', isExternal: true },
          { label: 'Read Case Study', url: '/portfolio/karale-club-house' }
        ]
      };
    }

    // Perfect Tyre & Wheels
    if (q.includes('perfect tyre') || q.includes('tyre') || q.includes('tire') || q.includes('bridgestone') || q.includes('yokohama') || q.includes('wheel')) {
      return {
        text: "🚗 **Perfect Tyre & Wheels**\n\n• **Type**: Automotive Sales, Showroom Services & Customer Portal\n• **Status**: Production Concept Architecture\n• **Tech Stack**: React.js, Tailwind CSS, Responsive Vehicle Lookup\n• **Key Highlights**: Digital hub representing Bridgestone Select – Perfect Tyre and Yokohama Club Network – Perfect Wheels. Includes tyre size selector, 3D wheel alignment booking, and warranty guides.",
        links: [
          { label: 'Read Case Study', url: '/portfolio/perfect-tyre' }
        ]
      };
    }

    // The Series Developer Portfolio
    if (q.includes('the series') || q.includes('cinematic portfolio') || q.includes('parmeshwar portfolio')) {
      return {
        text: "🎬 **The Series Developer Portfolio**\n\n• **Live Website**: [parmeshwar-the-series.vercel.app](https://parmeshwar-the-series.vercel.app/)\n• **Tech Stack**: React.js, Vite, Motion for React, Tailwind CSS, Vercel Edge\n• **Key Highlights**: Cinematic developer portfolio presenting Parmeshwar Durgist’s engineering trajectory, technical benchmarks, and interactive visual story.",
        links: [
          { label: 'Visit The Series Live', url: 'https://parmeshwar-the-series.vercel.app/', isExternal: true },
          { label: 'Read Case Study', url: '/portfolio/developer-portfolio-series' }
        ]
      };
    }

    // Manufacturing ERP
    if (q.includes('erp') || q.includes('manufacturing') || q.includes('bom') || q.includes('production') || q.includes('inventory')) {
      return {
        text: "⚙️ **Add-On Manufacturing ERP**\n\n• **Type**: Industrial Production Workflow & Inventory System\n• **Tech Stack**: Node.js, Express.js, MySQL, React.js\n• **Key Highlights**: Manages multi-stage shop floor work orders (Issued, In-Process, Inspection), complex multi-level Bill of Materials (BOM), raw material registers, and machine utilization logs.",
        links: [
          { label: 'View ERP Case Study', url: '/portfolio/addon-manufacturing-erp' },
          { label: 'Custom ERP Service', url: '/services#it-erp-automation' }
        ]
      };
    }

    // Mobile Billing / POS
    if (q.includes('billing') || q.includes('pos') || q.includes('invoice') || q.includes('gst') || q.includes('receipt')) {
      return {
        text: "📱 **Mobile Billing & POS System**\n\n• **Type**: Point-of-Sale Invoicing & Customer Ledger App\n• **Tech Stack**: Java (Android SDK), SQLite, Room DB, Material Design\n• **Key Highlights**: Enables instant GST-compliant invoicing on Android phones or tablets in under 30 seconds. Supports barcode camera scanning, customer credit/debit ledger, and offline-first database sync.",
        links: [
          { label: 'View Billing Case Study', url: '/portfolio/mobile-billing-system' },
          { label: 'Mobile App Service', url: '/services#mobile-applications' }
        ]
      };
    }

    // UPSC / MPSC EdTech
    if (q.includes('upsc') || q.includes('mpsc') || q.includes('exam') || q.includes('edtech') || q.includes('mock test') || q.includes('education')) {
      return {
        text: "📚 **UPSC / MPSC Education Platform**\n\n• **Type**: Competitive Exam Preparation & Test Portal\n• **Tech Stack**: React.js, Node.js, MongoDB, Tailwind CSS\n• **Key Highlights**: Online examination simulator replicating official civil service exam patterns with timers, question palettes, negative marking, and subject-wise accuracy analytics.",
        links: [
          { label: 'View EdTech Case Study', url: '/portfolio/upsc-mpsc-education-platform' }
        ]
      };
    }

    // Hostel Management System
    if (q.includes('hostel') || q.includes('room allocation') || q.includes('student housing') || q.includes('bed')) {
      return {
        text: "🏢 **Hostel & Housing Management System**\n\n• **Type**: Student Records & Room Allocation Software\n• **Tech Stack**: React.js, Node.js, MySQL Database\n• **Key Highlights**: Visual floor-by-floor bed matrix, student ID document records, monthly fee collection status, and digital visitor logbooks.",
        links: [
          { label: 'View Hostel Case Study', url: '/portfolio/hostel-management-system' }
        ]
      };
    }

    // CRM / LeadFlow Studio
    if (q.includes('crm') || q.includes('lead') || q.includes('pipeline') || q.includes('kanban') || q.includes('quotation')) {
      return {
        text: "📊 **LeadFlow Studio CRM & Pipeline**\n\n• **Type**: Customer Relationship & Deal Pipeline Platform\n• **Tech Stack**: React.js, TypeScript, Node.js, Express, MongoDB\n• **Key Highlights**: Visual drag-and-drop Kanban lead board, customer interaction timeline, automated reminder triggers, and 1-click quotation PDF generator.",
        links: [
          { label: 'View CRM Case Study', url: '/portfolio/enterprise-crm-application' },
          { label: 'CRM & Dashboards Service', url: '/services#dashboards-crm' }
        ]
      };
    }

    // 5. SERVICES & CAPABILITIES
    if (
      q.includes('service') ||
      q.includes('what can you do') ||
      q.includes('capabilities') ||
      q.includes('offer') ||
      q.includes('web development') ||
      q.includes('ecommerce') ||
      q.includes('api')
    ) {
      return {
        text: "💼 **Complete Software Services by PD Freelancer**\n\n1. **Business Website Development**: Modern corporate portals\n2. **Custom Web Applications**: Bespoke React + Node full-stack platforms\n3. **E-commerce Solutions**: Dynamic stores, carts & payment gateways\n4. **Custom ERP, Billing & Automation**: Manufacturing, POS & institutional software\n5. **Business Idea to Digital MVP**: Concept design, prototyping & rapid build\n6. **Social Media & Funnel Integration**: WhatsApp API, Meta Pixel & lead capture\n7. **Android Mobile Development**: Native Java apps with offline SQLite\n8. **Website Redesign & Maintenance**: Speed optimization, bug fixes & security\n9. **REST APIs & Backend Engineering**: Secure Node.js server endpoints",
        links: [
          { label: 'Explore All 13 Services', url: '/services' },
          { label: 'Request Proposal', url: '/contact' }
        ]
      };
    }

    // 6. CLIENT HANDLING & PROFESSIONAL EXPERIENCE LEVEL
    if (
      q.includes('client handling') ||
      q.includes('client') ||
      q.includes('experience') ||
      q.includes('experience level') ||
      q.includes('middlemen') ||
      q.includes('communication') ||
      q.includes('how do you work') ||
      q.includes('project ownership')
    ) {
      return {
        text: "🤝 **Client Handling & Professional Experience Level**\n\n• **Experience**: 2+ Years of Production Software Engineering experience across web, mobile, ERP, and cloud systems.\n• **Zero Middlemen**: You communicate 100% directly with Parmeshwar Durgist (no junior developers, account managers, or sales intermediaries).\n• **Direct Client Handling**: Active technical consultation, requirement analysis, regular WhatsApp/video call updates, and weekly milestone staging links.\n• **End-to-End Ownership**: From raw business idea to UI/UX, architecture, coding, testing, domain/cloud deployment, and post-launch maintenance.\n• **100% Code Ownership**: Complete source code, IP rights, and assets transferred directly to you upon delivery.\n• **Sprint Milestones**: Milestone-backed sprint delivery (typically 2 to 4 weeks) with 30 days of free bug-fix warranty.",
        links: [
          { label: 'Read About Parmeshwar', url: '/about' },
          { label: 'View 6-Stage Process', url: '/process' },
          { label: 'Direct WhatsApp Line', url: 'https://wa.me/919657847967', isExternal: true }
        ]
      };
    }

    // 7. TECHNOLOGIES & SKILLS
    if (
      q.includes('tech') ||
      q.includes('stack') ||
      q.includes('skill') ||
      q.includes('react') ||
      q.includes('node') ||
      q.includes('express') ||
      q.includes('database') ||
      q.includes('mysql') ||
      q.includes('mongo') ||
      q.includes('javascript') ||
      q.includes('typescript') ||
      q.includes('java') ||
      q.includes('android') ||
      q.includes('react native') ||
      q.includes('docker') ||
      q.includes('aws') ||
      q.includes('hostinger') ||
      q.includes('ci/cd') ||
      q.includes('deployment') ||
      q.includes('tailwind')
    ) {
      return {
        text: "🛠️ **Parmeshwar Durgist's Technical & Cloud Stack**\n\n• **Frontend & Mobile**: React.js, React Native, Android Java, Java (Android SDK), TypeScript, Tailwind CSS\n• **Backend & APIs**: Node.js, Express.js, RESTful Architecture, JWT Authentication, Webhooks\n• **Databases**: MongoDB (Mongoose ODM), MySQL Relational Database (ACID), SQLite / Room\n• **Cloud, DevOps & Hosting**: Docker, Git & GitHub, CI/CD Pipeline, AWS, Hostinger, Vercel Edge, Production Deployment\n• **Client & Delivery Skills**: Direct Client Handling, End-to-End Project Ownership, Sub-Second Performance Optimization, Zero Middlemen",
        links: [
          { label: 'Verified Skills Matrix', url: '/about' },
          { label: 'GitHub Repositories', url: 'https://github.com/parmeshwar-durgist', isExternal: true }
        ]
      };
    }

    // 7. PRICING & COST
    if (
      q.includes('price') ||
      q.includes('pricing') ||
      q.includes('cost') ||
      q.includes('rate') ||
      q.includes('budget') ||
      q.includes('how much') ||
      q.includes('charge') ||
      q.includes('quote')
    ) {
      return {
        text: "💰 **Transparent Scope-Based Pricing**\n\nWe provide itemized, honest proposals with zero hidden agency markups:\n\n• **High-Impact Landing Page**: Great for product launches or marketing campaigns\n• **Corporate Business Website**: 4-8 pages, mobile-responsive, inquiry forms, SEO\n• **E-commerce Digital Store**: Complete product catalog, cart, Razorpay payment & shipping workflows\n• **Custom Web App / ERP**: Bespoke architecture, role authentication & database modeling\n\nEvery project includes 100% full source code ownership and 30 days of free post-launch support.",
        links: [
          { label: 'View Pricing Guidance', url: '/pricing' },
          { label: 'Get Free Project Quote', url: '/contact' }
        ]
      };
    }

    // 8. PROCESS & TIMELINE
    if (
      q.includes('process') ||
      q.includes('timeline') ||
      q.includes('how long') ||
      q.includes('stages') ||
      q.includes('steps') ||
      q.includes('delivery')
    ) {
      return {
        text: "⏱️ **6-Stage Structured Delivery Process**\n\n1. **Discovery & Scope Definition** (1-3 Days): Requirements & tech selection\n2. **UI/UX Wireframing** (3-5 Days): Responsive layouts & user flow approvals\n3. **Full-Stack Development** (1-3 Weeks): Clean code & weekly staging links\n4. **Testing & QA** (2-4 Days): Cross-device testing & performance audits\n5. **Deployment & Go-Live** (1-2 Days): Domain DNS, SSL, and production launch\n6. **Post-Launch Support** (30 Days): Free bug-fixing warranty and handoff",
        links: [
          { label: 'View 6-Stage Process', url: '/process' }
        ]
      };
    }

    // 9. CONTACT & HIRING
    if (
      q.includes('contact') ||
      q.includes('hire') ||
      q.includes('whatsapp') ||
      q.includes('call') ||
      q.includes('phone') ||
      q.includes('email') ||
      q.includes('number') ||
      q.includes('reach') ||
      q.includes('connect')
    ) {
      return {
        text: "📞 **Contact Parmeshwar Durgist Directly**\n\n• **Direct Phone & WhatsApp**: +91 9657847967\n• **Email**: pd.softwaredeveloper@gmail.com\n• **GitHub**: [github.com/parmeshwar-durgist](https://github.com/parmeshwar-durgist)\n• **Portfolio**: [parmeshwar-the-series.vercel.app](https://parmeshwar-the-series.vercel.app/)\n• **Response Time**: Usually under a few hours!",
        links: [
          { label: 'Chat on WhatsApp (9657847967)', url: 'https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I%20reviewed%20your%20website%20and%20want%20to%20discuss%20a%20project.', isExternal: true },
          { label: 'Call Directly (+91 9657847967)', url: 'tel:+919657847967', isExternal: true },
          { label: 'Submit Online Brief', url: '/contact' }
        ]
      };
    }

    // 10. CODE OWNERSHIP, CONFIDENTIALITY & NDA
    if (q.includes('nda') || q.includes('confidential') || q.includes('code ownership') || q.includes('source code') || q.includes('intellectual property')) {
      return {
        text: "🔒 **Code Ownership & Confidentiality**\n\n• **100% Code Ownership**: Upon project completion, full repository rights, source code, and deployment credentials belong entirely to you.\n• **NDA Ready**: Parmeshwar is happy to sign a Non-Disclosure Agreement (NDA) before you share sensitive business logic or proprietary ideas.\n• **Zero Vendor Lock-In**: Code is written following industry-standard patterns so any developer can maintain it.",
        links: [
          { label: 'Start Protected Discussion', url: '/contact' }
        ]
      };
    }

    // 11. GENERAL PORTFOLIO / ALL PROJECTS
    if (q.includes('all project') || q.includes('projects') || q.includes('portfolio') || q.includes('work') || q.includes('clients')) {
      return {
        text: "📁 **Parmeshwar's Project Portfolio (12 Solutions)**\n\n• **Live Deployments**: Manyyata Foods (E-commerce), ASK Compaire (Industrial), Manisha Infracon (Infrastructure), Karale Club House (Hospitality), The Series Developer Portfolio.\n• **Enterprise & Concept Architectures**: Manufacturing ERP, Mobile POS Billing, UPSC/MPSC EdTech, Hostel Management, LeadFlow CRM, Perfect Tyre, and 3D Interactive Studio.",
        links: [
          { label: 'Browse Filterable Portfolio', url: '/portfolio' }
        ]
      };
    }

    // SMART DEFAULT FALLBACK: Generates helpful answer + relevant navigation
    return {
      text: `I understand you're asking about "${query}".\n\nAt **PD Freelancer**, Parmeshwar Durgist builds bespoke web applications, e-commerce stores, industrial websites, and custom business solutions.\n\nWould you like to:\n1. Discuss this specific project requirement on WhatsApp?\n2. Explore our verified project case studies?\n3. Request an itemized scope and proposal?`,
      links: [
        { label: 'Chat on WhatsApp (+91 9657847967)', url: 'https://wa.me/919657847967', isExternal: true },
        { label: 'Send Project Brief', url: '/contact' },
        { label: 'View Portfolio', url: '/portfolio' }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Natural conversation delay (500-700ms)
    setTimeout(() => {
      const response = analyzeQuery(text);
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: response.links
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Chat refreshed! How else can I assist you with Parmeshwar's software development services or projects?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: starterSuggestions
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Launcher Button (Bottom-Left - Normal Small Size) */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant Chat"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-brand-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-brand-400/30"
          >
            {/* Small Ambient Glow */}
            <span className="absolute -inset-0.5 rounded-full bg-brand-500/25 blur-sm opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Normal Small Bot Icon */}
            <Bot className="w-5 h-5 text-white transition-transform group-hover:scale-110" />

            {/* Active Status Beacon */}
            <span className="absolute top-0.5 right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-white dark:border-slate-900"></span>
            </span>

            {/* Hover Tooltip (Desktop) */}
            <span className="hidden sm:group-hover:flex absolute left-full ml-3 px-2.5 py-1 rounded-lg bg-slate-900/95 dark:bg-slate-800 text-white text-[11px] font-semibold whitespace-nowrap shadow-md border border-slate-700 pointer-events-none transition-all">
              AI Assistant
            </span>
          </button>
        ) : null}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[85vh] sm:max-h-[640px] h-[590px] rounded-3xl overflow-hidden glass-card shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <Bot className="w-5 h-5 text-brand-200" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-brand-800"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">PD Freelancer AI</h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-white/20 text-white">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-brand-200 font-medium">
                  Parmeshwar Durgist Studio Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/60 dark:bg-slate-950/60 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-brand-600 text-white rounded-tr-none shadow-md'
                      : 'bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/60 rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Links / Action Shortcuts */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-2">
                      {msg.links.map((link) => (
                        link.isExternal ? (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-500/20 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            to={link.url}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                          >
                            <span>{link.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )
                      ))}
                    </div>
                  )}

                  {/* Quick Starter Suggestions */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="pt-2 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Suggested Inquiries:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.quickReplies.map((q) => (
                          <button
                            key={q}
                            onClick={() => handleSendMessage(q)}
                            className="text-left text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600 transition-all border border-slate-200 dark:border-slate-700"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <span
                    className={`block text-[10px] ${
                      msg.sender === 'user' ? 'text-brand-200 text-right' : 'text-slate-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-xl bg-brand-500/15 flex items-center justify-center text-brand-600">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="p-3 rounded-2xl rounded-tl-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Direct WhatsApp Bar */}
          <div className="px-4 py-2 bg-slate-100/90 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Need immediate answers?
            </span>
            <a
              href="https://wa.me/919657847967?text=Hi%20Parmeshwar,%20I'm%20asking%20about%20your%20software%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp: 9657847967</span>
            </a>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, services, business ideas, pricing..."
                className="flex-grow px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className={`p-2.5 rounded-xl text-white transition-all shadow-md ${
                  input.trim()
                    ? 'bg-brand-600 hover:bg-brand-500'
                    : 'bg-slate-300 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

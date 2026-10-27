export type ProjectCategory = 'All' | 'Web Apps' | 'E-commerce' | 'Websites' | 'Mobile & APIs';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Web Apps' | 'E-commerce' | 'Websites' | 'Mobile & APIs';
  tags: string[];
  client: string;
  year: string;
  isVerified: boolean;
  isFeatured: boolean;
  status?: 'Production' | 'Live' | 'Concept' | 'In Development';
  previewImage: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  summary: string;
  problem: string;
  goals: string[];
  solution: string;
  keyFeatures: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  challenges: string;
  outcome: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  shortDesc: string;
  clientProblem: string;
  whatIBuild: string;
  keyFeatures: string[];
  suitableFor: string[];
  deliverables: string[];
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceNote: string;
  targetAudience: string;
  estimatedTimeline: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Process' | 'Pricing & Terms' | 'Technical';
  question: string;
  answer: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Proficient"
  description: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company?: string;
  phoneOrWhatsApp?: string;
  serviceRequired: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  preferredContact: 'Email' | 'WhatsApp' | 'Phone';
  projectBrief: string;
}

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/og-preview.png',
  schema,
}) => {
  const location = useLocation();
  const siteUrl = 'https://pd-freelancer.vercel.app';
  const fullCanonical = canonical || `${siteUrl}${location.pathname}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Search Meta
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'author', 'Parmeshwar Durgist');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. OpenGraph (Facebook, LinkedIn, WhatsApp)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', fullOgImage);
    setMetaTag('property', 'og:site_name', 'PD Freelancer — Parmeshwar Durgist');

    // 4. Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullOgImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 6. JSON-LD Structured Data Schema for Google Search Console
    let scriptTag = document.querySelector('#seo-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'PD Freelancer — Parmeshwar Durgist',
      alternateName: 'Parmeshwar Durgist Digital Solutions',
      url: siteUrl,
      image: fullOgImage,
      telephone: '+919657847967',
      email: 'pd.softwaredeveloper@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      },
      founder: {
        '@type': 'Person',
        name: 'Parmeshwar Durgist',
        jobTitle: 'Freelance Software Engineer & Full-Stack Developer',
        url: 'https://parmeshwar-the-series.vercel.app/',
        sameAs: [
          'https://github.com/parmeshwar-durgist'
        ]
      },
      sameAs: [
        'https://github.com/parmeshwar-durgist',
        'https://parmeshwar-the-series.vercel.app/'
      ],
      description: description
    };

    scriptTag.textContent = JSON.stringify(schema || defaultSchema);
  }, [title, description, keywords, fullCanonical, ogType, fullOgImage, schema]);

  return null;
};

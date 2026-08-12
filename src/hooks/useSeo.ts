import { useEffect } from 'react';

export interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
}

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

const DEFAULT_SEO: SeoConfig = {
  title: 'Cre8tiverse Academy | Learn Digital Skills for the AI Era',
  description:
    'Cre8tiverse Academy equips aspiring professionals, creators, and innovators with practical digital skills through hands-on, AI-integrated learning for the digital economy.',
  canonical: 'https://cre8tiverse.com/',
};

export function useSeo(config: SeoConfig = DEFAULT_SEO) {
  useEffect(() => {
    document.title = config.title;
    setMetaTag('description', config.description);
    setCanonical(config.canonical);
  }, [config.title, config.description, config.canonical]);
}

export const PAGE_SEO: Record<string, SeoConfig> = {
  home: DEFAULT_SEO,
  courses: {
    title: 'Digital Skills Courses | Cre8tiverse Academy',
    description:
      'Explore practical, industry-focused digital skills courses from Cre8tiverse Academy — product design, web development, graphic design, digital marketing, AI content creation, and more.',
    canonical: 'https://cre8tiverse.com/courses',
  },
  'learning-options': {
    title: 'Learning Options | Live Online & In-Home Training | Cre8tiverse Academy',
    description:
      'Choose how you learn with Cre8tiverse Academy through interactive live online classes or personalized in-home digital skills training in Abuja.',
    canonical: 'https://cre8tiverse.com/learning-options',
  },
  about: {
    title: 'About Cre8tiverse Academy | Digital Skills Education',
    description:
      'Learn about Cre8tiverse Academy, an AI-integrated digital learning academy helping aspiring professionals, creators, and innovators build practical skills for the future of work.',
    canonical: 'https://cre8tiverse.com/about',
  },
  'corporate-training': {
    title: 'Corporate Digital Skills Training | Cre8tiverse Academy',
    description:
      'Equip your team with practical digital, AI, marketing, productivity, and technology skills through customized corporate training from Cre8tiverse Academy.',
    canonical: 'https://cre8tiverse.com/corporate-training',
  },
  contact: {
    title: 'Contact Cre8tiverse Academy | Abuja, Nigeria',
    description:
      'Connect with Cre8tiverse Academy in Abuja, Nigeria about digital skills courses, training options, enrollment, and consultations.',
    canonical: 'https://cre8tiverse.com/contact',
  },
};

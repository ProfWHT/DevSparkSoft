import React from 'react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  image?: string;
}

export interface TeamMember {
  photo: string;
  name: string;
  position: string;
  education?: string;
  address: string;
  badge?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description:string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface NavLink {
    name: string;
    path: string;
}

export interface Product {
  image: string;
  name: string;
  category: string;
  description: string;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  author: Author;
  titleBn: string;
  titleEn: string;
  slug: string;
  excerptBn: string;
  excerptEn: string;
  contentBn: string;
  contentEn: string;
  faqBn: {q:string, a:string}[];
  faqEn: {q:string, a:string}[];
  seo: {
    metaTitleBn:string;
    metaTitleEn:string;
    metaDescBn:string;
    metaDescEn:string;
  };
  imageKeywords: string[];
  coverAltBn:string;
  coverAltEn:string;
  publishedDate: string;
  category: string;
  tags: string[];
  coverImage: string;
}
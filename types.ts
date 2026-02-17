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
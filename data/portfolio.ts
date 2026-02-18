import type { PortfolioProject } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    slug: 'e-commerce-fashion-hub',
    titleBn: 'ই-কমার্স ফ্যাশন হাব',
    titleEn: 'E-commerce Fashion Hub',
    summaryBn: 'একটি সম্পূর্ণ বৈশিষ্ট্যযুক্ত ই-কমার্স প্ল্যাটফর্ম যা ফ্যাশন ব্র্যান্ডের জন্য তৈরি করা হয়েছে, যেখানে কাস্টমাইজড পণ্য এবং নিরাপদ অর্থপ্রদানের ব্যবস্থা রয়েছে।',
    summaryEn: 'A full-featured e-commerce platform built for a fashion brand, featuring product customization and secure payments.',
    descriptionBn: `
## চ্যালেঞ্জ
আমাদের ক্লায়েন্টের একটি শক্তিশালী অনলাইন উপস্থিতি প্রয়োজন ছিল যা তাদের ব্র্যান্ডের পরিচয় তুলে ধরবে এবং একটি নির্বিঘ্ন কেনাকাটার অভিজ্ঞতা প্রদান করবে। প্রধান চ্যালেঞ্জ ছিল একটি ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম এবং একটি ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি করা।

## সমাধান
আমরা একটি কাস্টম ই-কমার্স ওয়েবসাইট তৈরি করেছি যা আধুনিক UI/UX ডিজাইন নীতির উপর ভিত্তি করে নির্মিত। প্ল্যাটফর্মটিতে একটি শক্তিশালী অ্যাডমিন প্যানেল, পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং পণ্যের বিস্তারিত ক্যাটালগ অন্তর্ভুক্ত রয়েছে।

## ফলাফল
লঞ্চের প্রথম ছয় মাসের মধ্যে, ওয়েবসাইটটি ৩০% বিক্রয় বৃদ্ধি পেয়েছে এবং গ্রাহকদের সন্তুষ্টি উল্লেখযোগ্যভাবে বেড়েছে।`,
    descriptionEn: `
## The Challenge
Our client needed a robust online presence to reflect their brand identity and provide a seamless shopping experience. The main challenges were integrating a complex inventory management system and creating a user-friendly interface.

## The Solution
We developed a custom e-commerce website from the ground up, focusing on modern UI/UX principles. The platform included a powerful admin panel, multiple payment gateway integrations, and a detailed product catalog.

## The Result
Within the first six months of launch, the website led to a 30% increase in online sales and significantly improved customer engagement and satisfaction.`,
    year: 2023,
    category: 'E-commerce',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    clientName: 'Fashion Co.',
    liveUrl: '#',
    thumbnailUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551488831-00ddcb6ac0bd?q=80&w=2070&auto=format&fit=crop',
    ],
    isFeatured: true,
    status: 'Published',
    createdAt: '2023-11-15T10:00:00Z',
  },
  {
    id: 'proj-2',
    slug: 'food-delivery-mobile-app',
    titleBn: 'ফুড ডেলিভারি মোবাইল অ্যাপ',
    titleEn: 'Food Delivery Mobile App',
    summaryBn: 'অর্ডার ট্র্যাকিং, অনলাইন পেমেন্ট এবং রেস্টুরেন্ট ব্যবস্থাপনার বৈশিষ্ট্যসহ একটি স্বজ্ঞাত মোবাইল অ্যাপ্লিকেশন।',
    summaryEn: 'An intuitive mobile application for a food delivery service with real-time order tracking, online payments, and restaurant management features.',
    descriptionBn: '...বিস্তারিত বর্ণনা এখানে যোগ করা হবে...',
    descriptionEn: '...Detailed description will be added here...',
    year: 2024,
    category: 'Mobile App',
    techStack: ['React Native', 'Firebase', 'Google Maps API'],
    clientName: 'QuickBites',
    thumbnailUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop',
    galleryImages: [],
    isFeatured: true,
    status: 'Published',
    createdAt: '2024-03-20T10:00:00Z',
  },
  {
    id: 'proj-3',
    slug: 'corporate-management-software',
    titleBn: 'কর্পোরেট ম্যানেজমেন্ট সফটওয়্যার',
    titleEn: 'Corporate Management Software',
    summaryBn: 'এইচআর, পে-রোল এবং প্রকল্প ব্যবস্থাপনার জন্য একটি সর্বাত্মক সফটওয়্যার সমাধান।',
    summaryEn: 'An all-in-one software solution for managing HR, payroll, and project workflows for corporate clients.',
    descriptionBn: '...বিস্তারিত বর্ণনা এখানে যোগ করা হবে...',
    descriptionEn: '...Detailed description will be added here...',
    year: 2022,
    category: 'Software Development',
    techStack: ['Angular', 'Java', 'PostgreSQL'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [],
    isFeatured: true,
    status: 'Published',
    createdAt: '2022-08-10T10:00:00Z',
  },
  {
    id: 'proj-4',
    slug: 'digital-marketing-campaign-for-tech-startup',
    titleBn: 'টেক স্টার্টআপের জন্য ডিজিটাল মার্কেটিং ক্যাম্পেইন',
    titleEn: 'Digital Marketing Campaign for Tech Startup',
    summaryBn: 'ব্র্যান্ড সচেতনতা এবং সীসা প্রজন্মের উপর দৃষ্টি নিবদ্ধ করে একটি ডেটা-চালিত ডিজিটাল মার্কেটিং কৌশল।',
    summaryEn: 'A data-driven digital marketing strategy focused on increasing brand awareness and lead generation for a SaaS startup.',
    descriptionBn: '...বিস্তারিত বর্ণনা এখানে যোগ করা হবে...',
    descriptionEn: '...Detailed description will be added here...',
    year: 2023,
    category: 'Digital Marketing',
    techStack: ['SEO', 'Google Ads', 'Content Marketing'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop',
    galleryImages: [],
    isFeatured: true,
    status: 'Published',
    createdAt: '2023-05-01T10:00:00Z',
  },
   {
    id: 'proj-5',
    slug: 'real-estate-web-platform',
    titleBn: 'রিয়েল এস্টেট ওয়েব প্ল্যাটফর্ম',
    titleEn: 'Real Estate Web Platform',
    summaryBn: 'সম্পত্তি তালিকা, ভার্চুয়াল ট্যুর এবং এজেন্ট ড্যাশবোর্ডের জন্য একটি ব্যাপক ওয়েব প্ল্যাটফর্ম।',
    summaryEn: 'A comprehensive web platform for property listings, virtual tours, and an agent dashboard.',
    descriptionBn: '...বিস্তারিত বর্ণনা এখানে যোগ করা হবে...',
    descriptionEn: '...Detailed description will be added here...',
    year: 2021,
    category: 'Web Development',
    techStack: ['Vue.js', 'Laravel', 'MySQL'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    galleryImages: [],
    isFeatured: true,
    status: 'Published',
    createdAt: '2021-12-01T10:00:00Z',
  },
   {
    id: 'proj-6',
    slug: 'healthcare-booking-app-uiux',
    titleBn: 'স্বাস্থ্যসেবা বুকিং অ্যাপের UI/UX ডিজাইন',
    titleEn: 'Healthcare Booking App UI/UX Design',
    summaryBn: 'রোগীদের জন্য অ্যাপয়েন্টমেন্ট বুকিং প্রক্রিয়া সহজ করার জন্য একটি ব্যবহারকারী-কেন্দ্রিক ডিজাইন।',
    summaryEn: 'A user-centric design system to simplify the appointment booking process for patients.',
    descriptionBn: '...বিস্তারিত বর্ণনা এখানে যোগ করা হবে...',
    descriptionEn: '...Detailed description will be added here...',
    year: 2022,
    category: 'UI/UX Design',
    techStack: ['Figma', 'Adobe XD', 'User Research'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1584820927399-258a69d2c664?q=80&w=2070&auto=format&fit=crop',
    galleryImages: [],
    isFeatured: true,
    status: 'Published',
    createdAt: '2022-09-25T10:00:00Z',
  },
];

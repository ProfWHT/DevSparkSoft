import type { Service, TeamMember, ProcessStep, Stat, NavLink, Product, BlogPost, Author } from './types';
import { WebDevIcon, SoftwareDevIcon, MobileAppIcon, UiUxIcon, DigitalMarketingIcon, EcommerceIcon, SupportIcon, CodeIcon, UsersIcon, CheckCircleIcon, RocketIcon } from './components/icons/Icons';

export const COMPANY_INFO = {
  name: "DevSpark Soft IT",
  license: "DNCC/037306",
  usaRegistration: "Alaska Entity #10237739",
  usaRegistrationLink: "https://www.alaskacompanydir.com/companies/dev-spark-soft-limited/",
  helpline: "+8809649999144",
  whatsapp: "+801862109990",
  email: "info@DevSparkSoft.com",
  address: "Sector 16, Jolsiri Abason, Purbachal, Dhaka",
  domain: "https://DevSparksoft.com",
  secondaryDomain: "https://DevSparkSoft.org",
  whatsappCommunity: "https://chat.whatsapp.com/DEpkuHHbmXHLYkTdh8sb4T",
  facebookGroup: "https://www.facebook.com/share/g/17wFpzrWUv/?mibextid=wwXIfr",
  facebookPage: "https://www.facebook.com/devsparksoft"
};

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  { 
    icon: WebDevIcon, 
    title: "Web Development", 
    description: "Crafting responsive, high-performance websites with modern technologies to elevate your online presence.",
    longDescription: "We offer a comprehensive suite of services under this domain, including front-end development, back-end development, custom CMS solutions, and API integration. Our goal is to create digital experiences that are not only visually appealing but also robust and scalable.",
    features: [
      "Custom Website Design & Development",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWA)",
      "API Development & Integration"
    ],
    image: "https://i.ibb.co/jPptkbPy/IMG-7270.png"
  },
  { 
    icon: SoftwareDevIcon, 
    title: "Software Development", 
    description: "Building custom software solutions tailored to your business needs for enhanced efficiency and growth.",
    longDescription: "We offer a comprehensive suite of services under this domain, including front-end development, back-end development, custom CMS solutions, and API integration. Our goal is to create digital experiences that are not only visually appealing but also robust and scalable.",
    features: [
      "Custom Application Development",
      "Enterprise Software Solutions",
      "Cloud-Based Applications",
      "System Integration & Migration"
    ],
    image: "https://i.ibb.co/3y9kx5Z4/IMG-7272.jpg"
  },
  { 
    icon: MobileAppIcon, 
    title: "Mobile App Development", 
    description: "Developing intuitive and engaging mobile applications for both iOS and Android platforms.",
    longDescription: "From ideation to launch, we create engaging and high-performance mobile apps for iOS and Android. Our team ensures your app is optimized for speed, user experience, and market success.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform App Development",
      "App UI/UX Design",
      "App Store Optimization (ASO)"
    ],
    image: "https://i.ibb.co/spYbbhcF/IMG-7273.jpg"
  },
  { 
    icon: UiUxIcon, 
    title: "UI/UX Design", 
    description: "Creating user-centric and visually stunning designs that provide seamless user experiences.",
    longDescription: "We believe great design is about creating intuitive and meaningful experiences. Our design process is user-centric, focusing on research, wireframing, and prototyping to deliver designs that are both beautiful and functional.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Usability Testing"
    ],
    image: "https://i.ibb.co/mVKhxsxy/IMG-7274.jpg"
  },
  { 
    icon: DigitalMarketingIcon, 
    title: "Digital Marketing", 
    description: "Driving growth with data-driven marketing strategies including SEO, SMM, and content marketing.",
    longDescription: "Our data-driven digital marketing strategies are designed to increase your online visibility, attract qualified leads, and boost conversions. We help you connect with your target audience and achieve measurable results.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Pay-Pre-Click (PPC) Advertising",
      "Content Marketing & Strategy"
    ],
    image: "https://i.ibb.co/6JHdv5CB/IMG-7275.jpg"
  },
  { 
    icon: EcommerceIcon, 
    title: "E-commerce Solutions", 
    description: "Delivering robust e-commerce platforms that drive sales and provide a smooth shopping experience.",
    longDescription: "We build powerful e-commerce platforms that provide a seamless shopping experience for your customers. From custom storefronts to payment gateway integration, we deliver solutions that drive online sales.",
    features: [
      "Custom E-commerce Development",
      "Shopify & WooCommerce Solutions",
      "Payment Gateway Integration",
      "Inventory Management Systems"
    ],
    image: "https://i.ibb.co/XZqq1H2w/IMG-7277.jpg"
  },
  { 
    icon: SupportIcon, 
    title: "IT Support & Maintenance", 
    description: "Providing reliable IT support and maintenance to ensure your systems run smoothly and securely.",
    longDescription: "Our dedicated IT support team ensures your systems are always running smoothly and securely. We offer proactive maintenance and rapid-response support to minimize downtime and protect your business operations.",
    features: [
      "24/7 Technical Support",
      "Proactive System Monitoring",
      "Cybersecurity Services",
      "Data Backup & Recovery"
    ],
    image: "https://i.ibb.co/xt7yWG4F/IMG-7278.jpg"
  },
];


export const WHY_CHOOSE_US_POINTS = [
    { icon: UsersIcon, title: "Experienced Team", description: "Our team of certified professionals brings years of industry experience to deliver exceptional results." },
    { icon: CheckCircleIcon, title: "Licensed & Trusted", description: "As a government-licensed company, we guarantee reliability, transparency, and quality in all our services." },
    { icon: RocketIcon, title: "Client-Centric Approach", description: "We prioritize your needs, maintaining clear communication and tailoring solutions to your specific goals." },
    { icon: CodeIcon, title: "On-time Delivery", description: "We are committed to delivering your projects on schedule without compromising on quality." }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { sortOrder: 1, isActive: true, name: "Walid Hasan Taksid", position: "Owner & CEO", education: "Software Engineer | CSC in NodeJS", address: "Jolsiri Abason, Dhaka, Bangladesh", photo: "https://i.ibb.co/1ttwWTgw/IMG-7243.jpg", badge: "CEO" },
  { sortOrder: 2, isActive: true, name: "Rajibul Islam Sagor", position: "Marketing Director", address: "Morrelganj, Bagerhat", photo: "https://i.ibb.co/xSNwgK9y/IMG-7254.jpg", badge: "Marketing" },
  { sortOrder: 3, isActive: true, name: "Rakib Hasan Sizan", position: "Manager", address: "Morrelganj, Bagerhat", photo: "https://i.ibb.co/ynXC2vn4/IMG-7255.jpg", badge: "Manager" },
  { sortOrder: 4, isActive: true, name: "Nauman Chaudhary", position: "Senior IT Consultant & Shareholder", address: "Lahore, Pakistan", photo: "https://i.ibb.co/208sM8VK/IMG-3863.jpg", badge: "Shareholder" },
  { sortOrder: 5, isActive: true, name: "Taimoor Safdar", position: "Partner & Broker", address: "Lahore, Pakistan", photo: "https://i.ibb.co/NnKkcv8c/IMG-7244.jpg", badge: "Partner" },
  { sortOrder: 6, isActive: true, name: "Ketty Parry", position: "Investor", address: "Xian, China", photo: "https://i.ibb.co/7dtKvM1s/IMG-7263.jpg", badge: "Investor" },
  { sortOrder: 7, isActive: true, name: "Ola", position: "Investor", address: "Moscow, Russia", photo: "https://i.ibb.co/NgCKHWRL/IMG-7262.jpg", badge: "Investor" },
];


export const OUR_PROCESS: ProcessStep[] = [
  { step: 1, title: "Requirement Analysis", description: "We begin by thoroughly- understanding your business goals, target audience, and project requirements." },
  { step: 2, title: "Planning & Design", description: "Our team creates a strategic plan, wireframes, and mockups to visualize the final product." },
  { step: 3, "title": "Development", "description": "Our expert developers write clean, efficient code using the latest technologies to build your solution." },
  { step: 4, title: "Testing", description: "Rigorous testing is conducted to ensure the product is bug-free, secure, and performs flawlessly." },
  { step: 5, title: "Delivery & Support", description: "We deploy the project and provide ongoing support to ensure its continued success." },
];

export const STATS: Stat[] = [
    { value: "1199+", label: "Projects Completed" },
    { value: "19500+", label: "Happy Clients" },
    { value: "5+", label: "Years of Experience" }
];

export const PRODUCTS: Product[] = [
  {
    name: "Enterprise CRM Suite",
    category: "Software",
    description: "A comprehensive Customer Relationship Management software to streamline your sales, marketing, and support.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Pro E-commerce Platform",
    category: "Web",
    description: "A scalable and feature-rich e-commerce solution with payment gateway integration and inventory management.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Custom ERP System",
    category: "Software",
    description: "Tailor-made Enterprise Resource Planning system to manage your core business processes efficiently.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Project Management Tool",
    category: "Web",
    description: "An intuitive web-based tool to help your team collaborate, plan, and execute projects on time.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Mobile Banking App",
    category: "Mobile",
    description: "A secure and user-friendly mobile application for banking services, transfers, and payments.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "HR Management Portal",
    category: "Software",
    description: "An all-in-one portal for managing employee data, payroll, attendance, and recruitment processes.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Food Delivery App",
    category: "Mobile",
    description: "A complete mobile app solution for restaurants to manage orders and deliveries.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
  {
    name: "Online Learning Platform",
    category: "Web",
    description: "A robust platform for creating and selling online courses with video lectures and quizzes.",
    image: "https://i.ibb.co/xKNQVhxB/755-F4689-DD8-A-41-E6-A2-F0-A304849-FBF7-E.png"
  },
];

const MOCK_CONTENT = {
  contentBn: "বর্তমান যুগ ডিজিটাল যুগ। স্মার্টফোন আর ইন্টারনেট এখন আমাদের জীবনের এক অবিচ্ছেদ্য অংশ। মানুষের কেনাকাটা, তথ্য খোঁজা, এবং সেবা গ্রহণের পদ্ধতি পুরোপুরি বদলে গেছে। এই পরিবর্তিত প্রেক্ষাপটে, বাংলাদেশের ব্যবসা প্রতিষ্ঠানগুলোর জন্য একটি প্রফেশনাল ওয়েবসাইট থাকা এখন আর কোনো বিলাসিতা নয়, বরং এটি একটি অপরিহার্য প্রয়োজন। একটি ওয়েবসাইট আপনার ব্যবসার ডিজিটাল পরিচয়, যা আপনার গ্রাহকদের কাছে আপনার দরজা ২৪/৭ খোলা রাখে।\n\n## ডিজিটাল পরিচয়: কেন ওয়েবসাইট এত গুরুত্বপূর্ণ?\nএকসময় ব্যবসার পরিচয় ছিল তার সুসজ্জিত দোকান বা অফিস। কিন্তু এখন আপনার ব্যবসার প্রথম পরিচয় হয় অনলাইনের মাধ্যমে। গ্রাহকরা কোনো পণ্য বা সেবা খোঁজার জন্য প্রথমেই গুগল বা সোশ্যাল মিডিয়ায় সার্চ করেন। সেখানে যদি আপনার ব্যবসাকে খুঁজে না পাওয়া যায়, তাহলে কার্যত আপনার কোনো অস্তিত্বই নেই। একটি ওয়েবসাইট হলো আপনার ডিজিটাল হেডকোয়ার্টার, যা আপনার ব্র্যান্ডের একটি পূর্ণাঙ্গ চিত্র তুলে ধরে।\n\n## একটি প্রফেশনাল ওয়েবসাইটের প্রধান সুবিধাগুলো\nএকটি মানসম্মত ওয়েবসাইট আপনার ব্যবসাকে বিভিন্নভাবে উপকৃত করতে পারে। নিচে এর কিছু প্রধান সুবিধা আলোচনা করা হলো:\n\n### ১. বিশ্বাসযোগ্যতা ও ব্র্যান্ড ইমেজ প্রতিষ্ঠা\nএকটি সুন্দর, আধুনিক এবং তথ্যবহুল ওয়েবসাইট গ্রাহকদের মনে আপনার ব্যবসা সম্পর্কে ইতিবাচক ধারণা তৈরি করে। যখন একজন সম্ভাব্য গ্রাহক আপনার একটি গোছানো ওয়েবসাইট দেখতে পান, তখন তিনি আপনার ব্যবসাকে আরও নির্ভরযোগ্য এবং পেশাদার বলে মনে করেন। অন্যদিকে, একটি পুরনো বা দুর্বল ডিজাইনের ওয়েবসাইট আপনার ব্র্যান্ড ইমেজকে মারাত্মকভাবে ক্ষতিগ্রস্ত করতে পারে।\n\n### ২. ২৪/৭ অনলাইন উপস্থিতি ও সেলস\nআপনার ফিজিক্যাল দোকান বা অফিস নির্দিষ্ট সময়ের জন্য খোলা থাকে, কিন্তু একটি ওয়েবসাইট সপ্তাহের ৭ দিন, দিনের ২৪ ঘণ্টা গ্রাহকদের জন্য খোলা। এর মানে হলো, আপনার গ্রাহকরা যেকোনো সময় আপনার পণ্য বা সেবা সম্পর্কে জানতে পারবেন, এমনকি অর্ডারও করতে পারবেন। এটি আপনার ব্যবসার বিক্রয় এবং প্রসারের জন্য একটি বিশাল সুযোগ তৈরি করে।\n\n### ৩. ভৌগলিক সীমাবদ্ধতা অতিক্রম\nএকটি দোকানের মাধ্যমে আপনি কেবল একটি নির্দিষ্ট এলাকার গ্রাহকদের কাছে পৌঁছাতে পারেন। কিন্তু একটি ওয়েবসাইটের মাধ্যমে আপনি সমগ্র বাংলাদেশ, এমনকি বিশ্বের যেকোনো প্রান্তের গ্রাহকদের কাছে আপনার পণ্য বা সেবা পৌঁছে দিতে পারেন। এটি আপনার ব্যবসার বাজারকে বহুগুণে বাড়িয়ে দেয়।\n\n### ৪. পণ্য বা পরিষেবার বিস্তারিত ক্যাটালগ\nসোশ্যাল মিডিয়ায় আপনি আপনার পণ্য বা সেবার সংক্ষিপ্ত বিবরণ দিতে পারেন, কিন্তু ওয়েবসাইটে আপনি প্রতিটি পণ্যের বিস্তারিত বিবরণ, উচ্চমানের ছবি, ভিডিও, মূল্য এবং গ্রাহকের রিভিউসহ সবকিছু সুন্দরভাবে প্রদর্শন করতে পারেন। এটি গ্রাহকদের সিদ্ধান্ত নিতে সাহায্য করে। আমাদের **ওয়েব ডেভেলপমেন্ট সার্ভিস** ([/services](/services)) ব্যবহার করে আপনি আপনার ব্যবসার জন্য একটি আকর্ষণীয় ডিজিটাল ক্যাটালগ তৈরি করতে পারেন।\n\n### ৫. ডিজিটাল মার্কেটিং এর কেন্দ্রবিন্দু\nডিজিটাল মার্কেটিং এর প্রায় সব শাখার (যেমন: এসইও, কন্টেন্ট মার্কেটিং, ইমেইল মার্কেটিং, গুগল অ্যাডস) মূল ভিত্তি হলো একটি ওয়েবসাইট। আপনি যখন ফেসবুকে বা গুগলে বিজ্ঞাপন দেন, তখন গ্রাহকদেরকে একটি ল্যান্ডিং পেজে নিয়ে যেতে হয়, আর সেই ল্যান্ডিং পেজটি হলো আপনার ওয়েবসাইট। একটি অপটিমাইজড ওয়েবসাইট আপনার মার্কেটিং খরচ কমিয়ে আনে এবং রিটার্ন অন ইনভেস্টমেন্ট (ROI) বাড়ায়।\n\n### ৬. গ্রাহক তথ্যের মূল্যবান উৎস\nওয়েবসাইটের মাধ্যমে আপনি গ্রাহকদের আচরণ বিশ্লেষণ করতে পারেন। কোন পণ্য বা সেবা গ্রাহকরা বেশি দেখছেন, কোথা থেকে তারা আপনার ওয়েবসাইটে আসছেন - এই সব তথ্য আপনাকে সঠিক ব্যবসায়িক সিদ্ধান্ত নিতে সাহায্য করে। এছাড়াও, কন্টাক্ট ফর্ম বা নিউজলেটার সাবস্ক্রিপশনের মাধ্যমে আপনি সম্ভাব্য গ্রাহকদের একটি তালিকা তৈরি করতে পারেন।\n\n### ৭. প্রতিযোগিতায় এগিয়ে থাকার কৌশল\nআজকের প্রতিযোগিতামূলক বাজারে, আপনার প্রতিযোগী যদি অনলাইনে সক্রিয় থাকে, তাহলে আপনারও থাকা আবশ্যক। আর যদি তারা অনলাইনে না থাকে, তবে এটি আপনার জন্য একটি বিশাল সুযোগ। একটি কার্যকরী ওয়েবসাইটের মাধ্যমে আপনি সহজেই প্রতিযোগীদের থেকে নিজেকে আলাদা করতে পারেন এবং বাজারে একটি শক্তিশালী অবস্থান তৈরি করতে পারেন।\n\n## ফেসবুক পেজ থাকাই কি যথেষ্ট?\nঅনেকেই মনে করেন, একটি ফেসবুক পেজ থাকলেই হয়তো ব্যবসার জন্য যথেষ্ট। কিন্তু এটি একটি ভুল ধারণা। ফেসবুক পেজ হলো অন্যের প্ল্যাটফর্মে আপনার একটি উপস্থিতি, যেখানে আপনার নিয়ন্ত্রণ সীমিত। ফেসবুক যেকোনো সময় তাদের অ্যালগরিদম পরিবর্তন করতে পারে, যার ফলে আপনার পোস্টের রিচ কমে যেতে পারে। কিন্তু ওয়েবসাইট হলো আপনার নিজস্ব ডিজিটাল সম্পদ। এখানে আপনার সম্পূর্ণ নিয়ন্ত্রণ থাকে।\n\n## কিভাবে একটি সফল ওয়েবসাইট তৈরি করবেন?\nএকটি সফল ওয়েবসাইট তৈরির জন্য প্রয়োজন সঠিক পরিকল্পনা এবং পেশাদারিত্ব। DevSpark Soft IT-তে আমরা আপনার ব্যবসার ধরণ এবং লক্ষ্য অনুযায়ী কাস্টমাইজড ওয়েবসাইট তৈরি করি। আমাদের অভিজ্ঞ টিম আপনার ব্র্যান্ডকে অনলাইনে সফলভাবে প্রতিষ্ঠা করতে সাহায্য করবে। আপনার ব্যবসার জন্য একটি শক্তিশালী অনলাইন ভিত্তি তৈরি করতে, আজই আমাদের সাথে **যোগাযোগ করুন** ([/contact](/contact)) এবং একটি বিনামূল্যে পরামর্শ গ্রহণ করুন।\n\nপরিশেষে বলা যায়, ২০২৪ সালে এসে একটি প্রফেশনাল ওয়েবসাইট ছাড়া ব্যবসা পরিচালনা করা প্রায় অসম্ভব। এটি শুধু আপনার ব্যবসাকে অনলাইনের জগতে পরিচিতিই দেয় না, বরং আপনার ব্যবসার வளர்ச்சி এবং সফলতার পথে একটি গুরুত্বপূর্ণ হাতিয়ার হিসেবে কাজ করে।",
  contentEn: "In today's digital-first world, the way consumers shop, find information, and access services has fundamentally changed. For any business in Bangladesh aiming for growth and relevance, having a professional website is no longer a luxury—it's a core necessity. A website serves as your digital identity, keeping your doors open to customers 24/7.\n\n### Key Benefits of a Professional Website\n\nA high-quality website acts as the central hub for your digital presence and offers numerous advantages:\n\n*   **Builds Credibility and Trust:** A clean, modern, and professional website instantly builds credibility. It signals to potential customers that you are a serious and reliable business. In contrast, having no website or a poorly designed one can deter customers and damage your brand's reputation.\n\n*   **24/7 Availability:** Your physical store has operating hours, but your website is always accessible. This allows potential customers to explore your products, learn about your services, and make inquiries at their convenience, generating leads and sales even when you're offline.\n\n*   **Wider Audience Reach:** A website breaks down geographical barriers. It allows you to reach customers not just in your local area but across Bangladesh and even internationally. This exponentially expands your potential market.\n\n*   **The Hub of Your Digital Marketing:** A website is the foundation of any successful digital marketing strategy. Whether you're running Google Ads, doing Search Engine Optimization (SEO), or posting on social media, you need a destination to send your audience. Your website is that owned asset where you have full control over the content and user experience.\n\n### Is a Social Media Page Enough?\n\nWhile a social media presence is important, it's not a substitute for a website. Social media platforms are 'rented land' where you are subject to algorithm changes and platform limitations. A website is your 'owned property,' giving you complete control over your brand's narrative and customer data.\n\n### Getting Started\n\nCreating an effective online presence starts with a professional website tailored to your business goals. At DevSpark Soft IT, we specialize in creating custom digital solutions that drive growth. Explore our **web development services** ([/services](/services)) to see how we can build a powerful online platform for you. \n\nReady to establish your digital headquarters? **Contact us today** ([/contact](/contact)) for a free consultation and let's build a website that takes your business to the next level.",
  faqBn: [{"q":"একটি ওয়েবসাইট তৈরি করতে কত খরচ হয়?","a":"ওয়েবসাইট তৈরির খরচ এর ধরণ এবং ফিচারের উপর নির্ভর করে। একটি সাধারণ ব্যবসায়িক ওয়েবসাইট থেকে শুরু করে জটিল ই-কমার্স সাইটের খরচ ভিন্ন হয়। আপনার প্রয়োজন অনুযায়ী সঠিক খরচের ধারণা পেতে, আমাদের সাথে যোগাযোগ করে বিনামূল্যে ஆலோசனை নিতে পারেন।"},{"q":"আমার ব্যবসা ছোট, আমার কি সত্যিই একটি ওয়েবসাইট দরকার?","a":"অবশ্যই! ছোট ব্যবসার জন্য ওয়েবসাইট আরও বেশি গুরুত্বপূর্ণ। এটি আপনাকে কম খরচে অনেক বেশি গ্রাহকের কাছে পৌঁছাতে এবং বড় ব্র্যান্ডগুলোর সাথে প্রতিযোগিতা করতে সাহায্য করে। একটি ভালো ওয়েবসাইট আপনার ছোট ব্যবসাকে একটি প্রতিষ্ঠিত ব্র্যান্ড হিসেবে পরিচিতি দেয়।"}],
  faqEn: [{"q":"How much does it cost to build a website?","a":"The cost of a website depends on its type and features. A simple business website will cost less than a complex e-commerce platform. For a precise quote based on your needs, you can get a free consultation by contacting us."},{"q":"My business is small, do I really need a website?","a":"Absolutely! A website is even more crucial for small businesses. It helps you reach a larger audience at a lower cost and compete with bigger brands. A good website gives your small business the image of an established brand."}],
};

export const BLOG_AUTHOR: Author = {
  name: "Walid Hasan Taksid",
  avatar: "https://i.ibb.co/1ttwWTgw/IMG-7243.jpg",
  role: "Owner & CEO",
  bio: "Walid Hasan Taksid is the Owner & CEO of DevSpark Soft IT, a Software Engineer specialized in NodeJS and modern web technologies."
};

export const BLOG_POSTS: BlogPost[] = [
  {
    ...MOCK_CONTENT,
    id: '1',
    author: BLOG_AUTHOR,
    titleBn: "কেন ২০২৪ সালে বাংলাদেশের প্রতিটি ব্যবসার জন্য একটি প্রফেশনাল ওয়েবসাইট প্রয়োজন",
    titleEn: "Why Every Business in Bangladesh Needs a Professional Website in 2024",
    slug: "why-every-business-in-bangladesh-needs-a-professional-website-2024",
    excerptBn: "ডিজিটাল যুগে, একটি প্রফেশনাল ওয়েবসাইট শুধু একটি অনলাইন ঠিকানা নয়, এটি আপনার ব্যবসার বিশ্বাসযোগ্যতা, প্রসার এবং সাফল্যের চাবিকাঠি। জানুন কেন বাংলাদেশের বাজারে টিকে থাকতে এবং উন্নতি করতে ওয়েবসাইট অপরিহার্য।",
    excerptEn: "In the digital age, a professional website is more than just an online address; it's the key to your business's credibility, reach, and success. Discover why a website is essential to survive and thrive in the Bangladeshi market.",
    seo: {
      metaTitleBn:"বাংলাদেশে ব্যবসার জন্য প্রফেশনাল ওয়েবসাইট কেন জরুরি? | DevSpark Soft IT",
      metaTitleEn:"Why is a Professional Website Crucial for Businesses in Bangladesh? | DevSpark Soft IT",
      metaDescBn:"জানুন কেন ২০২৪ সালে বাংলাদেশের প্রতিটি ব্যবসার জন্য একটি প্রফেশনাল ওয়েবসাইট অপরিহার্য। বিশ্বাসযোগ্যতা, গ্রাহক বৃদ্ধি এবং প্রতিযোগিতায় এগিয়ে থাকতে একটি ওয়েবসাইট কিভাবে সাহায্য করে।",
      metaDescEn:"Learn why a professional website is essential for every business in Bangladesh in 2024. See how a website helps build credibility, attract more customers, and stay ahead of the competition."
    },
    imageKeywords: ["business in Bangladesh", "Dhaka office building", "digital growth chart"],
    coverAltBn:"বাংলাদেশের একটি আধুনিক ব্যবসার ডিজিটাল অগ্রগতির চিত্র, যা একটি প্রফেশনাল ওয়েবসাইটের গুরুত্ব প্রকাশ করে।",
    coverAltEn:"Image depicting the digital growth of a modern business in Bangladesh, signifying the importance of a professional website.",
    publishedDate: "2024-07-29",
    category: "Business Strategy",
    tags: ["Web Development", "Digital Presence"],
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    ...MOCK_CONTENT,
    id: '5',
    author: BLOG_AUTHOR,
    titleBn: "বাংলাদেশের প্রযুক্তি শিল্পে কৃত্রিম বুদ্ধিমত্তার (AI) ভবিষ্যৎ",
    titleEn: "The Future of Artificial Intelligence (AI) in Bangladesh's Tech Industry",
    slug: "future-of-ai-in-bangladesh-tech-industry",
    excerptBn: "কৃত্রিম বুদ্ধিমত্তা (AI) বিশ্বজুড়ে প্রযুক্তি এবং ব্যবসাকে নতুনভাবে সংজ্ঞায়িত করছে। এই পোস্টে আমরা বাংলাদেশের প্রযুক্তি শিল্পে AI-এর সম্ভাবনা, চ্যালেঞ্জ এবং ভবিষ্যতের সুযোগগুলো নিয়ে আলোচনা করব।",
    excerptEn: "Artificial Intelligence (AI) is redefining technology and business globally. In this post, we explore the potential, challenges, and future opportunities of AI within Bangladesh's tech industry.",
    contentBn: "বিশ্বজুড়ে প্রযুক্তি জগতে যে কয়েকটি শব্দ সবচেয়ে বেশি আলোড়ন সৃষ্টি করেছে, তার মধ্যে কৃত্রিম বুদ্ধিমত্তা বা Artificial Intelligence (AI) অন্যতম। এটি এখন আর কোনো সায়েন্স ফিকশনের ধারণা নয়, বরং আমাদের দৈনন্দিন জীবন থেকে শুরু করে ব্যবসা-বাণিজ্য পর্যন্ত সব ক্ষেত্রেই এর প্রয়োগ বাড়ছে। বাংলাদেশও এই প্রযুক্তিগত বিপ্লবের অংশ হতে চলেছে। ডিজিটাল বাংলাদেশ থেকে স্মার্ট বাংলাদেশ গড়ার যে রূপকল্প, তার অন্যতম চালিকাশক্তি হবে এই AI।\n\n## বাংলাদেশে AI-এর বর্তমান প্রেক্ষাপট\nগত এক দশকে বাংলাদেশের প্রযুক্তি শিল্প অভূতপূর্ব উন্নতি করেছে। ক্রমবর্ধমান ইন্টারনেট ব্যবহারকারী, স্মার্টফোনের সহজলভ্যতা এবং সরকারের ডিজিটাল নীতিগুলো এই যাত্রাকে আরও বেগবান করেছে। বর্তমানে, দেশের বিভিন্ন খাতে AI-এর ব্যবহার শুরু হয়েছে, যদিও তা এখনও প্রাথমিক পর্যায়ে রয়েছে।\n\n*   **ফিনটেক (FinTech):** ব্যাংক এবং আর্থিক প্রতিষ্ঠানগুলো গ্রাহক পরিষেবা উন্নত করতে, জালিয়াতি শনাক্ত করতে এবং ঝুঁকি ব্যবস্থাপনার জন্য AI-চালিত চ্যাটবট ও অ্যানালিটিক্স ব্যবহার করছে।\n*   **স্বাস্থ্যসেবা (Healthcare):** কিছু স্টার্টআপ এবং গবেষণা প্রতিষ্ঠান রোগ নির্ণয় এবং মেডিকেল ইমেজ বিশ্লেষণে AI মডেল ব্যবহার করছে।\n*   **কৃষি (Agriculture):** ফসলের রোগ নির্ণয়, আবহাওয়ার পূর্বাভাস এবং ফলন বাড়ানোর জন্য AI-ভিত্তিক সমাধান নিয়ে কাজ চলছে।\n*   **ই-কমার্স (E-commerce):** গ্রাহকদের পছন্দ অনুযায়ী পণ্য সুপারিশ করতে এবং সাপ্লাই চেইন ব্যবস্থাপনায় AI ব্যবহৃত হচ্ছে।\n\nতবে এই সবই একটি বিশাল সম্ভাবনার সূচনা মাত্র। আসল বিপ্লব এখনও বাকি।\n\n## ভবিষ্যতে কোন খাতগুলোতে AI বিপ্লব ঘটাবে?\nবাংলাদেশের অর্থনীতির মূল চালিকাশক্তি এবং সামাজিক প্রেক্ষাপটে AI এক যুগান্তকারী পরিবর্তন আনতে পারে। কিছু সম্ভাবনাময় খাত নিচে তুলে ধরা হলো:\n\n### তৈরি পোশাক ও উৎপাদন শিল্প (RMG & Manufacturing)\nবাংলাদেশের অর্থনীতির অন্যতম প্রধান ভিত্তি হলো তৈরি পোশাক শিল্প। এখানে AI-এর প্রয়োগ উৎপাদনশীলতা এবং দক্ষতা বহুগুণে বাড়িয়ে দিতে পারে। যেমন:\n- **সাপ্লাই চেইন অপটিমাইজেশন:** কাঁচামাল সংগ্রহ থেকে শুরু করে পণ্য ডেলিভারি পর্যন্ত পুরো প্রক্রিয়াটিকে আরও কার্যকর করা।\n- **কোয়ালিটি কন্ট্রোল:** ক্যামেরার মাধ্যমে স্বয়ংক্রিয়ভাবে পণ্যের মান পরীক্ষা করে ত্রুটি শনাক্ত করা।\n- **ডিমান্ড ফোরকাস্টিং:** বাজারের চাহিদা বিশ্লেষণ করে উৎপাদনের পরিকল্পনা করা।\n\n### জনস্বাস্থ্য ও চিকিৎসা\nAI-এর মাধ্যমে বাংলাদেশের স্বাস্থ্যসেবাকে আরও সহজলভ্য এবং উন্নত করা সম্ভব। প্রত্যন্ত অঞ্চলেও আধুনিক চিকিৎসা সেবা পৌঁছে দেওয়া যেতে পারে। রোগ নির্ণয়, ব্যক্তিগতকৃত চিকিৎসা পরিকল্পনা এবং মহামারী পূর্বাভাসে AI গুরুত্বপূর্ণ ভূমিকা রাখতে পারে।\n\n### কৃষি ও খাদ্য নিরাপত্তা\nবাংলাদেশ একটি কৃষিপ্রধান দেশ। AI এবং IoT (Internet of Things) ব্যবহার করে ‘স্মার্ট ফার্মিং’ চালু করা যেতে পারে। সেন্সরের মাধ্যমে মাটির গুণাগুণ, ফসলের অবস্থা এবং আবহাওয়ার তথ্য বিশ্লেষণ করে কৃষকদের সঠিক সময়ে সঠিক সিদ্ধান্ত নিতে সাহায্য করা সম্ভব। এতে যেমন ফলন বাড়বে, তেমনি সম্পদের অপচয়ও কমবে। আমাদের **বিশেষায়িত সফটওয়্যার সার্ভিস** ([/services](/services)) ব্যবহার করে কৃষি খাতের জন্য এমন কাস্টমাইজড সমাধান তৈরি করা সম্ভব।\n\n## চ্যালেঞ্জ এবং আমাদের করণীয়\nসম্ভাবনার পাশাপাশি কিছু চ্যালেঞ্জও রয়েছে, যা মোকাবিলা করার জন্য আমাদের প্রস্তুত হতে হবে:\n*   **ডেটা স্বল্পতা ও গোপনীয়তা:** কার্যকর AI মডেল তৈরির জন্য প্রচুর ডেটা প্রয়োজন। একই সাথে, ব্যক্তিগত ডেটার সুরক্ষা এবং গোপনীয়তা নিশ্চিত করা একটি বড় চ্যালেঞ্জ।\n*   **দক্ষ জনশক্তির অভাব:** AI এবং মেশিন লার্নিং-এর মতো জটিল বিষয়ে দক্ষ পেশাজীবীর সংখ্যা এখনও আমাদের দেশে কম। শিক্ষাব্যবস্থায় পরিবর্তন এনে এবং প্রশিক্ষণের মাধ্যমে এই শূন্যতা পূরণ করতে হবে।\n*   **প্রাথমিক বিনিয়োগ:** AI প্রযুক্তি বাস্তবায়নের জন্য প্রাথমিক পর্যায়ে বেশ বড় বিনিয়োগের প্রয়োজন হয়, যা ছোট বা মাঝারি ব্যবসার জন্য কঠিন হতে পারে।\n\nএই চ্যালেঞ্জগুলো মোকাবিলা করতে সরকার, শিক্ষা প্রতিষ্ঠান এবং বেসরকারি খাতের সমন্বিত প্রচেষ্টা প্রয়োজন। DevSpark Soft IT-এর মতো প্রতিষ্ঠানগুলো ব্যবসাগুলোকে সঠিক প্রযুক্তিগত দিকনির্দেশনা দিয়ে এই যাত্রায় সাহায্য করতে পারে।\n\n## উপসংহার\nকৃত্রিম বুদ্ধিমত্তা বাংলাদেশের জন্য কেবল একটি প্রযুক্তিগত সুযোগ নয়, এটি অর্থনৈতিক উন্নয়ন এবং সামাজিক পরিবর্তনের একটি শক্তিশালী হাতিয়ার। সঠিক পরিকল্পনা এবং বিনিয়োগের মাধ্যমে বাংলাদেশ AI প্রযুক্তিতে একটি নেতৃস্থানীয় অবস্থানে পৌঁছাতে পারে। আপনার ব্যবসা যদি এই ভবিষ্যতের প্রযুক্তি বিপ্লবের অংশ হতে চায়, তাহলে এখনই প্রস্তুতির সেরা সময়। আপনার ব্যবসার জন্য AI-ভিত্তিক সমাধান বা অন্য কোনো প্রযুক্তিগত সহায়তার প্রয়োজন হলে, আমাদের সাথে **যোগাযোগ করুন** ([/contact](/contact))। আমাদের বিশেষজ্ঞরা আপনাকে সঠিক পথ দেখাতে প্রস্তুত।",
    contentEn: "Across the globe, Artificial Intelligence (AI) is no longer a futuristic concept but a present-day reality transforming industries. For Bangladesh, a nation rapidly moving towards its 'Smart Bangladesh' vision, AI represents a pivotal force for aconomic growth and innovation.\n\nWhile still in its early stages, AI adoption is already visible in key sectors. FinTech companies are using AI for fraud detection, healthcare startups are leveraging it for diagnostics, and the e-commerce sector employs it for personalized recommendations. However, this is just the beginning.\n\n### Future Frontiers for AI in Bangladesh\n\nThe real impact of AI will be felt when it's integrated into the core sectors of the economy:\n\n*   **Ready-Made Garments (RMG) & Manufacturing:** AI can revolutionize this vital sector by optimizing supply chains, automating quality control through computer vision, and predicting global demand trends.\n\n*   **Healthcare:** AI-powered diagnostic tools can bring advanced medical analysis to remote areas, helping doctors make faster, more accurate decisions and predicting disease outbreaks.\n\n*   **Agriculture:** As an agrarian economy, Bangladesh can immensely benefit from 'smart farming.' AI can analyze data from drones and sensors to monitor crop health, predict yields, and recommend optimal resource usage, ensuring food security.\n\n### The Path Forward\n\nTo unlock this potential, Bangladesh must address challenges like data infrastructure, the need for a skilled workforce in AI and machine learning, and establishing ethical guidelines. Collaboration between the government, academia, and the private sector is key.\n\nCompanies like DevSpark Soft IT are poised to help businesses navigate this transition. By integrating custom AI solutions, businesses can enhance efficiency and gain a competitive edge. Whether it's developing a smart analytics platform or an AI-powered application, our **comprehensive services** ([/services](/services)) are designed to prepare your business for the future. To begin your AI journey, **contact us** ([/contact](/contact)) for a consultation.",
    faqBn: [
      {"q":"AI কি মানুষের চাকরি কেড়ে নেবে?","a":"AI কিছু পুনরাবৃত্তিমূলক কাজকে স্বয়ংক্রিয় করলেও, এটি নতুন ধরনের চাকরির সুযোগও তৈরি করবে। AI বিশেষজ্ঞ, ডেটা সায়েন্টিস্ট এবং মেশিন লার্নিং ইঞ্জিনিয়ারের চাহিদা বাড়বে। মানুষের দক্ষতা বাড়িয়ে AI-এর সাথে কাজ করার ওপর জোর দিতে হবে।"},
      {"q":"ছোট ব্যবসার জন্য কি AI বাস্তবায়ন করা সম্ভব?","a":"হ্যাঁ, সম্ভব। ক্লাউড-ভিত্তিক AI পরিষেবা এবং বিভিন্ন প্ল্যাটফর্মের মাধ্যমে ছোট ব্যবসাও এখন কম খরচে AI-এর সুবিধা নিতে পারে। যেমন, গ্রাহক পরিষেবার জন্য চ্যাটবট বা মার্কেটিং-এর জন্য অ্যানালিটিক্স টুল ব্যবহার করা যেতে পারে।"},
      {"q":"বাংলাদেশে AI-এর জন্য সরকারি নীতি কী?","a":"বাংলাদেশ সরকার 'National Strategy for Artificial Intelligence' প্রণয়নের উপর কাজ করছে। এর লক্ষ্য হলো AI গবেষণাকে উৎসাহিত করা, একটি শক্তিশালী ইকোসিস্টেম তৈরি করা এবং নৈতিক ব্যবহার নিশ্চিত করা।"}
    ],
    faqEn: [
      {"q":"Will AI take away human jobs?","a":"While AI will automate certain repetitive tasks, it will also create new job opportunities requiring different skills, such as AI specialists, data scientists, and machine learning engineers. The focus will shift to upskilling the workforce to collaborate with AI."},
      {"q":"Is it possible for small businesses to implement AI?","a":"Yes, it is. With the rise of cloud-based AI services and platforms, small businesses can now access AI capabilities affordably. Common applications include using chatbots for customer service or analytics tools for marketing."},
      {"q":"What is the government's policy on AI in Bangladesh?","a":"The Bangladesh government is actively working on a 'National Strategy for Artificial Intelligence'. The goal is to encourage AI research, build a robust ecosystem, and ensure its ethical implementation across various sectors."}
    ],
    seo: {
      "metaTitleBn":"বাংলাদেশে AI-এর ভবিষ্যৎ: সম্ভাবনা ও চ্যালেঞ্জ | DevSpark Soft IT",
      "metaTitleEn":"The Future of AI in Bangladesh: Opportunities & Challenges | DevSpark Soft IT",
      "metaDescBn":"বাংলাদেশের প্রযুক্তি শিল্পে কৃত্রিম বুদ্ধিমত্তার (AI) অপার সম্ভাবনা, ভবিষ্যতের সুযোগ এবং প্রধান চ্যালেঞ্জগুলো সম্পর্কে জানুন। স্মার্ট বাংলাদেশের পথে AI-এর ভূমিকা।",
      "metaDescEn":"Discover the immense potential, future opportunities, and key challenges of Artificial Intelligence (AI) in Bangladesh's tech industry. The role of AI in building a Smart Bangladesh."
    },
    imageKeywords: ["futuristic Dhaka skyline with data", "AI in manufacturing", "smart farming Bangladesh"],
    coverAltBn:"ভবিষ্যতের বাংলাদেশের একটি ডিজিটাল চিত্র যেখানে কৃত্রিম বুদ্ধিমত্তা শহরের প্রযুক্তিকে নিয়ন্ত্রণ করছে।",
    coverAltEn:"A futuristic digital representation of Bangladesh where Artificial Intelligence is powering the city's technology.",
    publishedDate: "2024-08-01",
    category: "Artificial Intelligence",
    tags: ["AI", "Tech Trends"],
    coverImage: "https://images.unsplash.com/photo-1677756119517-756a188d2278?q=80&w=2070&auto=format&fit=crop"
  },
  {
    ...MOCK_CONTENT,
    id: '2',
    author: BLOG_AUTHOR,
    titleBn: "সঠিক মোবাইল অ্যাপ ডেভেলপমেন্ট পার্টনার খুঁজে বের করার ৫টি উপায়",
    titleEn: "5 Tips for Choosing the Right Mobile App Development Partner in Bangladesh",
    slug: "choosing-mobile-app-development-partner-bangladesh",
    excerptBn: "আপনার অ্যাপের আইডিয়াকে বাস্তবে রূপ দিতে সঠিক ডেভেলপমেন্ট পার্টনার নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ। বাংলাদেশে সেরা পার্টনার খুঁজে পেতে আমাদের ৫টি গুরুত্বপূর্ণ টিপস অনুসরণ করুন।",
    excerptEn: "Selecting the right development partner is crucial for turning your app idea into reality. Follow our 5 essential tips to find the best partner in Bangladesh.",
    seo: { metaTitleBn: "সেরা মোবাইল অ্যাপ ডেভেলপমেন্ট পার্টনার কিভাবে খুঁজবেন?", metaTitleEn: "How to Find the Best Mobile App Development Partner", metaDescBn: "", metaDescEn: "" },
    imageKeywords: ["mobile app development", "team collaboration", "UI/UX design"],
    coverAltBn: "একটি দল মোবাইল অ্যাপের ডিজাইন নিয়ে আলোচনা করছে।",
    coverAltEn: "A team collaborating on a mobile app design.",
    publishedDate: "2024-07-25",
    category: "Mobile Development",
    tags: ["App Strategy", "Outsourcing"],
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    ...MOCK_CONTENT,
    id: '3',
    author: BLOG_AUTHOR,
    titleBn: "ই-কমার্স ওয়েবসাইটের জন্য যে ৭টি ফিচার অবশ্যই প্রয়োজন",
    titleEn: "7 Must-Have Features for Your E-commerce Website",
    slug: "must-have-ecommerce-website-features",
    excerptBn: "একটি সফল অনলাইন স্টোর তৈরি করতে কিছু অত্যাবশ্যকীয় ফিচার প্রয়োজন। আপনার ই-কমার্স ওয়েবসাইটে গ্রাহকদের সেরা অভিজ্ঞতা দিতে এবং বিক্রয় বাড়াতে এই ৭টি ফিচার যোগ করুন।",
    excerptEn: "A successful online store requires certain essential features. Add these 7 features to your e-commerce site to provide the best customer experience and boost sales.",
    seo: { metaTitleBn: "আপনার ই-কমার্স সাইটের জন্য ৭টি জরুরি ফিচার", metaTitleEn: "7 Essential Features for Your E-commerce Site", metaDescBn: "", metaDescEn: "" },
    imageKeywords: ["e-commerce", "online shopping", "payment gateway"],
    coverAltBn: "অনলাইন শপিং কার্টের একটি চিত্র।",
    coverAltEn: "An illustration of an online shopping cart.",
    publishedDate: "2024-07-22",
    category: "E-commerce",
    tags: ["Web Development", "CRO"],
    coverImage: "https://images.unsplash.com/photo-1585160993299-f28383494036?q=80&w=2070&auto=format&fit=crop"
  },
  {
    ...MOCK_CONTENT,
    id: '4',
    author: BLOG_AUTHOR,
    titleBn: "এসইও (SEO): আপনার ওয়েবসাইটকে গুগলে র‍্যাঙ্ক করানোর সম্পূর্ণ গাইড",
    titleEn: "SEO: The Complete Guide to Ranking Your Website on Google",
    slug: "complete-seo-guide-google-ranking",
    excerptBn: "সার্চ ইঞ্জিন অপটিমাইজেশন (এসইও) আপনার ব্যবসার ডিজিটাল প্রসারের জন্য অপরিহার্য। এই সম্পূর্ণ গাইডে আমরা অন-পেজ, অফ-পেজ এবং টেকনিক্যাল এসইও নিয়ে বিস্তারিত আলোচনা করেছি।",
    excerptEn: "Search Engine Optimization (SEO) is essential for your business's digital growth. In this complete guide, we cover on-page, off-page, and technical SEO in detail.",
    seo: { metaTitleBn: "গুগল র‍্যাঙ্কিং এর জন্য সম্পূর্ণ এসইও গাইড", metaTitleEn: "The Complete SEO Guide for Google Ranking", metaDescBn: "", metaDescEn: "" },
    imageKeywords: ["SEO", "data analytics", "keyword research"],
    coverAltBn: "এসইও এবং ডেটা অ্যানালিটিক্স এর একটি গ্রাফিকাল উপস্থাপনা।",
    coverAltEn: "A graphical representation of SEO and data analytics.",
    publishedDate: "2024-07-20",
    category: "Digital Marketing",
    tags: ["SEO", "Digital Presence"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

export const BLOG_CATEGORIES = [
  { id: '1', name: "Business Strategy" },
  { id: '2', name: "Mobile Development" },
  { id: '3', name: "E-commerce" },
  { id: '4', name: "Digital Marketing" },
  { id: '5', name: "Artificial Intelligence" },
];

export const BLOG_TAGS = [
  { id: '1', name: "Web Development" },
  { id: '2', name: "Digital Presence" },
  { id: '3', name: "App Strategy" },
  { id: '4', name: "Outsourcing" },
  { id: '5', name: "CRO" },
  { id: '6', name: "SEO" },
  { id: '7', name: "AI" },
  { id: '8', name: "Tech Trends" },
];
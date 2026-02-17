import type { Service, TeamMember, ProcessStep, Stat, NavLink, Product } from './types';
import { WebDevIcon, SoftwareDevIcon, MobileAppIcon, UiUxIcon, DigitalMarketingIcon, EcommerceIcon, SupportIcon, CodeIcon, UsersIcon, CheckCircleIcon, RocketIcon } from './components/icons/Icons';

export const COMPANY_INFO = {
  name: "DevSpark Soft IT",
  license: "DNCC/037306",
  helpline: "+8809649999144",
  whatsapp: "+801862109990",
  email: "info@DevSparkSoft.com",
  address: "Sector 16, Jolsiri Abason, Purbachal, Dhaka",
  domain: "https://DevSparksoft.com",
  whatsappCommunity: "https://chat.whatsapp.com/DEpkuHHbmXHLYkTdh8sb4T",
  facebookGroup: "https://www.facebook.com/share/g/17wFpzrWUv/?mibextid=wwXIfr"
};

export const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
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
      "Pay-Per-Click (PPC) Advertising",
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
  { sortOrder: 4, isActive: true, name: "Nauman Chaudhary", position: "Partner & Broker", address: "Lahore, Pakistan", photo: "https://i.ibb.co/208sM8VK/IMG-3863.jpg", badge: "Partner" },
  { sortOrder: 5, isActive: true, name: "Ad Khan", position: "Partner & Broker", address: "Lahore, Pakistan", photo: "https://i.ibb.co/NgGvZ693/IMG-7257.jpg", badge: "Partner" },
  { sortOrder: 6, isActive: true, name: "Taimoor Safdar", position: "Partner & Broker", address: "Lahore, Pakistan", photo: "https://i.ibb.co/NnKkcv8c/IMG-7244.jpg", badge: "Partner" },
  { sortOrder: 7, isActive: true, name: "Ketty Parry", position: "Investor", address: "Xian, China", photo: "https://i.ibb.co/7dtKvM1s/IMG-7263.jpg", badge: "Investor" },
  { sortOrder: 8, isActive: true, name: "Ola", position: "Investor", address: "Moscow, Russia", photo: "https://i.ibb.co/NgCKHWRL/IMG-7262.jpg", badge: "Investor" },
];


export const OUR_PROCESS: ProcessStep[] = [
  { step: 1, title: "Requirement Analysis", description: "We begin by thoroughly- understanding your business goals, target audience, and project requirements." },
  { step: 2, title: "Planning & Design", description: "Our team creates a strategic plan, wireframes, and mockups to visualize the final product." },
  { step: 3, "title": "Development", "description": "Our expert developers write clean, efficient code using the latest technologies to build your solution." },
  { step: 4, title: "Testing", description: "Rigorous testing is conducted to ensure the product is bug-free, secure, and performs flawlessly." },
  { step: 5, title: "Delivery & Support", description: "We deploy the project and provide ongoing support to ensure its continued success." },
];

export const STATS: Stat[] = [
    { value: "19K+", label: "Projects Completed" },
    { value: "1199+", label: "Happy Clients" },
    { value: "500+", label: "Years of Experience" }
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
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES, WHY_CHOOSE_US_POINTS, TEAM_MEMBERS, OUR_PROCESS, STATS } from '../constants';
import type { Service, TeamMember, ProcessStep, Stat } from '../types';
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon, WhatsAppIcon, AcademicCapIcon, BriefcaseIcon, LocationMarkerIcon, FacebookIcon } from '../components/icons/Icons';
import Image from '../components/Image';


// Helper component for section titles
const SectionTitle: React.FC<{ subtitle: string; title: string; }> = ({ subtitle, title }) => (
  <div className="text-center mb-12 animate-fade-in-up">
    <span className="text-brand-blue font-semibold uppercase tracking-wider">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-light">{title}</h2>
  </div>
);

// Hero Section
const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
    {/* Background Image */}
    <div 
      className="absolute inset-0 z-0"
      style={{ backgroundImage: `url('https://picsum.photos/seed/hero/1920/1080')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    ></div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(0,0,0,0.65)] via-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.70)]"></div>
    
    {/* Decorative Blurs */}
    <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-gradient-to-br from-brand-blue/30 to-transparent rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-brand-cyan/20 to-transparent rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    {/* Glassmorphism Content Card */}
    <div className="relative z-20 container mx-auto px-4 sm:px-6 animate-fade-in-up">
      <div className="bg-black/[.35] backdrop-blur-[6px] border border-white/[.12] rounded-[14px] p-7 md:p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 [text-shadow:0_6px_18px_rgba(0,0,0,0.6)]">
          Innovative IT Solutions, Software & <br className="hidden md:block" /> Digital Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-light mb-8 [text-shadow:0_6px_18px_rgba(0,0,0,0.6)]">
          We are DevSpark Soft IT, a leading licensed agency in Bangladesh, dedicated to empowering businesses with cutting-edge technology and results-driven digital strategies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-white bg-brand-blue rounded-md hover:scale-105 transition-transform duration-300"
          >
            Get Free Consultation
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3 text-lg font-bold text-brand-light bg-gray-700/50 rounded-md hover:bg-gray-700/80 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-12 flex items-center justify-center gap-4 text-brand-slate">
          <CheckCircleIcon className="h-6 w-6 text-green-400" />
          <span>Govt. Licensed & Trusted</span>
          <span>|</span>
          <span>License No: {COMPANY_INFO.license}</span>
        </div>
      </div>
    </div>
  </section>
);

// About Section
const AboutSection: React.FC = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <Image src="https://i.ibb.co/sJdPqWqp/7-D1-B41-E7-A944-4834-B2-C4-B5-B5-F35588-EC.png" alt="DevSpark Soft IT Team" className="rounded-lg shadow-2xl" />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-brand-blue font-semibold uppercase tracking-wider">About DevSpark Soft IT</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-light mb-4">Your Reliable Digital Partner in Bangladesh</h2>
          <p className="text-brand-slate mb-6">
            DevSpark Soft IT is a premier technology partner based in Dhaka, officially licensed (No: {COMPANY_INFO.license}) to provide comprehensive IT and digital services. With years of experience, we are committed to delivering reliable, innovative, and scalable solutions that drive growth and efficiency for our clients both locally and internationally.
          </p>
          <p className="text-brand-slate mb-8">
            Our mission is to bridge the gap between business challenges and technological solutions, ensuring your success in the digital age.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300"
          >
            Discover More <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Services Section
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-brand-blue hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="mb-4">
      <service.icon className="h-12 w-12 text-brand-blue" />
    </div>
    <h3 className="text-xl font-bold text-brand-light mb-2">{service.title}</h3>
    <p className="text-brand-slate">{service.description}</p>
  </div>
);

const ServicesSection: React.FC = () => (
  <section className="py-20 bg-gray-900/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Our Services" title="What We Offer" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// Why Choose Us Section
const WhyChooseUsSection: React.FC = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Why Choose Us" title="The DevSpark Advantage" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WHY_CHOOSE_US_POINTS.map((point, index) => (
          <div key={point.title} className="text-center p-6 bg-gray-800/30 rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 bg-brand-blue/10 rounded-full">
              <point.icon className="h-8 w-8 text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-brand-light mb-2">{point.title}</h3>
            <p className="text-brand-slate">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Team Section
const badgeColorMap: { [key: string]: string } = {
  CEO: 'bg-red-500 text-white',
  Marketing: 'bg-green-500 text-white',
  Manager: 'bg-blue-500 text-white',
  Partner: 'bg-purple-500 text-white',
  Investor: 'bg-yellow-500 text-gray-900',
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="relative bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-2">
      {member.badge && (
        <div className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full z-10 ${badgeColorMap[member.badge] || 'bg-gray-500 text-white'}`}>
          {member.badge}
        </div>
      )}
      <div className="aspect-[4/5] overflow-hidden">
        <Image 
          src={member.photo} 
          alt={member.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-brand-light truncate">{member.name}</h3>
        <p className="text-brand-blue font-semibold text-sm flex items-center gap-2">
          <BriefcaseIcon className="w-4 h-4" />
          {member.position}
        </p>
        {member.education && (
          <p className="text-brand-slate text-xs flex items-center gap-2">
            <AcademicCapIcon className="w-4 h-4" />
            {member.education}
          </p>
        )}
        <p className="text-brand-slate text-xs flex items-center gap-2">
          <LocationMarkerIcon className="w-4 h-4" />
          {member.address}
        </p>
      </div>
    </div>
);


const TeamSection: React.FC = () => {
  const activeTeam = TEAM_MEMBERS
    .filter(member => member.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-light">Meet Our Expert Team</h2>
            <p className="text-brand-slate mt-4 max-w-2xl mx-auto">Meet the dedicated professionals ready to bring your vision to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {activeTeam.map((member, index) => (
            <div key={member.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessStepItem: React.FC<{ item: ProcessStep }> = ({ item }) => (
  <div className="relative pl-12 pb-8 border-l-2 border-gray-700">
    <div className="absolute -left-5 top-0 flex items-center justify-center w-10 h-10 bg-brand-blue text-white font-bold rounded-full">
      {item.step}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-bold text-brand-light">{item.title}</h3>
      <p className="text-brand-slate mt-1">{item.description}</p>
    </div>
  </div>
);

const OurProcessSection: React.FC = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle subtitle="Our Workflow" title="Our Development Process" />
      <div className="max-w-3xl mx-auto animate-fade-in-up">
        {OUR_PROCESS.map((item) => (
          <ProcessStepItem key={item.step} item={item} />
        ))}
      </div>
    </div>
  </section>
);

// Stats Section
const StatItem: React.FC<{ stat: Stat }> = ({ stat }) => (
  <div className="text-center">
    <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">{stat.value}</p>
    <p className="text-lg text-brand-slate mt-2">{stat.label}</p>
  </div>
);

const StatsSection: React.FC = () => (
  <section className="py-20 bg-gray-900/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {STATS.map((stat, index) => (
            <div className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <StatItem key={stat.label} stat={stat} />
            </div>
        ))}
      </div>
    </div>
  </section>
);


// CTA Section
const CtaSection: React.FC = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">Let's Build Your Digital Solution</h2>
      <p className="max-w-2xl mx-auto text-brand-slate mb-8">
        Have a project in mind? We'd love to hear about it. Contact us today for a free consultation and let's turn your ideas into reality.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-green-500 rounded-md hover:scale-105 transition-transform duration-300"
        >
          <WhatsAppIcon className="mr-2 h-6 w-6" /> WhatsApp Us
        </a>
        <a
          href={`tel:${COMPANY_INFO.helpline}`}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-brand-blue rounded-md hover:scale-105 transition-transform duration-300"
        >
          <PhoneIcon className="mr-2 h-6 w-6" /> Call Helpline
        </a>
      </div>
       <div className="mt-10 animate-fade-in-up">
        <a
          href={COMPANY_INFO.facebookGroup}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-brand-light hover:text-brand-orange transition-colors duration-300 group"
        >
          <FacebookIcon className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="font-semibold text-xl border-b-2 border-dashed border-gray-600 group-hover:border-brand-orange pb-1">
            Join Our Facebook Group : meet market
          </span>
        </a>
      </div>
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TeamSection />
      <OurProcessSection />
      <StatsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
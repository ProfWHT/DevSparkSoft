import React from 'react';
import { BLOG_AUTHOR, COMPANY_INFO } from '../constants';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, MailIcon, WhatsAppIcon } from '../components/icons/Icons';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const AboutCeoPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="About the CEO" />
      
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg text-center sticky top-24">
                <Image src={BLOG_AUTHOR.avatar} alt={BLOG_AUTHOR.name} className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-brand-blue" />
                <h2 className="text-3xl font-bold text-white">{BLOG_AUTHOR.name}</h2>
                <p className="text-brand-blue font-semibold text-lg">{BLOG_AUTHOR.role}</p>
                <div className="mt-6 pt-6 border-t border-gray-700 text-left space-y-4">
                   <p className="flex items-center text-brand-slate">
                      <BriefcaseIcon className="h-5 w-5 mr-3 text-brand-orange flex-shrink-0" />
                      Software Engineer, NodeJS
                   </p>
                   <p className="flex items-center text-brand-slate">
                      <MailIcon className="h-5 w-5 mr-3 text-brand-orange flex-shrink-0" />
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-orange transition-colors">{COMPANY_INFO.email}</a>
                   </p>
                   <p className="flex items-center text-brand-slate">
                      <WhatsAppIcon className="h-5 w-5 mr-3 text-brand-orange flex-shrink-0" />
                       <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">{COMPANY_INFO.whatsapp}</a>
                   </p>
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Message */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert prose-lg max-w-none text-brand-slate prose-h2:text-brand-light prose-h3:text-brand-light prose-strong:text-brand-light prose-a:text-brand-blue hover:prose-a:text-brand-orange">
                <h2>A Message from Our CEO</h2>
                <p>
                  "Welcome to DevSpark Soft IT. Since our inception, my primary goal has been to build a company that doesn't just deliver technology, but builds trust. In a rapidly evolving digital world, we stand as a beacon of reliability and innovation for businesses in Bangladesh and beyond. Our government license is not just a formality; it's our promise of quality and accountability."
                </p>
                <p>
                  "I started my journey as a Software Engineer with a passion for solving complex problems through clean, efficient code. This hands-on experience is the bedrock of our company's philosophy: to approach every project with an engineer's precision and an entrepreneur's vision. We are committed to understanding your unique challenges and crafting tailored solutions that drive real-world results."
                </p>
                <h3>Our Vision for the Future</h3>
                <p>
                  "We are at an exciting crossroads in technology, particularly with the rise of AI and data-driven strategies. My vision for DevSpark Soft IT is to be at the forefront of this transformation in our region. We aim to empower local businesses with the same level of technological sophistication as their global competitors, fostering a vibrant digital ecosystem right here in Bangladesh."
                </p>
                <p>
                  "Thank you for considering DevSpark Soft IT as your digital partner. We are more than just a service provider; we are your collaborators in success. Let's build something remarkable together."
                </p>
                <div className="mt-12 not-prose">
                    <Link to="/contact" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300">
                        Let's Start a Project
                    </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCeoPage;
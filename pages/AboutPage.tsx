
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, WHY_CHOOSE_US_POINTS } from '../constants';
import Image from '../components/Image';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="About DevSpark Soft IT" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4">Your Partner in Digital Excellence</h2>
              <p className="text-brand-slate mb-6">
                Founded with the vision to revolutionize the digital landscape in Bangladesh, DevSpark Soft IT has grown into a trusted name for comprehensive IT services. We are a government-licensed entity (License No: {COMPANY_INFO.license}), which stands as a testament to our commitment to quality, transparency, and professional integrity.
              </p>
              <p className="text-brand-slate mb-6">
                Our team is our greatest asset. Comprising seasoned developers, creative designers, and strategic marketers, we work collaboratively to deliver solutions that are not just technologically advanced but also aligned with your core business objectives. We believe in building long-term partnerships with our clients, guiding them through every step of their digital journey.
              </p>
              <Link to="/contact" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300">
                Contact Us
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image src="https://i.ibb.co/sJdPqWqp/7-D1-B41-E7-A944-4834-B2-C4-B5-B5-F35588-EC.png" alt="Office" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Our Mission</h3>
              <p className="text-brand-slate">To empower businesses of all sizes with innovative, reliable, and affordable technology solutions, enabling them to thrive in an increasingly digital world.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2">Our Vision</h3>
              <p className="text-brand-slate">To be the leading IT and digital services provider in Bangladesh, recognized for our client-centric approach, technological excellence, and unwavering commitment to success.</p>
            </div>
          </div>
        </div>
      </section>
      
       <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-light">Why Partner With Us?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {WHY_CHOOSE_US_POINTS.map((point) => (
                <div key={point.title} className="text-center p-6 bg-gray-800/30 rounded-lg">
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

    </div>
  );
};

export default AboutPage;
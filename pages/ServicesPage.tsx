import React from 'react';
import type { Service } from '../types';
import { SERVICES, COMPANY_INFO } from '../constants';
import { Link } from 'react-router-dom';
import Image from '../components/Image';
import { WhatsAppIcon } from '../components/icons/Icons';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const ServiceDetailCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <div className={`grid md:grid-cols-2 gap-12 items-center py-16 ${index > 0 ? 'border-t border-gray-800' : ''}`}>
    <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
      <div className="mb-4">
        <service.icon className="h-12 w-12 text-brand-blue" />
      </div>
      <h3 className="text-3xl font-bold text-brand-light mb-4">{service.title}</h3>
      <p className="text-brand-slate mb-4">{service.description}</p>
      {service.longDescription && <p className="text-brand-slate mb-6">{service.longDescription}</p>}
      {service.features && (
        <ul className="space-y-2 text-brand-slate list-disc list-inside">
            {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
        </ul>
      )}
    </div>
    <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
      <Image src={service.image || `https://picsum.photos/seed/service${index}/600/400`} alt={service.title} className="rounded-lg shadow-2xl" />
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Our Services" />

      <section className="py-10 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto pb-10">
              <h2 className="text-3xl font-bold text-brand-light">Our Service Categories</h2>
              <p className="text-brand-slate mt-4">We provide a wide range of services across various categories to meet your business needs. Each service is designed to deliver value and drive results. If you have a custom requirement, feel free to discuss it with us.</p>
          </div>
          {SERVICES.map((service, index) => (
            <ServiceDetailCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

       <section className="py-20 bg-gray-900/50 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-brand-light mb-4">Let's Discuss Your Project</h2>
            <p className="max-w-2xl mx-auto text-brand-slate mb-4">
                We offer flexible solutions tailored to your unique requirements. All project costs are determined based on scope and complexity, and are subject to discussion. Contact us for a detailed proposal.
            </p>
            <p className="max-w-2xl mx-auto text-brand-slate mb-8">
                You can also join our WhatsApp community to stay updated and connect with other businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <a 
                  href={COMPANY_INFO.whatsappCommunity}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-opacity-80 transition-all duration-300">
                  <WhatsAppIcon className="h-6 w-6 mr-2" />
                  Join Our Community
              </a>
              <Link 
                  to="/contact" 
                  className="w-full sm:w-auto inline-block px-8 py-3 text-lg font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300">
                  Get a Free Quote
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
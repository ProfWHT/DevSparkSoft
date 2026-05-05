
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '../components/icons/Icons';

const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (location.state?.subject) {
      setFormData(prev => ({ ...prev, subject: location.state.subject }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setStatus('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Contact Us" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-light mb-4">Get in Touch</h2>
              <p className="text-brand-slate mb-8">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <LocationMarkerIcon className="h-7 w-7 text-brand-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-light">Address & Registrations</h3>
                    <p className="text-brand-slate mb-2">{COMPANY_INFO.address}</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-brand-slate">
                        <span className="font-semibold text-brand-blue">BD License:</span> {COMPANY_INFO.license}
                      </p>
                      <p className="text-brand-slate">
                        <span className="font-semibold text-brand-blue">USA Registration:</span> {' '}
                        <a href={COMPANY_INFO.usaRegistrationLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange underline decoration-dotted">
                          {COMPANY_INFO.usaRegistration}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="h-7 w-7 text-brand-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-light">Email</h3>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-slate hover:text-brand-blue transition-colors">{COMPANY_INFO.email}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-7 w-7 text-brand-blue mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-brand-light">Phone & Web</h3>
                    <p className="text-brand-slate">Helpline: <a href={`tel:${COMPANY_INFO.helpline}`} className="hover:text-brand-blue transition-colors">{COMPANY_INFO.helpline}</a></p>
                    <p className="text-brand-slate">WhatsApp: <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`} className="hover:text-brand-blue transition-colors">{COMPANY_INFO.whatsapp}</a></p>
                    <div className="mt-2 flex gap-3 text-sm">
                      <a href={COMPANY_INFO.domain} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">DevSparkSoft.com</a>
                      <span className="text-gray-600">|</span>
                      <a href={COMPANY_INFO.secondaryDomain} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">DevSparkSoft.org</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-light mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-slate">Your Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-brand-light focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                   <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-slate">Your Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-brand-light focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                  </div>
                </div>
                 <div className="mt-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-slate">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-brand-light focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-slate">Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-brand-light focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full px-6 py-3 text-lg font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300">
                    Send Message
                  </button>
                </div>
                {status && <p className="mt-4 text-center text-green-400">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3340537488057!2d90.50989391544336!3d23.80679809243757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cb59b1515555%3A0x44c852445c03f273!2sJolsiri%20Abason!5e0!3m2!1sen!2sbd!4v1678886543210!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DevSpark Soft IT Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
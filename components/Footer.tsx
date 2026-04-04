import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_LINKS } from '../constants';
import { PhoneIcon, MailIcon, LocationMarkerIcon, WhatsAppIcon, FacebookIcon } from './icons/Icons';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FacebookIcon, href: "https://www.facebook.com/devsparksoft" },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-brand-slate mb-4">
              Your trusted partner for innovative IT solutions and digital transformation in Bangladesh, USA, and beyond.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-brand-slate">BD License: {COMPANY_INFO.license}</p>
              <p className="text-brand-slate">
                USA Reg: <a href={COMPANY_INFO.usaRegistrationLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange underline decoration-dotted">{COMPANY_INFO.usaRegistration}</a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-slate hover:text-brand-orange transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
               <li>
                  <Link to="/privacy-policy" className="text-brand-slate hover:text-brand-orange transition-colors duration-300">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-brand-slate hover:text-brand-orange transition-colors duration-300">Terms & Conditions</Link>
                </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 text-brand-orange mt-1 mr-3 flex-shrink-0" />
                <span className="text-brand-slate">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.helpline}`} className="text-brand-slate hover:text-brand-orange transition-colors duration-300">{COMPANY_INFO.helpline}</a>
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-orange transition-colors duration-300">{COMPANY_INFO.whatsapp}</a>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-slate hover:text-brand-orange transition-colors duration-300">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Download App</h4>
            <a 
              href={COMPANY_INFO.googlePlayLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-12"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Social Media */}
           <div>
            <h4 className="text-lg font-semibold text-brand-light mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-slate hover:text-brand-orange p-2 bg-gray-800 rounded-full transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-brand-slate">
          <p>&copy; {new Date().getFullYear()} DevSpark Soft IT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
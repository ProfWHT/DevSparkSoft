import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavLink } from '../types';
import { NAV_LINKS, COMPANY_INFO } from '../constants';
import { MenuIcon, XIcon, WhatsAppIcon, FacebookIcon, RocketIcon } from './icons/Icons';
import Logo from './Logo';

const NavLinkItem: React.FC<{ link: NavLink, className?: string }> = ({ link, className }) => {
  const location = useLocation();
  const isActive = link.path === '/'
    ? location.pathname === link.path
    : location.pathname.startsWith(link.path);

  return (
    <Link
      to={link.path}
      className={`${className} ${isActive ? 'text-brand-orange' : 'text-brand-light hover:text-brand-orange'}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.name}
    </Link>
  );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLinkItem key={link.name} link={link} className="text-base font-medium transition-colors duration-300" />
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
             <Link
                to="/google-play-console"
                className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-md hover:scale-105 transition-all duration-300 shadow-md shadow-orange-500/20"
              >
                <RocketIcon className="h-4 w-4 mr-2" />
                Sell Account
            </Link>
            <a
                href={COMPANY_INFO.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
              >
                <FacebookIcon className="h-4 w-4 mr-1" />
                FB Group
            </a>
            <a
                href={COMPANY_INFO.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4 mr-1" />
                Community
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-light hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-500 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-dark/95 backdrop-blur-sm animate-slide-in">
          {NAV_LINKS.map((link) => (
            <NavLinkItem 
              key={link.name} 
              link={link}
              className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
             />
          ))}
          <div className="pt-4 px-3 space-y-3">
             <Link
                to="/google-play-console"
                className="w-full flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-md"
              >
                <RocketIcon className="h-5 w-5 mr-2" />
                Sell Your Google Play Account
            </Link>
             <a
                href={COMPANY_INFO.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md"
              >
                <FacebookIcon className="h-5 w-5 mr-2" />
                Join Facebook Group
            </a>
            <a
                href={COMPANY_INFO.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Join Community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
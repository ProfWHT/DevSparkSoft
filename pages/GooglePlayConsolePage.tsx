import React from 'react';
import { COMPANY_INFO } from '../constants';
import { CheckCircleIcon, WhatsAppIcon, RocketIcon } from '../components/icons/Icons';
import Image from '../components/Image';

const GooglePlayConsolePage: React.FC = () => {
  const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=Hello,%20I%20want%20to%20sell%20my%20Google%20Play%20Developer%20Account.`;

  return (
    <div className="animate-fade-in-up bg-brand-dark min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.ibb.co/C3gJJrQW/509491779-122167226096479257-193130337769823516-n.jpg" 
            alt="Google Play Console" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-bold text-sm tracking-widest uppercase animate-pulse">
            Active Buying
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            🚀 Sell Your Old <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">
              Google Play Developer Account
            </span> ✅
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-light font-medium mb-10">
            Get the best market price for your vintage developer accounts. Secure, fast, and 100% confidential.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="container mx-auto px-4 -mt-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* USDT Price */}
          <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-blue-400 font-bold text-xl mb-4">Price in USDT</h3>
            <p className="text-5xl font-black text-white mb-2">250 - 1,500 <span className="text-2xl font-normal text-brand-slate">Dollars</span></p>
            <p className="text-brand-slate text-sm">Instant payout via Binance/USDT</p>
          </div>
          
          {/* BDT Price */}
          <div className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-green-500/30 shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
            <h3 className="text-green-400 font-bold text-xl mb-4">Price in BDT</h3>
            <p className="text-5xl font-black text-white mb-2">50,000 - 200,000 <span className="text-2xl font-normal text-brand-slate">BDT</span></p>
            <p className="text-brand-slate text-sm">Bank Transfer / bKash / Nagad</p>
          </div>
        </div>
      </section>

      {/* Requirements & Details */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-900/50 p-10 rounded-3xl border border-gray-700">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-light mb-6 flex items-center">
                <RocketIcon className="h-6 w-6 text-brand-orange mr-2" />
                Critical Requirement
              </h2>
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                 <p className="text-white font-bold text-lg mb-2">⏳ Condition:</p>
                 <p className="text-brand-light">Account creation date must be <span className="text-red-400 font-bold">before November 2023</span>.</p>
              </div>
              <p className="text-brand-slate text-sm mt-4 italic">
                *We specialize in older accounts due to specific development needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-light mb-6">✔ We Buy All Types</h2>
              <ul className="space-y-4">
                {[
                  "Active Accounts",
                  "Closed Accounts",
                  "Verification Failed Accounts",
                  "Accounts with/without Apps",
                  "100% Secure & Confidential",
                  "Fast Verification Process"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-brand-light">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to sell? Contact us now!</h2>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 text-2xl font-black text-white bg-green-500 rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(34,197,94,0.3)] group"
            >
              <WhatsAppIcon className="h-10 w-10 animate-bounce" />
              WhatsApp: {COMPANY_INFO.whatsapp}
            </a>
            <p className="mt-6 text-brand-slate font-medium">
              Available 24/7 for account evaluations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GooglePlayConsolePage;
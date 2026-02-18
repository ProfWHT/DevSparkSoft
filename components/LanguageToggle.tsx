import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-semibold text-brand-light bg-gray-700/50 rounded-md hover:bg-gray-700/80 transition-colors duration-300"
      aria-label={`Switch to ${language === 'en' ? 'Bangla' : 'English'}`}
    >
      {language === 'en' ? 'বাংলা' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
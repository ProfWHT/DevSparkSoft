import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import { COMPANY_INFO } from '../constants';
import Image from '../components/Image';
import { useLanguage } from '../contexts/LanguageContext';
import { WhatsAppIcon, ArrowRightIcon } from '../components/icons/Icons';

const PortfolioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const project = PORTFOLIO_PROJECTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) return null;

  const title = language === 'bn' ? project.titleBn : project.titleEn;
  const description = language === 'bn' ? project.descriptionBn : project.descriptionEn;

  const formatMarkdown = (content: string) => {
    return content.split('\n').map(line => {
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold text-brand-light mt-8 mb-4">${line.substring(3)}</h2>`;
      return `<p class="mb-4">${line}</p>`;
    }).join('');
  };

  return (
    <div className="animate-fade-in-up">
      {/* Header Image */}
      <div className="h-[50vh] w-full relative">
        <Image src={project.thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8 bg-gray-800/80 backdrop-blur-md p-6 rounded-lg">
            <Link to="/portfolio" className="text-brand-blue hover:underline mb-4 inline-block">&larr; {language === 'bn' ? 'সব প্রজেক্ট' : 'Back to All Projects'}</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-brand-slate">
              <span>{project.year}</span>
              <span className="text-gray-600">•</span>
              <span>{project.category}</span>
              {project.clientName && (
                <>
                  <span className="text-gray-600">•</span>
                  <span>{language === 'bn' ? 'ক্লায়েন্ট' : 'Client'}: {project.clientName}</span>
                </>
              )}
            </div>
          </header>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-lg">
              <article 
                className="prose prose-invert prose-lg max-w-none text-brand-slate prose-h2:text-brand-light prose-a:text-brand-blue hover:prose-a:text-brand-orange"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(description) }}
              />

              {/* Gallery */}
              {project.galleryImages.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-brand-light mb-4">{language === 'bn' ? 'গ্যালারি' : 'Gallery'}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.galleryImages.map((img, index) => (
                      <Image key={index} src={img} alt={`${title} gallery image ${index+1}`} className="w-full h-auto object-cover rounded-lg" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-brand-light mb-4 border-b border-gray-700 pb-2">{language === 'bn' ? 'প্রযুক্তি' : 'Tech Stack'}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-gray-700 text-brand-light text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>

                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full inline-block text-center px-4 py-2 font-semibold text-white bg-brand-orange rounded-md hover:bg-opacity-80">
                    {language === 'bn' ? 'লাইভ দেখুন' : 'View Live Project'}
                  </a>
                )}
                
                <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                    <p className="font-bold text-brand-light mb-3">{language === 'bn' ? 'এমন প্রজেক্ট করতে চান?' : 'Want a project like this?'}</p>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 mb-3">
                       {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'} <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                     <a href={COMPANY_INFO.whatsappCommunity} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-opacity-80">
                       <WhatsAppIcon className="h-5 w-5 mr-2" /> {language === 'bn' ? 'কমিউনিটিতে যোগ দিন' : 'Join Community'}
                    </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import type { PortfolioProject } from '../types';
import Image from '../components/Image';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRightIcon } from '../components/icons/Icons';

const PROJECTS_PER_PAGE = 12;

const ProjectCard: React.FC<{ project: PortfolioProject }> = ({ project }) => {
  const { language } = useLanguage();
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-2 flex flex-col">
      <Link to={`/portfolio/${project.slug}`} className="block aspect-video overflow-hidden relative">
        <Image 
          src={project.thumbnailUrl} 
          alt={language === 'bn' ? project.titleBn : project.titleEn} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded-md">{project.year}</div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">{project.category}</span>
        <h3 className="text-lg font-bold text-brand-light mb-2 flex-grow">{language === 'bn' ? project.titleBn : project.titleEn}</h3>
        <p className="text-sm text-brand-slate mb-4 line-clamp-2">{language === 'bn' ? project.summaryBn : project.summaryEn}</p>
        <div className="mt-auto pt-2 border-t border-gray-700">
            <Link to={`/portfolio/${project.slug}`} className="text-sm font-semibold text-brand-blue hover:text-brand-orange flex items-center">
                {language === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'} <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
        </div>
      </div>
    </div>
  );
};

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void; }> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  // Logic to show a limited number of page links (e.g., first, last, current, and neighbors)
  const maxPagesToShow = 5;
  const halfPagesToShow = Math.floor(maxPagesToShow / 2);
  let startPage = Math.max(1, currentPage - halfPagesToShow);
  let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

  if (currentPage <= halfPagesToShow) {
    endPage = Math.min(totalPages, maxPagesToShow);
  }
  if (currentPage + halfPagesToShow >= totalPages) {
    startPage = Math.max(1, totalPages - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 bg-gray-700 rounded-md disabled:opacity-50">&laquo;</button>
      {startPage > 1 && <>
        <button onClick={() => onPageChange(1)} className="px-3 py-2 bg-gray-700 rounded-md">1</button>
        {startPage > 2 && <span className="px-3 py-2 text-brand-slate">...</span>}
      </>}
      {pageNumbers.map(num => (
        <button key={num} onClick={() => onPageChange(num)} className={`px-3 py-2 rounded-md ${currentPage === num ? 'bg-brand-blue text-white' : 'bg-gray-700'}`}>{num}</button>
      ))}
      {endPage < totalPages && <>
        {endPage < totalPages - 1 && <span className="px-3 py-2 text-brand-slate">...</span>}
        <button onClick={() => onPageChange(totalPages)} className="px-3 py-2 bg-gray-700 rounded-md">{totalPages}</button>
      </>}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 bg-gray-700 rounded-md disabled:opacity-50">&raquo;</button>
    </div>
  );
}

const PortfolioPage: React.FC = () => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedYear, setSelectedYear] = useState('All');
    const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = useMemo(() => ['All', ...Array.from(new Set(PORTFOLIO_PROJECTS.map(p => p.category)))], []);
    const years = useMemo(() => ['All', ...Array.from(new Set(PORTFOLIO_PROJECTS.map(p => p.year.toString()))).sort((a,b) => parseInt(b) - parseInt(a))], []);

    const filteredAndSortedProjects = useMemo(() => {
        return PORTFOLIO_PROJECTS
            .filter(p => p.status === 'Published')
            .filter(p => {
                const term = searchTerm.toLowerCase();
                return p.titleEn.toLowerCase().includes(term) || p.titleBn.toLowerCase().includes(term) || p.techStack.join(' ').toLowerCase().includes(term);
            })
            .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
            .filter(p => selectedYear === 'All' || p.year.toString() === selectedYear)
            .sort((a, b) => {
                if (sortOrder === 'latest') {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                } else {
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                }
            });
    }, [searchTerm, selectedCategory, selectedYear, sortOrder]);
    
    useEffect(() => {
      setCurrentPage(1); // Reset to first page on filter change
    }, [searchTerm, selectedCategory, selectedYear, sortOrder]);


    const totalPages = Math.ceil(filteredAndSortedProjects.length / PROJECTS_PER_PAGE);
    const currentProjects = filteredAndSortedProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

    return (
        <div className="animate-fade-in-up">
            <div className="bg-gray-900/50 py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {language === 'bn' ? 'আমাদের সম্পন্ন প্রজেক্ট' : 'Our Completed Projects'}
                </h1>
                <p className="mt-4 text-lg text-brand-slate">
                    {language === 'bn' ? `(মোট ${PORTFOLIO_PROJECTS.length} টি)` : `(Total of ${PORTFOLIO_PROJECTS.length})`}
                </p>
            </div>

            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters and Search */}
                    <div className="mb-12 p-4 bg-gray-800/50 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-brand-slate mb-1">{language === 'bn' ? 'প্রজেক্ট খুঁজুন' : 'Search Projects'}</label>
                            <input 
                                type="text"
                                placeholder={language === 'bn' ? 'নাম বা প্রযুক্তি দিয়ে খুঁজুন...' : 'Search by name or tech...'}
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-brand-slate mb-1">{language === 'bn' ? 'ক্যাটাগরি' : 'Category'}</label>
                            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light">
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-brand-slate mb-1">{language === 'bn' ? 'বছর' : 'Year'}</label>
                            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light">
                                {years.map(y => <option key={y} value={y}>{y}</option>)}
                            </select>
                        </div>
                         <div className="col-span-full flex justify-center md:justify-end gap-2 mt-2">
                             <span className="text-sm font-medium text-brand-slate py-2">{language === 'bn' ? 'সাজান:' : 'Sort by:'}</span>
                            <button onClick={() => setSortOrder('latest')} className={`px-4 py-2 text-sm font-semibold rounded-md ${sortOrder === 'latest' ? 'bg-brand-blue text-white' : 'bg-gray-700 text-brand-slate'}`}>
                                {language === 'bn' ? 'নতুন' : 'Latest'}
                            </button>
                            <button onClick={() => setSortOrder('oldest')} className={`px-4 py-2 text-sm font-semibold rounded-md ${sortOrder === 'oldest' ? 'bg-brand-blue text-white' : 'bg-gray-700 text-brand-slate'}`}>
                                {language === 'bn' ? 'পুরানো' : 'Oldest'}
                            </button>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    {currentProjects.length > 0 ? (
                        <>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {currentProjects.map((project) => (
                                    <div key={project.id}>
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        </>
                    ) : (
                        <div className="text-center py-20 bg-gray-800/30 rounded-lg">
                           <h3 className="text-2xl font-bold text-white">{language === 'bn' ? 'কোনো প্রজেক্ট পাওয়া যায়নি' : 'No Projects Found'}</h3>
                           <p className="text-brand-slate mt-2">{language === 'bn' ? 'অনুগ্রহ করে আপনার ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।' : 'Please adjust your filters and try again.'}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
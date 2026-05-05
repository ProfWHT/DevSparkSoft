import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import { BLOG_POSTS } from '../constants';
import Image from '../components/Image';
import { ArrowRightIcon } from '../components/icons/Icons';

const PageHeader: React.FC<{title: string; subtitle: string}> = ({title, subtitle}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <p className="mt-4 text-lg text-brand-slate max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-2 flex flex-col">
    <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
      <Image 
        src={post.coverImage} 
        alt={post.titleEn} 
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <div className="mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">{post.category}</span>
        <span className="text-brand-slate mx-2">•</span>
        <span className="text-xs text-brand-slate">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <h3 className="text-xl font-bold text-brand-light mb-3 flex-grow">{post.titleEn}</h3>
      <p className="text-sm text-brand-slate mb-4">{post.excerptEn}</p>
      <div className="mt-auto border-t border-gray-700 pt-4 flex justify-between items-center">
        <div className="flex items-center">
            <Link to="/about-ceo">
              <Image src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full mr-3" />
            </Link>
            <Link to="/about-ceo" className="text-sm text-brand-slate hover:text-brand-orange">{post.author.name}</Link>
        </div>
        <Link to={`/blog/${post.slug}`} className="text-sm font-semibold text-brand-blue hover:text-brand-orange flex items-center">
            Read More <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  </div>
);


const BlogPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights on technology, business strategy, and digital innovation from the DevSpark Soft IT team." 
      />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
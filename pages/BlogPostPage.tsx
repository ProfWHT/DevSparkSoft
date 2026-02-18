import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import type { Author } from '../types';
import Image from '../components/Image';

const formatContent = (content: string) => {
  // A simple markdown-to-HTML converter for the demo
  return content
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold text-brand-light mt-6 mb-2">${line.substring(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-brand-light mt-8 mb-4">${line.substring(3)}</h2>`;
      }
      if (line.startsWith('* ')) {
        return `<li class="ml-6 list-disc">${line.substring(2)}</li>`;
      }
      if (line.trim() === '') {
        return '';
      }
      return `<p class="mb-4">${line}</p>`;
    })
    .join('');
};

const AuthorBioBox: React.FC<{author: Author}> = ({ author }) => (
  <div className="mt-16 pt-8 border-t border-gray-700">
    <h3 className="text-xl font-bold text-brand-light mb-4">About the Author</h3>
    <div className="flex items-start bg-gray-800/50 p-6 rounded-lg">
      <Link to="/about-ceo" className="flex-shrink-0">
        <Image src={author.avatar} alt={author.name} className="w-20 h-20 rounded-full" />
      </Link>
      <div className="ml-6">
        <Link to="/about-ceo" className="text-2xl font-bold text-brand-light hover:text-brand-orange">{author.name}</Link>
        <p className="text-brand-blue font-semibold">{author.role}</p>
        <p className="text-brand-slate mt-2 text-sm">{author.bio}</p>
      </div>
    </div>
  </div>
);

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null; // or a loading/not found component
  }

  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <Link to="/blog" className="text-brand-blue hover:underline mb-4 inline-block">&larr; Back to all posts</Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">{post.titleEn}</h1>
            <div className="flex items-center text-brand-slate">
              <Link to="/about-ceo">
                <Image src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-4" />
              </Link>
              <div>
                <Link to="/about-ceo" className="hover:text-brand-orange">{post.author.name}</Link>
                <span className="mx-2">•</span>
                <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="mb-8">
            <Image src={post.coverImage} alt={post.coverAltEn} className="w-full aspect-video object-cover rounded-lg" />
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none text-brand-slate prose-h2:text-brand-light prose-h3:text-brand-light prose-strong:text-brand-light prose-a:text-brand-blue hover:prose-a:text-brand-orange">
            <div dangerouslySetInnerHTML={{ __html: formatContent(post.contentEn) }} />
          </article>

          {/* Author Bio */}
          <AuthorBioBox author={post.author} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
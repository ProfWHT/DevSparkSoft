import React, { useState } from 'react';
import { BLOG_POSTS, BLOG_AUTHOR } from '../constants';
import type { BlogPost } from '../types';

const AdminBlogEditorPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(BLOG_POSTS[0] || null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSelectPost = (slug: string) => {
    const post = BLOG_POSTS.find(p => p.slug === slug);
    setSelectedPost(post || null);
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Changes saved successfully! (Simulation)');
    }, 1500);
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-2">Blog Post Editor</h1>
      <p className="text-brand-slate mb-8">Select a post to edit its content. The author field is locked as per company policy.</p>

      {/* Post Selector */}
      <div className="mb-8">
        <label htmlFor="post-selector" className="block text-sm font-medium text-brand-slate mb-2">Select a Post to Edit</label>
        <select
          id="post-selector"
          value={selectedPost?.slug || ''}
          onChange={(e) => handleSelectPost(e.target.value)}
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue"
        >
          <option value="" disabled>-- Choose a post --</option>
          {BLOG_POSTS.map(post => (
            <option key={post.slug} value={post.slug}>{post.titleEn}</option>
          ))}
        </select>
      </div>

      {/* Editor Form */}
      {selectedPost ? (
        <div className="bg-gray-800/50 p-6 rounded-lg space-y-6">
          
          {/* Locked Author Field */}
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1">Author</label>
            <div className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-2 px-3 text-brand-slate flex items-center">
              <img src={BLOG_AUTHOR.avatar} alt={BLOG_AUTHOR.name} className="w-6 h-6 rounded-full mr-3" />
              <span>{BLOG_AUTHOR.name} (Fixed)</span>
            </div>
          </div>

          {/* Title Field */}
          <div>
            <label htmlFor="titleEn" className="block text-sm font-medium text-brand-slate mb-1">Title (English)</label>
            <input 
              type="text" 
              id="titleEn"
              defaultValue={selectedPost.titleEn}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          
          {/* Content Field */}
          <div>
            <label htmlFor="contentEn" className="block text-sm font-medium text-brand-slate mb-1">Content (English - Markdown)</label>
            <textarea
              id="contentEn"
              defaultValue={selectedPost.contentEn}
              rows={15}
              className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue font-mono text-sm"
            />
          </div>

          {/* Save Button */}
          <div>
            <button
              onClick={handleSaveChanges}
              disabled={isSaving}
              className="w-full flex items-center justify-center px-6 py-3 font-bold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>

        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800/30 rounded-lg">
          <p className="text-brand-slate">Please select a blog post from the dropdown above to begin editing.</p>
        </div>
      )}
    </div>
  );
};

export default AdminBlogEditorPage;
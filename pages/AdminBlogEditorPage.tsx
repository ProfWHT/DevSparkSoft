import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { BLOG_POSTS, BLOG_AUTHOR } from '../constants';
import type { BlogPost } from '../types';
import Image from '../components/Image';
import { ImageIcon } from '../components/icons/Icons';

const AdminBlogEditorPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(BLOG_POSTS[0] || null);
  const [formData, setFormData] = useState<Partial<BlogPost>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [newImageData, setNewImageData] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      setFormData({
        titleEn: selectedPost.titleEn,
        contentEn: selectedPost.contentEn,
        coverImage: selectedPost.coverImage,
      });
      setNewImageData(null);
    }
  }, [selectedPost]);

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

  const handleGenerateImage = async () => {
    if (!selectedPost || !process.env.API_KEY) {
      alert("Please select a post and ensure API_KEY is set.");
      return;
    }
    
    setIsGeneratingImage(true);
    setNewImageData(null);
    setIsCopied(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a clean modern tech illustration for a blog cover about "${selectedPost.titleEn}". Style: minimal, modern, flat/3D hybrid, no text, no logos, high contrast, 16:9 aspect ratio.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
      });

      let imagePartFound = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Url = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          setFormData(prev => ({ ...prev, coverImage: base64Url }));
          setNewImageData(base64Url);
          imagePartFound = true;
          break;
        }
      }

      if (!imagePartFound) {
        throw new Error("No image data was returned from the API.");
      }
    } catch (e) {
      console.error(e);
      alert(`An error occurred: ${e.message}`);
    } finally {
      setIsGeneratingImage(false);
    }
  };
  
  const handleCopyImageData = () => {
      if (newImageData) {
          navigator.clipboard.writeText(newImageData);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
      }
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-2">Blog Post Editor</h1>
      <p className="text-brand-slate mb-8">Select a post to edit content or generate a new AI cover image.</p>

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
              <Image src={BLOG_AUTHOR.avatar} alt={BLOG_AUTHOR.name} className="w-6 h-6 rounded-full mr-3" />
              <span>{BLOG_AUTHOR.name} (Fixed)</span>
            </div>
          </div>

          {/* Cover Image Section */}
           <div>
            <label className="block text-sm font-medium text-brand-slate mb-1">Cover Image</label>
            <div className="mt-2 p-4 bg-gray-900/50 rounded-lg">
                <Image 
                    src={formData.coverImage || ''}
                    alt="Cover image preview"
                    className="w-full h-auto aspect-video object-contain rounded-md mb-4 bg-gray-800"
                />
                <button 
                    onClick={handleGenerateImage} 
                    disabled={isGeneratingImage} 
                    className="w-full flex items-center justify-center px-6 py-3 font-bold text-white bg-brand-orange rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    {isGeneratingImage ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : (
                        <>
                            <ImageIcon className="h-5 w-5 mr-2" />
                            Generate New AI Image
                        </>
                    )}
                </button>
                {newImageData && (
                    <div className="mt-4">
                        <p className="text-sm text-yellow-300 mb-2 text-center">
                          New image generated! Copy the text below and update the <code className="bg-gray-700 px-1 rounded">'coverImage'</code> field in your <code className="bg-gray-700 px-1 rounded">constants.ts</code> file.
                        </p>
                        <div className="relative">
                            <textarea 
                                readOnly 
                                value={newImageData}
                                rows={3}
                                className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-brand-slate text-xs font-mono pr-20"
                            />
                            <button onClick={handleCopyImageData} className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold bg-gray-600 text-brand-light rounded-md hover:bg-gray-500">
                                {isCopied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>
                )}
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
                  Saving Text Changes...
                </>
              ) : (
                'Save Text Changes'
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
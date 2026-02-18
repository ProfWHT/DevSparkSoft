import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { getBlogPostGeneratorPrompt } from '../ai/prompts';
import { RocketIcon } from '../components/icons/Icons';

const AdminBlogGeneratorPage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedJson, setGeneratedJson] = useState('');
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic to generate a blog post.');
      return;
    }
    
    if (!process.env.API_KEY) {
        setError("API_KEY environment variable not set. This tool requires a valid Google AI API key.");
        return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedJson('');
    setIsCopied(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = getBlogPostGeneratorPrompt({
        topic: topic,
        primaryLanguage: 'Bangla',
        secondaryLanguage: 'English'
      });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });

      const text = response.text;
      if (text) {
        // Clean the response to ensure it's valid JSON
        const cleanedJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        // Format the JSON for display
        const parsedJson = JSON.parse(cleanedJson);
        setGeneratedJson(JSON.stringify(parsedJson, null, 2));
      } else {
        throw new Error('Received an empty response from the API.');
      }
      
    } catch (e) {
      console.error(e);
      setError(`An error occurred while generating the post. Please check the console for details. Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedJson) {
      navigator.clipboard.writeText(generatedJson);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-2">AI Blog Post Generator</h1>
      <p className="text-brand-slate mb-8">Enter a topic, and the AI will generate a complete, bilingual, SEO-optimized blog post in JSON format.</p>
      
       <div className="mb-6 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg text-center">
        <p className="text-yellow-300 font-semibold">Note: The author for all generated posts is fixed to 'Walid Hasan Taksid' as per company policy.</p>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The Future of AI in Bangladesh'"
            className="flex-grow bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex items-center justify-center px-6 py-3 font-bold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              <>
                <RocketIcon className="h-5 w-5 mr-2" />
                Generate Article
              </>
            )}
          </button>
        </div>
        {error && <p className="mt-4 text-red-400">{error}</p>}
      </div>

      {generatedJson && (
        <div className="mt-8 bg-gray-900/70 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Generated JSON Output</h2>
            <button
                onClick={handleCopy}
                className="px-4 py-2 text-sm font-semibold bg-gray-700 text-brand-light rounded-md hover:bg-gray-600 transition-colors"
            >
                {isCopied ? 'Copied!' : 'Copy JSON'}
            </button>
          </div>
          <pre className="w-full text-sm text-brand-light bg-gray-800 p-4 rounded-md overflow-x-auto max-h-[60vh]">
            <code>
              {generatedJson}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default AdminBlogGeneratorPage;
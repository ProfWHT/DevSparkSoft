import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ImageIcon } from '../components/icons/Icons';

const AdminImageGeneratorPage: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [altText, setAltText] = useState<{ bn: string; en: string } | null>(null);
  const [error, setError] = useState('');

  const [isCopiedBn, setIsCopiedBn] = useState(false);
  const [isCopiedEn, setIsCopiedEn] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic to generate an image.');
      return;
    }
    
    if (!process.env.API_KEY) {
      setError("API_KEY environment variable not set. This tool requires a valid Google AI API key.");
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedImage(null);
    setAltText(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a clean modern tech illustration for a blog cover about "${topic}".
Style: minimal, modern, flat/3D hybrid, no text, no logos, high contrast.
The image MUST have a 16:9 aspect ratio.

After generating the image, provide a JSON object with descriptive alt text for this image in both English and Bangla.
The JSON object must be the only text in this part of the response.
JSON structure:
{
  "altEn": "...",
  "altBn": "..."
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [{ text: prompt }] },
      });

      let imagePartFound = false;
      let textPartFound = false;

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageData = part.inlineData.data;
          setGeneratedImage(`data:${part.inlineData.mimeType};base64,${base64ImageData}`);
          imagePartFound = true;
        } else if (part.text) {
          const cleanedJson = part.text.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsedAltText = JSON.parse(cleanedJson);
          setAltText({ bn: parsedAltText.altBn, en: parsedAltText.altEn });
          textPartFound = true;
        }
      }

      if (!imagePartFound) {
        throw new Error('Image data was not found in the API response.');
      }
      if (!textPartFound) {
        // Fallback if alt text is missing
        setAltText({ en: `A modern tech illustration about ${topic}`, bn: `${topic} সম্পর্কিত একটি আধুনিক প্রযুক্তি চিত্র।`});
      }

    } catch (e) {
      console.error(e);
      setError(`An error occurred while generating the image. Please try again. Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, lang: 'bn' | 'en') => {
    navigator.clipboard.writeText(text);
    if (lang === 'bn') {
      setIsCopiedBn(true);
      setTimeout(() => setIsCopiedBn(false), 2000);
    } else {
      setIsCopiedEn(true);
      setTimeout(() => setIsCopiedEn(false), 2000);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-3xl font-bold text-white mb-2">AI Cover Image Generator</h1>
      <p className="text-brand-slate mb-8">Describe a topic, and the AI will generate a unique, modern illustration for your blog post cover.</p>
      
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The future of AI in Bangladesh'"
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
                <ImageIcon className="h-5 w-5 mr-2" />
                Generate Illustration
              </>
            )}
          </button>
        </div>
        {error && <p className="mt-4 text-red-400">{error}</p>}
      </div>

      {isLoading && (
        <div className="mt-8 text-center">
            <p className="text-brand-slate">Generating your masterpiece, please wait a moment...</p>
        </div>
      )}

      {generatedImage && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-white mb-4">Generated Image</h2>
          <div className="bg-gray-900/70 p-4 rounded-lg">
            <img src={generatedImage} alt={altText?.en || 'Generated illustration'} className="w-full h-auto aspect-video object-contain rounded-md" />
          </div>

          {altText && (
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {/* English Alt Text */}
              <div>
                  <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-white">Alt Text (English)</h3>
                      <button onClick={() => handleCopy(altText.en, 'en')} className="px-3 py-1 text-xs font-semibold bg-gray-700 text-brand-light rounded-md hover:bg-gray-600 transition-colors">
                        {isCopiedEn ? 'Copied!' : 'Copy'}
                      </button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md text-brand-slate text-sm">
                      {altText.en}
                  </div>
              </div>
              {/* Bangla Alt Text */}
              <div>
                  <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold text-white">Alt Text (Bangla)</h3>
                       <button onClick={() => handleCopy(altText.bn, 'bn')} className="px-3 py-1 text-xs font-semibold bg-gray-700 text-brand-light rounded-md hover:bg-gray-600 transition-colors">
                        {isCopiedBn ? 'Copied!' : 'Copy'}
                      </button>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md text-brand-slate text-sm">
                      {altText.bn}
                  </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminImageGeneratorPage;
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { getBlogPostGeneratorPrompt } from '../ai/prompts';
import { DatabaseIcon } from '../components/icons/Icons';
import type { BlogPost } from '../types';

const CATEGORIES = [
  "Web Development", "Software Development", "Mobile App Development", "UI/UX Design", "Digital Marketing", "E-commerce", "SEO", "Cyber Security", "IT Tips for Bangladesh", "Business Technology"
];
const COVER_IMAGE_FALLBACK = "/images/placeholders/blog-cover.webp"; // A fictional path as requested

type LogEntry = {
    type: 'info' | 'success' | 'error';
    message: string;
};

const AdminBlogSeederPage: React.FC = () => {
    const [count, setCount] = useState<number>(5);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStatus, setCurrentStatus] = useState('');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [finalJson, setFinalJson] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState(false);
    const generatedPostsRef = useRef<BlogPost[]>([]);

    const addLog = (type: LogEntry['type'], message: string) => {
        setLogs(prev => [...prev, { type, message }]);
    };
    
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const handleGenerate = async () => {
        if (!process.env.API_KEY) {
            addLog('error', "API_KEY environment variable not set. This tool requires a valid Google AI API key.");
            return;
        }

        setIsLoading(true);
        setProgress(0);
        setLogs([]);
        setFinalJson(null);
        generatedPostsRef.current = [];
        
        try {
            // == STEP 1: GENERATE UNIQUE TOPICS ==
            setCurrentStatus(`Generating ${count} unique blog post topics...`);
            addLog('info', `Requesting ${count} unique topics from the AI.`);
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const topicPrompt = `Generate a list of ${count} unique, engaging blog post titles for a tech company in Bangladesh. The topics should be diverse and cover the following categories: ${CATEGORIES.join(', ')}. Return the list as a JSON array of strings. Example: ["My First Topic", "My Second Topic"]`;
            const topicResponse = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: topicPrompt });
            const topicsText = topicResponse.text?.replace(/```json/g, '').replace(/```/g, '').trim();
            if (!topicsText) throw new Error("Failed to generate topics.");
            
            const topics: string[] = JSON.parse(topicsText);
            if (topics.length !== count) addLog('info', `AI returned ${topics.length} topics. Will proceed with this count.`);
            addLog('success', `Successfully generated ${topics.length} unique topics.`);
            
            // == STEP 2: GENERATE POSTS & IMAGES IN BATCHES ==
            for (let i = 0; i < topics.length; i++) {
                const topic = topics[i];
                const progressPercentage = Math.round(((i + 1) / topics.length) * 100);
                setProgress(progressPercentage);
                setCurrentStatus(`[${i+1}/${topics.length}] Processing: "${topic}"`);

                try {
                    // --- Generate Blog Content ---
                    addLog('info', `[${i+1}] Generating article content...`);
                    const postPrompt = getBlogPostGeneratorPrompt({ topic, primaryLanguage: 'Bangla', secondaryLanguage: 'English' });
                    const postResponse = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: postPrompt });
                    const postText = postResponse.text?.replace(/```json/g, '').replace(/```/g, '').trim();
                    if (!postText) throw new Error("Article generation returned empty response.");
                    
                    let postData: Omit<BlogPost, 'id' | 'publishedDate' | 'category' | 'coverImage' | 'tags'> & { tags?: string[] } = JSON.parse(postText);

                    // --- Generate Cover Image ---
                    addLog('info', `[${i+1}] Generating cover image...`);
                    const imagePrompt = `Generate a clean modern tech illustration for a blog cover about "${topic}". Keywords: ${postData.imageKeywords.join(', ')}. Style: minimal, modern, flat/3D hybrid, no text, no logos, high contrast, 16:9.`;
                    const imageResponse = await ai.models.generateContent({ model: 'gemini-2.5-flash-image', contents: { parts: [{ text: imagePrompt }] } });
                    
                    let coverImage = COVER_IMAGE_FALLBACK;
                    let foundImage = false;
                    for (const part of imageResponse.candidates[0].content.parts) {
                        if (part.inlineData) {
                            coverImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                            foundImage = true;
                            break;
                        }
                    }
                    if(foundImage) addLog('success', `[${i+1}] Successfully generated cover image.`);
                    else addLog('info', `[${i+1}] Failed to generate image, using fallback.`);

                    // --- Assemble Final Post Object ---
                    const ninetyDaysAgo = new Date();
                    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
                    const randomDate = new Date(ninetyDaysAgo.getTime() + Math.random() * (new Date().getTime() - ninetyDaysAgo.getTime()));

                    const finalPost: BlogPost = {
                        ...postData,
                        id: (Date.now() + i).toString(),
                        slug: postData.slug + '-' + Date.now(), // Ensure unique slug
                        category: CATEGORIES[i % CATEGORIES.length],
                        tags: postData.tags || [],
                        coverImage,
                        publishedDate: randomDate.toISOString().split('T')[0],
                    };

                    generatedPostsRef.current.push(finalPost);
                    addLog('success', `[${i+1}] Successfully created post: "${finalPost.titleEn}"`);
                    
                    await sleep(1000); // Prevent hitting rate limits

                } catch (innerError) {
                    addLog('error', `[${i+1}] Failed to process topic "${topic}": ${innerError.message}`);
                }
            }

            setFinalJson(JSON.stringify(generatedPostsRef.current, null, 2));
            addLog('success', `🎉 Seeding complete! ${generatedPostsRef.current.length} posts were created.`);

        } catch (e) {
            addLog('error', `A critical error occurred: ${e.message}`);
        } finally {
            setIsLoading(false);
            setCurrentStatus('Process Finished.');
        }
    };
    
    const handleCopy = () => {
        if (finalJson) {
          navigator.clipboard.writeText(finalJson);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        }
    };

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-white mb-2">AI Blog Seeder</h1>
            <p className="text-brand-slate mb-8">Bulk-generate unique blog posts and cover images to populate your website's database.</p>
            
            <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg text-red-300 mb-6">
                <p className="font-bold">⚠️ Warning:</p>
                <p className="text-sm">This tool performs a large number of API calls ({count} articles + {count} images = {count * 2} total calls). This can be slow and may incur costs depending on your API usage. Start with a small number.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="number"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                        className="w-full md:w-48 bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="flex-grow flex items-center justify-center px-6 py-3 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                    >
                         {isLoading ? 'Generating...' : <><DatabaseIcon className="h-5 w-5 mr-2" /> Start Seeding</>}
                    </button>
                </div>
            </div>
            
            {isLoading && (
                 <div className="mt-8">
                    <p className="text-lg font-semibold text-brand-light mb-2">{currentStatus}</p>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                        <div className="bg-brand-blue h-4 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                 </div>
            )}
            
            <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Generation Log</h3>
                <div className="bg-gray-900/70 p-4 rounded-lg max-h-96 overflow-y-auto text-sm font-mono space-y-1">
                    {logs.map((log, i) => (
                        <p key={i} className={
                            log.type === 'success' ? 'text-green-400' :
                            log.type === 'error' ? 'text-red-400' : 'text-brand-slate'
                        }>
                           {`[${new Date().toLocaleTimeString()}] ${log.message}`}
                        </p>
                    ))}
                </div>
            </div>
            
            {finalJson && (
                 <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                       <h2 className="text-xl font-bold text-white">Final JSON Output ({generatedPostsRef.current.length} Posts)</h2>
                       <button onClick={handleCopy} className="px-4 py-2 text-sm font-semibold bg-gray-700 text-brand-light rounded-md hover:bg-gray-600">
                          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
                       </button>
                    </div>
                    <p className="text-brand-slate mb-4">Copy this entire array and paste it into the <code className="bg-gray-700 px-1 rounded">BLOG_POSTS</code> constant in your <code className="bg-gray-700 px-1 rounded">constants.ts</code> file.</p>
                    <textarea 
                        readOnly
                        value={finalJson}
                        className="w-full h-[60vh] bg-gray-800 p-4 rounded-md text-xs font-mono text-brand-light border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                 </div>
            )}
        </div>
    );
};

export default AdminBlogSeederPage;
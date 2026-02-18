import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { getPortfolioTopicPrompt, getPortfolioDetailPrompt, PORTFOLIO_CATEGORIES } from '../ai/portfolioPrompts';
import { DatabaseIcon } from '../components/icons/Icons';
import type { PortfolioProject } from '../types';

type LogEntry = {
    type: 'info' | 'success' | 'error';
    message: string;
};

const BATCH_SIZE = 5; // Generate 5 projects at a time to avoid overwhelming the API/browser
const IMAGE_FALLBACK_THUMB = 'https://via.placeholder.com/1280x720/0a192f/ccd6f6?text=DevSpark+Project';
const IMAGE_FALLBACK_GALLERY = 'https://via.placeholder.com/800x600/0a192f/ccd6f6?text=DevSpark+Gallery';

const AdminPortfolioSeederPage: React.FC = () => {
    const [count, setCount] = useState<number>(1199);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentStatus, setCurrentStatus] = useState('');
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [finalJson, setFinalJson] = useState<string | null>(null);
    const [isCopied, setIsCopied] = useState(false);
    const generatedProjectsRef = useRef<PortfolioProject[]>([]);

    const addLog = (type: LogEntry['type'], message: string) => {
        setLogs(prev => [ { type, message }, ...prev]);
    };

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const generateImage = async (ai: GoogleGenAI, prompt: string, fallback: string): Promise<string> => {
        try {
            const response = await ai.models.generateContent({ model: 'gemini-2.5-flash-image', contents: { parts: [{ text: prompt }] } });
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                }
            }
            throw new Error("No image data found in response.");
        } catch (e) {
            addLog('error', `Image generation failed: ${e.message}. Using fallback.`);
            return fallback;
        }
    };

    const handleGenerate = async () => {
        if (!process.env.API_KEY) {
            addLog('error', "API_KEY environment variable not set.");
            return;
        }

        setIsLoading(true);
        setProgress(0);
        setLogs([]);
        setFinalJson(null);
        generatedProjectsRef.current = [];
        
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // == STEP 1: GENERATE ALL TOPICS AT ONCE ==
            setCurrentStatus(`Generating ${count} unique project topics...`);
            addLog('info', `Requesting ${count} unique topics from the AI.`);
            const topicPrompt = getPortfolioTopicPrompt(count);
            const topicResponse = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: topicPrompt });
            const topicsText = topicResponse.text?.replace(/```json/g, '').replace(/```/g, '').trim();
            if (!topicsText) throw new Error("Failed to generate topics.");
            
            const allTopics: string[] = JSON.parse(topicsText);
            addLog('success', `Successfully generated ${allTopics.length} unique topics.`);
            
            // == STEP 2: PROCESS PROJECTS IN BATCHES ==
            for (let i = 0; i < allTopics.length; i++) {
                const topic = allTopics[i];
                const progressPercentage = Math.round(((i + 1) / allTopics.length) * 100);
                setCurrentStatus(`[${i + 1}/${allTopics.length}] Processing: "${topic}"`);

                try {
                    // --- Generate Project Details ---
                    addLog('info', `[${i+1}] Generating project details...`);
                    const category = PORTFOLIO_CATEGORIES[i % PORTFOLIO_CATEGORIES.length];
                    const detailPrompt = getPortfolioDetailPrompt(topic, category);
                    const detailResponse = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: detailPrompt });
                    const detailText = detailResponse.text?.replace(/```json/g, '').replace(/```/g, '').trim();
                    if (!detailText) throw new Error("Project detail generation returned empty response.");
                    
                    const projectDetails = JSON.parse(detailText);

                    // --- Generate Images ---
                    addLog('info', `[${i+1}] Generating thumbnail...`);
                    const thumbnailPrompt = `A professional, clean, modern tech illustration for a project titled "${topic}". Style: minimal, flat/3D hybrid, no text, 16:9 aspect ratio.`;
                    const thumbnailUrl = await generateImage(ai, thumbnailPrompt, IMAGE_FALLBACK_THUMB);

                    addLog('info', `[${i+1}] Generating gallery images...`);
                    const galleryImages = await Promise.all(
                        Array.from({ length: 3 + Math.floor(Math.random() * 4) }).map((_, idx) =>
                            generateImage(ai, `A screenshot or mockup related to "${topic}". Image ${idx+1}. Clean UI, modern tech style.`, IMAGE_FALLBACK_GALLERY)
                        )
                    );
                    addLog('success', `[${i+1}] Generated ${galleryImages.length} gallery images.`);
                    
                    // --- Assemble Final Project Object ---
                    const startDate = new Date('2018-01-01').getTime();
                    const endDate = new Date('2026-12-31').getTime();
                    const randomDate = new Date(startDate + Math.random() * (endDate - startDate));

                    const finalProject: PortfolioProject = {
                        id: (Date.now() + i).toString(),
                        slug: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '-' + (Date.now() + i),
                        ...projectDetails,
                        year: randomDate.getFullYear(),
                        category,
                        thumbnailUrl,
                        galleryImages,
                        isFeatured: false, // Will be set later
                        status: 'Published',
                        createdAt: randomDate.toISOString(),
                    };
                    generatedProjectsRef.current.push(finalProject);
                    addLog('success', `[${i+1}] Successfully created project: "${finalProject.titleEn}"`);
                    setProgress(progressPercentage);

                } catch (innerError) {
                    addLog('error', `[${i+1}] Failed to process topic "${topic}": ${innerError.message}`);
                }
                await sleep(500); // Small delay
            }
            
            // == STEP 3: ASSIGN FEATURED PROJECTS ==
            addLog('info', "Randomly assigning 30 featured projects...");
            const projects = generatedProjectsRef.current;
            for(let i = 0; i < 30 && i < projects.length; i++) {
                const randomIndex = Math.floor(Math.random() * projects.length);
                if (!projects[randomIndex].isFeatured) {
                    projects[randomIndex].isFeatured = true;
                } else {
                    i--; // try again
                }
            }

            setFinalJson(JSON.stringify(projects, null, 2));
            addLog('success', `🎉 Seeding complete! ${projects.length} projects were created.`);

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
            <h1 className="text-3xl font-bold text-white mb-2">AI Portfolio Seeder</h1>
            <p className="text-brand-slate mb-8">Bulk-generate portfolio projects with AI-powered content and images.</p>
            
            <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg text-red-300 mb-6">
                <p className="font-bold">⚠️ Warning:</p>
                <p className="text-sm">This is a very intensive process. Generating {count} projects requires approx. {count} text generations and {count * 4} image generations. This will take a long time and consume significant API quota. Start with a small number like 5 to test.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-4">
                    <input
                        type="number"
                        value={count}
                        onChange={(e) => setCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                        className="w-full md:w-48 bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-brand-light"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading}
                        className="flex-grow flex items-center justify-center px-6 py-3 font-bold text-white bg-teal-600 rounded-md hover:bg-teal-700 disabled:bg-gray-600"
                    >
                         {isLoading ? 'Generating...' : <><DatabaseIcon className="h-5 w-5 mr-2" /> Start Seeding</>}
                    </button>
                </div>
            </div>
            
            {isLoading && (
                 <div className="mt-8">
                    <p className="text-lg font-semibold text-brand-light mb-2">{currentStatus}</p>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                        <div className="bg-brand-blue h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                 </div>
            )}
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4">Generation Log</h3>
                    <div className="bg-gray-900/70 p-4 rounded-lg h-96 overflow-y-auto text-sm font-mono space-y-1 flex flex-col-reverse">
                        <div>
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
                </div>
                {finalJson && (
                    <div className="md:col-span-1">
                        <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-white">Final Output</h2>
                        <button onClick={handleCopy} className="px-4 py-2 text-sm font-semibold bg-gray-700 text-brand-light rounded-md hover:bg-gray-600">
                            {isCopied ? 'Copied!' : 'Copy JSON'}
                        </button>
                        </div>
                        <p className="text-brand-slate mb-4 text-sm">Copy this array and paste it into the <code className="bg-gray-700 px-1 rounded">PORTFOLIO_PROJECTS</code> constant in your <code className="bg-gray-700 px-1 rounded">data/portfolio.ts</code> file.</p>
                        <textarea 
                            readOnly
                            value={`Generated ${generatedProjectsRef.current.length} projects.`}
                            className="w-full h-80 bg-gray-800 p-4 rounded-md text-xs font-mono text-brand-light border border-gray-700"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPortfolioSeederPage;
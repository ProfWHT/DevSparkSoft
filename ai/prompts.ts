interface PromptParams {
  topic: string;
  primaryLanguage: 'Bangla' | 'English';
  secondaryLanguage: 'Bangla' | 'English';
}

export const getBlogPostGeneratorPrompt = (params: PromptParams): string => {
  const { topic, primaryLanguage, secondaryLanguage } = params;

  return `
You are an expert SEO Content Architect and a professional creative writer for a tech company in Bangladesh called "DevSpark Soft IT". Your audience includes business owners, tech enthusiasts, and students in Bangladesh.

Your task is to write a high-quality, original, and SEO-optimized blog post on the given topic. The post must be bilingual, with a comprehensive version in the primary language and a concise summary in the secondary language.

**Topic:** "${topic}"
**Primary Language:** ${primaryLanguage}
**Secondary Language:** ${secondaryLanguage}

**Strict Instructions:**
1.  **Fixed Author:** The author for all blog posts is PERMANENTLY FIXED. You MUST use the following author details in your JSON output. Do NOT deviate.
    *   **Name:** "Walid Hasan Taksid"
    *   **Avatar URL:** "https://i.ibb.co/1ttwWTgw/IMG-7243.jpg"
    *   **Role:** "Owner & CEO"
    *   **Bio:** "Walid Hasan Taksid is the Owner & CEO of DevSpark Soft IT, a Software Engineer specialized in NodeJS and modern web technologies."
2.  **Originality is KEY:** Do NOT copy or rewrite from any single source. Generate a completely original article with a unique structure and outline. Use varied sentence structures and avoid repetitive phrases.
3.  **Bilingual Content:**
    - The content for the primary language (${primaryLanguage}) must be detailed, well-structured, and between 800-1200 words.
    - The content for the secondary language (${secondaryLanguage}) must be a concise, engaging summary of the main points, between 300-500 words.
4.  **Formatting:** Use Markdown for the content fields (\`contentBn\` and \`contentEn\`). Use \`##\` for H2 headings and \`###\` for H3 headings. Use bullet points (\`*\`) for lists.
5.  **Internal Links:** Naturally integrate at least two internal links within the content. Use the exact markdown format: \`[link text](/services)\` and \`[link text](/contact)\`.
6.  **SEO Optimization:** The titles, descriptions, and content should be optimized for search engines. The meta titles should be compelling and under 60 characters. Meta descriptions should be concise and under 160 characters.
7.  **Slug:** Generate a clean, URL-friendly slug in English based on the English title. Use lowercase letters and hyphens only.
8.  **Image Keywords:** Provide 3-4 relevant, descriptive keywords that can be used to find stock photos or generate AI images for the article. The first keyword should be for the cover image.
9.  **Output Format:** Your final output MUST be a single, valid JSON object. Do not include any text, notes, or markdown formatting outside of the JSON object itself. Just the raw JSON.

**JSON Output Structure:**
{
  "author": {
    "name": "Walid Hasan Taksid",
    "avatar": "https://i.ibb.co/1ttwWTgw/IMG-7243.jpg",
    "role": "Owner & CEO",
    "bio": "Walid Hasan Taksid is the Owner & CEO of DevSpark Soft IT, a Software Engineer specialized in NodeJS and modern web technologies."
  },
  "titleBn": "...",
  "titleEn": "...",
  "slug": "kebab-case-english-slug-here",
  "excerptBn": "Bangla excerpt (1-2 sentences).",
  "excerptEn": "English excerpt (1-2 sentences).",
  "contentBn": "Full article in Bangla (800-1200 words) using Markdown for formatting. Must include headings (##, ###), paragraphs, and bullet lists. Must include internal links to /services and /contact.",
  "contentEn": "Concise summary in English (300-500 words) using Markdown. Highlight the key takeaways.",
  "faqBn": [
    {"q": "Relevant question in Bangla?", "a": "Helpful answer in Bangla."},
    {"q": "Another relevant question in Bangla?", "a": "Another helpful answer in Bangla."},
    {"q": "A third question in Bangla?", "a": "A third helpful answer in Bangla."}
  ],
  "faqEn": [
    {"q": "Relevant question in English?", "a": "Helpful answer in English."},
    {"q": "Another relevant question in English?", "a": "Another helpful answer in English."},
    {"q": "A third question in English?", "a": "A third helpful answer in English."}
  ],
  "seo": {
    "metaTitleBn": "Compelling Bangla meta title (under 60 chars).",
    "metaTitleEn": "Compelling English meta title (under 60 chars).",
    "metaDescBn": "Engaging Bangla meta description (under 160 chars).",
    "metaDescEn": "Engaging English meta description (under 160 chars)."
  },
  "imageKeywords": ["main cover image keyword", "supporting image keyword 1", "supporting image keyword 2"],
  "coverAltBn": "Descriptive alt text in Bangla for the cover image.",
  "coverAltEn": "Descriptive alt text in English for the cover image."
}
`;
};
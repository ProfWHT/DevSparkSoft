export const PORTFOLIO_CATEGORIES = [
  "Web Development", "Software Development", "Mobile App", "UI/UX Design", "Digital Marketing", "E-commerce", "Branding", "SEO", "IT Support", "Others"
];

export const getPortfolioTopicPrompt = (count: number): string => {
  return `
You are a creative director for a top-tier IT agency in Bangladesh called "DevSpark Soft IT".
Your task is to generate a list of ${count} unique, realistic, and engaging project titles that this agency might have completed.
Distribute the titles across the following categories: ${PORTFOLIO_CATEGORIES.join(', ')}.
The titles should sound professional and plausible.

**Strict Instructions:**
1.  Generate exactly ${count} titles.
2.  The output MUST be a valid JSON array of strings. Do not include any other text, notes, or markdown.
3.  Ensure the titles are unique and diverse.

**Example Output:**
[
  "Enterprise CRM Software for a Leading Bank",
  "E-commerce Platform for a National Fashion Brand",
  "AI-Powered Logistics Management System",
  "Official Mobile Banking App for City Bank",
  "Complete Rebranding for a Tech Startup",
  "National SEO Campaign for a Tourism Company"
]
`;
};

export const getPortfolioDetailPrompt = (title: string, category: string): string => {
  return `
You are an expert project manager and content writer for a tech company in Bangladesh called "DevSpark Soft IT".
Your task is to generate detailed, bilingual project information for a completed project with the title: "${title}".
The primary language is Bangla and the secondary language is English.

**Project Title:** "${title}"
**Project Category:** "${category}"

**Strict Instructions:**
1.  **Bilingual Content:** Create content for both Bangla (bn) and English (en).
2.  **Summary:** Write a concise 2-3 sentence summary for both languages.
3.  **Description (Bangla):** Write a detailed description in Bangla using Markdown. It MUST follow the "Problem → Solution → Result" format using \`##\` headings: \`## চ্যালেঞ্জ\`, \`## সমাধান\`, \`## ফলাফল\`. The description should be professional and elaborate on the project's goals and outcomes.
4.  **Description (English):** Write a short, single-paragraph summary of the project in English.
5.  **Tech Stack:** Generate a list of 3-8 relevant and realistic technologies for this project.
6.  **Client Name:** Invent a realistic but fictional client name (e.g., "Apex Group", "Shonar Bangla Textiles").
7.  **Output Format:** Your final output MUST be a single, valid JSON object. Do not include any text, notes, or markdown formatting outside of the JSON object itself.

**JSON Output Structure:**
{
  "titleBn": "...",
  "titleEn": "${title}",
  "summaryBn": "...",
  "summaryEn": "...",
  "descriptionBn": "## চ্যালেঞ্জ\\n...\\n\\n## সমাধান\\n...\\n\\n## ফলাফল\\n...",
  "descriptionEn": "...",
  "techStack": ["React", "Node.js", "MongoDB", "..."],
  "clientName": "..."
}
`;
};
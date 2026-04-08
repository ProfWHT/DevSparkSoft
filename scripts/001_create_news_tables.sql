-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create news articles table
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  category_id UUID REFERENCES categories(id),
  is_featured BOOLEAN DEFAULT FALSE,
  is_breaking BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Public read access for categories
CREATE POLICY "Allow public read access to categories" ON categories
  FOR SELECT USING (true);

-- Public read access for news
CREATE POLICY "Allow public read access to news" ON news
  FOR SELECT USING (true);

-- Admin policies (using service role for admin operations)
CREATE POLICY "Allow authenticated users to manage categories" ON categories
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to manage news" ON news
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert default categories
INSERT INTO categories (name, name_bn, slug) VALUES
  ('Politics', 'রাজনীতি', 'politics'),
  ('Crime', 'অপরাধ', 'crime'),
  ('Sports', 'খেলাধুলা', 'sports'),
  ('Entertainment', 'বিনোদন', 'entertainment'),
  ('National', 'জাতীয়', 'national'),
  ('International', 'আন্তর্জাতিক', 'international'),
  ('Local', 'স্থানীয়', 'local'),
  ('Business', 'ব্যবসা', 'business'),
  ('Technology', 'প্রযুক্তি', 'technology'),
  ('Health', 'স্বাস্থ্য', 'health')
ON CONFLICT (slug) DO NOTHING;

-- Insert sample Morrelganj news
INSERT INTO news (title, slug, excerpt, content, category_id, is_featured, is_breaking, image_url) VALUES
(
  'মোড়েলগঞ্জে নতুন সড়ক নির্মাণ কাজ শুরু',
  'morrelganj-new-road-construction',
  'মোড়েলগঞ্জ উপজেলায় নতুন সড়ক নির্মাণ প্রকল্পের কাজ শুরু হয়েছে। এই প্রকল্পে প্রায় ২০ কিলোমিটার সড়ক নির্মাণ করা হবে।',
  'মোড়েলগঞ্জ উপজেলায় নতুন সড়ক নির্মাণ প্রকল্পের কাজ শুরু হয়েছে। এই প্রকল্পে প্রায় ২০ কিলোমিটার সড়ক নির্মাণ করা হবে। স্থানীয় জনপ্রতিনিধিরা জানান, এই সড়ক নির্মাণ হলে এলাকার যোগাযোগ ব্যবস্থার উন্নতি হবে এবং ব্যবসা-বাণিজ্যে গতি আসবে। উপজেলা নির্বাহী অফিসার এই প্রকল্পের উদ্বোধন করেন।',
  (SELECT id FROM categories WHERE slug = 'local'),
  true,
  true,
  'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800'
),
(
  'বাগেরহাটে মাছ চাষে বিপ্লব',
  'bagerhat-fish-farming-revolution',
  'বাগেরহাট জেলায় মাছ চাষে নতুন প্রযুক্তি ব্যবহার করে কৃষকরা সফলতা পাচ্ছেন।',
  'বাগেরহাট জেলায় মাছ চাষে নতুন প্রযুক্তি ব্যবহার করে কৃষকরা সফলতা পাচ্ছেন। বিশেষ করে চিংড়ি ও কাঁকড়া চাষে এই এলাকার কৃষকরা দেশের মধ্যে অগ্রণী ভূমিকা পালন করছেন। সরকারি পৃষ্ঠপোষকতায় এই খাতে আরও উন্নতি হবে বলে আশা করা হচ্ছে।',
  (SELECT id FROM categories WHERE slug = 'local'),
  true,
  false,
  'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800'
),
(
  'মোড়েলগঞ্জে শিক্ষা উন্নয়ন কর্মসূচি',
  'morrelganj-education-development',
  'মোড়েলগঞ্জ উপজেলায় নতুন শিক্ষা উন্নয়ন কর্মসূচি ঘোষণা করা হয়েছে।',
  'মোড়েলগঞ্জ উপজেলায় নতুন শিক্ষা উন্নয়ন কর্মসূচি ঘোষণা করা হয়েছে। এই কর্মসূচির আওতায় ১০টি নতুন স্কুল নির্মাণ এবং বিদ্যমান স্কুলগুলোর অবকাঠামো উন্নয়ন করা হবে। শিক্ষামন্ত্রী এই কর্মসূচির ঘোষণা দেন।',
  (SELECT id FROM categories WHERE slug = 'local'),
  false,
  false,
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'
),
(
  'সুন্দরবনে পর্যটন মৌসুম শুরু',
  'sundarbans-tourism-season-starts',
  'সুন্দরবনে নতুন পর্যটন মৌসুম শুরু হয়েছে। এবার পর্যটকদের জন্য নতুন প্যাকেজ ঘোষণা করা হয়েছে।',
  'সুন্দরবনে নতুন পর্যটন মৌসুম শুরু হয়েছে। এবার পর্যটকদের জন্য নতুন প্যাকেজ ঘোষণা করা হয়েছে। বন বিভাগ জানিয়েছে, এই মৌসুমে বিশেষ নিরাপত্তা ব্যবস্থা নেওয়া হয়েছে। পর্যটকরা এখন অনলাইনে টিকিট বুকিং করতে পারবেন।',
  (SELECT id FROM categories WHERE slug = 'entertainment'),
  true,
  false,
  'https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?w=800'
),
(
  'বাংলাদেশ ক্রিকেট দলের নতুন অধিনায়ক',
  'bangladesh-cricket-new-captain',
  'বাংলাদেশ ক্রিকেট দলের নতুন অধিনায়ক হিসেবে নির্বাচিত হয়েছেন নতুন খেলোয়াড়।',
  'বাংলাদেশ ক্রিকেট দলের নতুন অধিনায়ক হিসেবে নির্বাচিত হয়েছেন নতুন খেলোয়াড়। বিসিবি সভাপতি এই ঘোষণা দিয়েছেন। নতুন অধিনায়ক আগামী সিরিজ থেকে দলকে নেতৃত্ব দেবেন।',
  (SELECT id FROM categories WHERE slug = 'sports'),
  false,
  true,
  'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800'
),
(
  'দেশে নতুন অর্থনৈতিক নীতি ঘোষণা',
  'new-economic-policy-announced',
  'সরকার নতুন অর্থনৈতিক নীতি ঘোষণা করেছে যা দেশের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে।',
  'সরকার নতুন অর্থনৈতিক নীতি ঘোষণা করেছে যা দেশের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে। অর্থমন্ত্রী জানান, এই নীতির ফলে বিনিয়োগ বাড়বে এবং কর্মসংস্থান সৃষ্টি হবে। ব্যবসায়ী সমাজ এই সিদ্ধান্তকে স্বাগত জানিয়েছে।',
  (SELECT id FROM categories WHERE slug = 'business'),
  false,
  false,
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800'
),
(
  'মোড়েলগঞ্জে স্বাস্থ্য শিবির অনুষ্ঠিত',
  'morrelganj-health-camp',
  'মোড়েলগঞ্জ উপজেলায় বিনামূল্যে স্বাস্থ্য শিবির অনুষ্ঠিত হয়েছে।',
  'মোড়েলগঞ্জ উপজেলায় বিনামূল্যে স্বাস্থ্য শিবির অনুষ্ঠিত হয়েছে। এই শিবিরে প্রায় ৫০০ রোগী বিনামূল্যে চিকিৎসা সেবা পেয়েছেন। স্থানীয় এনজিও এবং সরকারি স্বাস্থ্য বিভাগের যৌথ উদ্যোগে এই শিবিরের আয়োজন করা হয়।',
  (SELECT id FROM categories WHERE slug = 'health'),
  false,
  false,
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800'
),
(
  'আন্তর্জাতিক বাণিজ্য মেলায় বাংলাদেশ',
  'bangladesh-international-trade-fair',
  'আন্তর্জাতিক বাণিজ্য মেলায় বাংলাদেশের পণ্য প্রদর্শিত হচ্ছে।',
  'আন্তর্জাতিক বাণিজ্য মেলায় বাংলাদেশের পণ্য প্রদর্শিত হচ্ছে। বিশেষ করে পাট ও তৈরি পোশাক শিল্পের পণ্যগুলো বিদেশি ক্রেতাদের দৃষ্টি আকর্ষণ করেছে। বাণিজ্য মন্ত্রণালয় এই মেলায় অংশগ্রহণকে সফল বলে উল্লেখ করেছে।',
  (SELECT id FROM categories WHERE slug = 'international'),
  false,
  false,
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
)
ON CONFLICT (slug) DO NOTHING;

import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/news/header"
import { Footer } from "@/components/news/footer"
import { NewsCard } from "@/components/news/news-card"
import { Sidebar } from "@/components/news/sidebar"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: category } = await supabase
    .from("categories")
    .select("name_bn")
    .eq("slug", slug)
    .single()

  if (!category) {
    return {
      title: "ক্যাটাগরি পাওয়া যায়নি | প্রফুক নিউজ",
    }
  }

  return {
    title: `${category.name_bn} | প্রফুক নিউজ টেলিভিশন`,
    description: `${category.name_bn} বিভাগের সকল খবর - প্রফুক নিউজ টেলিভিশন`,
  }
}

async function getCategoryData(slug: string) {
  const supabase = await createClient()
  
  // Get category
  const { data: category, error } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !category) {
    return null
  }

  // Get news in this category
  const { data: news } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking,
      categories (name_bn, slug)
    `)
    .eq("category_id", category.id)
    .order("created_at", { ascending: false })
    .limit(20)

  // Get popular news
  const { data: popularNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking, views,
      categories (name_bn, slug)
    `)
    .order("views", { ascending: false })
    .limit(5)

  // Get all categories
  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, name_bn, slug")
    .order("name")

  return {
    category,
    news: news || [],
    popularNews: popularNews || [],
    categories: categories || [],
  }
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params
  const data = await getCategoryData(slug)

  if (!data) {
    notFound()
  }

  const { category, news, popularNews, categories } = data

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">{category.name_bn}</h1>
                <div className="flex-1 h-px bg-border" />
              </div>
              <p className="text-muted-foreground mt-2">
                {category.name_bn} বিভাগের সকল খবর
              </p>
            </div>

            {/* News Grid */}
            {news.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {news.map((item) => (
                  <NewsCard key={item.id} news={item} variant="default" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>এই বিভাগে এখনও কোনো খবর নেই।</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar popularNews={popularNews} categories={categories} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

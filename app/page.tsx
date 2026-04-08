import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/news/header"
import { Footer } from "@/components/news/footer"
import { BreakingTicker } from "@/components/news/breaking-ticker"
import { NewsCard } from "@/components/news/news-card"
import { Sidebar } from "@/components/news/sidebar"

export const revalidate = 60 // Revalidate every minute

async function getNews() {
  const supabase = await createClient()
  
  // Get breaking news
  const { data: breakingNews } = await supabase
    .from("news")
    .select("id, title, slug")
    .eq("is_breaking", true)
    .order("created_at", { ascending: false })
    .limit(5)

  // Get featured news
  const { data: featuredNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking,
      categories (name_bn, slug)
    `)
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(4)

  // Get latest news
  const { data: latestNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking,
      categories (name_bn, slug)
    `)
    .order("created_at", { ascending: false })
    .limit(8)

  // Get popular news (by views)
  const { data: popularNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking, views,
      categories (name_bn, slug)
    `)
    .order("views", { ascending: false })
    .limit(5)

  // Get categories
  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, name_bn, slug")
    .order("name")

  return {
    breakingNews: breakingNews || [],
    featuredNews: featuredNews || [],
    latestNews: latestNews || [],
    popularNews: popularNews || [],
    categories: categories || [],
  }
}

export default async function HomePage() {
  const { breakingNews, featuredNews, latestNews, popularNews, categories } = await getNews()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <BreakingTicker news={breakingNews} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured News */}
            {featuredNews.length > 0 && (
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <NewsCard news={featuredNews[0]} variant="featured" />
                  </div>
                  {featuredNews.slice(1, 3).map((news) => (
                    <NewsCard key={news.id} news={news} variant="default" />
                  ))}
                </div>
              </section>
            )}

            {/* Latest News */}
            <section>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold">সর্বশেষ খবর</h2>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestNews.map((news) => (
                  <NewsCard key={news.id} news={news} variant="default" />
                ))}
              </div>
            </section>
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

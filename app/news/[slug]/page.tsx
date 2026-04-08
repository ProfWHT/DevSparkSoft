import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/news/header"
import { Footer } from "@/components/news/footer"
import { Sidebar } from "@/components/news/sidebar"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Share2, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: news } = await supabase
    .from("news")
    .select("title, excerpt")
    .eq("slug", slug)
    .single()

  if (!news) {
    return {
      title: "খবর পাওয়া যায়নি | প্রফুক নিউজ",
    }
  }

  return {
    title: `${news.title} | প্রফুক নিউজ`,
    description: news.excerpt || news.title,
  }
}

async function getNewsData(slug: string) {
  const supabase = await createClient()
  
  // Get news article
  const { data: news, error } = await supabase
    .from("news")
    .select(`
      *,
      categories (name, name_bn, slug)
    `)
    .eq("slug", slug)
    .single()

  if (error || !news) {
    return null
  }

  // Increment view count (fire and forget)
  supabase
    .from("news")
    .update({ views: (news.views || 0) + 1 })
    .eq("id", news.id)
    .then()

  // Get related news
  const { data: relatedNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, excerpt, image_url, created_at, is_breaking, views,
      categories (name_bn, slug)
    `)
    .neq("id", news.id)
    .eq("category_id", news.category_id)
    .order("created_at", { ascending: false })
    .limit(4)

  // Get popular news
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
    news,
    relatedNews: relatedNews || [],
    popularNews: popularNews || [],
    categories: categories || [],
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const data = await getNewsData(slug)

  if (!data) {
    notFound()
  }

  const { news, popularNews, categories } = data

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary">প্রচ্ছদ</Link>
              <span className="mx-2">/</span>
              {news.categories && (
                <>
                  <Link href={`/category/${news.categories.slug}`} className="hover:text-primary">
                    {news.categories.name_bn}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              )}
              <span className="text-foreground">বিস্তারিত</span>
            </nav>

            {/* Title & Meta */}
            <header className="mb-6">
              {news.is_breaking && (
                <Badge variant="destructive" className="mb-3">ব্রেকিং নিউজ</Badge>
              )}
              {news.categories && (
                <Badge variant="secondary" className="mb-3 ml-2">{news.categories.name_bn}</Badge>
              )}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                {news.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {formatDate(news.created_at)}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {news.views || 0} বার পঠিত
                </span>
              </div>
            </header>

            {/* Featured Image */}
            {news.image_url && (
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <Image
                  src={news.image_url}
                  alt={news.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <span className="text-sm font-medium flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                শেয়ার করুন:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://profuktv.site/news/${news.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-[#1877f2] text-white px-3 py-1.5 rounded text-sm hover:opacity-90 transition-opacity"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {news.excerpt && (
                <p className="lead text-xl text-muted-foreground font-medium mb-6">
                  {news.excerpt}
                </p>
              )}
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {news.content}
              </div>
            </div>

            {/* Tags */}
            {news.categories && (
              <div className="mt-8 pt-6 border-t">
                <span className="text-sm font-medium mr-2">ট্যাগ:</span>
                <Link href={`/category/${news.categories.slug}`}>
                  <Badge variant="outline" className="hover:bg-secondary">
                    {news.categories.name_bn}
                  </Badge>
                </Link>
              </div>
            )}
          </article>

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

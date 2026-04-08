import Link from "next/link"
import { TrendingUp, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsCard } from "./news-card"

interface SidebarProps {
  popularNews: Array<{
    id: string
    title: string
    slug: string
    excerpt: string | null
    image_url: string | null
    created_at: string
    is_breaking: boolean
    views: number
    categories?: {
      name_bn: string
      slug: string
    } | null
  }>
  categories: Array<{
    id: string
    name: string
    name_bn: string
    slug: string
  }>
}

export function Sidebar({ popularNews, categories }: SidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Popular News */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            জনপ্রিয় খবর
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularNews.map((news, index) => (
            <div key={news.id} className="flex gap-3">
              <span className="text-2xl font-bold text-primary/30">{index + 1}</span>
              <div className="flex-1">
                <NewsCard news={news} variant="compact" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Tag className="h-5 w-5 text-primary" />
            ক্যাটাগরি
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {category.name_bn}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-6 text-center">
          <h3 className="font-bold text-lg mb-2">আমাদের অনুসরণ করুন</h3>
          <p className="text-sm opacity-90 mb-4">সর্বশেষ আপডেট পেতে সোশ্যাল মিডিয়ায় যুক্ত থাকুন</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com/profuktv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com/@profuktv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded transition-colors"
            >
              YouTube
            </a>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}

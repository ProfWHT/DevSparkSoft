import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper, Eye, FolderOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

async function getDashboardStats() {
  const supabase = await createClient()
  
  const { count: newsCount } = await supabase
    .from("news")
    .select("*", { count: "exact", head: true })
  
  const { count: categoryCount } = await supabase
    .from("categories")
    .select("*", { count: "exact", head: true })
  
  const { data: totalViews } = await supabase
    .from("news")
    .select("views")
  
  const views = totalViews?.reduce((sum, item) => sum + (item.views || 0), 0) || 0

  const { data: recentNews } = await supabase
    .from("news")
    .select(`
      id, title, slug, created_at, views, is_breaking,
      categories (name_bn)
    `)
    .order("created_at", { ascending: false })
    .limit(5)

  return {
    newsCount: newsCount || 0,
    categoryCount: categoryCount || 0,
    totalViews: views,
    recentNews: recentNews || [],
  }
}

export default async function AdminDashboardPage() {
  const { newsCount, categoryCount, totalViews, recentNews } = await getDashboardStats()

  const stats = [
    { title: "মোট খবর", value: newsCount, icon: Newspaper, color: "text-blue-600" },
    { title: "মোট ক্যাটাগরি", value: categoryCount, icon: FolderOpen, color: "text-green-600" },
    { title: "মোট ভিউ", value: totalViews, icon: Eye, color: "text-purple-600" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">ড্যাশবোর্ড</h1>
        <p className="text-muted-foreground">প্রফুক নিউজ অ্যাডমিন প্যানেলে স্বাগতম</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value.toLocaleString('bn-BD')}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent News */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            সাম্প্রতিক খবর
          </CardTitle>
          <Link href="/admin/news" className="text-sm text-primary hover:underline">
            সব দেখুন →
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentNews.map((news) => (
              <div key={news.id} className="flex items-center justify-between gap-4 pb-4 border-b last:border-0 last:pb-0">
                <div className="min-w-0 flex-1">
                  <Link href={`/admin/news/${news.id}`} className="font-medium hover:text-primary line-clamp-1">
                    {news.title}
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {news.categories && <span>{news.categories.name_bn}</span>}
                    <span>•</span>
                    <span>{news.views || 0} ভিউ</span>
                  </div>
                </div>
                {news.is_breaking && (
                  <span className="shrink-0 px-2 py-1 bg-destructive text-destructive-foreground text-xs rounded">
                    ব্রেকিং
                  </span>
                )}
              </div>
            ))}
            {recentNews.length === 0 && (
              <p className="text-center text-muted-foreground py-4">
                এখনও কোনো খবর নেই
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/news/new">
          <Card className="hover:bg-secondary/50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Newspaper className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">নতুন খবর যোগ করুন</h3>
                <p className="text-sm text-muted-foreground">নতুন একটি খবর প্রকাশ করুন</p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="/admin/categories">
          <Card className="hover:bg-secondary/50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="p-3 rounded-full bg-green-500/10">
                <FolderOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">ক্যাটাগরি পরিচালনা</h3>
                <p className="text-sm text-muted-foreground">ক্যাটাগরি যোগ বা সম্পাদনা করুন</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

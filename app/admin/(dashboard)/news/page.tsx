import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"
import { DeleteNewsButton } from "@/components/admin/delete-news-button"

async function getNews() {
  const supabase = await createClient()
  
  const { data: news } = await supabase
    .from("news")
    .select(`
      *,
      categories (name_bn, slug)
    `)
    .order("created_at", { ascending: false })

  return news || []
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export default async function AdminNewsPage() {
  const news = await getNews()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">সকল খবর</h1>
          <p className="text-muted-foreground">মোট {news.length} টি খবর</p>
        </div>
        <Link href="/admin/news/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            নতুন খবর
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">শিরোনাম</th>
                  <th className="text-left p-4 font-medium hidden md:table-cell">ক্যাটাগরি</th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">তারিখ</th>
                  <th className="text-left p-4 font-medium hidden sm:table-cell">স্ট্যাটাস</th>
                  <th className="text-right p-4 font-medium">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-muted/30">
                    <td className="p-4">
                      <div className="max-w-xs">
                        <Link href={`/admin/news/${item.id}`} className="font-medium hover:text-primary line-clamp-1">
                          {item.title}
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground md:hidden">
                          {item.categories && <span>{item.categories.name_bn}</span>}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      {item.categories && (
                        <Badge variant="secondary">{item.categories.name_bn}</Badge>
                      )}
                    </td>
                    <td className="p-4 text-muted-foreground hidden lg:table-cell">
                      {formatDate(item.created_at)}
                    </td>
                    <td className="p-4 hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {item.is_breaking && (
                          <Badge variant="destructive" className="text-xs">ব্রেকিং</Badge>
                        )}
                        {item.is_featured && (
                          <Badge variant="default" className="text-xs">ফিচার্ড</Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {item.views || 0}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/news/${item.slug}`} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/admin/news/${item.id}`}>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <DeleteNewsButton newsId={item.id} newsTitle={item.title} />
                      </div>
                    </td>
                  </tr>
                ))}
                {news.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                      এখনও কোনো খবর নেই।{" "}
                      <Link href="/admin/news/new" className="text-primary hover:underline">
                        নতুন খবর যোগ করুন
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

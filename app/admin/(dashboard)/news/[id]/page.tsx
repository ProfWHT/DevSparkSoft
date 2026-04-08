import { createClient } from "@/lib/supabase/server"
import { NewsForm } from "@/components/admin/news-form"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

async function getNewsData(id: string) {
  const supabase = await createClient()
  
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !news) {
    return null
  }

  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, name_bn, slug")
    .order("name")

  return {
    news,
    categories: categories || [],
  }
}

export default async function EditNewsPage({ params }: Props) {
  const { id } = await params
  const data = await getNewsData(id)

  if (!data) {
    notFound()
  }

  const { news, categories } = data

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">খবর সম্পাদনা</h1>
        <p className="text-muted-foreground">খবরটি আপডেট করুন</p>
      </div>

      <NewsForm categories={categories} initialData={news} />
    </div>
  )
}

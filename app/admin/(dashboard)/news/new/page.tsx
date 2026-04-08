import { createClient } from "@/lib/supabase/server"
import { NewsForm } from "@/components/admin/news-form"

async function getCategories() {
  const supabase = await createClient()
  
  const { data: categories } = await supabase
    .from("categories")
    .select("id, name, name_bn, slug")
    .order("name")

  return categories || []
}

export default async function NewNewsPage() {
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">নতুন খবর যোগ করুন</h1>
        <p className="text-muted-foreground">নতুন একটি খবর প্রকাশ করুন</p>
      </div>

      <NewsForm categories={categories} />
    </div>
  )
}

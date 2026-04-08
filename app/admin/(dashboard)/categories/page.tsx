import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CategoryForm } from "@/components/admin/category-form"

async function getCategories() {
  const supabase = await createClient()
  
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name")

  // Get news count per category
  const categoriesWithCount = await Promise.all(
    (categories || []).map(async (category) => {
      const { count } = await supabase
        .from("news")
        .select("*", { count: "exact", head: true })
        .eq("category_id", category.id)
      
      return {
        ...category,
        news_count: count || 0,
      }
    })
  )

  return categoriesWithCount
}

export default async function AdminCategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ক্যাটাগরি</h1>
        <p className="text-muted-foreground">খবরের ক্যাটাগরি পরিচালনা করুন</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category List */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium">নাম (বাংলা)</th>
                      <th className="text-left p-4 font-medium">নাম (English)</th>
                      <th className="text-left p-4 font-medium">স্লাগ</th>
                      <th className="text-left p-4 font-medium">খবর</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id} className="border-b hover:bg-muted/30">
                        <td className="p-4 font-medium">{category.name_bn}</td>
                        <td className="p-4 text-muted-foreground">{category.name}</td>
                        <td className="p-4">
                          <code className="text-xs bg-muted px-2 py-1 rounded">
                            {category.slug}
                          </code>
                        </td>
                        <td className="p-4">
                          <Badge variant="secondary">{category.news_count} টি</Badge>
                        </td>
                      </tr>
                    ))}
                    {categories.length === 0 && (
                      <tr>
                        <td colSpan={4} className="p-8 text-center text-muted-foreground">
                          এখনও কোনো ক্যাটাগরি নেই
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Category Form */}
        <div>
          <CategoryForm />
        </div>
      </div>
    </div>
  )
}

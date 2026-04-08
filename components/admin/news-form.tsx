"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Category {
  id: string
  name: string
  name_bn: string
  slug: string
}

interface NewsFormProps {
  categories: Category[]
  initialData?: {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    image_url: string | null
    category_id: string | null
    is_featured: boolean
    is_breaking: boolean
  }
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\u0980-\u09FFa-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function NewsForm({ categories, initialData }: NewsFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    image_url: initialData?.image_url || "",
    category_id: initialData?.category_id || "",
    is_featured: initialData?.is_featured || false,
    is_breaking: initialData?.is_breaking || false,
  })

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData(prev => ({
      ...prev,
      title,
      slug: !initialData ? generateSlug(title) + '-' + Date.now().toString(36) : prev.slug,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const supabase = createClient()

    const newsData = {
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt || null,
      content: formData.content,
      image_url: formData.image_url || null,
      category_id: formData.category_id || null,
      is_featured: formData.is_featured,
      is_breaking: formData.is_breaking,
      updated_at: new Date().toISOString(),
    }

    try {
      if (initialData) {
        const { error } = await supabase
          .from("news")
          .update(newsData)
          .eq("id", initialData.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from("news")
          .insert(newsData)

        if (error) throw error
      }

      router.push("/admin/news")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "একটি ত্রুটি হয়েছে")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>খবরের বিবরণ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">শিরোনাম *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="খবরের শিরোনাম লিখুন"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">স্লাগ</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="news-slug"
                />
                <p className="text-xs text-muted-foreground">URL এ ব্যবহৃত হবে: /news/{formData.slug || 'slug'}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">সংক্ষিপ্ত বিবরণ</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="খবরের সংক্ষিপ্ত বিবরণ"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">বিস্তারিত *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="খবরের বিস্তারিত লিখুন"
                  rows={12}
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>প্রকাশনা সেটিংস</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">ক্যাটাগরি</Label>
                <Select
                  value={formData.category_id}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category_id: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="ক্যাটাগরি নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name_bn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">ছবির URL</Label>
                <Input
                  id="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="is_featured">ফিচার্ড</Label>
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="is_breaking">ব্রেকিং নিউজ</Label>
                <Switch
                  id="is_breaking"
                  checked={formData.is_breaking}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_breaking: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {error && (
            <Card className="border-destructive">
              <CardContent className="pt-6">
                <p className="text-sm text-destructive">{error}</p>
              </CardContent>
            </Card>
          )}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => router.back()}
            >
              বাতিল
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "সংরক্ষণ হচ্ছে..." : initialData ? "আপডেট করুন" : "প্রকাশ করুন"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

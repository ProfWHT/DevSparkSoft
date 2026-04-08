"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function generateSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function CategoryForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    name_bn: "",
    slug: "",
  })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setFormData(prev => ({
      ...prev,
      name,
      slug: generateSlug(name),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    const supabase = createClient()

    try {
      const { error } = await supabase
        .from("categories")
        .insert({
          name: formData.name,
          name_bn: formData.name_bn,
          slug: formData.slug,
        })

      if (error) throw error

      setFormData({ name: "", name_bn: "", slug: "" })
      setSuccess(true)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "একটি ত্রুটি হয়েছে")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>নতুন ক্যাটাগরি</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">নাম (English) *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Local News"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name_bn">নাম (বাংলা) *</Label>
            <Input
              id="name_bn"
              value={formData.name_bn}
              onChange={(e) => setFormData(prev => ({ ...prev, name_bn: e.target.value }))}
              placeholder="স্থানীয় খবর"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">স্লাগ</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              placeholder="local-news"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}
          {success && <p className="text-sm text-green-600">ক্যাটাগরি সফলভাবে যোগ করা হয়েছে!</p>}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "যোগ করা হচ্ছে..." : "ক্যাটাগরি যোগ করুন"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

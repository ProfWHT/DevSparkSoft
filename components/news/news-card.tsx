import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  news: {
    id: string
    title: string
    slug: string
    excerpt: string | null
    image_url: string | null
    created_at: string
    is_breaking: boolean
    categories?: {
      name_bn: string
      slug: string
    } | null
  }
  variant?: "default" | "featured" | "compact"
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function NewsCard({ news, variant = "default" }: NewsCardProps) {
  if (variant === "featured") {
    return (
      <Card className="overflow-hidden group">
        <Link href={`/news/${news.slug}`}>
          <div className="relative aspect-[16/9]">
            {news.image_url ? (
              <Image
                src={news.image_url}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {news.is_breaking && (
                <Badge variant="destructive" className="mb-2">ব্রেকিং</Badge>
              )}
              {news.categories && (
                <Badge variant="secondary" className="mb-2 ml-2">{news.categories.name_bn}</Badge>
              )}
              <h2 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                {news.title}
              </h2>
              {news.excerpt && (
                <p className="text-white/80 text-sm line-clamp-2 hidden md:block">
                  {news.excerpt}
                </p>
              )}
              <div className="flex items-center gap-2 text-white/60 text-xs mt-2">
                <Clock className="h-3 w-3" />
                <span>{formatDate(news.created_at)}</span>
              </div>
            </div>
          </div>
        </Link>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <Link href={`/news/${news.slug}`} className="flex gap-3 group">
        <div className="relative w-24 h-16 shrink-0 rounded overflow-hidden">
          {news.image_url ? (
            <Image
              src={news.image_url}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
            {news.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
            <Clock className="h-3 w-3" />
            <span>{formatDate(news.created_at)}</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Card className="overflow-hidden group h-full">
      <Link href={`/news/${news.slug}`}>
        <div className="relative aspect-[16/10]">
          {news.image_url ? (
            <Image
              src={news.image_url}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}
          {news.is_breaking && (
            <Badge variant="destructive" className="absolute top-2 left-2">ব্রেকিং</Badge>
          )}
        </div>
        <CardContent className="p-4">
          {news.categories && (
            <Badge variant="outline" className="mb-2 text-xs">{news.categories.name_bn}</Badge>
          )}
          <h3 className="font-bold leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {news.title}
          </h3>
          {news.excerpt && (
            <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
              {news.excerpt}
            </p>
          )}
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="h-3 w-3" />
            <span>{formatDate(news.created_at)}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

interface News {
  id: string
  title: string
  slug: string
}

interface BreakingTickerProps {
  news: News[]
}

export function BreakingTicker({ news }: BreakingTickerProps) {
  if (!news || news.length === 0) return null

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="flex items-center gap-2 py-2 px-4 bg-accent shrink-0">
          <Zap className="h-4 w-4 animate-pulse" />
          <span className="font-bold text-sm">ব্রেকিং</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap py-2">
          <div className="animate-marquee inline-flex gap-16">
            {news.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="hover:underline text-sm"
              >
                {item.title}
              </Link>
            ))}
            {news.map((item) => (
              <Link
                key={`${item.id}-duplicate`}
                href={`/news/${item.slug}`}
                className="hover:underline text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

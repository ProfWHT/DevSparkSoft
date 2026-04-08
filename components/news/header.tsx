"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Search, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "প্রচ্ছদ", slug: "/" },
  { name: "স্থানীয় খবর", slug: "/category/local-news" },
  { name: "রাজনীতি", slug: "/category/politics" },
  { name: "খেলাধুলা", slug: "/category/sports" },
  { name: "বিনোদন", slug: "/category/entertainment" },
  { name: "শিক্ষা", slug: "/category/education" },
  { name: "স্বাস্থ্য", slug: "/category/health" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span>{new Date().toLocaleDateString('bn-BD', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/profuktv" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://youtube.com/@profuktv" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="প্রফুক TV - বাগেরহাট নিউজ নেটওয়ার্ক"
              width={180}
              height={60}
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-secondary border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex items-center gap-1">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={category.slug}
                  className="block px-4 py-3 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <ul className="container mx-auto px-4 py-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={category.slug}
                  className="block px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

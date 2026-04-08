import Link from "next/link"
import { Facebook, Youtube, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* News Tip Banner */}
      <div className="bg-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            হেডলাইন নিউজ দিতে মেসেজ করুন - 
            <a href="https://facebook.com/morrelganjnews.profuktv" target="_blank" rel="noopener noreferrer" className="underline ml-1">Facebook</a> | 
            <a href="https://t.me/morrelganjnews" target="_blank" rel="noopener noreferrer" className="underline ml-1">Telegram</a> | 
            <a href="tel:+447916631896" className="underline ml-1">+44 7916 631896</a>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo.png"
                alt="প্রফুক TV"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">
              বাগেরহাট নিউজ নেটওয়ার্ক (BNN) - মোড়েলগঞ্জ ও শরণখোলার তাজা খবর এখন আপনার হাতে। সত্য খবর, দ্রুত আপডেট।
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/morrelganjnews.profuktv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@profuktv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://t.me/morrelganjnews" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Telegram">
                <Send className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com/@profuktv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="TikTok">
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/local-news" className="hover:text-primary transition-colors">স্থানীয় খবর</Link></li>
              <li><Link href="/category/politics" className="hover:text-primary transition-colors">রাজনীতি</Link></li>
              <li><Link href="/category/sports" className="hover:text-primary transition-colors">খেলাধুলা</Link></li>
              <li><Link href="/category/entertainment" className="hover:text-primary transition-colors">বিনোদন</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">আরও</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">যোগাযোগ</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">গোপনীয়তা নীতি</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition-colors">অ্যাডমিন</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">যোগাযোগ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  Bagerhat News TV<br />
                  Level 2, Rahman Plaza<br />
                  Khan Jahan Ali Road<br />
                  Bagerhat Sadar, Bagerhat-9300<br />
                  Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+447916631896" className="hover:text-primary transition-colors">+44 7916 631896</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@profuktv.site</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-4 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} প্রফুক নিউজ টেলিভিশন। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  )
}

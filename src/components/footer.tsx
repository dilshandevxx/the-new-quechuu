import { ArrowRight, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] px-6 py-16 text-neutral-300 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-widest text-white md:text-4xl">
              DECATHLON
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Explore the great outdoors with gear designed for every adventure. Join our community and stay updated on the latest releases.
            </p>
            
            <div className="mt-4 flex w-full max-w-md flex-col gap-4">
              <label htmlFor="email-subscribe" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Subscribe to our newsletter
              </label>
              <div className="relative flex w-full items-center">
                <input 
                  type="email" 
                  id="email-subscribe"
                  placeholder="Email address"
                  className="w-full border-b border-neutral-700 bg-transparent py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-white"
                />
                <button className="absolute right-0 flex h-8 w-8 items-center justify-center text-neutral-400 transition-colors hover:text-white">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-7 lg:gap-12">
            {/* Shop */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Shop</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">Men's Apparel</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Women's Apparel</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Footwear</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Backpacks</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Accessories</a></li>
              </ul>
            </div>

            {/* About */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">About Us</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">Our Story</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Sustainability</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Careers</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Press</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Store Locator</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Support</h3>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="transition-colors hover:text-white">FAQ</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Track Order</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Warranty</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-neutral-800" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-xs text-neutral-500 md:flex-row md:gap-8">
            <span>&copy; {new Date().getFullYear()} Decathlon. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-white">Cookies</a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#" className="transition-colors hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="transition-colors hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

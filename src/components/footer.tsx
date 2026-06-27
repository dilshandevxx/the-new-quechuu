import { ArrowRight } from "lucide-react";

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
            <a href="#" className="transition-colors hover:text-white" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="transition-colors hover:text-white" aria-label="Twitter">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="transition-colors hover:text-white" aria-label="Facebook">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="transition-colors hover:text-white" aria-label="Youtube">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 7.1C2.5 7.1 2.4 5.4 3.1 4.7 4 3.7 5 3.7 5.5 3.6 8.5 3.4 12 3.4 12 3.4s3.5 0 6.5.2c.5.1 1.5.1 2.4 1.1.7.7.6 2.4.6 2.4S22 8.9 22 10.8v2.4c0 1.9-.5 3.7-.5 3.7-.6 2.2-2.3 2.3-3.1 2.4-3 .2-6.4.2-6.4.2s-3.5 0-6.5-.2c-.5-.1-1.5-.1-2.4-1.1-.7-.7-.6-2.4-.6-2.4S1.5 13.1 1.5 11.2V8.9C1.5 7.1 2.5 7.1 2.5 7.1z"/><path d="M9.7 15.3l6.5-3.3-6.5-3.3v6.6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

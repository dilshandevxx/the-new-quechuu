import Image from "next/image";
import { Droplet, Wind, Leaf, Plus } from "lucide-react";

export function JacketFeatureSection() {
  return (
    <section className="relative w-full bg-[#E8E6E1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        
        {/* Header Titles */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl">
            The MH500 Jacket
          </h2>
          <p className="mt-4 text-lg text-neutral-500 md:text-xl">
            A waterproof classic that's built to last.
          </p>
        </div>

        <div className="relative mt-24 flex min-h-[600px] w-full flex-col items-center justify-center lg:flex-row lg:justify-between">
          
          {/* Left Info Card */}
          <div className="relative z-10 w-full max-w-md lg:w-1/3">
            <div className="flex gap-4 rounded-[20px] bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[12px]">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                  alt="Hiker in field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-neutral-900">Lightweight<br/>performance</h3>
                <p className="mt-2 text-[11px] leading-tight text-neutral-500">
                  Weighing just 665g (men's size L) and<br/>
                  540g (women's size M), the MH500<br/>
                  offers maximum protection without the
                </p>
              </div>
            </div>
            
            {/* Version Switcher (Handwritten annotation) */}
            <div className="absolute -bottom-32 left-0 hidden lg:block">
              <div className="flex flex-col items-center">
                <span className="font-serif text-sm italic text-neutral-700">READY FOR THE LIGHTER VERSION?</span>
                {/* Hand-drawn arrow SVG */}
                <svg className="my-2 h-8 w-8 stroke-neutral-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C12 4 10 14 17 18C15 18 10.5 16 9 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex gap-2 text-xl font-medium">
                  <span className="text-neutral-900">MH500</span>
                  <span className="text-neutral-400">MH900</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Product Image */}
          <div className="relative z-0 h-[500px] w-full max-w-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:h-[700px]">
            <Image
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop" // Use a transparent PNG for the jacket
              alt="Black MH500 Jacket"
              fill
              className="object-cover rounded-[16px] object-bottom"
            />
          </div>

          {/* Right Action Icons */}
          <div className="relative z-10 mt-16 flex w-full flex-col items-end gap-12 lg:mt-0 lg:w-1/3">
            
            {/* Learn More Button */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-semibold uppercase italic text-neutral-700">LEARN MORE</span>
                {/* Hand-drawn arrow pointing right/down */}
                <svg className="h-6 w-6 stroke-neutral-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4C4 4 14 6 18 14C18 12 16 7.5 14 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BDB8AB] text-white transition-transform hover:scale-105">
                <Plus className="h-5 w-5" />
              </button>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-col gap-3">
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-400 transition-colors hover:bg-neutral-100">
                <Droplet className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-400 transition-colors hover:bg-neutral-100">
                <Wind className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-neutral-900">
                <Leaf className="h-5 w-5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Leaf, Plus, RefreshCcw, SunSnow, MoveUpRight } from "lucide-react";

export function ShoeFeatureSection() {
  return (
    <section className="relative w-full bg-[#E8E6E1] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        
        {/* Header Titles */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl">
            The MH500 Light shoes
          </h2>
          <p className="mt-4 text-lg text-neutral-500 md:text-xl">
            Let every step lead you to new horizons.
          </p>
        </div>

        <div className="relative mt-24 flex min-h-[600px] w-full flex-col items-center justify-center lg:flex-row lg:justify-between">
          
          {/* Left Info Card */}
          <div className="relative z-10 w-full max-w-md lg:w-1/3">
            <div className="flex gap-4 rounded-[20px] bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[12px]">
                <Image
                  src="/images/card-thumbnail-grip.jpg"
                  alt="Shoe grip on rock"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-neutral-900">Perfect grip</h3>
                <p className="mt-2 text-[11px] leading-tight text-neutral-500">
                  The Outdoor Contact rubber sole is<br/>
                  rigorously tested for optimal traction on<br/>
                  all terrains, ensuring you stay steady on<br/>
                  every step.
                </p>
              </div>
            </div>
            
            {/* Version Switcher (Handwritten annotation) */}
            <div className="absolute -bottom-32 left-0 hidden lg:block">
              <div className="flex flex-col items-start">
                <span className="font-serif text-sm font-semibold uppercase italic text-neutral-700 ml-6">EXCLUSIVE DROPS INCOMING</span>
                {/* Hand-drawn arrow SVG */}
                <svg className="my-2 h-8 w-8 ml-12 stroke-neutral-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4C12 4 10 14 17 18C15 18 10.5 16 9 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex gap-2 text-2xl font-medium">
                  <span className="text-neutral-900">Light</span>
                  <span className="text-neutral-400">Limited edition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Product Image */}
          <div className="relative z-0 h-[400px] w-full max-w-xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:h-[600px]">
            <Image
              src="/images/shoe-main.png" // Use a transparent PNG for the shoe
              alt="MH500 Light Shoe"
              fill
              className="object-contain -rotate-[15deg] hover:rotate-0 transition-transform duration-700"
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
                <RefreshCcw className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-400 transition-colors hover:bg-neutral-100">
                <Leaf className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-400 transition-colors hover:bg-neutral-100">
                <SunSnow className="h-5 w-5" />
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-neutral-900">
                <MoveUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

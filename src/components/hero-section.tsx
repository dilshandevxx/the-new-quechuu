import Image from "next/image";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden text-white">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg" // Replace with your actual hero image
          alt="Hikers climbing a rocky mountain"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating Header */}
      <header className="relative z-10 flex w-full items-center justify-between p-6 md:p-8 lg:p-12">
        <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:bg-black/40">
          Overview <span className="opacity-70">::</span>
        </button>

        <div className="text-xl font-bold tracking-widest md:text-2xl">
          DECATHLON
        </div>

        <button className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:bg-black/40">
          English <span className="opacity-70">:</span>
        </button>
      </header>

      {/* Center Typography */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <h1 className="text-center text-5xl font-medium tracking-tight md:text-7xl lg:text-[8rem] lg:leading-[0.9]">
          Feel alive in <br />
          <span className="font-serif italic text-white/90">every</span> footstep
        </h1>
      </div>

      {/* Footer Elements */}
      <div className="relative z-10 flex w-full items-end justify-between p-6 md:p-8 lg:p-12">
        {/* Scroll Indicator */}
        <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll to see full collection
        </div>

        {/* Video Preview Card */}
        <div className="group flex cursor-pointer items-stretch gap-4 rounded-[24px] bg-white p-2.5 pr-5 text-black shadow-2xl transition-transform hover:scale-105">
          {/* Thumbnail */}
          <div className="relative h-20 w-32 overflow-hidden rounded-[16px]">
            <Image
              src="/images/video-thumb.jpg" // Replace with thumbnail
              alt="Video preview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Card Content */}
          <div className="flex flex-col justify-between py-1">
            <span className="text-sm font-semibold leading-snug tracking-tight">
              Discover
              <br />
              full video
            </span>
            <div className="flex h-8 w-8 items-center justify-center self-end rounded-full bg-black text-white transition-colors group-hover:bg-neutral-800">
              <Play className="ml-1 h-3.5 w-3.5" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

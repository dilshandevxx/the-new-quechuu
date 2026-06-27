import Image from "next/image";

export function OutfitGridSection() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      {/* Grid Container */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        
        {/* Top Left: Men's Outfit */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop" // Background rocks
            alt="Rocky background"
            fill
            className="object-cover opacity-80"
          />
          {/* Main Cutout Image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative h-[80%] w-[50%]">
                <Image
                  src="https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=800&auto=format&fit=crop"
                  alt="Men's hiking outfit"
                  fill
                  className="object-cover rounded-[16px] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
             </div>
          </div>
          
          {/* Hotspots */}
          <div className="absolute left-[30%] top-[30%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
          <div className="absolute right-[35%] top-[55%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
          <div className="absolute left-[35%] bottom-[20%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>

          <div className="absolute bottom-6 left-6 text-lg text-white">Hiking outfit</div>
          <div className="absolute bottom-6 right-6 text-lg text-white">Men</div>
        </div>

        {/* Top Right: Men's Product Details */}
        <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#FAF9F6] p-8 md:aspect-square">
          <div className="absolute top-12 flex gap-4 text-2xl font-medium tracking-tight">
            <span className="text-neutral-900">MH500</span>
            <span className="text-neutral-300">MH900</span>
          </div>

          <div className="flex w-full max-w-[280px] flex-col gap-6">
            <div className="relative aspect-square w-full rounded-[24px] bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop"
                alt="MH500 Jacket Black"
                fill
                className="object-cover rounded-[16px] p-8"
              />
            </div>
            <button className="w-full rounded-full bg-[#2A2A2A] py-4 text-sm font-medium text-white transition-colors hover:bg-black">
              Buy now
            </button>
          </div>

          {/* Color Selector */}
          <div className="absolute bottom-8 flex w-full items-center justify-between px-12">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-900">Black</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-400">
                <div className="h-2 w-2 rounded-full bg-neutral-900" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                <div className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                <div className="h-1.5 w-1.5 rounded-full bg-blue-800" />
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-800" />
              </div>
              <span className="text-xs text-neutral-500">4 colorways</span>
            </div>
          </div>
        </div>

        {/* Bottom Left: Women's Product Details */}
        <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#FAF9F6] p-8 md:aspect-square">
          <div className="absolute top-12 flex gap-4 text-2xl font-medium tracking-tight">
            <span className="text-neutral-900">MH500</span>
            <span className="text-neutral-300">MH900</span>
          </div>

          <div className="flex w-full max-w-[280px] flex-col gap-6">
            <div className="relative aspect-square w-full rounded-[24px] bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop"
                alt="MH500 Jacket Beige"
                fill
                className="object-cover rounded-[16px] p-8"
              />
            </div>
            <button className="w-full rounded-full bg-[#2A2A2A] py-4 text-sm font-medium text-white transition-colors hover:bg-black">
              Buy now
            </button>
          </div>

          {/* Color Selector */}
          <div className="absolute bottom-8 flex w-full items-center justify-between px-12">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-neutral-900">Beige</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300">
                <div className="h-2 w-2 rounded-full bg-[#D4CFC4]" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4CFC4]" />
                <div className="h-1.5 w-1.5 rounded-full bg-red-800" />
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
              </div>
              <span className="text-xs text-neutral-500">3 colorways</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Women's Outfit */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1520208496220-4f51e064ec0d?q=80&w=800&auto=format&fit=crop" // Background water
            alt="Water background"
            fill
            className="object-cover opacity-80"
          />
          {/* Main Cutout Image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative h-[80%] w-[50%]">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                  alt="Women's hiking outfit"
                  fill
                  className="object-cover rounded-[16px] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
             </div>
          </div>
          
          {/* Hotspots */}
          <div className="absolute left-[30%] top-[40%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
          <div className="absolute right-[25%] top-[60%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>
          <div className="absolute left-[35%] bottom-[15%] flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-transparent">
             <div className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,1)]" />
          </div>

          <div className="absolute top-6 left-6 text-lg text-white">Hiking outfit</div>
          <div className="absolute top-6 right-6 text-lg text-white">Women</div>
        </div>

      </div>
    </section>
  );
}

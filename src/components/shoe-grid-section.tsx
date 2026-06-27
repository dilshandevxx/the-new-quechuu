import Image from "next/image";

export function ShoeGridSection() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      {/* Grid Container */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        
        {/* Top Left: Men's Outfit (Shoes) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#2C2E25] md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop" // Background moss/rocks
            alt="Rocky background"
            fill
            className="object-cover opacity-60"
          />
          {/* Main Cutout Image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pt-24">
             <div className="relative h-[90%] w-[50%]">
                <Image
                  src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop"
                  alt="Men's hiking trousers and shoes"
                  fill
                  className="object-cover rounded-[16px] drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                />
             </div>
          </div>

          <div className="absolute bottom-6 left-6 text-lg text-white">Hiking shoes</div>
          <div className="absolute bottom-6 right-6 text-lg text-white">Men</div>
        </div>

        {/* Top Right: Men's Product Details */}
        <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#FAF9F6] p-8 md:aspect-square">
          <div className="absolute top-12 flex gap-4 text-2xl font-medium tracking-tight">
            <span className="text-neutral-900">MH500 Light</span>
          </div>

          <div className="flex w-full max-w-[280px] flex-col gap-6">
            <div className="relative aspect-square w-full rounded-[24px] bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop"
                alt="MH500 Light Khaki"
                fill
                className="object-cover rounded-[16px] p-6 -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <button className="w-full rounded-full bg-[#2A2A2A] py-4 text-sm font-medium text-white transition-colors hover:bg-black">
              Buy now
            </button>
          </div>

          {/* Color Selector */}
          <div className="absolute bottom-8 flex w-full items-center justify-between px-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold text-neutral-900 uppercase">Khaki-Black</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#919568]">
                <div className="h-2 w-2 rounded-full bg-[#919568]" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#919568]" />
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
              </div>
              <span className="text-[10px] font-medium text-neutral-500">2 colorways</span>
            </div>
          </div>
        </div>

        {/* Bottom Left: Women's Product Details */}
        <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#FAF9F6] p-8 md:aspect-square">
          <div className="absolute top-12 flex gap-4 text-2xl font-medium tracking-tight">
            <span className="text-neutral-900">MH500 Light</span>
          </div>

          <div className="flex w-full max-w-[280px] flex-col gap-6">
            <div className="relative aspect-square w-full rounded-[24px] bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                alt="MH500 Light Purple"
                fill
                className="object-cover rounded-[16px] p-6 -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <button className="w-full rounded-full bg-[#2A2A2A] py-4 text-sm font-medium text-white transition-colors hover:bg-black">
              Buy now
            </button>
          </div>

          {/* Color Selector */}
          <div className="absolute bottom-8 flex w-full items-center justify-between px-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-semibold text-neutral-900 uppercase">Purple-Orange</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#D5D4E3]">
                <div className="h-2 w-2 rounded-full bg-[#D5D4E3]" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-[#D5D4E3]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#BC4137]" />
              </div>
              <span className="text-[10px] font-medium text-neutral-500">2 colorways</span>
            </div>
          </div>
        </div>

        {/* Bottom Right: Women's Outfit (Shoes) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#292A2C] md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop" // Background marble/rocks
            alt="Dark marble background"
            fill
            className="object-cover opacity-60"
          />
          {/* Main Cutout Image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pt-24">
             <div className="relative h-[90%] w-[50%]">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                  alt="Women's hiking trousers and shoes"
                  fill
                  className="object-cover rounded-[16px] drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                />
             </div>
          </div>

          <div className="absolute bottom-6 left-6 text-lg text-white">Hiking shoes</div>
          <div className="absolute bottom-6 right-6 text-lg text-white">Women</div>
        </div>

      </div>
    </section>
  );
}

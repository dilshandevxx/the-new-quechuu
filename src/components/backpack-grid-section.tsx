import Image from "next/image";

export function BackpackGridSection() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      {/* Grid Container */}
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        
        {/* Top Left: Unisex Outfit (Backpack) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#242328] md:aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop" // Background dark rocks
            alt="Dark rock background"
            fill
            className="object-cover opacity-80"
          />
          {/* Main Cutout Image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pt-24">
             <div className="relative h-[95%] w-[60%]">
                <Image
                  src="https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop"
                  alt="Hiker with red backpack"
                  fill
                  className="object-cover object-top drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                />
             </div>
          </div>

          <div className="absolute top-6 left-6 text-lg text-white font-medium tracking-tight">Hiking backpack</div>
          <div className="absolute top-6 right-6 text-lg text-white font-medium tracking-tight">Unisex</div>
        </div>

        {/* Top Right: Backpack Product Details */}
        <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center bg-[#FAF9F6] p-8 md:aspect-square">
          <div className="absolute top-12 flex gap-4 text-2xl font-medium tracking-tight">
            <span className="text-neutral-900">25L</span>
            <span className="text-neutral-300">38L</span>
          </div>

          <div className="flex w-full max-w-[280px] flex-col gap-6 mt-12">
            <div className="relative aspect-[4/5] w-full rounded-[24px] bg-[#E8E6E1]">
              <Image
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop"
                alt="MH500 Backpack 25L Red"
                fill
                className="object-cover rounded-[16px] p-4 hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* "Buy now" button assumed from previous designs */}
            <button className="w-full rounded-full bg-[#2A2A2A] py-4 text-sm font-medium text-white transition-colors hover:bg-black">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

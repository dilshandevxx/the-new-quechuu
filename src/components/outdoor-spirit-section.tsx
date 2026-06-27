import Image from "next/image";

export function OutdoorSpiritSection() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      {/* Top Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full lg:h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop" // Placeholder for outdoor spirit image
          alt="Hiker walking up rocks in fog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12">
          <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl lg:text-[7rem]">
            Outdoor spirit
          </h1>
        </div>
        
        <div className="absolute bottom-6 left-0 flex w-full justify-center">
          <p className="font-mono text-[10px] font-semibold tracking-[0.15em] text-white/90 md:text-xs md:tracking-[0.2em]">
            ESTADILLA 42.04348° N, 0.30224° E
          </p>
        </div>
      </div>

      {/* Overlapping Images Layout */}
      <div className="relative mx-auto flex min-h-[700px] w-full max-w-7xl items-center justify-center overflow-hidden py-32 lg:py-48">
        
        {/* Massive Background Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] font-bold tracking-tighter text-neutral-800 md:text-[10rem] lg:text-[14rem] whitespace-nowrap">
          MH500 Backpack
        </div>

        {/* Images Absolute Layout */}
        <div className="relative z-10 flex h-[500px] w-full max-w-4xl items-center justify-center">
          
          {/* Top Center Portrait Image */}
          <div className="absolute top-0 left-[35%] md:left-[40%] z-20 h-48 w-32 md:h-64 md:w-48">
            <div className="relative h-full w-full overflow-hidden rounded-[8px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1539185966-200922896da3?q=80&w=800&auto=format&fit=crop"
                alt="Backpack with flowers"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Square Image */}
          <div className="absolute right-[10%] top-[25%] md:right-[15%] z-10 h-40 w-40 md:h-64 md:w-64">
            <div className="relative h-full w-full overflow-hidden rounded-[8px] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1622240954932-9ce280599bb8?q=80&w=800&auto=format&fit=crop"
                alt="Backpack on rock"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Left Landscape Image */}
          <div className="absolute bottom-0 left-[10%] md:left-[15%] z-30 h-40 w-56 md:h-56 md:w-80 lg:h-64 lg:w-96">
            <div className="relative h-full w-full overflow-hidden rounded-[16px] shadow-md border-4 border-[#FAF9F6]">
              <Image
                src="https://images.unsplash.com/photo-1501555088652-0cb8bf7801a2?q=80&w=1200&auto=format&fit=crop"
                alt="Hikers walking away"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

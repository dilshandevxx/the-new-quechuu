import Image from "next/image";

export function PeaksSection() {
  return (
    <section className="w-full bg-[#FAF9F6]">
      {/* Top Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full lg:h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop" // Placeholder for peaks image
          alt="Hikers on a mountain peak"
          fill
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12">
          <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl lg:text-[7rem]">
            Conquer new peaks
          </h1>
        </div>
        
        <div className="absolute bottom-6 left-0 flex w-full justify-center">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-white/90">
            42°37'59.9"N 0°03'56.2"E
          </p>
        </div>
      </div>

      {/* Overlapping Images Layout */}
      <div className="relative mx-auto flex min-h-[600px] w-full max-w-7xl items-center justify-center overflow-hidden py-32 lg:py-48">
        
        {/* Massive Background Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold tracking-tighter text-neutral-200 md:text-[20rem] lg:text-[28rem]">
          -1500
        </div>

        {/* Images Grid/Absolute Layout */}
        <div className="relative z-10 grid h-full w-full grid-cols-12 gap-4 px-4 md:px-8">
          
          {/* Left Portrait Image */}
          <div className="col-span-6 md:col-span-4 lg:col-span-3 lg:col-start-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=800&auto=format&fit=crop"
                alt="Hiker portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-6 md:col-span-8 lg:col-span-7 relative flex flex-col items-center justify-center mt-24 md:mt-0">
            {/* Center Top Floating Jacket */}
            <div className="absolute -top-16 left-1/4 z-20 h-40 w-32 md:-top-32 md:left-1/3 md:h-64 md:w-56 lg:-top-48 lg:left-1/4 lg:h-72 lg:w-64">
              <div className="relative h-full w-full overflow-hidden rounded-[12px] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop"
                  alt="Floating jacket"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Small Portrait */}
            <div className="relative z-10 ml-8 mt-32 h-48 w-32 md:mt-16 md:h-64 md:w-48">
              <div className="relative h-full w-full overflow-hidden rounded-[12px] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=800&auto=format&fit=crop"
                  alt="Hiker small portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Landscape Image */}
            <div className="absolute -bottom-16 right-0 z-0 h-40 w-56 md:-right-8 md:bottom-8 md:h-56 md:w-80 lg:-right-16 lg:bottom-0 lg:h-64 lg:w-96">
              <div className="relative h-full w-full overflow-hidden rounded-[16px] shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop"
                  alt="Two hikers walking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

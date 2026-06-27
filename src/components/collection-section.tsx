import Image from "next/image";

export function CollectionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F6F2] px-6 py-24 md:px-12 md:py-32 lg:px-24">
      {/* Topographic Background Line (SVG) */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full stroke-neutral-300 opacity-60"
        viewBox="0 0 1440 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 1150 -50 C 1150 150, 1050 250, 1000 300 C 900 400, 700 450, 650 550 C 600 650, 300 500, 250 600 C 200 700, 300 800, 350 900 C 400 1000, 600 1100, 550 1300"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 1250 -50 C 1250 150, 1150 300, 1050 350 C 950 400, 800 500, 750 650 C 700 800, 400 650, 350 750 C 300 850, 500 1000, 450 1300"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Typography Content */}
          <div className="flex flex-col gap-12 lg:col-span-8 xl:gap-24">
            <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              Our new hiking collection is the ultimate invitation to explore the great outdoors, where cutting-edge technology meets contemporary style.
            </h2>
            
            <p className="max-w-md text-sm leading-relaxed text-[#4A4A4A] md:text-base lg:ml-[25%] lg:mt-8">
              Designed in the heart of the French Alps and crafted with hikers in mind, our latest collection combines technical performance with modern aesthetics, ensuring you look and feel your best on every trail. Embrace the wonders of hiking and elevate your outdoor experience, where every step inspires a deeper connection to the mountains.
            </p>
          </div>

          {/* Right Image (Backpack) */}
          <div className="lg:col-span-4 lg:col-start-9 lg:row-span-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/backpack.jpg" // Replace with actual image
                alt="Orange hiking backpack in the field"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Left Image (Boot in water) */}
          <div className="lg:col-span-3 lg:mt-16">
            <div className="relative aspect-square w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/boot.jpg" // Replace with actual image
                alt="Hiking boot stepping in water"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Center Image (Two hikers) */}
          <div className="lg:col-span-5 lg:col-start-4 lg:mt-32">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
              <Image
                src="/images/hikers.jpg" // Replace with actual image
                alt="Two hikers looking at the view"
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

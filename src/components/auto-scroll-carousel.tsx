"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id?: string;
  description?: string;
  asset: any;
  className?: string;
}

interface AutoScrollCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const AutoScrollCarousel = ({
  heading = "Our Sponsors",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      asset: "/sponsors/1.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      asset: "/sponsors/2.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      asset: "/sponsors/3.png",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      asset: "/sponsors/7.png",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      asset: "/sponsors/5.svg",
      className: "h-32 w-auto h-32 w-auto drop-shadow-[0_0_6px_rgba(0,0,0,0.9)",
    },
  ],
}: AutoScrollCarouselProps) => {


  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center gap-10">
        {/* <div className="flex flex-col items-center text-center px-4">
          <h1 className="text-pretty text-[2.5rem] lg:text-[5rem] uppercase font-bold">
            {heading}
          </h1>
        </div> */}
        <div className="w-full">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  playOnInit: true,
                  speed: 2,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                  // direction: "rtl",
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-0 md:-ml-4">
                {[...logos, ...logos].map((logo, index) => (
                  <CarouselItem
                    key={`${logo.id}-${index}`}
                    className=" flex pl-2 md:pl-4 basis-[50%] md:basis-1/3 lg:basis-1/4 xl:basis-[21%] 2xl:basis-[18%] 4xl:basis-[5%]"
                  >
                    <div className="cursor-grab mx-8 flex shrink-0 items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center py-6 px-8 rounded-4xl  border border-foreground/60">
                        <img
                          src={logo.asset.url}
                          alt={logo.description}
                          width={180}
                          height={180}
                          className={`${logo.className} max-h-[74px] object-contain`}
                        />
                       
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            {/* Gradient overlays */}
            <div className="absolute -left-1 w-[20px] h-full bg-gradient-to-r from-background from-[3%] to-transparent"></div>
            <div className="absolute -right-1 w-[20px] h-full bg-gradient-to-l from-background from-[3%] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AutoScrollCarousel };

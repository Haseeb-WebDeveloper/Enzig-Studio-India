'use client'

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { fetchBrandingForLanding } from '@/lib/sanity';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brands, setBrands] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrandingForLanding();
      setBrands(data);
    };
    fetchData();
  }, []);

  const projects = [
    { 
      id: 1, 
      name: 'Web & App Development', 
      icon: '/projects/web-app-development.svg',
      popup: {
        title: 'ZippyBot: Animated Robot Character',
        description: 'Suitable for use in educational content, marketing campaigns, or entertainment.',
      },
      projectsImageUrl: brands.flatMap((brand: any) => 
        brand.images.filter((img: any) => img.categories.includes('Web & App Development'))
          .map((img: any) => img.asset.url)
      ).length > 0 
        ? brands.flatMap((brand: any) => 
            brand.images.filter((img: any) => img.categories.includes('Web & App Development'))
              .map((img: any) => img.asset.url)
          )
        : ["/test-image.jpeg", "/test-image.jpeg"]
    },
    { 
      id: 2, 
      name: 'Digital Art & Illustration', 
      icon: '/projects/digital-art-illustration.svg',
      popup: {},
      projectsImageUrl: brands.flatMap((brand: any) => 
        brand.images.filter((img: any) => img.categories.includes('Digital Art & Illustration'))
          .map((img: any) => img.asset.url)
      ).length > 0
        ? brands.flatMap((brand: any) => 
            brand.images.filter((img: any) => img.categories.includes('Digital Art & Illustration'))
              .map((img: any) => img.asset.url)
          )
        : ["/test-image.jpeg", "/test-image.jpeg"]
    },
    { 
      id: 3, 
      name: '3D Modeling & Animation', 
      icon: '/projects/3d-modeling-animation.svg',
      projectsImageUrl: brands.flatMap((brand: any) => 
        brand.images.filter((img: any) => img.categories.includes('3D Modeling & Animation'))
          .map((img: any) => img.asset.url)
      ).length > 0
        ? brands.flatMap((brand: any) => 
            brand.images.filter((img: any) => img.categories.includes('3D Modeling & Animation'))
              .map((img: any) => img.asset.url)
          )
        : ["/test-image.jpeg", "/test-image.jpeg"]
    },
    { 
      id: 4, 
      name: 'Social Media Management', 
      icon: '/projects/social-media-managment.svg',
      projectsImageUrl: brands.flatMap((brand: any) => 
        brand.images.filter((img: any) => img.categories.includes('Social Media Management'))
          .map((img: any) => img.asset.url)
      ).length > 0
        ? brands.flatMap((brand: any) => 
            brand.images.filter((img: any) => img.categories.includes('Social Media Management'))
              .map((img: any) => img.asset.url)
          )
        : ["/test-image.jpeg", "/test-image.jpeg"]
    },
    { 
      id: 5, 
      name: 'Branding & Identity', 
      icon: '/projects/branding-identity.svg',
      projectsImageUrl: brands.flatMap((brand: any) => 
        brand.images.filter((img: any) => img.categories.includes('Branding & Marketing'))
          .map((img: any) => img.asset.url)
      ).length > 0
        ? brands.flatMap((brand: any) => 
            brand.images.filter((img: any) => img.categories.includes('Branding & Marketing'))
              .map((img: any) => img.asset.url)
          )
        : ["/test-image.jpeg", "/test-image.jpeg"]
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === projects[currentProject].projectsImageUrl.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentProject, projects]);

  const handleProjectChange = (index: number) => {
    setIsTransitioning(true);
    setCurrentProject(index);
    setCurrentSlide(0);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => 
      prev === projects[currentProject].projectsImageUrl.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => 
      prev === 0 ? projects[currentProject].projectsImageUrl.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="w-full min-h-screen bg-background py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-1">
          {/* Left sidebar */}
          <div className="w-full md:w-[40%] flex flex-col justify-between items-center gap-3 sm:gap-1">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleProjectChange(index)}
                className={`cursor-pointer w-full p-3 sm:p-4 border border-border rounded-2xl sm:rounded-3xl h-full flex items-center justify-start gap-3 sm:gap-4 group`}
              >
                <div className={`flex items-center justify-center rounded-full p-[12px] sm:p-[16px] transition-colors duration-300 group-hover:bg-primary/10 ${currentProject === index ? 'bg-primary' : ''}`}>
                  <Image 
                    src={project.icon} 
                    alt={project.name} 
                    width={24} 
                    height={24} 
                    priority
                    quality={100}
                    className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
                  />
                </div>
                <span className="lora-medium text-[18px] sm:text-[24px] text-start">{project.name}</span>
              </button>
            ))}
          </div>

          {/* Main content area */}
          <div className="w-full md:w-[70%] relative h-[300px] md:h-auto">
            <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={projects[currentProject].projectsImageUrl[currentSlide]}
                alt={projects[currentProject].name}
                fill
                priority
                quality={100}
                className={`object-cover transition-all duration-300 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
              />

              {/* Popup for Web & App Development */}
              {currentProject === 0 && (
                <div className="absolute bottom-10 left-4 right-4 sm:left-8 sm:right-8 bg-foreground/90 backdrop-blur-sm py-[20px] sm:py-[40px] px-[16px] sm:px-[32px] rounded-[16px] sm:rounded-[24px] space-y-2 sm:space-y-3">
                  <h3 className="montserrat-semibold text-[24px] sm:text-[32px] text-background">
                    {projects[currentProject]?.popup?.title}
                  </h3>
                  <p className="lora-medium text-[16px] sm:text-[24px] text-background/90">
                    {projects[currentProject]?.popup?.description}
                  </p>
                </div>
              )}

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 flex justify-center gap-2">
                {projects[currentProject].projectsImageUrl.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white w-3 h-3 sm:w-4 sm:h-4' : 'bg-foreground/80 w-3 h-3 sm:w-4 sm:h-4'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button 
                onClick={prevSlide}
                className="absolute top-[20%] left-4 sm:left-8 -translate-y-1/2 bg-foreground/80 hover:bg-foreground cursor-pointer text-background rounded-full p-2 sm:p-3 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-background/80 hover:text-background transition-colors" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute top-[20%] right-4 sm:right-8 -translate-y-1/2 bg-foreground/80 hover:bg-foreground cursor-pointer text-background rounded-full p-2 sm:p-3 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-background/80 hover:text-background transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client'

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { sanityFetch } from '@/lib/sanity';
import { homePortfolioQuery } from '@/lib/queries';
import Link from 'next/link';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectsData, setProjectsData] = useState<any>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityFetch(homePortfolioQuery());
      setProjectsData(data);
    };
    fetchData();
  }, []);

  const getProjectImages = (type: string) => {
    if (!projectsData) return ["/test-image.jpeg", "/test-image.jpeg"];
    
    switch (type) {
      case 'webApp':
        return projectsData.webApp?.map((item: any) => item.image.asset.url) || ["/test-image.jpeg", "/test-image.jpeg"];
      case 'digitalArt':
        return projectsData.digitalArt?.map((item: any) => item.asset.url) || ["/test-image.jpeg", "/test-image.jpeg"];
      case 'socialMedia':
        return projectsData.socialMedia?.map((item: any) => item.asset.url) || ["/test-image.jpeg", "/test-image.jpeg"];
      case '3dProject':
        return projectsData["3dProject"]?.video?.asset?.url ? [projectsData["3dProject"].video.asset.url] : ["/test-image.jpeg", "/test-image.jpeg"];
      case 'branding':
        return projectsData.brands?.flatMap((brand: any) => 
          brand.brandImages.map((img: any) => img.asset.url)
        ) || ["/test-image.jpeg", "/test-image.jpeg"];
      default:
        return ["/test-image.jpeg", "/test-image.jpeg"];
    }
  };

  const getProjectPopup = (type: string, index: number) => {
    if (!projectsData) return null;
    
    switch (type) {
      case 'webApp':
        return projectsData.webApp && projectsData.webApp[index] ? {
          title: projectsData.webApp[index].title,
          description: projectsData.webApp[index].description,
          slug: projectsData.webApp[index].slug
        } : null;
      default:
        return null;
    }
  };

  const getProjectUrl = (type: string, index: number) => {
    if (!projectsData) return '#';
    
    switch (type) {
      case 'webApp':
        return projectsData.webApp && projectsData.webApp[index]?.slug ? `/portfolio/${projectsData.webApp[index].slug.current}` : '#';
      case 'digitalArt':
        return '/graphics-design';
      case '3dProject':
        return '/3d-projects';
      case 'socialMedia':
        return '/social-media';
      case 'branding':
        return '/branding';
      default:
        return '#';
    }
  };

  const isVideoUrl = (url: string) => {
    return url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg'));
  };

  const projects = [
    {
      id: 1,
      name: 'Web & App Development',
      icon: '/projects/web-app-development.svg',
      projectsImageUrl: getProjectImages('webApp'),
      popup: getProjectPopup('webApp', currentSlide),
      getUrl: (index: number) => getProjectUrl('webApp', index)
    },
    {
      id: 2,
      name: 'Digital Art & Illustration',
      icon: '/projects/digital-art-illustration.svg',
      projectsImageUrl: getProjectImages('digitalArt'),
      getUrl: (index: number) => getProjectUrl('digitalArt', index)
    },
    {
      id: 3,
      name: '3D Modeling & Animation',
      icon: '/projects/3d-modeling-animation.svg',
      projectsImageUrl: getProjectImages('3dProject'),
      getUrl: (index: number) => getProjectUrl('3dProject', index)
    },
    {
      id: 4,
      name: 'Social Media Management',
      icon: '/projects/social-media-managment.svg',
      projectsImageUrl: getProjectImages('socialMedia'),
      getUrl: (index: number) => getProjectUrl('socialMedia', index)
    },
    {
      id: 5,
      name: 'Branding & Identity',
      icon: '/projects/branding-identity.svg',
      projectsImageUrl: getProjectImages('branding'),
      getUrl: (index: number) => getProjectUrl('branding', index)
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!projects[currentProject]?.projectsImageUrl?.length) return;
    
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
    if (!projects[currentProject]?.projectsImageUrl?.length) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === projects[currentProject].projectsImageUrl.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (!projects[currentProject]?.projectsImageUrl?.length) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) =>
      prev === 0 ? projects[currentProject].projectsImageUrl.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section className="w-full min-h-screen py-16 sm:py-24">
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
            <div className="relative h-full rounded-2xl sm:rounded-3xl bg-foreground/10 overflow-hidden">
              {projects[currentProject]?.projectsImageUrl?.length > 0 && (
                <Link href={projects[currentProject].getUrl(currentSlide)}>
                  {isVideoUrl(projects[currentProject].projectsImageUrl[currentSlide]) ? (
                    <video
                      ref={videoRef}
                      src={projects[currentProject].projectsImageUrl[currentSlide]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-contain object-center transition-all duration-300 w-full md:h-[500px] h-full my-auto cursor-pointer"
                    />
                  ) : (
                    <Image
                      src={projects[currentProject].projectsImageUrl[currentSlide]}
                      alt={projects[currentProject].name}
                      width={1000}
                      height={1000}
                      priority
                      quality={100}
                      className="object-contain object-center transition-all duration-300 w-full md:h-[500px] h-full my-auto cursor-pointer"
                    />
                  )}
                </Link>
              )}

              {/* Popup for Web & App Development */}
              {currentProject === 0 && projects[currentProject]?.popup && (
                <div className="absolute bottom-10 left-4 right-4 sm:left-8 sm:right-8 bg-foreground/90 backdrop-blur-sm py-[20px] sm:py-[40px] px-[16px] sm:px-[32px] rounded-[16px] sm:rounded-[24px] space-y-2 sm:space-y-3">
                  <h3 className="montserrat-semibold text-[24px] sm:text-[32px] text-background">
                    {projects[currentProject].popup?.title}
                  </h3>
                  <p className="lora-medium text-[16px] sm:text-[24px] text-background/90">
                    {projects[currentProject].popup?.description}
                  </p>
                </div>
              )}

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 flex justify-center gap-2">
                {projects[currentProject]?.projectsImageUrl?.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-3 h-3 sm:w-4 sm:h-4' : 'bg-foreground/80 w-3 h-3 sm:w-4 sm:h-4'
                      }`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-[10%] left-4 sm:left-8 -translate-y-1/2 bg-foreground/80 hover:bg-foreground cursor-pointer text-background rounded-full p-2 sm:p-3 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-background/80 hover:text-background transition-colors" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-[10%] right-4 sm:right-8 -translate-y-1/2 bg-foreground/80 hover:bg-foreground cursor-pointer text-background rounded-full p-2 sm:p-3 transition-colors duration-300"
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
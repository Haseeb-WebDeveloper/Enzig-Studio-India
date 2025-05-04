// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const images = [
//   "/blog/blog-hero.png",
//   "/creativity-content.png",
//   "/blog/blog-hero.png",
//   "/blog/blog-hero.png",
// ];

// export default function StackedImageScroll() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const imagePanels = container.querySelectorAll(".panel");

//     // Set the initial position of images
//     gsap.set(imagePanels, { position: "absolute", top: "100%", left: 0, width: "100%", height: "100%" });
//     gsap.set(imagePanels[0], { top: 0 });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top", // start when the container hits the top
//         end: `+=${imagePanels.length * 100}%`, // End when all images are scrolled
//         scrub: true,
//         pin: true,
//       },
//     });

//     // Animate each image moving into view
//     imagePanels.forEach((panel, i) => {
//       if (i === 0) return;
//       tl.to(panel, { top: "0%", duration: 1, ease: "power1.inOut" }, i * 0.5); // Smooth transition for each image
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
//       {images.map((src, index) => (
//         <div
//           key={index}
//           className="panel absolute inset-0 w-full h-full"
//         >
//           <img
//             src={src}
//             alt={`Image ${index}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// "use client"

// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { gsap } from 'gsap';

// export default function FlipGallery() {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const galleryRef = useRef(null);
//     const popupRef = useRef(null);
//     const popupContentRef = useRef(null);
//     const popupImageRef = useRef(null);
//     const descriptionRef = useRef(null);
//     const imageRefs = useRef({});
//     const initialPositionRef = useRef<any>(null);

//     // Sample gallery data
//     const galleryItems = [
//         {
//             id: 1,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 1",
//             description: "This is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus.is is the first image in our gallery. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nisi consectetur purus, eget porttitor nisl nisl consectetur purus."
//         },
//         {
//             id: 2,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 2",
//             description: "This is the second image in our gallery. Curabitur at velit quis justo tincidunt dignissim. Proin vitae nunc vitae magna pellentesque luctus."
//         },
//         {
//             id: 3,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 3",
//             description: "This is the third image in our gallery. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pharetra, magna vestibulum aliquet ultrices."
//         },
//         {
//             id: 4,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 4",
//             description: "This is the fourth image in our gallery. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum."
//         },
//         {
//             id: 5,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 5",
//             description: "This is the fifth image in our gallery. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
//         },
//         {
//             id: 6,
//             src: "/blog/blog-hero.png",
//             alt: "Gallery Image 6",
//             description: "This is the sixth image in our gallery. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis."
//         },
//     ];

//     const openPopup = (item: any) => {
//         setSelectedImage(item);

//         // Store the source element's position for later use
//         const sourceElement = imageRefs.current[item.id];
//         const sourceBounds = sourceElement.getBoundingClientRect();

//         // Store initial position for precise animation
//         initialPositionRef.current = {
//             id: item.id,
//             x: sourceBounds.left,
//             y: sourceBounds.top,
//             width: sourceBounds.width,
//             height: sourceBounds.height
//         };

//         // Set isOpen to true to render the popup
//         setIsOpen(true);

//         // Wait for popup to be rendered in the DOM
//         setTimeout(() => {
//             const targetElement = popupImageRef.current;
//             const targetBounds = targetElement.getBoundingClientRect();

//             // FLIP animation
//             const invert = {
//                 x: initialPositionRef.current.x - targetBounds.left,
//                 y: initialPositionRef.current.y - targetBounds.top,
//                 scaleX: initialPositionRef.current.width / targetBounds.width,
//                 scaleY: initialPositionRef.current.height / targetBounds.height
//             };

//             // Set initial position exactly matching the source image
//             gsap.set(targetElement, {
//                 x: invert.x,
//                 y: invert.y,
//                 scaleX: invert.scaleX,
//                 scaleY: invert.scaleY,
//                 opacity: 0.9,
//                 transformOrigin: "top left"
//             });

//             // Animate to the final position
//             gsap.to(targetElement, {
//                 duration: 0.7,
//                 x: 0,
//                 y: 0,
//                 scaleX: 1,
//                 scaleY: 1,
//                 opacity: 1,
//                 ease: "power3.inOut",
//                 onComplete: () => {
//                     document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
//                 }
//             });

//             // Animate the popup overlay
//             gsap.fromTo(popupRef.current,
//                 { backgroundColor: 'rgba(0, 0, 0, 0)' },
//                 { backgroundColor: 'rgba(0, 0, 0, 0.9)', duration: 0.7, ease: "power2.inOut" }
//             );

//             // Animate in the description text
//             gsap.fromTo(
//                 descriptionRef.current,
//                 { opacity: 0, y: 20 },
//                 { opacity: 1, y: 0, duration: 0.5, delay: 0.4, ease: "power2.out" }
//             );

//             // Animate in the close button
//             gsap.fromTo(
//                 ".close-button",
//                 { opacity: 0, scale: 0.7 },
//                 { opacity: 1, scale: 1, duration: 0.4, delay: 0.6, ease: "back.out(1.7)" }
//             );
//         }, 10);
//     };

//     const closePopup = () => {
//         if (!isOpen || !selectedImage || !initialPositionRef.current) return;

//         // First animate out the description and close button
//         const timeline = gsap.timeline();

//         timeline.to(descriptionRef.current, {
//             opacity: 0,
//             y: 10,
//             duration: 0.3,
//             ease: "power2.in"
//         });

//         timeline.to(".close-button", {
//             opacity: 0,
//             scale: 0.7,
//             duration: 0.2,
//             ease: "power1.in"
//         }, "<");

//         // Then animate the image back to its original place
//         timeline.add(() => {
//             // Get the current bounds of the popup image container
//             const sourceElement = popupImageRef.current;
//             const sourceBounds = sourceElement.getBoundingClientRect();

//             // Get the current position of the target thumbnail
//             const targetElement = imageRefs.current[initialPositionRef.current.id];
//             const targetBounds = targetElement.getBoundingClientRect();

//             // Calculate the transform needed to match the thumbnail position exactly
//             const finalTransform = {
//                 x: targetBounds.left - sourceBounds.left,
//                 y: targetBounds.top - sourceBounds.top,
//                 scaleX: targetBounds.width / sourceBounds.width,
//                 scaleY: targetBounds.height / sourceBounds.height
//             };

//             // Animate the popup back to the gallery
//             gsap.to(sourceElement, {
//                 duration: 0.7,
//                 x: finalTransform.x,
//                 y: finalTransform.y,
//                 scaleX: finalTransform.scaleX,
//                 scaleY: finalTransform.scaleY,
//                 opacity: 0.8,
//                 ease: "power3.inOut",
//                 transformOrigin: "top left",
//                 onComplete: () => {
//                     setIsOpen(false);
//                     setSelectedImage(null);
//                     initialPositionRef.current = null;
//                     document.body.style.overflow = 'auto'; // Restore scrolling
//                 }
//             });

//             // Animate the overlay fade out
//             gsap.to(popupRef.current, {
//                 backgroundColor: 'rgba(0, 0, 0, 0)',
//                 duration: 0.7,
//                 ease: "power2.inOut"
//             });
//         });
//     };

//     // Handle escape key to close popup
//     useEffect(() => {
//         const handleEscapeKey = (e) => {
//             if (e.key === 'Escape' && isOpen) {
//                 closePopup();
//             }
//         };

//         window.addEventListener('keydown', handleEscapeKey);
//         return () => {
//             window.removeEventListener('keydown', handleEscapeKey);
//             document.body.style.overflow = 'auto'; // Ensure scroll is restored when component unmounts
//         };
//     }, [isOpen]);

//     // Recalculate positions if window is resized while popup is open
//     useEffect(() => {
//         const handleResize = () => {
//             if (isOpen && selectedImage && initialPositionRef.current) {
//                 // Close the popup if the window is resized to avoid position issues
//                 closePopup();
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isOpen, selectedImage]);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery with GSAP FLIP</h1>

//             {/* Gallery Grid */}
//             <div
//                 ref={galleryRef}
//                 className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
//             >
//                 {galleryItems.map((item) => (
//                     <div
//                         key={item.id}
//                         className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//                         onClick={() => openPopup(item)}
//                     >
//                         <div
//                             ref={(el) => (imageRefs.current[item.id] = el)}
//                             className="w-full h-64 relative"
//                         >
//                             <Image
//                                 src={item.src}
//                                 alt={item.alt}
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                 style={{ objectFit: "cover" }}
//                                 className="transition-transform duration-300 hover:scale-105"
//                             />
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Fullscreen Popup */}
//             {isOpen && (
//                 <div ref={popupRef} className="popup-overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
//                     <div ref={popupContentRef} className="popup-content bg-white  w-full max-h-[100vh] overflow-y-auto p-6 rounded-lg">
//                         <div className="relative">
//                             <Image
//                                 ref={popupImageRef}
//                                 src={selectedImage?.src || ""}
//                                 alt={selectedImage?.alt || ""}
//                                 width={800}
//                                 height={600}
//                                 className="rounded-lg"
//                             />
//                             <button onClick={closePopup} className="close-button absolute top-4 right-4 bg-black text-white p-2 rounded-full">
//                                 X
//                             </button>
//                         </div>
//                         <div ref={descriptionRef} className="mt-4 text-gray-700">
//                             {selectedImage?.description}
//                         </div>
//                     </div>
//                 </div>
//             )}

//         </div>
//     );
// }
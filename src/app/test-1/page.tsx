import ImageCarousel from "@/components/Image-carousel-with-speed";
import FlipGallery from "@/components/ui/image-to-popup";
import ImageGalleryPopup from "@/components/ui/image-to-popup";
import StackedImageScroll from "@/components/ui/pined-images";
import RotatedColumnsParallax from "@/components/ui/rotated-images";
import FluidSimulation from "@/components/ui/webgl";

export default function Test1() {
    return (
        <main className="py-60 min-h-[300vh] ">
        {/* <ImageCarousel /> */}
        {/* <RotatedColumnsParallax /> */}
        {/* <FlipGallery /> */}
        {/* <StackedImageScroll /> */}
        <FluidSimulation />
        </main>
    )
}

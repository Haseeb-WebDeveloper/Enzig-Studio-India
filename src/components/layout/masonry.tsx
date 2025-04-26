import Image from "next/image";

interface MasonryProps {
    images: any;
}

export default function Masonry({ images }: MasonryProps) {
    return (
        <>
            <div className="columns-2 md:columns-3 lg:columns-3 gap-0 space-y-0 p-0 overflow-x-hidden">
                {images.map((img: any, index: any) => (
                    <Image
                        key={index}
                        src={img.asset.url}
                        alt={`Project image ${index + 1}`}
                        width={1024}
                        height={768}
                        className="w-full"
                    />
                ))}
            </div>
        </>
    )
}
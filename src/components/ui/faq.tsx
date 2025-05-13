import { PortableText } from "@portabletext/react";
import { useState } from "react";

export default function Faq({ faq }: { faq: any }) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    }

    return (
        <>
            {faq && faq.length > 0 && (
                <div >
                    <h2 className="montserrat-bold text-[28px] md:text-[54px] leading-[130%] text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-2">
                        {faq.map((item: any, index: any) => (
                            <div key={index} className="border border-background/[0.05] rounded-lg overflow-hidden">
                                <button
                                    className={`cursor-pointer w-full text-left flex justify-between items-center px-4 py-4 ${openFaqIndex === index
                                        ? "bg-[#FFFFF0] text-[#E018FA]"
                                        : "bg-[#F8F8F8] hover:bg-gray-100"
                                        }`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="space-y-2 w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="montserrat-m-h2 text-background">{item.question}</h3>
                                            <p className={`text-xl font-medium  text-[#E018FA]`}>
                                                {openFaqIndex === index ? "−" : "+"}
                                            </p>
                                        </div>
                                        {openFaqIndex === index && (
                                            <div className="prose text-background prose-p:lora-blog-h2 lora-blog-h2">
                                                <PortableText value={item.answer} />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
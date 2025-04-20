// components/RichText.tsx
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity' // adjust the path to your sanity utility

interface RichTextProps {
  content: any
}

const RichText: React.FC<RichTextProps> = ({ content }) => {
  const components = {
    types: {
      image: ({ value }: any) => (
        <div className="relative border border-gray-200 min-h-fit h-full w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || "Blog post image"}
            width={500}
            height={500}
            className="object-contain h-full w-full"
          />
        </div>
      ),
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-medium my-4">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl font-medium my-3">{children}</h4>,
      normal: ({ children }: any) => <p className="text-lg leading-relaxed my-4">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
      number: ({ children }: any) => <li className="mb-1">{children}</li>,
    },
    marks: {
      link: ({ value, children }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => (
        <code className="bg-gray-100 text-sm font-mono px-1 py-0.5 rounded">
          {children}
        </code>
      ),
    },
  }

  return (
    <div className="prose">
      <PortableText value={content} components={components} />
    </div>
  )
}

export default RichText

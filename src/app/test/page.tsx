"use client"

import Image from "next/image";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function CarPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data - in real app would be passed as props
  const carData = {
    year: '2019',
    make: 'BMW', 
    model: 'i3',
    trim: '120Ah w/Range Extender',
    mileage: '24,921 mi.',
    condition: 'Used',
    basics: {
      'Exterior color': 'Imperial Blue Metallic w/ Frozen Grey Accent',
      'Interior color': 'Deka Dark',
      'Drivetrain': 'Rear-wheel Drive',
      'Transmission': 'Automatic',
      'Engine': 'Range-Extended Electric 168hp 184ft. lbs.',
      'VIN': 'WBY8P4C50K7E75253',
      'Stock #': 'MCE1255',
      'Mileage': '24,921 mi.'
    },
    images: [
      '/gallery_1.jpeg',
      '/gallery_2.jpeg', 
      '/gallery_3.png',
      '/gallery_4.png'
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === carData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="relative aspect-[4/3] w-full mb-4">
              <Image
                src={carData.images[currentImageIndex]}
                alt={`${carData.year} ${carData.make} ${carData.model}`}
                className="w-full h-full object-cover rounded-lg"
                fill
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span>{currentImageIndex + 1}/{carData.images.length}</span>
              </div>
            </div>

            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {carData.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative size-16 sm:size-20 rounded-md overflow-hidden ${
                    idx === currentImageIndex ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="object-cover"
                    fill
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-wrap items-baseline gap-x-2 mb-2">
              <span className="text-gray-600 bg-red-500">{carData.condition}</span>
              <h1 className="text-2xl font-bold">
                {carData.year} {carData.make} {carData.model} {carData.trim}
              </h1>
            </div>
            <p className="text-gray-600 mb-4">{carData.mileage}</p>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            {/* Basics Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Basics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(carData.basics).map(([key, value]) => (
                  <div key={key} className="border-b pb-2">
                    <dt className="text-gray-600">{key}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Contact Dealer
              </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

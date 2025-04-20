'use client';

import React from 'react';

export default function SectionLoading() {
  return (
    <main className="relative">
      {/* Hero Section Loading Skeleton */}
      <section className="pb-20 pt-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="space-y-12 w-full">
              <div className="h-12 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="space-y-4">
                <div className="h-5 bg-gray-200 animate-pulse rounded w-full"></div>
                <div className="h-5 bg-gray-200 animate-pulse rounded w-full"></div>
                <div className="h-5 bg-gray-200 animate-pulse rounded w-5/6"></div>
              </div>
              <div className="flex w-full flex-wrap gap-4 mt-4">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index} 
                    className="w-[100px] h-[60px] bg-gray-200 animate-pulse rounded"
                  />
                ))}
              </div>
            </div>
            <div className="h-[400px] w-full bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </section>

      {/* Second Section Loading Skeleton */}
      <section className="bg-foreground text-background py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="space-y-6 w-full">
              <div className="h-8 bg-gray-700 animate-pulse rounded w-3/4"></div>
              <div className="h-[290px] w-full bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
            <div className="space-y-6 flex flex-col gap-4 justify-between w-full">
              {[1, 2, 3].map((index) => (
                <div key={index} className="h-5 bg-gray-700 animate-pulse rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Loading Skeleton */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="bg-primary text-background p-12 flex flex-col justify-center relative h-[500px]">
              <div className="h-8 bg-gray-700 animate-pulse rounded w-3/4 mt-8 mb-8"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-700 animate-pulse rounded w-1/2"></div>
                <div className="h-4 bg-gray-700 animate-pulse rounded w-1/3"></div>
              </div>
            </div>
            <div className="h-[500px] w-full bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section Loading Skeleton */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <div className="h-8 bg-gray-200 animate-pulse rounded w-1/2 mx-auto"></div>
            <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="border-2 border-foreground/20 p-7 space-y-4 h-[250px]">
                <div className="h-[40px] w-[40px] bg-gray-200 animate-pulse rounded"></div>
                <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Loading Skeleton */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-10 bg-gray-700 animate-pulse rounded w-1/2 mx-auto mb-12"></div>

          <div className="space-y-4 max-w-[1000px] mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] overflow-hidden p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
                  <div className="h-6 w-6 bg-gray-300 animate-pulse rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Loading Skeleton */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="h-10 bg-gray-700 animate-pulse rounded w-3/4 max-w-lg mx-auto"></div>
            <div className="h-5 bg-gray-700 animate-pulse rounded w-1/2 max-w-md mx-auto"></div>
            <div className="h-12 w-48 bg-gray-700 animate-pulse rounded mt-4"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
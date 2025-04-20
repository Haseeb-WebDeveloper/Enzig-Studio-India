'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-end px-6 py-24 bg-background">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center text-center">

        <h1 className="montserrat-eb-h2 text-primary mb-6">
          No Data Found
        </h1>
        
        <p className="lora-medium text-[18px] md:text-[20px] leading-[150%] max-w-lg mb-12">
          We couldn't find any data for this page. Please try again later.
        </p>

      </div>
    </main>
  );
}
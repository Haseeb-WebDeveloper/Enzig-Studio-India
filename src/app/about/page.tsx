
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  { year: '2019', text: 'Enzig Studio was founded with a vision for bold creativity.' },
  { year: '2021', text: 'Expanded into content creation, branding & UI/UX.' },
  { year: '2023', text: 'Launched podcast IP and scaled D2C brand partnerships.' },
  { year: '2025', text: 'Venturing into product design and interactive storytelling.' },
];

const AboutPage = () => {
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Enzig Studio</h1>
        <p className="text-lg text-gray-600">We design bold experiences rooted in strategy and storytelling.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What does 'Enzig' mean?</h2>
        <p className="text-gray-700">
          'Enzig' stands for endless zigzags of creativity — our path is never linear, and that’s our strength.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our History</h2>
        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold">{item.year}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

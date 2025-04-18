# Enzig Studio India - Digital Marketing Agency Website

A modern, responsive website for Enzig Studio India - a digital marketing agency offering comprehensive marketing solutions, built with Next.js 15 and Sanity CMS.

## Features

- 🚀 Built with Next.js 15 and TypeScript
- 📝 Content management with Sanity CMS
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast page loads with static generation
- 🖼️ Optimized image handling with Next/Image
- 📊 Analytics integration with Vercel
- 🎭 Beautiful animations with Framer Motion and GSAP
- 🎠 Carousel functionality with Embla Carousel

## Services Showcased

- Google Ads
- E-Commerce Solutions
- Website Development
- Graphics & Video Production
- Social Media Management
- SEO Optimization
- Content Creation
- Meta Ads
- Graphics Design
- Analysis & ROI
- Branding & Logo Design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or bun

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd enzig-studio-india
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add necessary Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=your_api_version
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev --turbopack
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Sanity Studio

The Sanity Studio is located in the `enzig-studio-website` directory. To run it:

```bash
cd enzig-studio-website
npm install
npm run dev
```

The Sanity Studio will be available at [http://localhost:3333](http://localhost:3333).

## Project Structure

- `/src/app` - Next.js pages and routing
- `/src/components` - React components
- `/src/lib` - Utility functions and Sanity client configuration
- `/public` - Static assets
- `/enzig-studio-website` - Sanity Studio configuration

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Sanity](https://www.sanity.io/) - Headless CMS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [GSAP](https://greensock.com/gsap/) - Advanced animations
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel functionality
- [Vercel Analytics](https://vercel.com/analytics) - Performance monitoring

## Deployment

The project is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/enzig-studio-india)

## License

This project is private and proprietary. All rights reserved.

## Author

Enzig Studio India

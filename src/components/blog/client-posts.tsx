'use client';

import { useState } from 'react';
import { CategoryTabs } from './category-tabs';
import PostCard from './post-card';

interface Author {
  name: string;
  image: any;
  role?: string;
}

interface Category {
  title: string;
  description: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: any;
  publishedAt: string;
  author: Author;
  category: Category;
}

interface ClientPostsProps {
  categories: Category[];
  initialPosts: Post[];
  redirectPage: string;
}

export default function ClientPosts({ categories, initialPosts = [], redirectPage }: ClientPostsProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter posts based on active category
  const filteredPosts = Array.isArray(initialPosts) ? (
    activeCategory === 'all'
      ? initialPosts
      : initialPosts.filter(post => post.category?.title.toLowerCase() === activeCategory)
  ) : [];

  return (
    <>
      <CategoryTabs 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredPosts.map((post) => (
          <PostCard post={post} key={post._id} redirectPage={redirectPage} />
        ))}
      </div>
    </>
  );
} 
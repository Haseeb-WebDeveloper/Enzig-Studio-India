"use client";

import { cn } from "@/lib/utils";

interface Category {
  title: string;
  description: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryTabsProps) {
  const allCategories = [{ title: "all", description: "All posts" }, ...categories.filter(cat => cat.title !== "Featured")];

  return (
    <div className="flex overflow-x-auto whitespace-nowrap pb-2 md:flex-wrap md:overflow-visible md:border-b border-background/10 w-full scrollbar-hide">
      {allCategories.map((category) => (
        <button
          key={category.title}
          onClick={() => onCategoryChange(category.title.toLowerCase())}
          className={cn(
            "cursor-pointer montserrat-medium pb-1 mr-6 flex-shrink-0",
            activeCategory === category.title.toLowerCase()
              ? "border-b-2 border-background/80"
              : ""
          )}
        >
          {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
        </button>
      ))}
    </div>
  );
} 
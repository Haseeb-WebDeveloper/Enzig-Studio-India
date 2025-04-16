// Types
interface Author {
  name: string;
  image: any;
  bio: any[];
}

export interface PostCardProps {
    _id: string;
    title: string;
    slug: { current: string };
    description: string;
    mainImage: any;
    publishedAt: string;
    author: Author;
    category: {
      title: string;
      description: string;
    };
  }
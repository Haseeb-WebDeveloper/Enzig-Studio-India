// Types

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



export interface Author {
  name: string;
  image: any;
  role?: string;
  bio?: any[];
}

export interface Category {
  title: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: any[];
}

export interface RelatedPost {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: any;
  publishedAt: string;
  updatedAt?: string;
  content: any[];
  author: Author;
  category: Category;
  faq?: FAQ[];
  relatedPosts?: RelatedPost[];
}







export interface CaseStudy {
  _id: string;
  title: string;
  logo: any;
  slug: { current: string };
  description: string;
  mainImage: any;
  firstDescription: any[];
  secondDescription: any[];
  stats: any[];
  publishedAt: string;
  updatedAt?: string;
  content: any[];
  author: Author;
  category: Category;
  faq?: FAQ[];
  relatedPosts?: RelatedPost[];
}




export interface ThreeDProject {
  title: string;
  video?: {
    asset: {
      url: string;
    };
  };
  image: {
    asset: {
      url: string;
    };
  }[];
  testimonials: {
    text: string;
    name: string;
    category: string;
    image?: {
      asset: {
        url: string;
      };
    };
  }[];
}




export interface GraphicsDesign {
  title: string;
  homeImages?: {
    asset: {
      url: string;
    };
  }[];
  image: {
    asset: {
      url: string;
    };
  }[];
  testimonials: {
    text: string;
    name: string;
    category: string;
    image?: {
      asset: {
        url: string;
      };
    };
  }[];
}

export interface SanityImageAsset {
    _id: string;
    url: string;
  }
  
  export interface ImageWithAsset {
    asset: SanityImageAsset;
  }
  
  export interface Service {
    title: string;
    para: string;
    icon: ImageWithAsset;
  }
  
  export interface FaqAnswerChild {
    _type: string;
    marks: string[];
    text: string;
    _key: string;
  }
  
  export interface FaqAnswerBlock {
    markDefs: any[]; // You can make this more specific if needed
    children: FaqAnswerChild[];
    _type: string;
    style: string;
    _key: string;
  }
  
  export interface Faq {
    _id: string;
    question: string;
    answer: FaqAnswerBlock[];
  }
  
  export interface Testimonial {
    text: string;
    name: string;
    category: string;
    image: ImageWithAsset;
  }
  
  export interface StrategyAnalysisData {
    trustedByLogos: ImageWithAsset[];
    homeImages: ImageWithAsset;
    secondSectionHeading: string;
    fourthSectionHeading: string;
    fourthSectionPara: string;
    services: Service[];
    faq: Faq[];
    homeHeading: string;
    homePara: string;
    secondSectionImage: ImageWithAsset;
    secondSectionContent: string[];
    testimonials: Testimonial[];
  }

  export interface SolutionPageData {
    trustedByLogos: ImageWithAsset[];
    homeImages: ImageWithAsset;
    secondSectionHeading: string;
    thirdSectionHeading: string;
    thirdSectionItems: {
        title: string;
        image: ImageWithAsset;
        link: string;
    }[];
    fourthSectionHeading: string;
    fourthSectionPara: string;
    services: Service[];
    faq: Faq[];
    homeHeading: string;
    homePara: string;
    secondSectionImage: ImageWithAsset;
    secondSectionContent: string[];
    testimonials: Testimonial[];
  }
  
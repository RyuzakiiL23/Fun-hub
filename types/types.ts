export interface Testimonial {
    initials: string;
    name: string;
    content: string;
    rating: number;
  }
  
  export interface PricingPlan {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  }
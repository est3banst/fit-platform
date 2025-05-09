export interface Course {
  id: string;
  title: string;
  image: string;
  price: number;
  discount?: number;
  description: string;
  materials?: {
    videoHours?: number;
    ebooks?: string[]; 
    extras?: string[]; 
  };
}
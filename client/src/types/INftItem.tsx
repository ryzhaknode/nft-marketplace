export interface INftItem {
  name: string;
  description: string;
  interests: { name: string }[];
  authorName: string;
  companyName: string;
  images: { name: string; url: string }[];
  price: string;
  [key: string]: any;
}

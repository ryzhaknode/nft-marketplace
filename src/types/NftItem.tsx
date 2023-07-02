export interface INftItem {
  name: string;
  description: string;
  nftCodeNumber8: number;
  interests: { name: string }[];
  createdAt: Date;
  authorName: string;
  companyName: string;
  images: { name: string; url: string }[];
}

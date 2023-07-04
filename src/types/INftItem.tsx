export interface INftItem {
  name: string;
  description: string;
  nftCodeNumber8: string;
  interests: { name: string }[];
  createdAt: string;
  authorName: string;
  companyName: string;
  images: { name: string; url: string }[];
}

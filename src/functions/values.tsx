export const interests = [
  "Art",
  "Dao",
  "Nft-Pass",
  "Promo",
  "Gaming",
  "Vote-Power",
  "Meme",
  "3D-Art",
];

export const emptyArt = {
  name: "",
  description: "",
  nftCodeNumber8: Math.floor(Math.random() * 90000000 + 10000000).toString(),
  interests: [{ name: "" }],
  createdAt: new Date().toISOString(),
  authorName: "",
  companyName: "",
  images: [{ name: "", url: "" }],
  price: "",
};

export const emptyImages = {
  name: "",
  url: "",
};

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
  interests: [{ name: "" }],
  createdAt: new Date().toISOString(),
  authorName: "",
  companyName: "",
  images: [{ name: "", url: "" }],
  price: "",
};

export const randomEightNumToString = () => {
  return Date.now().toString().slice(-8);
};
export const randomEightNum = () => {
  return Number(Date.now().toString().slice(-8));
};

export const emptyImages = { name: "", url: "" };

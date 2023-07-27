import {
  sortByCheaperPrice,
  sortByBiggestPrice,
  sortByDateOlder,
  sortByDateNewest,
  sortByName,
} from "../store/sortSlice";
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

export const emptyUser = {
  name: "",
  username: "",
  interests: [{ name: "" }],
  password: "",
  repeatpassword: "",
  createdAt: new Date().toISOString(),
};

export const randomEightNumToString = () => {
  return Date.now().toString().slice(-8);
};
export const randomEightNum = () => {
  return Number(Date.now().toString().slice(-8));
};

export const emptyImages = { name: "", url: "" };

export const emptyLogin = { username: "", password: "" };

export const filtersList = [
  {
    label: "by price (from more expensive to cheaper)",
    callback: sortByCheaperPrice,
  },
  {
    label: "by price (from more cheaper to expensive)",
    callback: sortByBiggestPrice,
  },
  {
    label: "by date of creation (oldest first)",
    callback: sortByDateOlder,
  },
  { label: "by date of creation (newest first)", callback: sortByDateNewest },
  { label: "by name from A-Z", callback: sortByName },
];

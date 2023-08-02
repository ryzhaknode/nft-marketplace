import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

//creating nft
export const createNftCard = async ({
  name,
  description,
  price,
  interests,
  authorName,
  companyName,
}) => {
  const { data } = await $host.post("api/nftcard", {
    name,
    description,
    price,
    interests,
    authorName,
    companyName,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

//get all nfts
export const getAllNftCard = async () => {
  const { data } = await $host.get("api/nftcard");
  return data;
};

//get one all nft by id
export const getOneNftCard = async () => {
  const { data } = await $host.get("api/nftcard/:id");
  return data;
};

import { $host } from "./index";

//creating nft
export const createNftCard = async ({
  token,
  name,
  description,
  price,
  images,
  interests,
  authorName,
  companyName,
}) => {
  const { data } = await $host.post("api/nftcard", {
    token,
    name,
    description,
    price,
    images,
    interests,
    authorName,
    companyName,
  });

  return data;
};

//get all nfts
export const getAllNftCard = async () => {
  const { data } = await $host.get("api/nftcard");
  return data;
};

//get one all nft by id
export const getOneNftCard = async (id) => {
  const { data } = await $host.get("api/nftcard/" + id);
  return data;
};

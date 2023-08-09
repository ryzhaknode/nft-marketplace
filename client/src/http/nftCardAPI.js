import { $host } from "./index";

//creating nft
export const createNftCard = async ({
  userId,
  name,
  description,
  price,
  images,
  interests,
  authorName,
  companyName,
}) => {
  const { data } = await $host.post("api/nftcard", {
    userId,
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

export const getUsersNft = async (userId) => {
  const { data } = await $host.get("api/nftcard/user/" + userId);
  return data;
};

export const deleteNft = async (id) => {
  const { data } = await $host.get("api/nftcard/delete/" + id);
  return data;
};

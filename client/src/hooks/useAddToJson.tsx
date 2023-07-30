import { INftItem } from "../types/INftItem";
import datajson from "../nftsItems.json";

export const useAddInJson = () => {
  const addObject = (newObject: INftItem) => {
    datajson.push(newObject);
  };

  return [addObject];
};

import { INftItem } from "../types/INftItem";
import datajson from "../nftsItems.json";

export const useAddInJson = (newObject: INftItem) => {
  datajson.push(newObject);
};

import { INftItem } from "../types/INftItem";
import datajson from "../nftsItems.json";

export function addInJson(newObject: INftItem) {
  datajson.push(newObject);
}

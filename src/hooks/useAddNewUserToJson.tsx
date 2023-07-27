import datajson from "../registeredusers.json";
import { IRegistration } from "../types/IRegistration";

export const useAddNewUserInJson = () => {
  const addObject = (newObject: IRegistration) => {
    datajson.push(newObject);
  };

  return [addObject];
};
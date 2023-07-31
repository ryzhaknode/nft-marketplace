
import { registration } from "../http/userAPI";

import { IRegistration } from "../types/IRegistration";

export const useAddNewUserInJson = () => {
  const addObject = async (newObject: IRegistration) => {
    const responce = await registration(newObject)
    console.log(newObject)
  };


  return [addObject];
};

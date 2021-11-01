import { getStoredItem, ItemEnum } from "../../local-storage/local-storage-API";
import { User } from "../types";

export const useCurrentUser = (): User => {
  return getStoredItem(ItemEnum.USER);
};

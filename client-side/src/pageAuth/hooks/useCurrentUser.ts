import { getStoredItem, ItemEnum } from "../../utils/local-storage-API";
import { User } from "../types";

export const useCurrentUser = (): User => {
	return getStoredItem(ItemEnum.USER);
};

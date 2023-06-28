import { getStoredItem, ItemEnum } from "../../utils/local-storage-API";
import { User } from "../types";

export const useCurrentUser = (): User | undefined => {
	return getStoredItem(ItemEnum.USER);
};

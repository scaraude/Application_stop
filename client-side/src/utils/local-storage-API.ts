import { User } from "../pageAuth/types";

export enum ItemEnum {
    USER = "user"
}

export const isItemStored = (item: ItemEnum): boolean => {
    const storedItem = localStorage.getItem(item);
    return !!storedItem;
}

export const getStoredItem = (item: ItemEnum): User => {
    const storedItem = localStorage.getItem(item);

    if (!storedItem) throw new Error('getStoredItem > User not found !');

    return JSON.parse(storedItem);
};

export const setStoredItem = (itemType: ItemEnum, item: User): void => {
    localStorage.setItem(itemType, JSON.stringify(item));
};

export const removeStoredItem = (itemType: ItemEnum): void => {
    localStorage.removeItem(itemType);
};

import jwtDecode, { JwtPayload } from "jwt-decode";
import { requestPostJson } from "../../utils/api-request";
import { getStoredItem, isItemStored, ItemEnum, removeStoredItem, setStoredItem } from "../../utils/local-storage-API";
import { User } from "../types";

const login = async (username: string, password: string) => {
	const response = await requestPostJson("api/auth/signin", { username, password });

	const user = <User | undefined>await response.json();
	if (user) {
		setStoredItem(ItemEnum.USER, user);
	}

	return user;
};

const logout = () => {
	removeStoredItem(ItemEnum.USER);
};

const register = async (username: string, email: string, password: string) => {
	return requestPostJson("api/auth/signup", {
		username,
		email,
		password,
	});
};

const isTokenExpired = (): boolean => {
	const { accessToken } = getStoredItem(ItemEnum.USER);
	const decodedToken = jwtDecode<JwtPayload>(accessToken);
	if (!decodedToken.exp) return true;
	if( new Date(decodedToken.exp * 1000) < new Date()) {
		return true;
	}
	return false;
};

const isUserLogged = () => {
	return isItemStored(ItemEnum.USER) && !isTokenExpired();
};

export const useAuthServices = () => {
	return {
		isUserLogged,
		login,
		logout,
		register,
	};
};

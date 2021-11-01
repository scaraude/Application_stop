import { ItemEnum, removeStoredItem, setStoredItem } from "../../local-storage/local-storage-API";
import { User } from "../types";

const login = async (username: string, password: string) => {
  const response = await fetch("api/auth/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const user = <User | undefined>await response.json();
  if (user?.accessToken) {
    setStoredItem(ItemEnum.USER, user);
  }

  return user;
};

const logout = () => {
  removeStoredItem(ItemEnum.USER);
};

const register = async (username: string, email: string, password: string) => {
  return fetch("api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
};

export const useAuthServices = () => {
  return {
    login,
    logout,
    register,
  };
};

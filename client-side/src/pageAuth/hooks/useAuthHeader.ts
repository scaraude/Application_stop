import { useCurrentUser } from "./useCurrentUser";

export const useAuthHeader = () => {
  const user = useCurrentUser();

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
};

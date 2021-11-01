import { useCurrentUser } from "./useCurrentUser";

export const useAuthHeader = () => {
  const user = useCurrentUser();

  return { "x-access-token": user.accessToken };
};

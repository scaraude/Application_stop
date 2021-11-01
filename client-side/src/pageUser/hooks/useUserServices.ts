import { useAuthHeader } from "../../pageAuth/hooks/useAuthHeader";
import { useCurrentUser } from "../../pageAuth/hooks/useCurrentUser";

export const useUserServices = () => {
  const { email } = useCurrentUser();
  
  const deleteCurrentUser = async () => {
    const deleteUserReponse = await fetch("api/user/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...useAuthHeader() },
      body: JSON.stringify({ email }),
    });

    return deleteUserReponse;
  };
  return { deleteCurrentUser };
};

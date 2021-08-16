import { useAuthHeader } from "../../pageAuth/hooks/useAuthHeader";

export const useSpotServices = () => {
  
  const addSpot = async (spotInfos) => {
    const authHeader = useAuthHeader();

    return await fetch("api/spot/create", {
      method: "POST",
      headers: { ...authHeader, "Content-Type": "application/json" },
      body: JSON.stringify( spotInfos ),
    });
  };

  return {
    addSpot,
  };
};

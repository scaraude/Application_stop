import { useAuthHeader } from "../../pageAuth/hooks/useAuthHeader";

export type Spot = {
  id?: string;
  title: string;
  gps: { latitude: number; longitude: number }
  rating: number;
  isSafe: boolean;
  isEasytoAccess: boolean;
  destinations?: string[];
  advice?: string;
  direction?: string;
  roads?: string[];
  access?: string;
}

export const useSpotServices = () => {

  const addSpot = async (spotInfos: Spot) => {
    const authHeader = useAuthHeader();

    return await fetch("api/spot/create", {
      method: "POST",
      headers: { ...authHeader, "Content-Type": "application/json" },
      body: JSON.stringify(spotInfos),
    });
  };

  return {
    addSpot,
  };
};

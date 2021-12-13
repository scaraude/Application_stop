import { requestPostAuthJson } from "../../utils/api-request";

export type Spot = {
  _id?: string;
  title: string;
  gps: { lat: number; lon: number }
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

		return await requestPostAuthJson("api/spot/create", spotInfos);
	};

	return {
		addSpot,
	};
};

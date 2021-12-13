import { LatLng } from "leaflet";
import { requestPostAuthJson } from "../../../utils/api-request";
import { GeoApiCity } from "../../useSuggestedCities";
import { Emotion } from "../types";

export interface SpotInput {
    gps: LatLng;
    name: string;
    emotion: Emotion;
    destinations: GeoApiCity[];
    image?: File;
    comment?: string;
}

export const useSpot = () => {
	const createSpot = async (data: SpotInput) => {
		return requestPostAuthJson("api/spot/create", data);
	};

	return { createSpot };
};
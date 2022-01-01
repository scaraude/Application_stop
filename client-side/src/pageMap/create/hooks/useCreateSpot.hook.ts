import { LatLng } from "leaflet";
import { requestPostAuthFormData } from "../../../utils/api-request";
import { GeoApiCity } from "../../useSuggestedCities";
import { Emotion } from "../types";

export interface SpotInput{
    gps: LatLng;
    name: string;
    emotion: Emotion;
    destinations: GeoApiCity["code"][];
    image?: File;
    comment?: string;
}

export const useSpot = () => {
	const createSpot = async (data: SpotInput) => {
		return requestPostAuthFormData("api/spot/create", { ...data, selectedCities: JSON.stringify(data.destinations) });
	};

	return { createSpot };
};
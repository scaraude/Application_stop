import { useEffect, useState } from "react";
import { requestGetJson } from "../utils/api-request";
import { Spot } from "./hooks/useSpotServices";

export default function useGetAllSpots() {
	const [spots, setSpots] = useState<Spot[] | undefined>([]);

	useEffect(() => {
		(async () => {
			const spots = <Spot[] | undefined>await requestGetJson("/api/spot/");
			setSpots(spots);
		})();
	}, []);

	return spots;
}

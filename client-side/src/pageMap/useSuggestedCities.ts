import { useEffect, useState } from "react";
import { requestGetJson } from "../utils/api-request";

export type GeoApiCity = {
  nom: string,
  centre: { type: string, coordinates: number[] },
  codesPostaux: string[],
  code: string,
  _score: number,
  departement: { code: string, nom: string }
}

export default function useSuggestedCities(inputValue: string | undefined) {
	const [cities, setCities] = useState<GeoApiCity[] | undefined>(undefined);
	useEffect(() => {
		let active = true;

		if (!inputValue) {
			return undefined;
		}

		(async () => {
			const cities = <GeoApiCity[] | undefined>await requestGetJson(
				`https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=nom,centre,departement,codesPostaux&boost=population&limit=5`
			);

			if (active) {
				setCities(cities);
			}
		})();

		return () => {
			active = false;
		};
	}, [inputValue]);
	return cities;
}

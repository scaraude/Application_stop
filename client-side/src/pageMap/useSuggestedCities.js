import { useEffect, useState } from "react";
import fetch from "cross-fetch";

/**
 * Hooks to fetch suggested french city (async)
 * @param {inputValue} inputValue 
 * @returns Array(Objects)
 */
export default function useSuggestedCities(inputValue) {
  const [cities, setCities] = useState(null);
  useEffect(() => {
    let active = true;

    if (!inputValue) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=nom,centre,departement,codesPostaux&boost=population&limit=5`
      );

      const cities = await response.json();

      if (active) {
        setCities(cities.map((city) => city));// ???
      }
    })();

    return () => {
      active = false;
    };
  }, [inputValue]);
  return cities;
}

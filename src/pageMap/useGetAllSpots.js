import { useEffect, useState } from "react";
// import fetch from "cross-fetch";

/**
 * Hooks to fetch all spots in DB
 * @returns Array(Objects)
 */
export default function useGetAllSpots() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/spots/`);
      setSpots(await response.json());
    })();
  }, []);

  return spots;
}

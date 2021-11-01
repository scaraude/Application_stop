import { useEffect, useState } from "react";
import { Spot } from "./hooks/useSpotServices";

export default function useGetAllSpots() {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/spot/`);
      setSpots(await response.json());
    })();
  }, []);

  return spots;
}

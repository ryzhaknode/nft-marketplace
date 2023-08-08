import { useEffect, useState } from "react";
import { INftItem } from "../types/INftItem";
import { getAllNftCard } from "../http/nftCardAPI";

export function useLoadNftData() {
  const [loadedData, setLoadedData] = useState<INftItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNftCard()
      .then((data) => setLoadedData(data))
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loadedData, loading };
}

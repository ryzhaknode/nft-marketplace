import { useEffect, useState } from "react";
import { INftItem } from "../types/INftItem";
import { getOneNftCard } from "../http/nftCardAPI";

export function useLoadCurrentNft(contactId: string | undefined) {
  const [currentCard, setCurrentCard] = useState<INftItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOneNftCard(contactId)
      .then((responce) => setCurrentCard(responce))
      .catch((e) => alert(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { currentCard, loading };
}

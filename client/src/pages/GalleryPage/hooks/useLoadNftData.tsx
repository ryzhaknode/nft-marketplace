import { useEffect, useState } from 'react';
import { INftItem } from '../../../shared/types/INftItem';
import { getAllNftCard } from '../../../shared/http/nftCardAPI';

export function useLoadNftData() {
    const [data, setData] = useState<INftItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllNftCard()
            .then((data) => setData(data))
            .catch((e) => console.log(e))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, setData, loading };
}

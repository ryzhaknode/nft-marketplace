import { useEffect, useState } from "react";
import { INftItem } from "../types/INftItem";
import { getUsersNft } from "../http/nftCardAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/userIdSlice";

export function useLoadUsersNft() {
  const user: number | null = useSelector(selectUser);
  const [data, setData] = useState<INftItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersNft(user)
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
}

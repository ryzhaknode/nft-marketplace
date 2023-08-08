import { Box, FormControl, FormLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";
import { useSortState } from "../hooks/useSortState";
import { INftItem } from "../types/INftItem";
import { getAllNftCard } from "../http/nftCardAPI";
import Loading from "./LoadingPage";
import { filtersList } from "../information/filterList";
import NftFilter from "../components/NftFilter";
import NftGrid from "../components/NftGrid";
import { useLoadNftData } from "../hooks/useLoadNftData";

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { loadedData, loading } = useLoadNftData();
  const [data, setData] = useState(loadedData);
  const [sortDatajson] = useSortState(data, setData);

  function selectChange(value: any) {
    const filter = filtersList.find((lst) => lst.label === value);
    filter && sortDatajson(filter.key, filter.sortBy);
    setSelectedFilter(value);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" paddingY={"50px"}>
            Gallery
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingBottom: "20px",
                alignSelf: "center",
              }}
            >
              <FormControl sx={{ width: "300px" }}>
                <FormLabel component="legend">Sort NFT</FormLabel>
                <NftFilter
                  selectedFilter={selectedFilter}
                  selectChange={selectChange}
                />
              </FormControl>
            </Box>
            <NftGrid data={data} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Gallery;

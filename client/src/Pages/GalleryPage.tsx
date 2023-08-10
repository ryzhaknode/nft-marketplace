import { Box, FormControl, FormLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useSortState } from "../hooks/useSortState";
import Loading from "./LoadingPage";
import { filtersList } from "../information/filterList";
import NftFilter from "../components/NftFilter";
import NftGrid from "../components/NftGrid";
import { useLoadNftData } from "../hooks/useLoadNftData";

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const { data, setData, loading } = useLoadNftData();
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
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Typography
            variant="h4"
            component="h1"
            paddingY={"50px"}
            borderBottom={"1px solid"}
            paddingBottom={"10px"}
          >
            Gallery
          </Typography>

          <Box
            display={"flex"}
            flexDirection={"column"}
            paddingBottom={"40px"}
            alignSelf={"start"}
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
      )}
    </>
  );
}

export default Gallery;

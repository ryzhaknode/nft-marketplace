import { Box, FormControl, FormLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import NftCards from "../components/NftCards";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../Routes/routesName";
import { useState } from "react";
import data from "../nftsItems.json";
import { useSortState } from "../hooks/useSortState";
import { INftItem } from "../types/INftItem";
interface FilterItem {
  label: string;
  callback: () => void;
}
function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [datajson, setDatajson] = useState(data);
  const [sortDatajson] = useSortState(datajson, setDatajson);
  const filtersList: FilterItem[] = [
    {
      label: "by price (from more expensive to cheaper)",
      callback: () => {
        sortDatajson("price", true);
      },
    },
    {
      label: "by price (from more cheaper to expensive)",
      callback: () => {
        sortDatajson("price", false);
      },
    },
    {
      label: "by date of creation (oldest first)",
      callback: () => {
        sortDatajson("createdAt", true);
      },
    },
    {
      label: "by date of creation (newest first)",
      callback: () => {
        sortDatajson("createdAt", false);
      },
    },
    {
      label: "by name from A-Z",
      callback: () => {
        sortDatajson("name", false);
      },
    },
  ];

  function selectChange(value: any) {
    filtersList.find((l) => l.label === value)?.callback();
    setSelectedFilter(value);
  }

  return (
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
            <Select
              labelId="filter-label"
              id="filter-select"
              value={selectedFilter}
              onChange={(e) => {
                selectChange(e.target.value);
              }}
            >
              {filtersList.map((filter, i) => (
                <MenuItem key={i} value={filter.label}>
                  {filter.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={4} columns={12}>
          {datajson.map((card: INftItem, i) => (
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={i}
              laptop={4}
              tablet={6}
              mobile={12}
            >
              <NavLink
                style={{ textDecoration: "none" }}
                to={ROUTES.cardPage(card.nftCodeNumber8)}
              >
                <NftCards {...card} />
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Gallery;

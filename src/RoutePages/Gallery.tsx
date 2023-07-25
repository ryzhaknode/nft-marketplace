import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import NftCards from "../components/NftCards";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../Routes/routesName";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

import { useState } from "react";
import { filtersList } from "../functions/values";

function Gallery() {
  const dispatch = useDispatch();
  const datajson = useSelector((state: RootState) => state.sort);
  console.log(datajson);
  const [selectedFilter, setSelectedFilter] = useState("");

  function selectChange(value: any) {
    const callback = filtersList.find((l) => l.label === value)?.callback;
    setSelectedFilter(value);
    if (callback) dispatch(callback());
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
      <Box sx={{ paddingTop: "50px" }}>
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="filter-label">Select</InputLabel>

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

      <Typography variant="h4" component="h1" padding={"30px"}>
        Gallery
      </Typography>
      <Grid container spacing={4} columns={12}>
        {datajson.map((card, i) => (
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
              <NftCards card={card} />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Gallery;

import Grid from "@mui/material/Unstable_Grid2";
import { INftItem } from "../types/INftItem";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../Routes/routesName";
import NftCards from "./NftCards";
import { INftGrid } from "../types/INftGrid";

function NftGrid({ data }: INftGrid) {
  return (
    <Grid container spacing={4} columns={12}>
      {data.map((card: INftItem, i) => (
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
            to={ROUTES.cardPage(card.id)}
          >
            <NftCards {...card} />
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default NftGrid;

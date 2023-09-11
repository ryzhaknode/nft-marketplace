import Grid from "@mui/material/Unstable_Grid2";
import { INftItem } from "../shared/types/INftItem";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../app/Routes/routesName";
import NftCards from "../entities/NftCards";
import { INftGrid } from "../shared/types/INftGrid";

function NftGrid({ data }: INftGrid) {
  return (
    <Grid justifyContent={"space-between"} container spacing={4} columns={12}>
      {data.map((card: INftItem, i) => (
        <Grid key={i} laptop={data.length > 2 ? 4 : 6} tablet={6} mobile={12}>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/${ROUTES.cardPage(card.id)}`}
          >
            <NftCards {...card} />
          </NavLink>
        </Grid>
      ))}
    </Grid>
  );
}

export default NftGrid;

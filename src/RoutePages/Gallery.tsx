import datajson from "../nftsItems.json";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import NftCards from "../components/NftCards";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../Routes/routesName";

function Gallery() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}
    >
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

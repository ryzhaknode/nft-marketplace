import datajson from "../nftsItems.json";
import { useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import NftCards from "../components/NftCards";
import { INftItem } from "../types/INftItem";
import Grid from "@mui/material/Unstable_Grid2";

declare module "@mui/system" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
  }
}
function Gallery() {
  const [data, setData] = useState<INftItem[]>(datajson);
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
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
          {data.map((card, i) => (
            <Grid
              laptop={4}
              tablet={6}
              mobile={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <NftCards key={i} card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Gallery;

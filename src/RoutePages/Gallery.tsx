import datajson from "../nftsItems.json";
import { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import NftCards from "../components/NftCards";
import { INftItem } from "../types/INftItem";

function Gallery() {
  const [data, setData] = useState<INftItem[]>(datajson);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" component="h1">
        Gallery
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          m: 2,
        }}
      >
        {data.map((card, i) => (
          <NftCards key={i} card={card} />
        ))}
      </Box>
    </Box>
  );
}

export default Gallery;

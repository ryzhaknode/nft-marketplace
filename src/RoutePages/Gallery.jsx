import data from "../nftsItems.json";
import { Box, Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Gallery() {
  return (
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
        <Card key={i} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={card.images[0].url}
              alt={card.images[0].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Gallery;

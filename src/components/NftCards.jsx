import { Card, CardActionArea, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function NftCards({ card }) {
  return (
    <Card sx={{ width: 345, minHeight: 475 }}>
      <CardActionArea sx={{ padding: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image={card.images[0].url}
          alt={card.images[0].name}
          sx={{ borderRadius: "5%" }}
        />
        <CardContent sx={{ minHeight: 75 }}>
          <Typography variant="h6" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description.split(" ").length > 8
              ? `${card.description.split(" ").slice(0, 8).join(" ")}...`
              : card.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ paddingTop: "10px" }}
              variant="h6"
              component="div"
            >
              {`${card.price} ETH`}
            </Typography>

            <Typography
              sx={{
                padding: "5px 10px",
                backgroundColor: "rgba(215, 112, 229, 0.2)",
                borderRadius: "10px",
                color: "#D770E5",
                textTransform: "lowercase",
              }}
              variant="body2"
              component="div"
            >
              {card.interests[0].name ? card.interests[0].name : "none"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NftCards;

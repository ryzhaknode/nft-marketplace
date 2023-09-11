import { Card, CardActionArea, Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { INftItem } from "../shared/types/INftItem";

function NftCards({ name, description, interests, images, price }: INftItem) {
  return (
    <Card sx={{ width: 345, minHeight: 475 }}>
      <CardActionArea sx={{ padding: "20px" }}>
        <CardMedia
          component="img"
          height="300"
          image={images[0].url}
          alt={images[0].name}
          sx={{ borderRadius: "5%" }}
        />
        <CardContent sx={{ minHeight: 75 }}>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.split(" ").length > 8
              ? `${description.split(" ").slice(0, 8).join(" ")}...`
              : description}
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography paddingTop={"10px"} variant="h6" component="div">
              {`${price} ETH`}
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
              {interests[0].name ? interests[0].name : "none"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NftCards;

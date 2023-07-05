import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function NftCards({ card }) {
  return (
    <NavLink to={`/card-${card.companyName}`}>
      <Card sx={{ maxWidth: 345 }}>
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
    </NavLink>
  );
}

export default NftCards;

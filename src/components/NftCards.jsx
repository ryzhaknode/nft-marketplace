import { Box, Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function NftCards(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.card.images[0].url}
          alt={props.card.images[0].name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NftCards;

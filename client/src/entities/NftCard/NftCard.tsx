import {Card, CardActionArea, Box} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {INftItem} from "../../shared/types/INftItem";
import cls from './NftCard.module.scss'
import {classNames} from "../../shared/classNames/classNames";

function NftCard({name, description, interests, images, price}: INftItem) {
    return (
        <Card className={classNames(cls.nftcard)}>
            <CardActionArea className={classNames(cls.nftcard__area)}>
                <CardMedia
                    component="img"
                    height="300"
                    image={images[0].url}
                    alt={images[0].name}
                    sx={{borderRadius: "5%"}}
                />
                <CardContent className={classNames(cls.nftcard__content)}>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.split(" ").length > 8
                            ? `${description.split(" ").slice(0, 8).join(" ")}...`
                            : description}
                    </Typography>
                    <Box
                        className={classNames(cls.nftcard__priceBlock)}
                    >
                        <Typography paddingTop={"10px"} variant="h6" component="div">
                            {`${price} ETH`}
                        </Typography>

                        <Typography
                            className={classNames(cls.nftcard__interests)}
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

export default NftCard;

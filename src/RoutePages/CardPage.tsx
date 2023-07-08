import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import datajson from "../nftsItems.json";
import { INftItem } from "../types/INftItem";
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../Swiper/SwiperSlider";

function CardPage() {
  const { contactId } = useParams();
  const currentCard: INftItem | undefined = datajson.find(
    (d) => d.nftCodeNumber8 == contactId
  );

  return (
    <>
      {currentCard ? (
        <Grid sx={{ pt: 4 }} container spacing={2} columns={12}>
          <Grid style={{ padding: "0 40px" }} laptop={6} mobile={12}>
            <SwiperSlider>
              {currentCard.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img.url} alt={img.name} loading="lazy" />
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </Grid>
          <Grid
            sx={{
              p: 5,
            }}
            mobile={12}
            laptop={6}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  pb: "20%",
                }}
              >
                <List
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {currentCard.interests.map((int, i) => (
                    <ListItem
                      sx={{
                        backgroundColor: "rgba(215, 112, 229, 0.2)",
                        borderRadius: "20px",
                        color: "#D770E5",
                        mr: "5px",
                      }}
                      key={i}
                    >
                      <Typography variant="h6" component="div">
                        {int.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "20px",
                  }}
                  variant="h4"
                  component="div"
                >{`${currentCard.price} ETH`}</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography gutterBottom variant="h3" component="div">
                  {currentCard.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentCard.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h2" component="div">
          undefined Nft-card
        </Typography>
      )}
    </>
  );
}

export default CardPage;

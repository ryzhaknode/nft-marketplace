import { useParams } from "react-router-dom";
import { Box, List, ListItem } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { INftItem } from "../types/INftItem";
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../Swiper/SwiperSlider";
import MyButton from "../UI/MyButton";
import { getOneNftCard } from "../http/nftCardAPI";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function CardPage() {
  const { contactId } = useParams();
  const [currentCard, setCurrentCard] = useState<INftItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOneNftCard(contactId)
      .then((responce) => setCurrentCard(responce))
      .catch((e) => alert(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <Box>
      {currentCard ? (
        <Grid sx={{ paddingTop: 6 }} container spacing={2} columns={12}>
          <Grid style={{ padding: "0 40px" }} laptop={6} mobile={12}>
            <SwiperSlider>
              {currentCard.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img.url} alt={img.name} />
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </Grid>
          <Grid mobile={12} laptop={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: { laptop: "start", mobile: "center" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { laptop: "row", mobile: "column" },
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  pb: { laptop: "15%", tablet: "7%", mobile: "10%" },
                }}
              >
                <Box>
                  <List
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      gap: "5px",
                      alignItems: "center",
                      paddingTop: { laptop: 0, mobile: "20px" },
                    }}
                  >
                    {currentCard.interests.map((int, i) => (
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          flex: "0 1 20%",
                          backgroundColor: "rgba(215, 112, 229, 0.2)",
                          borderRadius: "20px",
                          color: "#D770E5",
                        }}
                        key={i}
                      >
                        <Typography variant="body1" component="div">
                          {int.name}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                  variant="h6"
                  component="div"
                >{`${currentCard.price} ETH`}</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", pb: "5%" }}>
                <Typography gutterBottom variant="h4" component="div">
                  {currentCard.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currentCard.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  paddingTop: "20px",
                }}
              >
                <MyButton
                  sx={{
                    color: "#ffffff",
                    padding: "10px 20px",
                    backgroundColor: "#1976d2",
                  }}
                >
                  SEND PURCHASE
                </MyButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h2" component="div">
          undefined Nft-card
        </Typography>
      )}
    </Box>
  );
}

export default CardPage;

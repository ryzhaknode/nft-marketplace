import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box, List, ListItem, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { SwiperSlide } from "swiper/react";
import SwiperSlider from "../Swiper/SwiperSlider";
import MyButton from "../UI/MyButton";
import { deleteNft } from "../http/nftCardAPI";
import Loading from "./LoadingPage";
import styles from "../style/MyComponent.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ROUTES } from "../Routes/routesName";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ModalWindow from "../components/ModalWindow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/userIdSlice";
import { useNavigateNavMenu } from "../hooks/useNavigateMenu";
import { useLoadCurrentNft } from "../hooks/useLoadCurrentNft";

function CardPage() {
  const { contactId } = useParams();

  const userId = useSelector(selectUser);
  const navigate = useNavigate();

  const { loading, currentCard } = useLoadCurrentNft(contactId);

  const [modal, modalOpen, modalClose] = useNavigateNavMenu();

  const deleteThisNft = () => {
    deleteNft(contactId)
      .then((res) => {
        console.log(res);
        navigate(ROUTES.profilePage);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box sx={{ paddingTop: "60px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "40px",
            }}
          >
            <NavLink
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
              to={ROUTES.mainPage}
              className={styles.nav_link}
            >
              <ArrowBackIosIcon />
              back
            </NavLink>
            {userId === currentCard?.userId && (
              <Box>
                <IconButton onClick={modalOpen}>
                  <MoreVertIcon />
                </IconButton>

                <ModalWindow onClose={modalClose} show={modal}>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <DeleteForeverIcon />
                      <Typography>DO YOU WANT TO DELETE THIS NFT?</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        paddingTop: "10px",
                      }}
                    >
                      <Button onClick={deleteThisNft}>Yes</Button>
                    </Box>
                  </Box>
                </ModalWindow>
              </Box>
            )}
          </Box>
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
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        pb: "5%",
                      }}
                    >
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
                      <MyButton size="large" variant="contained">
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
        </Box>
      )}
    </>
  );
}

export default CardPage;

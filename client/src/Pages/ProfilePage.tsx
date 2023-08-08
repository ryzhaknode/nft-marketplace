import { useEffect, useState } from "react";
import { selectUser } from "../store/slice/userIdSlice";
import { useSelector } from "react-redux";
import { getUsersNft } from "../http/nftCardAPI";
import { Box, Typography, Grid } from "@mui/material";
import { INftItem } from "../types/INftItem";
import { NavLink } from "react-router-dom";
import NftCards from "../components/NftCards";
import { ROUTES } from "../Routes/routesName";
import Loading from "./LoadingPage";
import styles from "../style/MyComponent.module.scss";
import { useLoadUsersNft } from "../hooks/useLoadUsersNft";

function Profile() {
  const { data, loading } = useLoadUsersNft();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1">
            Your Nft-cards
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "50px",
            }}
          >
            <Grid container spacing={4} columns={8}>
              {data.length !== 0 &&
                data.map((card: INftItem, i) => (
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={i}
                    laptop={4}
                    tablet={6}
                    mobile={12}
                  >
                    <NavLink
                      className={styles.nav_link}
                      to={`/${ROUTES.cardPage(card.id)}`}
                    >
                      <NftCards {...card} />
                    </NavLink>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Profile;

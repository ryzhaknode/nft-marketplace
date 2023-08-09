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
import NftGrid from "../components/NftGrid";

function Profile() {
  const { data, loading } = useLoadUsersNft();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"40px"}
        >
          <Typography
            variant="h4"
            component="h1"
            display={"block"}
            borderBottom={"1px solid"}
            paddingBottom={"10px"}
            marginBottom={"40px"}
          >
            My Nft-cards
          </Typography>
          <NftGrid data={data} />
        </Box>
      )}
    </>
  );
}

export default Profile;

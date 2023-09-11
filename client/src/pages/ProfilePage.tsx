import { useEffect, useState } from "react";
import { selectUser } from "../app/store/slice/userIdSlice";
import { useSelector } from "react-redux";
import { getUsersNft } from "../shared/http/nftCardAPI";
import { Box, Typography, Grid } from "@mui/material";
import { INftItem } from "../shared/types/INftItem";
import { NavLink } from "react-router-dom";
import NftCards from "../entities/NftCards";
import { ROUTES } from "../app/Routes/routesName";
import Loading from "./LoadingPage";
import styles from "../app/style/MyComponent.module.scss";
import { useLoadUsersNft } from "../shared/hooks/useLoadUsersNft";
import NftGrid from "../features/NftGrid";

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

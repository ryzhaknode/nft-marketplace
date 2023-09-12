import {useEffect, useState} from "react";
import {selectUser} from "../../app/store/slice/userIdSlice";
import {useSelector} from "react-redux";
import {getUsersNft} from "../../shared/http/nftCardAPI";
import {Box, Typography, Grid} from "@mui/material";
import {INftItem} from "../../shared/types/INftItem";
import {NavLink} from "react-router-dom";
import NftCard from "../../entities/NftCard/NftCard";
import {ROUTES} from "../../app/routes/routesName";
import Loading from "../LoadingPage/LoadingPage";
import styles from "../../app/style/MyComponent.module.scss";
import {useLoadUsersNft} from "./hooks/useLoadUsersNft";
import NftGrid from "../../features/NftGrid/NftGrid";
import cls from './ProfilePage.module.scss';
import {classNames} from "../../shared/classNames/classNames";

function Profile() {
    const {data, loading} = useLoadUsersNft();

    return (
        <>
            {loading ? (
                <Loading/>
            ) : (
                <Box
                    className={classNames(cls.profile)}
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        className={classNames(cls.profile__title)}
                    >
                        My Nft-cards
                    </Typography>
                    <NftGrid data={data}/>
                </Box>
            )}
        </>
    );
}

export default Profile;

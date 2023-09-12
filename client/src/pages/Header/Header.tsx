import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    MenuItem,
    Menu,
    Button,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import React, {useState} from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import {NavLink, useNavigate} from "react-router-dom";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import {useConnectWallet} from "../../shared/hooks/useConnectWallet";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {useDispatch, useSelector} from "react-redux";
import {
    authenticationFalse,
    selectAuthenticated,
} from "../../app/store/slice/authenticatedSlice";
import {ROUTES} from "../../app/Routes/routesName";
import {useNavigateNavMenu} from "../../shared/hooks/useNavigateMenu";
import MyButton from "../../shared/UI/MyButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StyledSpan from "../../shared/UI/StyledSpan";
import MobileHeaderMenu from "./MobileHeaderMenu";
import {sections, sectionsNotAuth} from "../../shared/information/sections";
import cls from './Header.module.scss'
import ItemMenu from "../../widgets/ItemMenu";
import {classNames} from "../../shared/classNames/classNames";
import MyItemMenu from "../../shared/MyItemMenu/MyItemMenu";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const authentication = useSelector(selectAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userAccount, setUserAccount] = useState("");
    const [menu, openMenu, closeMenu] = useNavigateNavMenu();
    const [connectWallet] = useConnectWallet(setUserAccount);


    const logOut = () => {
        dispatch(authenticationFalse());
        localStorage.token = "";
        navigate(ROUTES.mainPage);
    };

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        handleClose();
        logOut();
    }

    const handleConnectWaller = () => {
        handleClose();
        connectWallet();
    }


    return (
        <React.Fragment>
            <AppBar color="inherit" position="static">
                <Toolbar
                    className={classNames(cls.header)}
                    sx={{
                        padding: {laptop: "0 50px", table: "0 30px", mobile: "0 15px"},
                    }}
                >
                    <MobileHeaderMenu
                        openMenu={openMenu}
                        menu={menu}
                        closeMenu={closeMenu}
                        authentication={authentication}
                        connectWallet={connectWallet}
                        userAccount={userAccount}
                        logOut={logOut}
                    />

                    <Box
                        display={{mobile: "none", laptop: "flex"}}
                        alignItems={'center'}
                    >
                        <PaletteIcon sx={{mr: 1, fontSize: "32px"}}/>
                        <Typography variant="h4" noWrap letterSpacing={3} display={"flex"}>
                            <StyledSpan variant="h4" letterSpacing={3}>
                                NFT
                            </StyledSpan>
                            Place
                        </Typography>
                    </Box>

                    <Box
                        display={{mobile: "none", laptop: "flex"}}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"8px"}
                        flexGrow={1}
                    >
                        {authentication
                            ? sections.map((page, i) => (
                                <ItemMenu page={page} key={i} closeMenu={closeMenu}/>
                            ))
                            : sectionsNotAuth.map((page, i) => (
                                <ItemMenu page={page} key={i} closeMenu={closeMenu}/>
                            ))}
                    </Box>
                    <Box
                        className={classNames('flex_center')}
                        gap={'10px'}
                    >
                        {authentication && (
                            <Box display={{tablet: "flex", mobile: "none"}}>
                                <NavLink to={"/add"}>
                                    <MyButton
                                        size="large"
                                        variant="contained"
                                        startIcon={<AddCircleOutlineSharpIcon/>}
                                    >
                                        ADD ART
                                    </MyButton>
                                </NavLink>
                            </Box>
                        )}
                        <Box display={{tablet: "flex", mobile: "none"}}>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? "long-menu" : undefined}
                                aria-expanded={open ? "true" : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                onKeyDown={handleClose}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    "aria-labelledby": "long-button",
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >
                                {!authentication && (
                                    <NavLink className={classNames('nav_link')} style={{width: "100%"}} to={"/register"}>
                                        <MyItemMenu
                                            setFullWidth={true}
                                            icon={<AppRegistrationIcon/>}
                                            callbacks={handleClose}
                                        >
                                            Registration
                                        </MyItemMenu>
                                    </NavLink>
                                )}
                                {authentication ? (
                                    <MyItemMenu
                                        callbacks={handleLogOut}
                                        setFullWidth={true}
                                        icon={<HowToRegIcon/>}
                                    >
                                        Log Out
                                    </MyItemMenu>
                                ) : (
                                    <NavLink className={classNames('nav_link')} style={{width: "100%"}} to={"/login"}>
                                        <MyItemMenu
                                            callbacks={handleClose}
                                            setFullWidth={true}
                                            icon={<HowToRegIcon/>}
                                        >
                                            Log In
                                        </MyItemMenu>
                                    </NavLink>
                                )}

                                {authentication && (
                                    <MyItemMenu
                                        icon={<WalletIcon/>}
                                        callbacks={handleConnectWaller}
                                    >
                                        {userAccount ? (
                                            <Typography>{`${userAccount.substring(
                                                0,
                                                12
                                            )}...`}</Typography>
                                        ) : (
                                            <>Connect Wallet</>
                                        )}
                                    </MyItemMenu>
                                )}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

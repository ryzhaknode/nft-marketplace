import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WalletIcon from "@mui/icons-material/Wallet";
import { NavLink, useNavigate } from "react-router-dom";
import { ISections } from "../types/ISections";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import { useConnectWallet } from "../hooks/useConnectWallet";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticationFalse,
  selectAuthenticated,
} from "../store/slice/authenticatedSlice";
import { ROUTES } from "../Routes/routesName";
import { useNavigateNavMenu } from "../hooks/useNavigateMenu";

const sections: ISections[] = [
  { title: "Gallery", url: "/" },
  { title: "Profile", url: "/profile" },
  { title: "Statistic", url: "/statistic" },
];

export default function Header() {
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

  return (
    <React.Fragment>
      <AppBar color="inherit" position="static">
        <Toolbar
          sx={{
            padding: { laptop: "0 50px", table: "0 30px", mobile: "0 15px" },
          }}
        >
          <PaletteIcon
            sx={{ display: { mobile: "none", laptop: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 2,
              display: { mobile: "none", laptop: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "#000000",
            }}
          >
            <Box sx={{ color: "#1976d2" }}>NFT</Box> Place
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { mobile: "flex", laptop: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={menu}
              onClose={closeMenu}
              sx={{
                display: { mobile: "block", laptop: "none" },
                marginTop: "80px",
              }}
            >
              {authentication ? (
                sections.map((page, i) => (
                  <MenuItem key={i} onClick={openMenu}>
                    <NavLink
                      className={({ isActive }) => {
                        return isActive
                          ? "link active-link"
                          : "link not-active";
                      }}
                      style={{ textDecoration: "none" }}
                      to={page.url}
                    >
                      {page.title}
                    </NavLink>
                  </MenuItem>
                ))
              ) : (
                <MenuItem onClick={openMenu}>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "link active-link" : "link not-active";
                    }}
                    style={{ textDecoration: "none" }}
                    to={sections[0].url}
                  >
                    {sections[0].title}
                  </NavLink>
                </MenuItem>
              )}
              <Box sx={{ p: "13px" }}>
                <Button
                  onClick={() => {
                    closeMenu();
                    connectWallet();
                  }}
                  sx={{
                    display: { mobile: "block", laptop: "none" },
                    color: "#000000",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderRadius: 2,
                  }}
                >
                  {userAccount ? (
                    <Typography>{`${userAccount.substring(
                      0,
                      12
                    )}...`}</Typography>
                  ) : (
                    <Box sx={{ display: "flex" }}>
                      <WalletIcon
                        sx={{
                          display: { mobile: "none", laptop: "flex" },
                          mr: 1,
                        }}
                      />
                      <Typography>Connect Wallet</Typography>
                    </Box>
                  )}
                </Button>
              </Box>
              <Box
                sx={{ display: { tablet: "none", mobile: "block" }, p: "13px" }}
              >
                <NavLink
                  to={"/add"}
                  style={{
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                  onClick={closeMenu}
                >
                  <AddCircleOutlineSharpIcon sx={{ paddingRight: "10px" }} />
                  <Typography>ADD ART</Typography>
                </NavLink>
              </Box>
              <Box
                sx={{ display: { tablet: "none", mobile: "block" }, p: "13px" }}
              >
                <NavLink
                  onClick={closeMenu}
                  to={"/register"}
                  style={{
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                >
                  <HowToRegIcon sx={{ paddingRight: "10px" }} />
                  <Typography>Registration</Typography>
                </NavLink>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {authentication ? (
                  <Box
                    sx={{
                      display: { tablet: "none", mobile: "block" },
                      p: "13px",
                    }}
                  >
                    <Button
                      onClick={logOut}
                      sx={{
                        backgroundColor: "#1976D2",
                        color: "#ffffff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "14px",
                        textDecoration: "none",
                        "&:hover": {
                          backgroundColor: "blue",
                          opacity: "1",
                        },
                      }}
                    >
                      <HowToRegIcon sx={{ paddingRight: "10px" }} />
                      <Typography>Log Out</Typography>
                    </Button>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: { tablet: "none", mobile: "block" },
                      p: "13px",
                    }}
                  >
                    <NavLink
                      onClick={closeMenu}
                      to={"/login"}
                      style={{
                        backgroundColor: "#1976D2",
                        color: "#ffffff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "14px",
                        textDecoration: "none",
                      }}
                    >
                      <HowToRegIcon sx={{ paddingRight: "10px" }} />
                      <Typography>Log In</Typography>
                    </NavLink>
                  </Box>
                )}
              </Box>
            </Menu>
          </Box>

          <PaletteIcon
            sx={{ display: { mobile: "flex", laptop: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { mobile: "flex", laptop: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                color: "#1976d2",
              }}
            >
              NFT
            </Box>{" "}
            Place
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { mobile: "none", laptop: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {authentication ? (
              sections.map((page, i) => (
                <MenuItem key={i} onClick={closeMenu}>
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "link active-link" : "link not-active";
                    }}
                    style={{ textDecoration: "none" }}
                    to={page.url}
                  >
                    {page.title}
                  </NavLink>
                </MenuItem>
              ))
            ) : (
              <MenuItem onClick={closeMenu}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "link active-link" : "link not-active";
                  }}
                  style={{ textDecoration: "none" }}
                  to={sections[0].url}
                >
                  {sections[0].title}
                </NavLink>
              </MenuItem>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {authentication && (
              <Box sx={{ display: { tablet: "flex", mobile: "none" } }}>
                <NavLink
                  to={"/add"}
                  style={{
                    margin: "14px 0",
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                >
                  <AddCircleOutlineSharpIcon sx={{ paddingRight: "10px" }} />
                  <Typography>ADD ART</Typography>
                </NavLink>
              </Box>
            )}
            {!authentication && (
              <Box sx={{ display: { tablet: "flex", mobile: "none" } }}>
                <NavLink
                  to={"/register"}
                  style={{
                    margin: "14px 0",
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                >
                  <HowToRegIcon sx={{ paddingRight: "10px" }} />
                  <Typography>Registration</Typography>
                </NavLink>
              </Box>
            )}
            {authentication ? (
              <Box sx={{ display: { tablet: "flex", mobile: "none" } }}>
                <Button
                  onClick={logOut}
                  sx={{
                    margin: "14px 0",
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                    "&:hover": {
                      backgroundColor: "#fe2727",
                      opacity: "1",
                    },
                  }}
                >
                  <HowToRegIcon sx={{ paddingRight: "10px" }} />
                  <Typography>Log Out</Typography>
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: { tablet: "flex", mobile: "none" } }}>
                <NavLink
                  to={"/login"}
                  style={{
                    margin: "14px 0",
                    backgroundColor: "#1976D2",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "14px",
                    textDecoration: "none",
                  }}
                >
                  <HowToRegIcon sx={{ paddingRight: "10px" }} />
                  <Typography>Log In</Typography>
                </NavLink>
              </Box>
            )}

            {authentication && (
              <Button
                onClick={connectWallet}
                sx={{
                  display: { mobile: "none", laptop: "flex" },
                  my: 2,
                  color: "#000000",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid",
                  borderRadius: 2,
                  p: "13px",
                }}
              >
                {userAccount ? (
                  <Typography>{`${userAccount.substring(
                    0,
                    12
                  )}...`}</Typography>
                ) : (
                  <Box sx={{ display: "flex" }}>
                    <WalletIcon
                      sx={{
                        display: { mobile: "none", laptop: "flex" },
                        mr: 1,
                      }}
                    />
                    <Typography>Connect Wallet</Typography>
                  </Box>
                )}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

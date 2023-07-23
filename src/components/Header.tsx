import {
  AppBar,
  Menu,
  Toolbar,
  Typography,
  Box,
  Icon,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import PaletteIcon from "@mui/icons-material/Palette";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WalletIcon from "@mui/icons-material/Wallet";
import { NavLink } from "react-router-dom";
import { ISections } from "../types/ISections";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

const sections: ISections[] = [
  { title: "Gallery", url: "/" },
  { title: "Profile", url: "/profile" },
  { title: "Statistic", url: "/statistic" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };
  const handleOpenNavMenu = () => {
    setIsMenuOpen(true);
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
              onClick={handleOpenNavMenu}
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
              open={isMenuOpen}
              onClose={handleCloseNavMenu}
              sx={{
                display: { mobile: "block", laptop: "none" },
                marginTop: "80px",
              }}
            >
              {sections.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
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
              ))}
              <Box sx={{ p: "13px" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { mobile: "block", laptop: "none" },
                    color: "#000000",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderRadius: 2,
                  }}
                >
                  <WalletIcon
                    sx={{ display: { mobile: "none", laptop: "flex" }, mr: 1 }}
                  />
                  <Typography>Connect Wallet</Typography>
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
                  onClick={handleCloseNavMenu}
                >
                  <AddCircleOutlineSharpIcon sx={{ paddingRight: "10px" }} />
                  <Typography>ADD ART</Typography>
                </NavLink>
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
            {sections.map((page, i) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "link active-link" : "link not-active";
                }}
                style={{ textDecoration: "none" }}
                key={i}
                to={page.url}
              >
                {page.title}
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              alignItems: "center",
            }}
          >
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
            <Button
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
              <WalletIcon
                sx={{ display: { mobile: "none", laptop: "flex" }, mr: 1 }}
              />
              <Typography>Connect Wallet</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

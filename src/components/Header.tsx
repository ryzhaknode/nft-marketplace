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

const sections: ISections[] = [
  { title: "Gallery", url: "/" },
  { title: "Statistic", url: "/statistic" },
  { title: "Profile", url: "/profile" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(Date());

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };
  const handleOpenNavMenu = () => {
    setIsMenuOpen(true);
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <PaletteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NFTPlace
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
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
                vertical: "bottom",
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
                display: { xs: "block", md: "none" },
              }}
            >
              {sections.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <NavLink style={{ textDecoration: "none" }} to={page.url}>
                    <Typography
                      textAlign="center"
                      component="a"
                      href={page.url}
                    >
                      {page.title}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <PaletteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NFTPlace
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sections.map((page, i) => (
              <NavLink key={i} style={{ textDecoration: "none" }} to={page.url}>
                <Typography
                  variant="h6"
                  component="a"
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                >
                  {page.title}
                </Typography>
              </NavLink>
            ))}
          </Box>
          <Button
            sx={{
              my: 2,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderRadius: 2,
              p: 2,
            }}
          >
            <WalletIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            Connect Wallet
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

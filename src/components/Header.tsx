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

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              {props.sections.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component="a" href={page.url}>
                    {page.title}
                  </Typography>
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
            {props.sections.map((page, i) => (
              <Typography
                key={i}
                variant="h6"
                component="a"
                href={page.url}
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

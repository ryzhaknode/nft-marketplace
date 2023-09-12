import {
  Menu,
  Typography,
  Box,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WalletIcon from "@mui/icons-material/Wallet";
import { NavLink } from "react-router-dom";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MyButton from "../../shared/UI/MyButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import StyledSpan from "../../shared/UI/StyledSpan";
import PaletteIcon from "@mui/icons-material/Palette";
import Drawer from "@mui/material/Drawer";
import { sections, sectionsNotAuth } from "../../shared/information/sections";
import ItemMenu from "../../widgets/ItemMenu";
import cls from './MobileHeaderMenu.module.scss'

function MobileHeaderMenu(props: any) {
  const {
    openMenu,
    menu,
    closeMenu,
    authentication,
    connectWallet,
    userAccount,
    logOut,
  } = props;
  return (
    <Box display={{ mobile: "flex", laptop: "none" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={openMenu}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={menu} onClose={closeMenu}>
        <Box
          minWidth={"250px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"end"}
          alignItems={"center"}
          gap={"15px"}
          role="presentation"
          onClick={closeMenu}
          onKeyDown={closeMenu}
        >
          <Typography
            paddingTop={"10px"}
            borderBottom={"1px solid"}
            variant="h4"
            noWrap
            letterSpacing={3}
          >
            Menu
          </Typography>
          {authentication
            ? sections.map((page, i) => (
                <ItemMenu page={page} key={i} closeMenu={closeMenu} />
              ))
            : sectionsNotAuth.map((page, i) => (
                <ItemMenu page={page} key={i} closeMenu={closeMenu} />
              ))}
          <Typography
            paddingTop={"10px"}
            borderBottom={"1px solid"}
            variant="h4"
            noWrap
            letterSpacing={3}
          >
            Buttons
          </Typography>
          <Box display={{ mobile: "block", tablet: "none" }}>
            <Button
              size="large"
              variant="outlined"
              startIcon={<WalletIcon />}
              onClick={() => {
                closeMenu();
                connectWallet();
              }}
            >
              {userAccount ? (
                <Typography>{`${userAccount.substring(0, 12)}...`}</Typography>
              ) : (
                <>Connect Wallet</>
              )}
            </Button>
          </Box>
          <Box display={{ tablet: "none", mobile: "block" }}>
            <NavLink to={"/add"} onClick={closeMenu}>
              <MyButton
                size="large"
                variant="contained"
                startIcon={<AddCircleOutlineSharpIcon />}
                onClick={closeMenu}
              >
                ADD ART
              </MyButton>
            </NavLink>
          </Box>
          <Box display={{ tablet: "none", mobile: "block" }}>
            <NavLink onClick={closeMenu} to={"/register"}>
              <MyButton
                size="large"
                variant="contained"
                startIcon={<AppRegistrationIcon />}
                onClick={closeMenu}
              >
                Registration
              </MyButton>
            </NavLink>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {authentication ? (
              <Box display={{ tablet: "none", mobile: "block" }}>
                <MyButton
                  onClick={() => {
                    logOut();
                    closeMenu();
                  }}
                  size="large"
                  variant="contained"
                  startIcon={<HowToRegIcon />}
                >
                  Log Out
                </MyButton>
              </Box>
            ) : (
              <Box display={{ tablet: "none", mobile: "block" }}>
                <NavLink onClick={closeMenu} to={"/login"}>
                  <MyButton
                    size="large"
                    variant="contained"
                    startIcon={<HowToRegIcon />}
                    onClick={closeMenu}
                  >
                    Log In
                  </MyButton>
                </NavLink>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>

      <Box display={{ mobile: "flex", laptop: "none" }} alignItems={"center"}>
        <PaletteIcon
          sx={{
            mr: 1,
            fontSize: "32px",
          }}
        />
        <Typography variant="h4" noWrap letterSpacing={3} display={"flex"}>
          <StyledSpan variant="h4" letterSpacing={3}>
            NFT
          </StyledSpan>
          Place
        </Typography>
      </Box>
    </Box>
  );
}

export default MobileHeaderMenu;

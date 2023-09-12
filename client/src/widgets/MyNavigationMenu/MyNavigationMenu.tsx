import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import {ISections} from "../../shared/types/ISections";

interface MyNavigationMenuProps{
    closeMenu: () => void,
    page: ISections,
}
function MyNavigationMenu({page, closeMenu}:MyNavigationMenuProps) {

  return (
    <MenuItem onClick={closeMenu}>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "link active-link" : "link not-active";
        }}
        to={page.url}
      >
        {page.title}
      </NavLink>
    </MenuItem>
  );
}
export default MyNavigationMenu;

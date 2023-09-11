import { MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

function ItemMenu(props: any) {
  const { page, closeMenu } = props;
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
export default ItemMenu;

import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ISections } from '../../shared/types/ISections';

interface MyNavigationMenuProps{
    closeMenu: () => void,
    page: ISections,
}
function MyNavigationMenu({ page, closeMenu }:MyNavigationMenuProps) {
    const { t } = useTranslation();
    return (
        <MenuItem onClick={closeMenu}>
            <NavLink
                className={({ isActive }) => (
                    isActive ? 'link active-link' : 'link not-active')}
                to={page.url}
            >
                {t(`${page.title}`)}
            </NavLink>
        </MenuItem>
    );
}
export default MyNavigationMenu;

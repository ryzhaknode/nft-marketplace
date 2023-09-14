import { MenuItem } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { ReactElement, ReactNode } from 'react';
import cls from './MyItemMenu.module.scss';
import { classNames } from '../../classNames/classNames';
import MyButton from '../MyButton/MyButton';

interface MyItemMenuProps {
    className?: string;
    callbacks?: () => void;
    setFullWidth?: boolean;
    children: ReactNode;
    icon?: ReactElement;
}

export const MyItemMenu = ({
    className = '', callbacks, setFullWidth = false, children, icon = <></>,
}: MyItemMenuProps) => (
    <MenuItem className={classNames(cls.MyItemMenu, {}, [className])}>
        <MyButton
            size="large"
            variant="contained"
            fullWidth={setFullWidth}
            startIcon={icon}
            onClick={callbacks}
        >
            {children}
        </MyButton>
    </MenuItem>
);

export default MyItemMenu;

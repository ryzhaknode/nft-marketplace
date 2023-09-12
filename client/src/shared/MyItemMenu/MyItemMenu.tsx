import cls from './MyItemMenu.module.scss'
import {classNames} from "../classNames/classNames";
import {MenuItem} from "@mui/material";
import MyButton from "../UI/MyButton";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import React, {ReactElement, ReactNode} from "react";

interface MyItemMenuProps {
    className?: string;
    callbacks?: () => void;
    setFullWidth?: boolean;
    children: ReactNode;
    icon?: ReactElement;
}

export const MyItemMenu = ({className = '', callbacks, setFullWidth = false, children, icon = <></>}: MyItemMenuProps) => {
    return (
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
};

export default MyItemMenu;

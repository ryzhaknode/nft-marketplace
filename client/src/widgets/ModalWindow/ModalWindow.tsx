import {Box, Button} from "@mui/material";
import {ReactNode} from "react";
import cls from './ModalWindow.module.scss'
import {classNames} from "../../shared/classNames/classNames";

export interface IModalWindowProps {
    onClose: () => void;
    show: boolean;
    children: ReactNode;
}

const ModalWindow = ({ onClose, show, children,}: IModalWindowProps) => {
    return (
        <Box className={`popup ${show ? "show" : ""}`}>
            <Box
                className={classNames(cls.modalWindow)}
            >
                {children}
                <Button
                    className={classNames(cls.modalWindow__button)}
                    onClick={onClose}
                >
                    Close
                </Button>
            </Box>
        </Box>
    );
};

export default ModalWindow;

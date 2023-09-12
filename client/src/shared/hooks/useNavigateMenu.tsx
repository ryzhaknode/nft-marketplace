import {useState} from "react";

export type NavigateNavMenuReturnType = [
    boolean, () => void,
    () => void
];

export const useNavigateNavMenu = (): NavigateNavMenuReturnType => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const open = () => {
        setIsMenuOpen(true);
    };

    const close = () => {
        setIsMenuOpen(false);
    };

    return [isMenuOpen, open, close];
};

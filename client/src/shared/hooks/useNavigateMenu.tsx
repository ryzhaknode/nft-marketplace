import { useState } from "react";
import { NavigateNavMenuReturnType } from "../types/NavigateMenuType";

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

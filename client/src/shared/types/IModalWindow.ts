import { ReactNode } from "react";

export interface IModalWindowProps {
  onClose: () => void;
  show: boolean;
  children: ReactNode;
}

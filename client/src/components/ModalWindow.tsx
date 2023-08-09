import { Box, Button } from "@mui/material";
import { IModalWindowProps } from "../types/IModalWindow";

const ModalWindow: React.FC<IModalWindowProps> = ({
  onClose,
  show,
  children,
}) => {
  return (
    <Box className={`popup ${show ? "show" : ""}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
        <Button
          sx={{
            p: "10px",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default ModalWindow;

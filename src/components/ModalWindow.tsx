import { Box, Button } from "@mui/material";

const ModalWindow = (props: any) => {
  return (
    <Box className={`popup ${props.show ? "show" : ""}`}>
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
        {props.children}
        <Button
          sx={{
            p: "10px",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onClick={props.onClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default ModalWindow;

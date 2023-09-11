import { Typography, Box, Button, TextField, FormControl } from "@mui/material";
import { ILogin } from "../shared/types/ILogin";
import { emptyLogin } from "../shared/information/values";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticationTrue } from "../app/store/slice/authenticatedSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../shared/http/userAPI";
import ModalWindow from "../shared/ModalWindow";
import { setUserId } from "../app/store/slice/userIdSlice";
import { ROUTES } from "../app/Routes/routesName";
function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newLogin, setNewLogin] = useState<ILogin>(emptyLogin);
  const [error, serError] = useState("");
  const [modal, setModal] = useState(false);

  const handleInputUserChange = (event: any) => {
    const { name, value } = event.target;
    setNewLogin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setModal(false);
    serError("");
  };

  const submitNewLogin = async () => {
    try {
      const responce: any = await login(newLogin);

      if (responce) {
        setNewLogin(emptyLogin);
        dispatch(authenticationTrue());
        dispatch(setUserId(responce.id));
        navigate(ROUTES.mainPage);
      }
    } catch (error: any) {
      const message = error.response.data.message;
      if (message) {
        serError(message);
        setModal(true);
      }
    }
  };
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h5" component={"h2"}>
        Log In
      </Typography>
      <FormControl
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          submitNewLogin();
        }}
      >
        <Box
          sx={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "16px",
          }}
        >
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            color={newLogin.email ? "success" : "error"}
            variant="outlined"
            required
            value={newLogin.email}
            onChange={(e) => {
              handleInputUserChange(e);
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            color={newLogin.password ? "success" : "error"}
            variant="outlined"
            required
            value={newLogin.password}
            onChange={(e) => {
              handleInputUserChange(e);
            }}
          />
        </Box>
        <Button
          type="submit"
          sx={{
            display: "flex",
            my: 2,
            color: "#1976d2",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
            borderRadius: 2,
            p: "13px",
          }}
        >
          Log In
        </Button>
      </FormControl>
      <ModalWindow onClose={closeModal} show={modal}>
        <Typography
          variant="h5"
          component={"div"}
          sx={{
            p: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {error !== "" ? error : "Unknown error"}
        </Typography>
      </ModalWindow>
    </Box>
  );
}

export default LogIn;

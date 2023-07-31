import { Typography, Box, Button, TextField, FormControl } from "@mui/material";
import { ILogin } from "../types/ILogin";
import { emptyLogin } from "../functions/values";
import {  useState } from "react";
import { useDispatch} from "react-redux";
import {
  authenticationTrue,
} from "../store/slice/authenticatedSlice";
import { useNavigate } from "react-router-dom";
import { login } from "../http/userAPI";
function LogIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newLogin, setNewLogin] = useState<ILogin>(emptyLogin);

  const handleInputUserChange = (event: any) => {
    const { name, value } = event.target;
    setNewLogin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };


  const submitNewLogin = async () => {
    const responce = await login(newLogin)
    if(responce){
      setNewLogin(emptyLogin);
      dispatch(authenticationTrue());
      navigate("/");
    }
;
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
            color={newLogin.email ? "success" : "error" }
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
    </Box>
  );
}

export default LogIn;

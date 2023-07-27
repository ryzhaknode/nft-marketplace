import { Typography, Box, Button, TextField } from "@mui/material";
import { ILogin } from "../types/ILogin";
import { emptyLogin } from "../functions/values";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { authenticationTrue } from "../store/slice/authenticatedSlice";
function LogIn() {
  const dispatch = useDispatch();
  const authentication = useSelector(
    (state: RootState) => state.authentication
  );
  console.log(authentication);
  const [newLogin, setNewLogin] = useState<ILogin>(emptyLogin);
  const handleInputUserChange = (event: any) => {
    const { name, value } = event.target;
    setNewLogin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const submitNewLogin = () => {
    console.log("submit");
    setNewLogin(emptyLogin);
    dispatch(authenticationTrue());
  };
  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Typography variant="h5" component={"h2"}>
        Log In
      </Typography>
      <form
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
            label="Username"
            name="username"
            color={newLogin.username === "" ? "error" : "success"}
            variant="outlined"
            required
            value={newLogin.username}
            inputProps={{
              pattern: "[a-zA-Zs]*",
            }}
            onChange={(e) => {
              handleInputUserChange(e);
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            color={newLogin.password === "" ? "error" : "success"}
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
      </form>
    </Box>
  );
}

export default LogIn;

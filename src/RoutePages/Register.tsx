import { Typography, Box, Button, TextField } from "@mui/material";
import { IRegistration } from "../types/IRegistration";
import { useState } from "react";
import { emptyUser, interests } from "../functions/values";
import { handleOnlyWords } from "../functions/inputChecker";
import { useAddNewUserInJson } from "../hooks/useAddNewUserToJson";
function RegisterPage() {
  const [newUser, setNewUser] = useState<IRegistration>(emptyUser);
  const [selectedInterest, setSelectedInterest] = useState("");
  const [thesamePassword, setThesamePassword] = useState(true);

  const interestsChange = (value: string) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      interests: [{ name: value }],
    }));
  };

  const handleInputUserChange = (event: any) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const checkPassword = (e: any) => {
    if (e.target.value === newUser.password) {
      setThesamePassword(true);
    } else setThesamePassword(false);
  };

  const [addObject] = useAddNewUserInJson();

  const submitNewRegister = () => {
    if (thesamePassword) {
      addObject({ ...newUser });
      setNewUser(emptyUser);
    }
  };

  return (
    <Box
      sx={{
        paddingTop: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography variant="h4" component={"h1"}>
        Registration Form
      </Typography>
      <Box>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitNewRegister();
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
              label="Name"
              name="name"
              color={newUser.name ? "error" : "success"}
              variant="outlined"
              required
              value={newUser.name}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                handleInputUserChange(e);
              }}
            />
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {interests.map((interest, i) => (
                <Button
                  onClick={() => {
                    interestsChange(interest);
                    setSelectedInterest(interest);
                  }}
                  key={i}
                  color={selectedInterest === interest ? "success" : "primary"}
                  size="medium"
                  variant="outlined"
                  sx={{ borderRadius: "20px" }}
                >
                  <Typography component={"p"}>{interest}</Typography>
                </Button>
              ))}
            </Box>
            <TextField
              margin="normal"
              fullWidth
              label="Username"
              name="username"
              color={newUser.username ? "error" : "success"}
              variant="outlined"
              required
              value={newUser.username}
              onChange={(e) => {
                handleInputUserChange(e);
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              color={newUser.password ? "error" : "success"}
              variant="outlined"
              required
              value={newUser.password}
              onChange={(e) => {
                handleInputUserChange(e);
              }}
            />
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                margin="normal"
                label="Repeat-password"
                name="repeatpassword"
                color={
                  newUser.password === newUser.repeatpassword
                    ? "success"
                    : "error"
                }
                variant="outlined"
                required
                value={newUser.repeatpassword}
                onChange={(e) => {
                  checkPassword(e);
                  handleInputUserChange(e);
                }}
              />
              {thesamePassword === false ? (
                <Typography color={"error"}>not the same password!</Typography>
              ) : (
                <></>
              )}
            </Box>
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
            Create Account
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default RegisterPage;

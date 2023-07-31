import { Typography, Box, Button, TextField, FormControl } from "@mui/material";
import { Interest } from "../types/IRegistration";
import { useState } from "react";
import { emptyUser, interests } from "../functions/values";
import { handleOnlyWords } from "../functions/inputChecker";
import { useAddNewUserInJson } from "../hooks/useAddNewUserToJson";
import ModalWindow from "../components/ModalWindow";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";
import { registration } from "../http/userAPI";
function RegisterPage() {
  const [newUser, setNewUser] = useState(emptyUser);
  const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [modal, setModal] = useState(false);

  const interestsChange = (value: string) => {
    if (selectedInterest.find((int) => int.name === value)) {
      setSelectedInterest(selectedInterest.filter((int) => int.name !== value));
    } else {
      if (selectedInterest.length < 3)
        setSelectedInterest([...selectedInterest, { name: value }]);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleInputUserChange = (event: any) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // const [addObject] = useAddNewUserInJson();

  const submitNewRegister = async () => {
    if (newUser.password === repeatPassword) {
      const responce = await registration({ ...newUser, interests: selectedInterest })
      setRepeatPassword('')
      setNewUser(emptyUser);
      setModal(true);
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
        <FormControl
          component={"form"}
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
              color={newUser.name ? "success":"error"}
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
                  }}
                  key={i}
                  color={
                    selectedInterest.find((int) => int.name === interest)
                      ? "success"
                      : "primary"
                  }
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
              label="Email"
              name="email"
              color={newUser.email ?  "success" :"error"}
              variant="outlined"
              required
              value={newUser.email}
              onChange={(e) => {
                handleInputUserChange(e);
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              color={newUser.password ? "success" :"error"}
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
                  newUser.password === repeatPassword
                    ? "success"
                    : "error"
                }
                variant="outlined"
                required
                value={repeatPassword}
                onChange={(e) => {
                  setRepeatPassword(e.target.value)
                }}
              />
              {newUser.password !== repeatPassword ? (
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
        </FormControl>
      </Box>
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
          <DoneIcon fontSize="large" sx={{ paddingRight: "10px" }} />
          Successfully registered
        </Typography>
      </ModalWindow>
    </Box>
  );
}

export default RegisterPage;

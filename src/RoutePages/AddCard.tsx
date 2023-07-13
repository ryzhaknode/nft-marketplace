import { Typography, Box, Button, Input, TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { INftItem } from "../types/INftItem";

const interests = [
  "Art",
  "Dao",
  "Nft-Pass",
  "Promo",
  "Gaming",
  "Vote-Power",
  "Meme",
  "3D-Art",
];

function AddCard() {
  const [selectedButton, setSelectedButton] = useState("");
  const [artName, setArtName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [price, setPrice] = useState("");

  const [art, setArt] = useState<INftItem>({
    name: "",
    description: "",
    nftCodeNumber8: "00000007",
    interests: [{ name: "" }],
    createdAt: "2022-11-12T01:05:01Z",
    authorName: "",
    companyName: "",
    images: [{ name: "", url: "" }],
    price: "",
  });

  const interestsChange = (value: string) => {
    setArt((prevArt) => ({
      ...prevArt,
      interests: [{ name: value }],
    }));
  };

  useEffect(() => {
    console.log(art);
  }, [art]);
  //checking only numbers in input
  const handleOnlyNumbers = (event: any) => {
    let { value } = event.target;
    value = value.replace(/[^\d.]/g, "");
    value = value.replace(/\.(?=.*\.)/g, "");
    event.target.value = value;
  };

  //checking valid url and only url in input
  const handleOnlyUrl = (event: any) => {
    const { value } = event.target;
    const isValidUrl = isValidURL(value);
    event.target.value = isValidUrl ? value : "";
  };
  const isValidURL = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  //checking only words in input
  const handleOnlyWords = (event: any) => {
    const { value } = event.target;
    const textOnlyValue = value.replace(/[^a-zA-Z\s]/g, "");
    event.target.value = textOnlyValue;
  };

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "20px",
          borderBottom: "1px solid #a0a0a0",
        }}
      >
        <Typography variant="h4" component={"h2"}>
          Add Card
        </Typography>
        <Button sx={{ border: "1px solid", padding: "10px 20px" }}>
          <Typography component={"h5"}>PUBLISH ART</Typography>{" "}
        </Button>
      </Box>

      <Box sx={{ borderBottom: "1px solid #a0a0a0", paddingBottom: "20px" }}>
        <Box sx={{ padding: "20px 0" }}>
          <Typography variant="h6" component={"div"}>
            Main information
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ paddingLeft: "10px" }} component={"div"}>
            Medium *
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              padding: "20px 0",
            }}
          >
            {interests.map((interest, i) => (
              <Button
                onClick={() => {
                  interestsChange(interest);
                  setSelectedButton(interest);
                }}
                key={i}
                color={selectedButton === interest ? "success" : "primary"}
                size="medium"
                variant="outlined"
                sx={{ borderRadius: "20px" }}
              >
                <Typography component={"p"}>{interest}</Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <TextField
              margin="normal"
              label="Art name"
              variant="outlined"
              value={artName}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                setArtName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Author name"
              variant="outlined"
              value={authorName}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                setAuthorName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Price in ETH"
              variant="outlined"
              inputProps={{
                pattern: "[0-9]*", // Регулярное выражение для цифр
              }}
              value={price}
              onChange={(e) => {
                handleOnlyNumbers(e);
                setPrice(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Company name"
              variant="outlined"
              value={companyName}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                setCompanyName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderBottom: "1px solid #a0a0a0", paddingBottom: "10px" }}>
        <Box sx={{ padding: "20px 0" }}>
          <Typography variant="h6" component={"div"}>
            Additional information
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{ paddingBottom: "20px", borderBottom: "1px solid  #a0a0a0" }}
          >
            <TextField
              label="Art description"
              fullWidth
              multiline
              onChange={(e) => {
                handleOnlyWords(e);
              }}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              variant="outlined"
              margin="normal"
            />
          </Box>
          <Box
            sx={{
              padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography variant="h6" component={"div"}>
              Nft image
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                label="Image name"
                margin="normal"
                onChange={(e) => {
                  handleOnlyWords(e);
                }}
                inputProps={{
                  pattern: "[a-zA-Zs]*",
                }}
                variant="outlined"
              />
              <TextField
                onChange={(e) => {
                  handleOnlyUrl(e);
                }}
                inputProps={{
                  pattern: '^(ftp|http|https):\\/\\/[^ "]+$',
                }}
                label="Image url"
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddCard;

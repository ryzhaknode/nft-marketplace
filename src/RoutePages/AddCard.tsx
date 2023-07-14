import { Typography, Box, Button, Input, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { INftItem } from "../types/INftItem";
import {
  handleOnlyNumbers,
  handleOnlyUrl,
  handleOnlyWords,
} from "../functions/inputChecker";
import { Images } from "../types/Images";
import { addInJson } from "../functions/addInJson";

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
  const [notFilled, setNotFilled] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [images, setImages] = useState<Images>({
    name: "",
    url: "",
  });

  const [art, setArt] = useState<INftItem>({
    name: "",
    description: "",
    nftCodeNumber8: "00000000",
    interests: [{ name: "" }],
    createdAt: "2022-01-01T01:05:01Z",
    authorName: "",
    companyName: "",
    images: [{ name: "", url: "" }],
    price: "",
  });

  const handleInputChangeInArt = (event: any) => {
    const { name, value } = event.target;
    setArt((prevArt) => ({
      ...prevArt,
      [name]: value,
    }));
  };

  const handleInputChangeInImages = (event: any) => {
    const { name, value } = event.target;
    setImages((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    setArt((prevArt) => ({
      ...prevArt,
      images: [{ ...images }],
    }));
  }, [images]);

  const interestsChange = (value: string) => {
    setArt((prevArt) => ({
      ...prevArt,
      interests: [{ name: value }],
    }));
  };

  useEffect(() => {
    console.log(art);
    console.log(require("../nftsItems.json"));
  }, [art]);

  const clickPublishArt = () => {
    if (
      art.name &&
      art.authorName &&
      art.price &&
      art.images &&
      art.companyName &&
      art.interests &&
      art.description
    ) {
      addInJson(art);
      setNotFilled(false);
      setArt({
        name: "",
        description: "",
        nftCodeNumber8: "00000000",
        interests: [{ name: "" }],
        createdAt: "2022-01-01T01:05:01Z",
        authorName: "",
        companyName: "",
        images: [{ name: "", url: "" }],
        price: "",
      });
      setImages({
        name: "",
        url: "",
      });
      setSelectedButton("");
    } else setNotFilled(true);
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
        <Box sx={{ position: "relative" }}>
          <Button
            onClick={clickPublishArt}
            sx={{ border: "1px solid", padding: "10px 20px" }}
          >
            <Typography component={"h5"}>PUBLISH ART</Typography>
          </Button>
          {notFilled ? (
            <Typography
              sx={{
                position: "absolute",
                bottom: "10",
                left: "0",
              }}
              component={"div"}
              color="error"
            >
              fill all inputs
            </Typography>
          ) : (
            <></>
          )}
        </Box>
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
              name="name"
              color={art.name === "" ? "error" : "success"}
              variant="outlined"
              value={art.name}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                handleInputChangeInArt(e);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Author name"
              variant="outlined"
              name="authorName"
              color={art.authorName === "" ? "error" : "success"}
              value={art.authorName}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                handleInputChangeInArt(e);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Price in ETH"
              variant="outlined"
              color={art.price === "" ? "error" : "success"}
              inputProps={{
                pattern: "[0-9]*", // Регулярное выражение для цифр
              }}
              name="price"
              value={art.price}
              onChange={(e) => {
                handleOnlyNumbers(e);
                handleInputChangeInArt(e);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              margin="normal"
              label="Company name"
              name="companyName"
              variant="outlined"
              value={art.companyName}
              color={art.companyName === "" ? "error" : "success"}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              onChange={(e) => {
                handleOnlyWords(e);
                handleInputChangeInArt(e);
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
              name="description"
              value={art.description}
              onChange={(e) => {
                handleOnlyWords(e);
                handleInputChangeInArt(e);
              }}
              inputProps={{
                pattern: "[a-zA-Zs]*",
              }}
              color={art.description === "" ? "error" : "success"}
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
                value={images.name}
                name="name"
                margin="normal"
                onChange={(e) => {
                  handleOnlyWords(e);
                  handleInputChangeInImages(e);
                }}
                inputProps={{
                  pattern: "[a-zA-Zs]*",
                }}
                variant="outlined"
                color={images.name === "" ? "error" : "success"}
              />
              <TextField
                onChange={(e) => {
                  handleOnlyUrl(e);
                  handleInputChangeInImages(e);
                }}
                value={images.url}
                name="url"
                inputProps={{
                  pattern: '^(ftp|http|https):\\/\\/[^ "]+$',
                }}
                label="Image url"
                color={images.url === "" ? "error" : "success"}
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

import { Typography, Box, Button, Input, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { INftItem } from "../types/INftItem";
import datajson from "../nftsItems.json";
import {
  handleOnlyNumbers,
  handleOnlyUrl,
  handleOnlyWords,
} from "../functions/inputChecker";
import { Images } from "../types/Images";
import { emptyArt, emptyImages, interests } from "../functions/values";
import { useAddInJson } from "../hooks/useAddToJson";

function AddCard() {
  const [selectedButton, setSelectedButton] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);
  const [images, setImages] = useState<Images>(emptyImages);
  const [art, setArt] = useState<INftItem>(emptyArt);

  //change art-values
  const handleInputChangeInArt = (event: any) => {
    const { name, value } = event.target;
    setArt((prevArt) => ({
      ...prevArt,
      [name]: value,
    }));
  };

  //compare art values + images object
  useEffect(() => {
    setArt((prevArt) => ({
      ...prevArt,
      images: [{ ...images }],
    }));
  }, [images]);

  //change images object in art-values
  const handleInputChangeInImages = (event: any) => {
    const { name, value } = event.target;
    setImages((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  //change interests object in art-values
  const interestsChange = (value: string) => {
    setArt((prevArt) => ({
      ...prevArt,
      interests: [{ name: value }],
    }));
  };

  const clearValues = () => {
    setArt(emptyArt);
    setImages(emptyImages);
    setSelectedButton("");
  };

  const [addObject] = useAddInJson();

  const submitPublishArt = () => {
    addObject(art);
    clearValues();
    setDisabledButton(true);
  };

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitPublishArt();
        }}
      >
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
              disabled={disabledButton}
              type="submit"
              sx={{ border: "1px solid", padding: "10px 20px" }}
            >
              <Typography component={"h5"}>PUBLISH ART</Typography>
            </Button>
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
                required
                value={art.name}
                inputProps={{
                  pattern: "[a-zA-Zs]*",
                }}
                onChange={(e) => {
                  handleOnlyWords(e);
                  handleInputChangeInArt(e);
                }}
              />
              <TextField
                margin="normal"
                label="Author name"
                variant="outlined"
                required
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
              />
              <TextField
                margin="normal"
                label="Price in ETH"
                variant="outlined"
                required
                color={art.price === "" ? "error" : "success"}
                inputProps={{
                  pattern: "[0-9]*",
                }}
                name="price"
                value={art.price}
                onChange={(e) => {
                  handleOnlyNumbers(e);
                  handleInputChangeInArt(e);
                }}
              />
              <TextField
                margin="normal"
                label="Company name"
                required
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
                required
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
                  required
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
                  required
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
      </form>
    </Box>
  );
}

export default AddCard;

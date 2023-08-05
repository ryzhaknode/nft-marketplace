import { Typography, Box, Button, TextField, FormControl } from "@mui/material";
import { useState } from "react";
import {
  handleOnlyNumbers,
  handleOnlyUrl,
  handleOnlyWords,
} from "../information/inputChecker";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {
  emptyArt,
  emptyImages,
  interests,
  randomEightNum,
} from "../information/values";
import { createNftCard } from "../http/nftCardAPI";
import { useSelector } from "react-redux";
import { selectUser } from "../store/slice/userIdSlice";

function AddCard() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const user = useSelector(selectUser);
  const [images, setImages] = useState([
    { id: randomEightNum(), ...emptyImages },
  ]);
  const [art, setArt] = useState(emptyArt);

  //change values in interests
  const interestsChange = (value: string) => {
    setArt((prevArt) => ({
      ...prevArt,
      interests: [{ name: value }],
    }));
  };

  //change values in art
  const handleInputChangeInArt = (event: any) => {
    const { name, value } = event.target;
    setArt((prevArt) => ({
      ...prevArt,
      [name]: value,
    }));
  };

  //change values in images object
  const handleInputChangeInImages = (event: any, id: number) => {
    const { name, value } = event.target;
    const updatedImages = [...images];
    const objIndex = updatedImages.findIndex((image) => image.id === id);
    if (objIndex !== -1) {
      updatedImages[objIndex] = {
        ...updatedImages[objIndex],
        [name]: value,
      };
      setImages(updatedImages);
    }
  };
  //clear all values
  const clearValues = () => {
    setArt({
      ...emptyArt,
    });
    setImages([{ id: randomEightNum(), ...emptyImages }]);
    setSelectedInterest("");
  };
  //push new art and clear all values
  const submitPublishArt = () => {
    createNftCard({ ...art, images: images, userId: user })
      .then((res) => {
        console.log(res);
        clearValues();
      })
      .catch((e) => alert(e.response.data.message));
  };
  //add new image section but not more then 4 new section
  function addNewImageClick() {
    if (images.length < 4)
      setImages([...images, { id: randomEightNum(), ...emptyImages }]);
  }
  //delete selected  image section
  function deleteImage(id: number) {
    if (images.length > 1) setImages(images.filter((img) => img.id !== id));
  }

  return (
    <Box sx={{ paddingTop: "50px" }}>
      <FormControl
        component={"form"}
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
            <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <TextField
                margin="normal"
                label="Art name"
                name="name"
                color={art.name ? "success" : "error"}
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
                color={art.authorName ? "success" : "error"}
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
                color={art.price ? "success" : "error"}
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
                color={art.companyName ? "success" : "error"}
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
                color={art.description ? "success" : "error"}
                variant="outlined"
                margin="normal"
              />
            </Box>
          </Box>
          <Box
            paddingY={"30px"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">Images</Typography>
            <Button onClick={addNewImageClick}>+ ADD NEW IMAGE</Button>
          </Box>
          {images.map((img) => (
            <Box
              key={img.id}
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
                  value={img.name}
                  name="name"
                  margin="normal"
                  onChange={(e) => {
                    handleOnlyWords(e);
                    handleInputChangeInImages(e, img.id);
                  }}
                  inputProps={{
                    pattern: "[a-zA-Zs]*",
                  }}
                  variant="outlined"
                  color={img.name ? "success" : "error"}
                />
                <TextField
                  required
                  onChange={(e) => {
                    handleOnlyUrl(e);
                    handleInputChangeInImages(e, img.id);
                  }}
                  value={img.url}
                  name="url"
                  inputProps={{
                    pattern: '^(ftp|http|https):\\/\\/[^ "]+$',
                  }}
                  label="Image url"
                  color={img.url ? "success" : "error"}
                  variant="outlined"
                />
              </Box>
              <Button
                style={{ justifyContent: "flex-end" }}
                onClick={() => {
                  deleteImage(img.id);
                }}
              >
                <DeleteForeverIcon
                  sx={{
                    p: "6px",
                    backgroundColor: "#e0f0ff",
                    borderRadius: "50%",
                  }}
                />
              </Button>
            </Box>
          ))}
        </Box>
      </FormControl>
    </Box>
  );
}

export default AddCard;

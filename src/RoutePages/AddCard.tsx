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
    nftCodeNumber8: "",
    interests: [{ name: "" }],
    createdAt: "",
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
    // console.log(artName);
  }, [art]);

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
              label="Art name"
              variant="outlined"
              value={artName}
              onChange={(e) => {
                setArtName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              label="Author name"
              variant="outlined"
              value={authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              label="Price"
              variant="outlined"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
            <TextField
              label="Company name"
              variant="outlined"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              // Другие свойства Material-UI можно добавить здесь
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderBottom: "1px solid #a0a0a0", paddingBottom: "20px" }}>
        <Box sx={{ padding: "20px 0" }}>
          <Typography variant="h6" component={"div"}>
            Additional information
          </Typography>
        </Box>
        <Box>
          <TextField label="Art description" variant="outlined" />
          <Box
            sx={{
              margin: "10px 0",
              padding: "10px 0",
              border: "1px solid #000000",
              display: "flex",
              gap: "30px",
            }}
          >
            <TextField label="Image name" variant="outlined" />
            <TextField label="Image link" variant="outlined" />
          </Box>
          <TextField label="Creating date" variant="outlined" />
          <TextField label="Nft Code" variant="outlined" />
        </Box>
      </Box>
    </Box>
  );
}

export default AddCard;

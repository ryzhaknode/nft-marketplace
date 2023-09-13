import {Typography, Box, Button, TextField, FormControl} from "@mui/material";
import {useState} from "react";
import {
    handleOnlyNumbers,
    handleOnlyUrl,
    handleOnlyWords,
} from "../../shared/functions/inputChecker";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {emptyImages, randomEightNum, emptyArt} from './constants/constats'
import {
    interests,
} from "../../shared/constants/constants";
import {createNftCard} from "../../shared/http/nftCardAPI";
import {useSelector} from "react-redux";
import {selectUser} from "../../app/store/slice/userIdSlice";
import {Interest} from "../../shared/types/IRegistration";
import cls from './AddCardPage.module.scss'
import {classNames} from "../../shared/classNames/classNames";
import {useTranslation} from "react-i18next";

function AddCard() {
    const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);
    const {t} = useTranslation('addCard')
    const user = useSelector(selectUser);
    const [images, setImages] = useState([
        {id: randomEightNum(), ...emptyImages},
    ]);
    const [art, setArt] = useState(emptyArt);

    //change values in interests
    const interestsChange = (value: string) => {
        if (selectedInterest.find((int) => int.name === value)) {
            setSelectedInterest(selectedInterest.filter((int) => int.name !== value));
        } else {
            if (selectedInterest.length < 3)
                setSelectedInterest([...selectedInterest, {name: value}]);
        }
    };

    //change values in art
    const handleInputChangeInArt = (event: any) => {
        const {name, value} = event.target;
        setArt((prevArt) => ({
            ...prevArt,
            [name]: value,
        }));
    };

    //change values in images object
    const handleInputChangeInImages = (event: any, id: number) => {
        const {name, value} = event.target;
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
        setImages([{id: randomEightNum(), ...emptyImages}]);
        setSelectedInterest([]);
    };
    //push new art and clear all values
    const submitPublishArt = () => {
        createNftCard({
            ...art,
            interests: selectedInterest,
            images: images,
            userId: user,
        })
            .then((res) => {
                console.log(res);
                clearValues();
            })
            .catch((e) => alert(e.response.data.message));
    };

    //add new image section but not more then 4 new section
    function addNewImageClick() {
        if (images.length < 4)
            setImages([...images, {id: randomEightNum(), ...emptyImages}]);
    }

    //delete selected  image section
    function deleteImage(id: number) {
        if (images.length > 1) setImages(images.filter((img) => img.id !== id));
    }

    return (
        <Box className={classNames(cls.addCard)}>
            <FormControl
                component={"form"}
                onSubmit={(e) => {
                    e.preventDefault();
                    submitPublishArt();
                }}
            >
                <Box
                    className={classNames(`${cls.addCard__titleBlock} ${cls.bottomLine}`)}
                >
                    <Typography variant="h4" component={"h2"}>
                        {t("Add Card")}
                    </Typography>
                    <Box sx={{position: "relative"}}>

                        <Button
                            type="submit"
                            sx={{border: "1px solid", padding: "10px 20px"}} // material ui
                        >
                            <Typography component={"h5"}>
                                {t("PUBLISH ART")}
                            </Typography>
                        </Button>
                    </Box>
                </Box>

                <Box className={classNames(cls.bottomLine)}>
                    <Typography paddingY={'20px'} variant="h6" component={"div"}>
                        {t("PUBLISH ART")}
                    </Typography>
                    <Box>
                        <Typography paddingLeft={'10px'} component={"div"}>
                            {t("Medium")}
                        </Typography>
                        <Box
                            className={classNames(`${cls.addCard__interestsBlock} ${cls.bottomLine}`)}
                        >
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
                                    sx={{borderRadius: "20px"}}
                                >
                                    <Typography component={"p"}>{interest}</Typography>
                                </Button>
                            ))}
                        </Box>
                        <Box className={cls.addCard__inputBlock}>
                            <TextField
                                margin="normal"
                                label={t("Art name")}
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
                                label={t("Author name")}
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
                                label={t("Price in ETH")}
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
                                label={t("Company name")}
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
                <Box className={classNames(cls.bottomLine)}>
                    <Typography paddingY={'20px'} variant="h6" component={"div"}>
                        {t("Additional information")}

                    </Typography>
                    <TextField
                        label={t("Art description")}
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
                        className={classNames(cls.bottomLine)}
                    />
                    <Box
                        paddingY={"30px"}
                        display={"flex"}
                        justifyContent={"space-between"}
                    >
                        <Typography variant="h6">{t("Images")}</Typography>
                        <Button onClick={addNewImageClick}>{`+ ${t("ADD NEW IMAGE")}`}</Button>
                    </Box>
                    {images.map((img) => (
                        <Box
                            key={img.id}
                            className={classNames(cls.addCard__nftImageBlock)}
                        >
                            <Typography variant="h6" component={"div"}>
                                {t("Nft image")}
                            </Typography>
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                            >
                                <TextField
                                    required
                                    label={t("Image name")}
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
                                    label={t("Image url")}
                                    color={img.url ? "success" : "error"}
                                    variant="outlined"
                                />
                            </Box>
                            <Button
                                className={classNames(cls.addCard__deleteBtn)}
                                onClick={() => {
                                    deleteImage(img.id);
                                }}
                            >
                                <DeleteForeverIcon
                                    className={classNames(cls.addCard__deleteIcon)}
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

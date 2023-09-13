import {Box, FormControl, FormLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import {useSortState} from "./hooks/useSortState";
import Loading from "../LoadingPage/LoadingPage";
import {filtersList} from "./constants/filterList";
import NftFilter from "../../features/NftFilter/NftFilter";
import NftGrid from "../../features/NftGrid/NftGrid";
import {useLoadNftData} from "./hooks/useLoadNftData";
import cls from './GalleryPage.module.scss'
import {classNames} from "../../shared/classNames/classNames";
import {useTranslation} from "react-i18next";

function Gallery() {
    const [selectedFilter, setSelectedFilter] = useState("");
    const {data, setData, loading} = useLoadNftData();
    const [sortDatajson] = useSortState(data, setData);
    const {t} = useTranslation()

    function selectChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const filter = filtersList.find((lst) => lst.label === value);
        filter && sortDatajson(filter.key, filter.sortBy);
        setSelectedFilter(value);
    }

    return (
        <>
            {loading ? (
                <Loading/>
            ) : (
                <Box
                    className={classNames(cls.gallery)}
                >

                    <Typography
                        className={classNames(cls.gallery__title)}
                        variant="h4"
                        component="h1"
                    >
                        {t("Gallery")}

                    </Typography>

                    <Box
                        className={classNames(cls.gallery__filterBox)}
                    >
                        <FormControl className={classNames(cls.gallery__formControl)}>
                            <FormLabel component="legend">{t("Sort NFT")}</FormLabel>
                            <NftFilter
                                selectedFilter={selectedFilter}
                                selectChange={selectChange}
                            />
                        </FormControl>
                    </Box>
                    <NftGrid data={data}/>
                </Box>
            )}
        </>
    );
}

export default Gallery;

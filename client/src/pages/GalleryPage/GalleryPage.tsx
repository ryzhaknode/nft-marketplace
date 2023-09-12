import {Box, FormControl, FormLabel, Select, MenuItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import {useSortState} from "../../shared/hooks/useSortState";
import Loading from "../LoadingPage/LoadingPage";
import {filtersList} from "../../shared/information/filterList";
import NftFilter from "../../features/NftFilter";
import NftGrid from "../../features/NftGrid";
import {useLoadNftData} from "../../shared/hooks/useLoadNftData";
import cls from './GalleryPage.module.scss'
import {classNames} from "../../shared/classNames/classNames";

function Gallery() {
    const [selectedFilter, setSelectedFilter] = useState("");
    const {data, setData, loading} = useLoadNftData();
    const [sortDatajson] = useSortState(data, setData);

    function selectChange(value: any) {
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
                        Gallery
                    </Typography>

                    <Box
                        className={classNames(cls.gallery__filterBox)}
                    >
                        <FormControl className={classNames(cls.gallery__formControl)}>
                            <FormLabel component="legend">Sort NFT</FormLabel>
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

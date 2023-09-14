import { NavLink, useNavigate, useParams } from 'react-router-dom';
import {
    Box, List, ListItem, Button, IconButton,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
import MyButton from '../../shared/ui/MyButton/MyButton';
import { deleteNft } from '../../shared/http/nftCardAPI';
import Loading from '../LoadingPage/LoadingPage';
import { ROUTES } from '../../app/routes/routesName';
import ModalWindow from '../../widgets/ModalWindow/ModalWindow';
import { selectUser } from '../../app/store/slice/userIdSlice';
import { useNavigateNavMenu } from '../../shared/hooks/useNavigateMenu';
import { useLoadCurrentNft } from './hooks/useLoadCurrentNft';
import cls from './CardPage.module.scss';
import { classNames } from '../../shared/classNames/classNames';
import SwiperSlider from '../../shared/swiper/SwiperSlider';

function CardPage() {
    const { contactId } = useParams();
    const userId = useSelector(selectUser);
    const navigate = useNavigate();

    const { loading, currentCard } = useLoadCurrentNft(contactId);
    const [modal, modalOpen, modalClose] = useNavigateNavMenu();

    const deleteThisNft = () => {
        deleteNft(contactId)
            .then((res) => {
                console.log(res);
                navigate(ROUTES.profilePage);
            })
            .catch((e) => console.log(e));
    };

    console.log(currentCard);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Box className={classNames(cls.card)}>
                    <Box
                        className={classNames(cls.card__topBlock)}
                    >
                        <NavLink
                            className={classNames(`${cls.card__routeBack} nav_link`)}
                            to={ROUTES.mainPage}
                        >
                            <ArrowBackIosIcon />
                            back
                        </NavLink>
                        {userId === currentCard?.userId && (
                            <Box>
                                <IconButton onClick={modalOpen}>
                                    <MoreVertIcon />
                                </IconButton>

                                <ModalWindow onClose={modalClose} show={modal}>
                                    <Box>
                                        <Box
                                            className={classNames('flex_center')}
                                            gap="5px"
                                        >
                                            <DeleteForeverIcon />
                                            <Typography>DO YOU WANT TO DELETE THIS NFT?</Typography>
                                        </Box>
                                        <Box
                                            className={classNames('flex_center')}
                                            gap="5px"
                                            paddingTop="10px"
                                        >
                                            <Button onClick={deleteThisNft}>Yes</Button>
                                        </Box>
                                    </Box>
                                </ModalWindow>
                            </Box>
                        )}
                    </Box>
                    <Box>
                        {currentCard ? (
                            <Grid paddingTop={6} container spacing={2} columns={12}>
                                <Grid paddingX="40px" laptop={6} mobile={12}>
                                    <SwiperSlider images={currentCard.images} />
                                </Grid>
                                <Grid mobile={12} laptop={6}>
                                    <Box
                                        className={classNames(cls.card__content)}
                                        textAlign={{ laptop: 'start', mobile: 'center' }}
                                    >
                                        <Box
                                            display="flex"
                                            flexDirection={{ laptop: 'row', mobile: 'column' }}
                                            justifyContent="space-between"
                                            flexWrap="wrap"
                                            pb={{ laptop: '15%', tablet: '7%', mobile: '10%' }}
                                        >
                                            <Box>
                                                <List
                                                    className={classNames(cls.card__interestsBlock)}
                                                >
                                                    {currentCard.interests.map((int, i) => (
                                                        <ListItem
                                                            className={classNames(cls.card__interestsItem)}
                                                            key={i}
                                                        >
                                                            <Typography variant="body1" component="div">
                                                                {int.name}
                                                            </Typography>
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                            <Typography
                                                className={classNames('flex_center')}
                                                paddingTop="20px"
                                                variant="h6"
                                                component="div"
                                            >
                                                {`${currentCard.price} ETH`}
                                            </Typography>
                                        </Box>
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            pb="5%"
                                        >
                                            <Typography gutterBottom variant="h4" component="div">
                                                {currentCard.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {currentCard.description}
                                            </Typography>
                                        </Box>
                                        <Box
                                            paddingTop="20px"
                                        >
                                            <MyButton size="large" variant="contained">
                                                SEND PURCHASE
                                            </MyButton>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        ) : (
                            <Typography variant="h2" component="div">
                                undefined Nft-card
                            </Typography>
                        )}
                    </Box>
                </Box>
            )}
        </>
    );
}

export default CardPage;

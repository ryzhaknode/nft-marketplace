import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Loading from '../../LoadingPage/LoadingPage';
import { useLoadUsersNft } from '../hooks/useLoadUsersNft';
import NftGrid from '../../../features/NftGrid/NftGrid';
import cls from './ProfilePage.module.scss';
import { classNames } from '../../../shared/classNames/classNames';

function ProfilePage() {
    const { data, loading } = useLoadUsersNft();
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {loading
                ? <Loading />
                : (
                    <Box
                        className={classNames(cls.profile)}
                    >
                        <Typography
                            variant="h4"
                            component="h1"
                            className={classNames(cls.profile__title)}
                        >
                            {t('My Nfts')}
                        </Typography>
                        <NftGrid data={data} />
                    </Box>
                )}
        </>
    );
}

export default ProfilePage;

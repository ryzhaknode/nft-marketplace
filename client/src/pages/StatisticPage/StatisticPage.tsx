import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import cls from './StatisticPage.module.scss';
import { classNames } from '../../shared/classNames/classNames';

function StatisticPage() {
    const { t } = useTranslation();

    return (
        <Box className={classNames(cls.statistic)}>
            <Typography>{t('Statistic')}</Typography>
        </Box>
    );
}

export default StatisticPage;

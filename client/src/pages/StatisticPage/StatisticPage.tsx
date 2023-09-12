import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import cls from './StatisticPage.module.scss'
import {classNames} from "../../shared/classNames/classNames";
import {useTranslation} from "react-i18next";
function Statistic() {
    const {t, i18n} = useTranslation()

  return (
    <Box className={classNames(cls.statistic)}>
      <Typography>{t("Statistic")}</Typography>
    </Box>
  );
}

export default Statistic;

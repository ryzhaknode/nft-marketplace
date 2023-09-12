import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import cls from './StatisticPage.module.scss'
import {classNames} from "../../shared/classNames/classNames";
function Statistic() {
  return (
    <Box className={classNames(cls.statistic)}>
      <Typography>Statistic</Typography>
    </Box>
  );
}

export default Statistic;

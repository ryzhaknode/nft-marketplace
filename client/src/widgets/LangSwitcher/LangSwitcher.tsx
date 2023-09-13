
import cls from './LangSwitcher.module.scss'
import {classNames} from "../../shared/classNames/classNames";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {


    return (
        <div className={classNames(cls.LangSwitcher)}>

        </div>
    );
};

export default LangSwitcher;
import cls from './LangSwitcher.module.scss';
import { classNames } from '../../shared/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => (
    <div className={classNames(cls.LangSwitcher)} />
);

export default LangSwitcher;

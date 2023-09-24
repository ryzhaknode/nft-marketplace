import { useTranslation } from 'react-i18next';
import { classNames } from '../../shared/classNames/classNames';
import cls from './ErrorPage.module.scss';

function ErrorPage() {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ErrorPage)}>
            <h1>{t('Page is not found')}</h1>
        </div>
    );
}

export default ErrorPage;

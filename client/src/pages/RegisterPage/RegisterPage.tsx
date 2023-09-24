import {
    Typography, Box, Button, TextField, FormControl,
} from '@mui/material';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useTranslation } from 'react-i18next';
import { Interest } from '../../shared/types/IRegistration';
import { interests } from '../../shared/constants/constants';
import { handleOnlyWords } from '../../shared/functions/inputChecker';
import { registration } from '../../shared/http/userAPI';
import { classNames } from '../../shared/classNames/classNames';
import ModalWindow from '../../widgets/ModalWindow/ModalWindow';
import cls from './RegisterPage.module.scss';
import { emptyUser } from './constants/constants';

function RegisterPage() {
    const [newUser, setNewUser] = useState(emptyUser);
    const [selectedInterest, setSelectedInterest] = useState<Interest[]>([]);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [modal, setModal] = useState(false);
    const [error, serError] = useState('');
    const { t } = useTranslation();
    const interestsChange = (value: string) => {
        if (selectedInterest.find((int) => int.name === value)) {
            setSelectedInterest(
                selectedInterest.filter((int) => int.name !== value),
            );
        } else if (selectedInterest.length < 3) {
            setSelectedInterest(
                [...selectedInterest, { name: value }],
            );
        }
    };

    const closeModal = () => {
        setModal(false);
        serError('');
    };

    const handleInputUserChange = (event: any) => {
        const { name, value } = event.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const clearValues = () => {
        setSelectedInterest([]);
        setRepeatPassword('');
        setNewUser(emptyUser);
    };

    const submitNewRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (newUser.password === repeatPassword) {
            try {
                await registration({
                    ...newUser,
                    interests: selectedInterest,
                });
                clearValues();
                setModal(true);
            } catch (error: any) {
                const { message } = error.response.data;
                if (message) {
                    serError(message);
                    setModal(true);
                }
            }
        }
    };

    return (
        <Box
            className={classNames(cls.register)}
        >
            <Typography
                variant="h4"
                component="h1"
            >
                {t('Registration Form')}
            </Typography>
            <Box>
                <FormControl
                    component="form"
                    onSubmit={submitNewRegister}
                >
                    <Box
                        className={classNames(cls.register__form)}
                    >
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Name"
                            name="name"
                            color={newUser.name ? 'success' : 'error'}
                            variant="outlined"
                            required
                            value={newUser.name}
                            inputProps={{
                                pattern: '[a-zA-Zs]*',
                            }}
                            onChange={(e) => {
                                handleOnlyWords(e);
                                handleInputUserChange(e);
                            }}
                        />
                        <Box sx={
                            { display: 'flex', gap: '10px', flexWrap: 'wrap' }
                        }
                        >
                            {interests.map((interest, i) => (

                                <Button
                                    onClick={() => {
                                        interestsChange(interest);
                                    }}
                                    key={interest}
                                    color={
                                        selectedInterest.find((
                                            int,
                                        ) => int.name === interest)
                                            ? 'success'
                                            : 'primary'
                                    }
                                    size="medium"
                                    variant="outlined"
                                    sx={{ borderRadius: '20px' }}
                                >
                                    <Typography
                                        component="p"
                                    >
                                        {t(`${interest}`)}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Email"
                            name="email"
                            color={newUser.email ? 'success' : 'error'}
                            variant="outlined"
                            required
                            value={newUser.email}
                            onChange={(e) => {
                                handleInputUserChange(e);
                            }}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            name="password"
                            color={newUser.password ? 'success' : 'error'}
                            variant="outlined"
                            required
                            value={newUser.password}
                            onChange={(e) => {
                                handleInputUserChange(e);
                            }}
                        />
                        <Box width="100&">
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Repeat-password"
                                name="repeatpassword"
                                color={
                                    newUser.password === repeatPassword
                                        ? 'success'
                                        : 'error'
                                }
                                variant="outlined"
                                required
                                value={repeatPassword}
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }}
                            />
                            {newUser.password !== repeatPassword
                                && (
                                    <Typography color="error">
                                        not the same password!
                                    </Typography>
                                )}
                        </Box>
                    </Box>
                    <Button
                        type="submit"
                        sx={{
                            display: 'flex',
                            my: 2,
                            color: '#1976d2',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid',
                            borderRadius: 2,
                            p: '13px',
                        }}
                    >
                        Create Account
                    </Button>
                </FormControl>
            </Box>
            <ModalWindow onClose={closeModal} show={modal}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        p: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {error === '' ? (
                        <>
                            {' '}
                            <DoneIcon
                                fontSize="large"
                                sx={
                                    { paddingRight: '10px' }
                                }
                            />
                            Successfully registered
                        </>
                    ) : (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>{error}</>
                    )}
                </Typography>
            </ModalWindow>
        </Box>
    );
}

export default RegisterPage;

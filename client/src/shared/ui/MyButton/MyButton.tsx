import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#1a5590',
    },
}));

export default MyButton;

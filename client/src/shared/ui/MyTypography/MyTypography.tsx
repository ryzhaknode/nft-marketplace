import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const MyTypography = styled(Typography)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#1a5590',
    },
}));

export default MyTypography;

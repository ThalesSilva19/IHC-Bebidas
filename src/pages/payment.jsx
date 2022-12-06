import React from 'react'

import { Box, Typography } from '@mui/material';

import Appbar from '../components/appbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Checkout from '../components/checkout';

export default function Payment() {
    return (
        <Box>
            <Appbar />
            <Navbar />
            <Box sx={{
                marginLeft: '50px',
                fontSize: '20px'
            }}>
                <Typography variant='h6'>Home {'>'} Meu Carrinho {'>'} Pagamento</Typography>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '64px',
                paddingBottom: '64px',
            }}>
                <Checkout/>
            </Box>
            <Footer />
        </Box>
    )
}
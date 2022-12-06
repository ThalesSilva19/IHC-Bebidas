import React from 'react'

import { Box } from '@mui/material';

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
                <h4>Home {'>'} Meu Carrinho {'>'} Pagamento</h4>
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
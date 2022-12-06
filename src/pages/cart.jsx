import React from 'react'

import { Box } from '@mui/material';

import Appbar from '../components/appbar';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CartCard from '../components/cart_card'

export default function Cart() {
    return (
        <Box>
            <Appbar />
            <Navbar />
            <Box sx={{
                marginLeft: '50px',
                fontSize: '20px'
            }}>
                <h4>Home {'>'} Meu Carrinho</h4>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '64px',
            }}>
                <CartCard/>
            </Box>
            <Footer />
        </Box>
    )
}
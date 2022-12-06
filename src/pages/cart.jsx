import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material';

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
                display: 'flex',
                flexDirection: 'row',
                columnGap: '8px',
                marginTop: '16px',
                marginLeft: '50px',
                width: '100%'
                }}>
                <Link href='/'>
                    <Typography variant='h6' sx={{
                        "&:hover": {
                            cursor: 'pointer !important'
                        },
                    }}>
                        Home
                    </Typography>
                </Link>
                <Typography variant='h6'>{'>'}</Typography>
                <Link href='/cart'>
                    <Typography variant='h6' sx={{
                        "&:hover": {
                            cursor: 'pointer !important'
                        },
                    }}>
                        Meu Carrinho
                    </Typography>
                </Link>
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
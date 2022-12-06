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
                marginTop: '16px',
                marginBottom: '16px',
                marginLeft: '50px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '8px',
                    }}>
                    <Link href='/'>
                        <Typography variant='h4' tabIndex='0' sx={{
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Home
                        </Typography>
                    </Link>
                    <Typography variant='h4' tabIndex='0'>{'>'}</Typography>
                    <Link href='/cart'>
                        <Typography variant='h4' tabIndex='0' sx={{
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Meu Carrinho
                        </Typography>
                    </Link>
                </Box>
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
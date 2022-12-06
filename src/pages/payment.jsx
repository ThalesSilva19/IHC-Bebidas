import React from 'react'
import Link from 'next/link'

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

                    <Typography variant='h6'>{'>'}</Typography>
                    <Link href='/payment'>
                        <Typography variant='h6' sx={{
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Pagamento
                        </Typography>
                    </Link>
                </Box>
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
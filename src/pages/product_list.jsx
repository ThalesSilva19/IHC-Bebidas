import React from 'react'
import Link from 'next/link'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

import { Box, Button, Typography } from '@mui/material'

export default function index() {
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
                    width: '100%'
                }}>
                    <Link href='/'>
                        <Typography variant='h4' sx={{
                            "&:hover": {
                                cursor: 'pointer !important'
                            },
                        }}>
                            Home
                        </Typography>
                    </Link>
                        <Typography variant='h4'>{'>'}</Typography>
                        <Typography variant='h4'>Lista de Produtos</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '98%'
            }}>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: '16px',
                    margin: '10px'
                }}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>


                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px',
                    border: '0',
                    borderRadius: '10px',
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        gap: '16px',
                        marginBottom: '100px'
                    }}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Box>
                </Box>

            </Box>
            <Footer />
        </Box>
        )
}

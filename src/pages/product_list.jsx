import React from 'react'
import Link from 'next/link'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

import { Box, Typography } from '@mui/material'

export default function index() {
    return (
        <Box>
            <Appbar />
            <Navbar />
            <Box sx={{
                marginTop: 'calc((8px + 1.5625vw)/2)',
                marginBottom: 'calc((8px + 1.5625vw)/2)',
                marginLeft: 'calc((8px + 1.5625vw)*2)',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: 'calc((8px + 1.5625vw)/4)',
                    width: '100%'
                }}>
                    <Link href='/'>
                        <Typography variant='h4' sx={{
                            fontSize: '1em',
                            "&:hover": {
                                cursor: 'pointer !important',
                            },
                        }}>
                            Home
                        </Typography>
                    </Link>
                        <Typography variant='h4' sx={{fontSize: '1em',}}>{'>'}</Typography>
                        <Typography variant='h4' sx={{
                            fontSize: '1em',
                            "&:hover": {
                                cursor: 'pointer !important',
                            },
                        }}>Lista de Produtos</Typography>
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
                    gap: 'calc(8px + 1.5625vw)',
                    margin: 'calc((8px + 1.5625vw)/2)'
                }}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Box>


                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 'calc((8px + 1.5625vw)/2)',
                    border: '0',
                    borderRadius: 'calc((8px + 1.5625vw)/2)',
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        gap: 'calc(8px + 1.5625vw)',
                        marginBottom: 'calc((8px + 1.5625vw)*3)'
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

import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';
import CompleteProductCard from '../../components/complete_product_card';

import { Card, Box, Typography, Button } from '@mui/material';
import Navbar from '../../components/navbar';
import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import NextJsCarousel from '../../components/carousel';
import Avaliacoes from '../../components/avaliacoes';

export default function Produto() {

  const router = useRouter()
  const { product_id } = router.query

  return (
    <Box
      sx={{
        backgroundColor: '#EFEFEF'
      }}
    >
      <Appbar />
      <Navbar />
      <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '8px',
                marginTop: '16px',
                marginBottom: '16px',
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
                <Typography variant='h6'>Cerveja 1234</Typography>
            </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '64px',
        gap: '64px'
      }}>
        <CompleteProductCard />
        <NextJsCarousel />
        <Avaliacoes />
      </Box>
      <Footer />
    </Box>
  )
}

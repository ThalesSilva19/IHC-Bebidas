import React from 'react'

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

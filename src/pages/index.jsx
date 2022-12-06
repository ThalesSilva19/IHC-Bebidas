import React from 'react'
import Link from 'next/link'
import NextJsCarousel from '../components/carousel'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

import { Box, Typography, Button } from '@mui/material'

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
            <Typography variant='h6' sx={{
              "&:hover": {
                cursor: 'pointer !important'
              },
            }}>
              Home
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '98%'
      }}>
        <NextJsCarousel />

        <Box sx={{
          margin: '50px'
        }}>
          <Typography variant='h4'>Ofertas</Typography>
        </Box>

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
          <Button variant='contained' sx={{
            backgroundColor: '#FFB600',
            color: '#000000',
            width: '310px',
            height: '65px',
            fontSize: '20px',
            border: '0',
            borderRadius: '10px',
            margin: '10px'
          }}>
            Veja todas as Ofertas</Button>
        </Box>

        <Box sx={{
          margin: '50px',
        }}>
          <Typography variant='h4'>Cervejas</Typography>
        </Box>
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
      <Footer />
    </Box>
  )
}

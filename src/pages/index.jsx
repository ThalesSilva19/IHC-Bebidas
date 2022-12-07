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
        marginTop: 'calc((8px + 1.5625vw)/2)',
        marginBottom: 'calc((8px + 1.5625vw)/2)',
        marginLeft: 'calc(8px + 1.5625vw)'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: 'calc((8px + 1.5625vw)/4)',
          width: '100%'
        }}>
          <Link href='/'>
            <Typography variant='h4' tabIndex='0' sx={{
              fontSize: '1em',
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
          margin: 'calc((8px + 1.5625vw)*1.5)'
        }}>
          <Typography variant='h4' sx={{fontSize: '2em'}}>Ofertas</Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 'calc((8px + 1.5625vw)/2)',
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
          <Button variant='contained' sx={{
            backgroundColor: '#FFB600',
            color: '#000000',
            width: 'auto',
            height: 'auto',
            fontSize: '1.2em',
            border: '0',
            borderRadius: 'calc((8px + 1.5625vw)/4)',
            margin: 'calc((8px + 1.5625vw)/4)'
          }}>
            Veja todas as Ofertas</Button>
        </Box>

        <Box sx={{
          margin: 'calc((8px + 1.5625vw)*1.5)',
        }}>
          <Typography variant='h4' sx={{fontSize: '2em'}}>Cervejas</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: 'calc((8px + 1.5625vw)/2)',
          marginBottom: 'calc((8px + 1.5625vw)*3)'
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

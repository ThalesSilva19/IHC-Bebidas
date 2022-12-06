import React from 'react'

import NextJsCarousel from '../components/carousel'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

import { Box, Button } from '@mui/material'

export default function index() {
  return (
    <main>
      <Appbar />
      <Navbar />
      <Box sx={{
        margin: '50px',
        fontSize: '20px'
      }}>
        <h4>Home {'>'}</h4>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw'
      }}>
        <NextJsCarousel />

        <div style={{
          margin: '50px',
          fontSize: '20px'
        }}>
          <h1>Ofertas</h1>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '16px',
          margin: '10px'
        }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>


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

        <div style={{
          margin: '50px',
          fontSize: '20px'
        }}>
          <h1>Cervejas</h1>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '16px',
          marginBottom: '100px'
        }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Box>
      <Footer />
    </main>
  )
}

import React from 'react'

import NextJsCarousel from '../components/carousel'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

import { Box } from '@mui/material'

export default function index() {
  return (
    <main>
      <Appbar />
      <Navbar />
      <div style={{
        margin: '50px',
        fontSize: '20px'
      }}>
        <h1>Home {'>'}</h1>
      </div>
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


        <div style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '10px',
          border: '0',
          borderRadius: '10px'
        }}>
          <button style={{
            backgroundColor: '#FFB600',
            color: '#000000',
            width: '310px',
            height: '65px',
            fontSize: '20px',
            border: '0',
            borderRadius: '10px',
            margin: '10px'
          }}>
            Veja todas as Ofertas</button>
        </div>

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

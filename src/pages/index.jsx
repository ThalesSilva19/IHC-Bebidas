import React from 'react'

import NextJsCarousel from '../components/carousel'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'
import { margin, Typography, Button, borderRadius} from '@mui/system'

export default function index() {
  return (
    <main>
      <Appbar/>
      <Navbar/>
      <div style={{
        margin: '50px',
        fontSize: '20px'
      }}>
        <p>Home {'>'}</p>
      </div>
      
      <NextJsCarousel/>

      <div style={{
        margin: '50px',
        fontSize: '20px'
      }}>
        <p>Ofertas</p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        margin: '10px'
      }}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
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
        <p>Cervejas</p>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: '100px'
      }}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <Footer/>
    </main>
  )
}

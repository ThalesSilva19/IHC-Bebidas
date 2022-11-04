import React from 'react'

import NextJsCarousel from '../components/carousel'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Appbar from '../components/appbar'

export default function index() {
  return (
    <main>
      <Appbar/>
      <Navbar/>
      
      <NextJsCarousel/>

      <Footer/>
    </main>
  )
}

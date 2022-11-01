import React from 'react'
import ProductCard from '../components/product_card'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export default function index() {
  return (
    <main>
      <Navbar/>
      <ProductCard/>
      <Footer/>
    </main>
  )
}

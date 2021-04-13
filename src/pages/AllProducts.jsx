import React from 'react'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AllProducts() {
  return (
    <>
      <Header />
      <Catalog title="All Products" />
      <Footer />
    </>
  )
}

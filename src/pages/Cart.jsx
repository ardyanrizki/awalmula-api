import React from 'react'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Cart() {
  return (
    <>
      <Header />
      <Catalog title="My Cart" />
      <Footer />
    </>
  )
}

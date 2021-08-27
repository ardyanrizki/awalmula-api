import React from 'react'
import { useSelector } from 'react-redux'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Cart() {
  const cart = useSelector(state => state.cart.cart)

  const emptyCartState = {
    heading: 'Keranjang masih kosong',
    subheading: 'Pilih produk dulu di beranda'
  }

  return (
    <>
      <Header placeholderText="Cari di keranjang..." />
      <Catalog title="Keranjang saya" products={cart} loading={false} error={false} emptyState={emptyCartState} />
      <Footer />
    </>
  )
}

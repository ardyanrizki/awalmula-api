import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/actions'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AllProducts() {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <Header placeholderText="Cari produk kamu di sini..." />
      <Catalog title="All Products" data={products} loading={loading} error={error} />
      <Footer />
    </>
  )
}

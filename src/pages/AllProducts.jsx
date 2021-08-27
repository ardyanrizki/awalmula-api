import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchCategories } from '../store/actions'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AllProducts() {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const categories = useSelector(state => state.products.categories)
  const selectedCategory = useSelector(state => state.products.selectedCategory)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  const emptyProductState = {
    heading: 'Produk kosong',
    subheading: 'Silakan cek lagi beberapa saat'
  }

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory))
    dispatch(fetchCategories())
  }, [dispatch, selectedCategory])

  return (
    <>
      <Header placeholderText="Cari produk kamu di sini..." />
      <Catalog title="Semua produk" products={products} categories={categories} loading={loading} error={error} emptyState={emptyProductState}/>
      <Footer />
    </>
  )
}

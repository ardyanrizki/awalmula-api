import React from 'react'
import { useSelector } from 'react-redux'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Cart() {
  // const dispatch = useDispatch()

  const cart = useSelector(state => state.cart.cart)

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [dispatch])

  return (
    <>
      <Header placeholderText="Cari di cart..." />
      <Catalog title="My Cart" data={cart} loading={false} error={false} />
      <Footer />
    </>
  )
}

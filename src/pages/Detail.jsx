import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchProductById, addCartToLocalStorage, addBulkCartToLocalStorage } from '../store/actions'
import { useModal } from "react-simple-modal-provider";
import { css } from '@emotion/react'
import { SyncLoader, PuffLoader } from "react-spinners"
import Footer from '../components/Footer'
import Header from '../components/Header'
import arrowLeft from '../assets/arrow-left.svg'

export default function Detail() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)
  const { id } = useParams()

  const [imageLoading, setimageLoading] = useState(true);

  const product = useSelector(state => state.products.product)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  const { open: openAddCartModal } = useModal("add-cart-modal");

  const cardLoaderCss = css`
  display: block;
  margin: 80px auto;
  border-color: #476040;
  `;

  const imageLoaderCss = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border-color: #476040;
  `;

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  const cartStatus = (id) => {
    let flag = false
    cart.forEach(item => {
      if (+id === +item.id) {
        flag = true
      }
    })
    if (flag) {
      return true
    } else {
      return false
    }
  }

  const deleteItem = (id) => {
    const result = []
    cart.forEach(item => {
      if (+id !== +item.id) {
        result.push(item)
      }
    })
    dispatch(addBulkCartToLocalStorage(result))
  }

  return (
    <>
      <Header />
      <section id="detail">
        <div className="container">
        <Link to={'/'} className="back-btn"><img src={arrowLeft} alt="back button" /> Kembali </Link>
          {
            loading || error ?
              <SyncLoader color="#476040" loading={loading} css={cardLoaderCss} size={18} /> :
              <div className="detail-card row">
                <div className="img-div">
                {
                  imageLoading ?
                  <PuffLoader color="#476040" loading={imageLoading} css={imageLoaderCss} size={60} /> :
                  null
                }
                  <img className={`col smooth-image image-${imageLoading ? 'hidden' : 'visible'}`} onLoad={() => setimageLoading(false)} src={product.image} alt={product.title} />
                </div>
                <div className="col meta">
                  <h6 className="label">{ product.category }</h6>
                  <h4>{product.title}</h4>
                  <hr />
                  <h5 className="price">${ product.price }</h5>
                  <hr />
                  <div className="desc">
                    <p>
                    { product.description }
                    </p>
                  </div>
                  {
                    !cartStatus(product.id) ?
                      <button onClick={() => {openAddCartModal(); dispatch(addCartToLocalStorage(product))}}>+ Keranjang</button> :
                      <button onClick={() => deleteItem(product.id)} className="delete-cart">- Keranjang</button>
                  }
                </div>
              </div>
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

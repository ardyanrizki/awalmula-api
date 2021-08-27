import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useModal } from "react-simple-modal-provider";
import { useSelector, useDispatch } from 'react-redux'
import { PuffLoader } from "react-spinners"
import { css } from '@emotion/react'
import { addCartToLocalStorage, addBulkCartToLocalStorage } from '../store/actions'
import fallback from '../assets/fallback.svg'

export default function Card({ item }) {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  const { open: openAddCartModal } = useModal("add-cart-modal");

  const [imageLoading, setimageLoading] = useState(true);

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

  const imageLoadingSetter = (flag) => {
    if (!flag) {
      setTimeout(() => {
        setimageLoading(flag)
      }, 1000)
    }
  }

  const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border-color: #476040;
  `;

  return (
    <div className="card">
      <div className="img-div">
        {
          imageLoading ?
          <PuffLoader color="#476040" loading={imageLoading} css={override} size={60} /> :
          null
        }
        <img className={`col smooth-image image-${imageLoading ? 'hidden' : 'visible'}`} onLoad={() => imageLoadingSetter(false)} src={ item.image || fallback} alt="product-name" />
      </div>
      <div className="meta">
        <h6 className="label">{ item.category }</h6>
        <div className="product-title">
          <Link to={`/product-detail/${item.id}`} className="product-name"><h4 title={item.title}>{item.title}</h4></Link>
        </div>
        <div>
          <h5 className="price">${ item.price }</h5>
        </div>
      </div>
      {
        !cartStatus(item.id) ?
          <button onClick={() => {openAddCartModal(); dispatch(addCartToLocalStorage(item))}}>+ Keranjang</button> :
          <button onClick={() => deleteItem(item.id)} className="delete-cart">- Keranjang</button>
      }
    </div>
  )
}

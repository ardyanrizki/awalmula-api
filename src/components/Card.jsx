import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, addBulkCart } from '../store/actions'
import fallback from '../assets/fallback.svg'

export default function Card({ item }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  const openDetail = (id) => {
    history.push(`/product-detail/${id}`)
  }

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
    dispatch(addBulkCart(result))
  }


  return (
    <div onClick={() => openDetail(item.id)} className="card">
      <img src={fallback} alt="product-name" />
      <div className="meta">
        <h6 className="label">Agradaya</h6>
        <Link to={`/product-detail/${item.id}`} className="product-name"><h4>{item.name}</h4></Link>
        <p className="sellout">Terjual 4</p>
        <h5 className="price">Rp 30.000</h5>
        {
          !cartStatus(item.id) ?
            <button onClick={() => dispatch(addCart(item))}>+ Keranjang</button> :
            <button onClick={() => deleteItem(item.id)}>Hapus</button>
        }
      </div>
    </div>
  )
}

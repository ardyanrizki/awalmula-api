import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useDebounce from '../hooks/useDebounce'
import { setSelectedCategory, addBulkCartToLocalStorage } from '../store/actions'
import { Link, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import { SyncLoader } from "react-spinners"
import Card from './Card'
import emptyStateImg from '../assets/empty-state.png'
import plusIcon from '../assets/plus.svg'
import minusIcon from '../assets/minus.svg'

export default function Catalog({ title, products, categories, loading, error, emptyState }) {
  const search = useSelector(state => state.search.search)
  const selectedCategory = useSelector(state => state.products.selectedCategory)
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()

  const location = useLocation()
  const path = location.pathname

  const debouncedSearchValue = useDebounce(search, 700)

  const override = css`
  display: block;
  margin: 80px auto;
  border-color: #476040;
  `;

  const changeSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category))
  }

  const changeQuantity = (id, param, val) => {
    const arr = []
    cart.forEach(item => {
      if (+id === +item.id) {
        if (param === 'increment') {
          if (item.quantity < 100) {
            item.quantity += 1
          }
        } else if (param === 'decrement') {
            if (item.quantity > 1) {
              item.quantity -= 1
            }
        } else {
          if (val > 99) {
            item.quantity = 99
          } else if (val < 1) {
            item.quantity = 1
          } else {
            item.quantity = val
          }
        }
      }
      arr.push(item)
    })
    dispatch(addBulkCartToLocalStorage(arr))
  }

  const totalProduct = () => {
    let count = 0
    products.forEach(product => {
      const subTotal = product.price * product.quantity
      count += subTotal
    })
    return count.toFixed(2)
  }

  return (
    <section id="catalog">
      <div className="container">
        <div className="catalog-name">
          <h2>{title}</h2>
          {
            path === '/' ?
            <select className="categories-select" name="categories" value={selectedCategory} onChange={(e) => changeSelectedCategory(e.target.value)} id="catalog-categories-select">
              <option className="categories-select-option" value="">ALL CATEGORIES</option>
              {
                categories?.map((category, index) => (
                  <option className="categories-select-option" value={category} key={index}>{category.toUpperCase()}</option>
                ))
              }
            </select> :
            null
          }
        </div>
        { !products.length && !loading ?
        <div className="empty-state">
          <img src={emptyStateImg} alt="Empty state" />
          <h4>{emptyState.heading}</h4>
          <p>{emptyState.subheading}</p>
          <Link to="/" className="button button-primary">Pilih produk</Link>
        </div> : null
        }
        {
          loading ?
          <SyncLoader color="#476040" loading={loading} css={override} size={18} /> :
          <div className="cards-container">
            {
              // eslint-disable-next-line
              products.filter((item) => {
                if (debouncedSearchValue === null)
                  return item
                else if (item.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())) {
                  return item
                }
              }).map((item, index) => (
                <Card item={item} key={index} />
              ))
            }
          </div>
        }
        {
          !loading && path === '/cart' && products.length ?
          <div className="cart-shopping-info">
            <h5>Informasi Keranjang</h5>
            <ul>
              {
                products.map((product, index) => (
                  <ProductCartInfo product={product} changeQuantity={changeQuantity} key={index}/>
                ))
              }
            </ul>
            <p className="total-price">Total: ${totalProduct()}</p>
          </div> :
          null
        }
      </div>
    </section>
  )
}

function ProductCartInfo ({product, changeQuantity}) {
  return (
    <li className="product-info">
      <p className="product-name">{product.title}</p>
      <p className="product-price">${product.price}</p>
      <div className="quantity-btn">
        <button className="increment-btn" onClick={() => changeQuantity(product.id, 'increment')}><img src={plusIcon} alt="plus" /></button>
          <input className="input-quantity" type="number" max="99" min="1" onChange={(e) => changeQuantity(product.id, 'both', e.target.value)} value={product.quantity} />
        <button className="decrement-btn" onClick={() => changeQuantity(product.id, 'decrement')}><img src={minusIcon} alt="minus" /></button>
      </div>
      <p className="product-total">${(product.price * product.quantity).toFixed(2)}</p>
    </li>
  )
}
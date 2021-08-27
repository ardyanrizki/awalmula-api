import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchInput, checkLocalStorage } from '../store/actions'
import logoImg from '../assets/awalmula-logo-beta.png'
import cartImg from '../assets/shopping-bag.svg'

export default function Header({ placeholderText }) {
  const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname

  const cart = useSelector(state => state.cart.cart)

  useEffect(() => {
    dispatch(checkLocalStorage())
  }, [dispatch])

  const input = (e) => {
    const query = e.target.value
    dispatch(searchInput(query))
  }
  return (
    <header>
      <nav className="row">
        <Link className="col" to="/">
          <img className="logo" src={logoImg} alt="awal-mula-logo" />
        </Link>
        <div className="col">
          <Link className="cart-link" to="/cart">
            { 
              cart.length ?
              <span className="cart-count">{cart.length}</span> :
              null
            }
            <img className="cart" src={cartImg} alt="cart" />
          </Link>
          {
            path === '/' || path === '/cart' ?
              <form>
                <input onChange={(e => input(e))} type="search" placeholder={placeholderText} />
              </form> :
              null
          }
        </div>
      </nav>
    </header>
  )
}

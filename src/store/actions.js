import axios from 'axios'

export function addCart (payload) {
  payload.quantity = 1
  return { type: 'CART/ADDCART', payload }
}

export function addBulkCart (payload) {
  payload.forEach((e) => {
    if (!e.quantity) {
      e.quantity = 1
    }
  })
  return { type: 'CART/ADDBULKCART', payload }
}

export function searchInput (payload) {
  return { type: 'SEARCH/CHANGESEARCH', payload }
}

export function setProducts (payload) {
  return { type: 'PRODUCTS/SETPRODUCTS', payload }
}

export function setProduct (payload) {
  return { type: 'PRODUCTS/SETPRODUCT', payload }
}

export function setCategories (payload) {
  return { type: 'PRODUCTS/SETCATEGORIES', payload }
}

export function setSelectedCategory (payload) {
  return { type: 'PRODUCTS/SETSELECTEDCATEGORY', payload }
}

export function addCartToLocalStorage (payload) {
  return async (dispatch) => {
    let currentCart = []
    const localStorageCart = await JSON.parse(localStorage.getItem("CART"))
    if (localStorageCart !== null) {
      currentCart = localStorageCart
    }
    currentCart.push(payload)
    await localStorage.setItem("CART", JSON.stringify(currentCart))
    dispatch(addCart(payload))
  }
}

export function addBulkCartToLocalStorage (payload) {
  return async (dispatch) => {
    await localStorage.setItem("CART", JSON.stringify(payload))
    dispatch(addBulkCart(payload))
  }
}

export function checkLocalStorage () {
  return async (dispatch) => {
    let currentCart = []
    const localStorageCart = await JSON.parse(localStorage.getItem("CART"))
    if (localStorageCart !== null) {
      currentCart = localStorageCart
      dispatch(addBulkCart(currentCart))
    }
  }
}

export function fetchCategories () {
  return async (dispatch) => {
    try {
      dispatch(setProductsError(''))
      dispatch(setProductsLoading(true))

      const config = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products/categories'
      }
      const response = await axios(config)
      if(response.status !== 200) {
        throw response
      } else {
        dispatch(setCategories(response.data))
        dispatch(setProductsLoading(false))
      }
    } catch (error) {
      dispatch(setProductsError(error))
      console.error(error)
    }
  }
}

export function fetchProducts (category) {
  return async (dispatch) => {
    try {
      dispatch(setProductsError(''))
      dispatch(setProductsLoading(true))

      let categoryParam = ''

      if (category) {
        categoryParam = '/category/' + category
      }

      const config = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products' + categoryParam
      }
      const response = await axios(config)
      if(response.status !== 200) {
        throw response
      } else {
        dispatch(setProducts(response.data))
        dispatch(setProductsLoading(false))
      }
    } catch (error) {
      dispatch(setProductsError(error))
      console.error(error)
    }
  }
}

export function fetchProductById (id) {
  return async (dispatch) => {
    try {
      dispatch(setProductsError(''))
      dispatch(setProductsLoading(true))

      const config = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products/' + id
      }
      const response = await axios(config)
      if(response.status !== 200) {
        throw response
      } else {
        dispatch(setProduct(response.data))
        dispatch(setProductsLoading(false))
      }
    } catch (error) {
      dispatch(setProductsError(error))
    }
  }
}

export function setProductsLoading (payload) {
  return { type: 'PRODUCTS/SETLOADING', payload }
}

export function setProductsError (payload) {
  return { type: 'PRODUCTS/SETERROR', payload }
}

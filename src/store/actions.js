import axios from 'axios'

export function addCart (payload) {
  return { type: 'CART/ADDCART', payload }
}

export function addBulkCart (payload) {
  return { type: 'CART/ADDBULKCART', payload }
}

export function searchInput (payload) {
  return { type: 'SEARCH/CHANGESEARCH', payload }
}

export function setProducts (payload) {
  return { type: 'PRODUCTS/SETPRODUCTS', payload }
}

export function fetchProducts () {
  return async (dispatch) => {
    try {
      dispatch(setProductsError(''))
      dispatch(setProductsLoading(true))

      const config = {
        method: 'get',
        url: 'https://staging.awalmula.co.id/rest/default/V1/products?searchCriteria[pageSize]=10',
        headers: {
          'admin-key': 'rgw6jv5ljglds1m5sm9fdwg5j4nsagn7'
        }
      }
      const response = await axios(config)
      console.log(response, fetch)
      if(!response.ok) {
        throw response
      } else {
        const data = await response.json()
        dispatch(setProducts(data.data))
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

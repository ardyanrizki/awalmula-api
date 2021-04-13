const initialState = {
  products: [],
  loading: true,
  error: ''
}

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions
  switch(type) {
    case 'PRODUCTS/SETPRODUCTS':
      return { ...state, products: payload}
    case 'PRODUCTS/SETLOADING':
      return { ...state, loading: payload}
    case 'PRODUCTS/SETERROR':
      return { ...state, error: payload}
    default:
      return state
  }
}
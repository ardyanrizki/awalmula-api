const initialState = {
  cart: []
}

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions
  switch(type) {
    case 'CART/ADDCART':
      return { ...state, cart: [...state.cart, payload] }
    case 'CART/ADDBULKCART':
      return { ...state, cart: payload }
    default:
      return state
  }
}
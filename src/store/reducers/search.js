const initialState = {
  search: ''
}

export default function reducer(state = initialState, actions) {
  const { type, payload } = actions
  switch(type) {
    case 'SEARCH/CHANGESEARCH':
      return { ...state, search: payload}
    default:
      return state
  }
}
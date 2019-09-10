
const initialState = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
  subscriptions: [],
  vices: [],
  cart: [],
  loading: false
}

 const currentUserReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST_START':
      return {...state, loading: true}
    case 'LOGIN_REQUEST_SUCCESS':
      return {...state, loading: true}
    case 'PROFILE_REQUEST_START':
      return {...state, loading: true}
    case 'PROFILE_SUCCESS':
      return {...state, ...action.user}
      case "ADD_VICE_TO_CART":
        return {...state, cart: [action.vice, ...state.cart]}
    default:
      return state
  }
}

export default currentUserReducer

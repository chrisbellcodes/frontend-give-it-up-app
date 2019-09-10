const initialState = []

const vicesReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_VICES_SUCCESS':
      return action.vices
    default:
      return state
  }
}

export default vicesReducer

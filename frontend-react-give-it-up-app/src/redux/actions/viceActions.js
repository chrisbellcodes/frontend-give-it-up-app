
export const getVices = () => dispatch => {
  fetch('http://localhost:3000/vices')
    .then(res => res.json())
    .then(vices => {
      dispatch({
        type: 'GET_VICES_SUCCESS',
        vices: vices
      })
    })
}

export const addViceToCart = (vice) => dispatch => {
  dispatch({
    type: 'ADD_VICE_TO_CART',
    vice: vice
  }
)

}

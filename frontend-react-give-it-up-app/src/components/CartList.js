import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const CartList = (props) => {
  const renderVices = () => {
    return props.cart.map(vice => {
      return (
        <tr>
          <td>{vice.name}</td>
          <td>{vice.amount}</td>
          <td><Button>Remove Vice</Button></td>
        </tr>)
    })
  }

  return(<Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>VICE</th>
        <th>COST</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
        {renderVices()}
    </tbody>
  </Table>)

}

const mapStateToProps = (state) => {
  return {
    cart: state.currentUser.cart
  }
}

export default connect(mapStateToProps)(CartList)

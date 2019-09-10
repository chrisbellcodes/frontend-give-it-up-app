import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ViceList = (props) => {
  const renderVices = () => {
    return props.cart.map(vice => {
      return (<tr>
                <td>{vice.name}</td>
                <td>{vice.amount}</td>
                <td>fuck this</td>
              </tr>)
    })
  }

  return(<Table striped bordered hover variant="light">
    <thead>
      <tr>
        <th>VICE</th>
        <th>COST</th>
        <th>USERNAME</th>
      </tr>
    </thead>
    <tbody>
        {renderVices()}
    </tbody>
  </Table>)

}

const mapStateToProps = (state) => {
  return {
    cart: state.currentUser.vices
  }
}

export default connect(mapStateToProps)(ViceList)

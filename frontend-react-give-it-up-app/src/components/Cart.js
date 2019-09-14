import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hoc/withAuth'
import CartList from './CartList'
import Container from 'react-bootstrap/Container'


class Cart extends React.Component {
  render() {
    return(
      <Container className="pt-5 pb-3">
        <h1>Your Cart Vices</h1>
        <CartList />
      </Container>
    )
  }
}

export default withAuth(connect()(Cart))

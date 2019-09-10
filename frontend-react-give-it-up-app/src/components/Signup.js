import React from "react"
import { connect } from 'react-redux'
import { signup } from '../redux/actions/userActions'
import { Redirect } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Signup extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signup(this.state.first_name, this.state.last_name, this.state.email, this.state.password)
  }

  handleChange = (e) => {
      const {name, value} = e.target
      this.setState({
        [name]: value
      })
  }

  render() {
    
    if (localStorage.token) {
      return <Redirect to="/profile" />
    }

    return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group as={Col} lg={3}>
        <Form.Label>First Name</Form.Label>
        <Form.Control
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Group as={Col} lg={3}>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Group as={Col} lg={3}>
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleChange}
            />
        </Form.Group>

        <Form.Group as={Col} lg={3}>
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Button type="submit">Log In </Button>
    </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  signup: signup
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

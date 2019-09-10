import React from "react"
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { logIn } from '../redux/actions/userActions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

  state = {
    first_name: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logIn(this.state.first_name, this.state.password)
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
      <div >
        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Col} lg={3}>
          <Form.Label>First Name</Form.Label>
            <Form.Control
                type="text"
                name="first_name"
                placeholder="email"
                value={this.state.firstName}
                onChange={this.handleChange}
                />
        </Form.Group>
        <Form.Group as={Col} md={3}>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                />
        </Form.Group>
            <Button type="submit">Log in </Button>
      </Form>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  logIn: logIn
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login))

import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hoc/withAuth'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../redux/actions/userActions'
import ViceList from './ViceList'
import Container from 'react-bootstrap/Container'

class UserProfile extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Container>
          <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
          <h2>{this.props.user.email}</h2>
          <h2>Number of Subscriptions: {this.props.user.Subscriptions}</h2>
          <h3>Vices You've given up:</h3>
          <ViceList />
        </Container>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfile)))

import React from "react"
import { getVices, addViceToCart } from '../redux/actions/viceActions'
import { connect } from 'react-redux'
import Vice from '../components/Vice'
import CreateVice from "../components/CreateVice"
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'


class ViceContainer extends React.Component {

  componentDidMount() {
    this.props.getVices()
  }

  handleClick = (vice) => {
    if (!localStorage.token) {
      this.props.history.push('/signup')
    }
    this.props.addViceToCart(vice)
  }

  renderVices = () => {
    return this.props.vices.map( vice => <Vice key={vice.id} handleClick={this.handleClick} {...vice} /> )
  }

  render() {
    return (
    <div>
      <Container>
        <Row>
          <Form>
            <Form.Control as="select">
              {this.props.vices.map(vice => <option>{vice.category.name}</option>)}
            </Form.Control>
          </Form>
          <CreateVice />
        </Row>
      </Container>

      <Container>
        <Row>
        {this.renderVices()}
        </Row>
      </Container>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    vices: state.vices,
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  getVices: getVices,
  addViceToCart: addViceToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ViceContainer)

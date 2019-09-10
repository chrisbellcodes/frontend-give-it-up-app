import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const Vice = (props) => {
  const {id, name,  amount, description, category } = props

  return(
    <Card as={Col} xs={2}>
      <Card.Img variant="top" src=".../public/logo192.png" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${amount}
        </Card.Text>
        <Button onClick={() => props.handleClick(props)} variant="primary">Give this Up</Button>
      </Card.Body>
    </Card>

  )
}

export default Vice

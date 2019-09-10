import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import useCreateViceForm from '../CustomHooks'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const CreateVice = (props) => {

  const [show, setShow] = useState(false);
  const {inputs, handleInputChange, handleSubmit} = useCreateViceForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <React.Fragment>

    <Button variant="primary" onClick={handleShow}>
     Launch demo modal
   </Button>

   <Modal
      {...props}
      show={show}
      onHide={handleClose}
      centered
    >
     <Modal.Header closeButton>
       <Modal.Title>Create a Vice</Modal.Title>
     </Modal.Header>
     <Modal.Body>
        <p>What Vice are you giving up?</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>Vice Name</Form.Label>
            <Form.Control
                type="text"
                name="name"
                placeholder="Name your vice"
                value={inputs.name}
                onChange={handleInputChange}
                />
          </Form.Group>
          <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                  type="text"
                  name="description"
                  placeholder="Enter a short description..."
                  value={inputs.description}
                  onChange={handleInputChange}
                  />
          </Form.Group>
          <Form.Group>
              <Form.Label>Cost</Form.Label>
              <Form.Control
                  type="number"
                  name="amount"
                  placeholder="cost"
                  value={inputs.amount}
                  onChange={handleInputChange}
                  />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
          Add Vice
          </Button>
          </Form>
     </Modal.Body>

   </Modal>

    </React.Fragment>
    );


}

const mapStateToProps = (state) => {
  return {
    newVice: state
  }
}

const mapDispatchToProps={

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateVice)

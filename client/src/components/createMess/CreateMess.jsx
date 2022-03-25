import React from 'react';
import {Modal} from "react-bootstrap";


const CreateMess = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Give all information needed below
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
          <div class="mb-3">
              <input type="text" class="form-control" placeholder="Enter your messID"/>
          </div>
          <div class="mb-3">
              <input type="text" class="form-control" placeholder="Enter your messName"/>
          </div>
          <div class="mb-3">
              <input type="number" class="form-control" placeholder="enter total seats available"/>
          </div>
          <div class="mb-3">
              <input type="number" class="form-control" placeholder="enter per seat rent"/>
          </div>
          <div class="mb-3">
              <input type="number" class="form-control" placeholder="enter home maid bill"/>
          </div>
          <div class="mb-3">
              <input type="number" class="form-control" placeholder="enter wifi bill"/>
          </div>
          <button type="submit" class="btn btn-outline-primary">Submit</button>
      </form>
      </Modal.Body>
    </Modal>
  )
}

export default CreateMess;
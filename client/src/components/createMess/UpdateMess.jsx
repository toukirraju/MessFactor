import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const UpdateMess = (props) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    messId: "",
    messName:"",
    totalSeats:0,
    perSeatRent:0,
    homeMaid:0,
    wifi:0
  };

  const validationSchema = Yup.object().shape({
    messId: Yup.string().required("This field is required!"),
    messName: Yup.string().required("This field is required!"),
    totalSeats: Yup.number().required("This field is required!"),
    perSeatRent: Yup.number().required("This field is required!"),
    homeMaid: Yup.number().required("This field is required!"),
    wifi: Yup.number().required("This field is required!"),
  });
  
  const handleSubmit = (formValue) => {
    setLoading(true);
    console.log(formValue);
  }


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
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="form-group mb-3">
                  <Field
                    type="text"
                    placeholder="Enter your messID"
                    name="messId"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="messId"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="text"
                    placeholder="Enter your messName"
                    name="messName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="messName"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter total seats available"
                    name="totalSeats"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="totalSeats"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter per seat rent"
                    name="perSeatRent"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="perSeatRent"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter home maid bill"
                    name="homeMaid"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="homeMaid"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter wifi bill"
                    name="wifi"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="wifi"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                />
              </Form>
            </Formik>



      </Modal.Body>
    </Modal>
  )
}

export default UpdateMess;
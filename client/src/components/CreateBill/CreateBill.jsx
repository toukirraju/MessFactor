import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateBill = (props) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    date:"",
    userId:"",
    rent:0,
    wifi:0,
    currentBill:0,
    mealBudget:0
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("This field is required!"),
    userId: Yup.string().required("This field is required!")
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
                    type="date"
                    placeholder="Enter Date"
                    name="date"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="text"
                    placeholder="Enter User Id"
                    name="userId"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="userId"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter rent"
                    name="rent"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="rent"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter wifi"
                    name="wifi"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="wifi"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter electricity bill"
                    name="currentBill"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="currentBill"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter meal budget"
                    name="mealBudget"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="mealBudget"
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

export default CreateBill;
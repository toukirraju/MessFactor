import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateExpense = (props) => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    date:"",
    expType:"",
    expAmount:0,
    spender:""
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("This field is required!"),
    expType: Yup.string().required("This field is required!"),
    expAmount: Yup.number().required("This field is required!"),
    spender: Yup.string().required("This field is required!"),
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
                    placeholder="Expense type"
                    name="expType"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="expType"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    type="number"
                    placeholder="enter total expense"
                    name="expAmount"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="expAmount"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                
                <div className="form-group mb-3">
                  <Field
                    type="text"
                    placeholder="enter spender's name"
                    name="spender"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="spender"
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

export default CreateExpense;
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { createExpense } from "../../redux/slices/messSlice";

const CreateExpense = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    date: "",
    expType: "",
    expAmount: 0,
    spender: "",
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("This field is required!"),
    expType: Yup.string().required("This field is required!"),
    expAmount: Yup.number().required("This field is required!"),
    spender: Yup.string().required("This field is required!"),
  });

  const handleSubmit = (formValue) => {
    setLoading(true);
    dispatch(createExpense(formValue))
      .then(() => {
        setLoading(false);
        toast.success("Successfully created");
        props.onHide(true);
      })
      .catch(setLoading(false));
  };

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

            {/* <input type="submit" className="btn btn-primary" value="Submit" />
             */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Submit</span>
            </button>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreateExpense;

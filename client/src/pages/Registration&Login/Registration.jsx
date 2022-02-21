import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { register } from "../../redux/slices/auth";
import { clearMessage } from "../../redux/slices/message";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "../../validation/LoginAndReg";

const Registration = () => {
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleRegister = (formValue, { resetForm }) => {
    setSuccessful(false);

    dispatch(register(formValue))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        toast.success("Successfully registered!");

        resetForm();
        navigate("/login");
        dispatch(clearMessage());
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <>
      <h3 className="text-center m-5">Registration</h3>
      <div className="container d-flex align-item-center justify-content-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <Field
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group mb-3">
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <Field
                    name="phone"
                    type="number"
                    className="form-control"
                    placeholder="Phone *"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password *"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                {/* <div className="form-group mb-3">
                  <Field
                    className="form-control"
                    component="select"
                    id="type"
                    name="type"
                  >
                    <option className="hidden" selected>
                      Please select your Type
                    </option>
                    <option value="normal_user">Normal User</option>
                    <option value="manager">Manager</option>
                  </Field>
                  <ErrorMessage
                    name="type"
                    component="div"
                    className="alert alert-danger"
                  />
                </div> */}
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Registration;

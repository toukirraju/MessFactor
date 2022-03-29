import React from "react";
import logo from "../../img/logo.png";
import "./home.css";
import Login from "../Registration&Login/Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="gradient-form">
        <div className="container py-1">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
              <div className="card rounded-3 text-dark bg-light">
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <div className="text-center">
                        <img src={logo} alt="logo" height="300px" />
                        <h4 className="mt-1 mb-5 pb-1 color">
                          The managing system for your mess
                        </h4>
                      </div>

                      <Login />

                      <div className="d-flex align-items-center justify-content-center pb-4 mt-5">
                        <p className="mb-0 me-2">
                          Want to get in an existing mess?
                        </p>
                        <Link
                          to="/userRegister"
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Register here
                        </Link>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Want to create a new mess?</p>
                        <Link
                          to="/manRegister"
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Register here
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

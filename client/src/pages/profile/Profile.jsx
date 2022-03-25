import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Cards from "../../components/usuals/Cards";
import TableView from "../../components/Tables/Tables";
import userImg from "../../img/User_Circle.png";
const Profile = () => {
  // const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const initialValues = {
    morning: 0,
    noon: 0,
    night: 0
  };

  let tps=2500, tpm=2000, tmc=25;
  let ds=200, dm=0, rm=700;


  const handleSubmit = (formValue) => {
    setLoading(true);
    console.log(formValue);
  }

  return (
    <>
      <div className="container p-5">
        <div className="row d-flex align-items-center mb-5">
          <div className="col-sm-4">
            <img src={userImg}/>
          </div>
          <div className="col-sm-8">
            <div className="h1">Kacha Badam</div>
            <div className="h5">Mobile No: 01111-111-111</div>
            <div className="h5">Email: example@text.com</div>
          </div>
        </div>

        <hr />

        <div className="row my-5">
          <div className="col-md-4">
            <Cards
              name="Total Paid (mess)"
              value={tps}
            />
          </div>
          <div className="col-md-4">
            <Cards
              name="Total Paid (meal)"
              value={tpm}
            />
          </div>
          <div className="col-md-4">
            <Cards
              name="Total Meal Count (monthly)"
              value={tmc}
            />
          </div>
          <div className="col-md-4">
            <Cards
              name="Due (mess)"
              value={ds}
            />
          </div>
          <div className="col-md-4">
            <Cards
              name="Due (for meal)"
              value={dm}
            />
          </div>
          <div className="col-md-4">
            <Cards
              name="Remaining Money (meal)"
              value={rm}
            />
          </div>
        </div>

        <hr />

        <div className="my-5 card clearfix p-4">
          <div className="h3 mb-4">Enter meal information for today</div>
          <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              <Form className="row">
                <div className="card col-sm-4 p-3">
                  <div className="h4">Morning</div>
                  <div className="form-group">
                    <Field as="select" name="morning">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Field>
                  </div>
                </div>
                <div className="card col-sm-4 p-3">
                  <div className="h4">Noon</div>
                  <div className="form-group">
                    <Field as="select" name="noon">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Field>
                  </div>
                </div>
                <div className="card col-sm-4 p-3">
                  <div className="h4">Night</div>
                  <div className="form-group">
                    <Field as="select" name="night">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Field>
                  </div>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary col-sm-2 d-block my-3"
                  value="Submit"
                />
              </Form>
            </Formik>
        </div>
        
        <hr />

        <div className="card mt-4">
          <div className="h3 m-4">Meal Details</div>
              <div className="card-body">
                <div>
                  <TableView
                    columnDefs={[
                      {field: 'Date'},
                      {field: 'Morning'},
                      {field: 'Noon'},
                      {field: "Night"}
                      ]}
                    rowData={[
                      {date: "01-01-2022", Morning:1, Noon: 1 ,Night: 1 },
                      {date: "02-01-2022", Morning:1, Noon: 1 ,Night: 1 },
                      {date: "03-01-2022", Morning:1, Noon: 1 ,Night: 1 },
                      {date: "04-01-2022", Morning:1, Noon: 1 ,Night: 1 },
                    ]}
                  />
                </div>
              </div>
            </div>

      </div>
    </>
  );
};

export default Profile;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./manager.css";
import { Button } from "react-bootstrap";

import CreateMess from "../../components/createMess/CreateMess";
import CreateExpense from "../../components/createExpense/CreateExpense";
import TableView from "../../components/Tables/Tables";
import UpdateMess from "../../components/createMess/UpdateMess";
import CreateBill from "../../components/CreateBill/CreateBill";
import { getMessInfo, getMonthlyExpense } from "../../redux/slices/messSlice";

import DatePicker from "react-datepicker";

const Manager = () => {
  const [messModalShow, setMessModalShow] = React.useState(false);
  const [messUpdate, setMessUpdate] = React.useState(false);
  const [expModalShow, setExpModalShow] = React.useState(false);
  const [createBillModel, setCreateBillModel] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();

  const dispatch = useDispatch();

  const { messInfo, monthlyExpense, isSuccess } = useSelector(
    (state) => state.mess
  );
  const { isReload } = useSelector((state) => state.reload);
  // const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(getMessInfo());
    dispatch(getMonthlyExpense({ month, year }));
  }, [isReload, isSuccess, dispatch]);

  // useEffect(() => {
  //   dispatch(clearMessage());
  // }, [dispatch]);

  function dateFormatter(params) {
    return new Date(params.value).toDateString();
  }

  return (
    <>
      <CreateMess show={messModalShow} onHide={() => setMessModalShow(false)} />
      <UpdateMess
        data={messInfo}
        show={messUpdate}
        onHide={() => setMessUpdate(false)}
      />
      <CreateExpense
        show={expModalShow}
        onHide={() => setExpModalShow(false)}
      />
      <CreateBill
        show={createBillModel}
        onHide={() => setCreateBillModel(false)}
      />

      <div className="moderatorWraper">
        <div className="container">
          <div className="row my-3">
            <div className="col-md-6">
              <Button variant="primary" onClick={() => setMessModalShow(true)}>
                Create Mess
              </Button>
              <div className="card mt-4 ">
                <div className="card-body row">
                  <h5 className="card-title col-8 mb-5">Mess Informations</h5>
                  <div className="text-end col-4 mt-2">
                    <Button
                      variant="warning"
                      onClick={() => setMessUpdate(true)}
                    >
                      Edit
                    </Button>
                  </div>
                  {Object.keys(messInfo).length !== 0 ? (
                    <>
                      <p className="card-text">Mess ID : {messInfo._id}</p>
                      <p className="card-text">
                        Mess Name : {messInfo.messName}
                      </p>
                      <p className="card-text">
                        Total Seats : {messInfo.totalSeats}
                      </p>
                      <p className="card-text">
                        Per Seat Rent : {messInfo.perSeatRent}
                      </p>
                      <p className="card-text">
                        Home Maid Bill : {messInfo.homeMaid}
                      </p>
                      <p className="card-text">Wifi Bill : {messInfo.wifi}</p>
                    </>
                  ) : (
                    <>
                      <h5>Loading...</h5>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="d-flex justify-content-around">
                <Button variant="primary" onClick={() => setExpModalShow(true)}>
                  Create Expense
                </Button>
                <div className="input-container">
                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="MMMM/yyyy"
                      showMonthYearPicker
                      withPortal
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        dispatch(getMonthlyExpense({ month, year }))
                      }
                    >
                      &#x1F50E;
                    </button>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <div>
                    <TableView
                      columnDefs={[
                        {
                          headerName: "Date",
                          field: "date",
                          valueFormatter: dateFormatter,
                        },
                        { headerName: "Spender", field: "spender" },
                        { headerName: "Type", field: "expType" },
                        { headerName: "Amount", field: "expAmount" },
                      ]}
                      rowData={monthlyExpense}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 card">
            <div className="card-body">
              <TableView
                columnDefs={[
                  { field: "Date" },
                  { field: "UserName" },
                  { field: "Rent" },
                  { field: "Wifi" },
                  { field: "CurrentBill" },
                  { field: "MealBudget" },
                ]}
                rowData={[
                  {
                    date: "02-01-2022",
                    UserName: "Riyad",
                    Rent: 2000,
                    Wifi: 250,
                    CurrentBill: 50,
                    MealBudget: 1500,
                  },
                  {
                    date: "01-01-2022",
                    UserName: "Raju",
                    Rent: 2000,
                    Wifi: 250,
                    CurrentBill: 50,
                    MealBudget: 1500,
                  },
                  {
                    date: "03-01-2022",
                    UserName: "Zidan",
                    Rent: 2000,
                    Wifi: 250,
                    CurrentBill: 50,
                    MealBudget: 1500,
                  },
                  {
                    date: "04-01-2022",
                    UserName: "Hasib",
                    Rent: 2000,
                    Wifi: 250,
                    CurrentBill: 50,
                    MealBudget: 1500,
                  },
                ]}
              />
            </div>
            <div className="text-start ms-3 mb-3">
              <Button
                variant="outline-success"
                onClick={() => setCreateBillModel(true)}
              >
                Create Bill
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;

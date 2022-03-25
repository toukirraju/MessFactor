import React from "react";
import "./manager.css";
import {Button} from "react-bootstrap";

import CreateMess from "../../components/createMess/CreateMess";
import CreateExpense from "../../components/createExpense/CreateExpense";
import TableView from "../../components/Tables/Tables";
import UpdateMess from "../../components/createMess/UpdateMess";
import CreateBill from "../../components/CreateBill/CreateBill";

const Manager = () => {
  const [messModalShow, setMessModalShow] = React.useState(false);
  const [messUpdate, setMessUpdate] = React.useState(false);
  const [expModalShow, setExpModalShow] = React.useState(false);
  const [createBillModel, setCreateBillModel] = React.useState(false);
  // const dispatch = useDispatch();

  // const { isAdded } = useSelector((state) => state.moderator);
  // const { message } = useSelector((state) => state.message);

  // useEffect(() => {
  //   dispatch(allApartments());
  // }, [isAdded, dispatch]);

  // useEffect(() => {
  //   dispatch(clearMessage());
  // }, [dispatch]);
  
  return (
    <>
      <CreateMess
        show={messModalShow}
        onHide={() => setMessModalShow(false)}
      />
      <UpdateMess
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
              <Button variant="warning" onClick={() => setMessUpdate(true)}>
                Edit
              </Button>
              </div>

                <p className="card-text">Mess ID : 12345</p>
                <p className="card-text">Mess Name : 12345</p>
                <p className="card-text">Available Seats : 12345</p>
                <p className="card-text">Per Seat Rent : 12345</p>
                <p className="card-text">Home Maid Bill : 12345</p>
                <p className="card-text">Wifi Bill : 12345</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <Button variant="primary" onClick={() => setExpModalShow(true)}>
              Create Expense
            </Button>
            <div className="card mt-4">
              <div className="card-body">
                <div>
                  <TableView
                    columnDefs={[
                      {field: 'Date'},
                      {field: 'ExpenseType'},
                      {field: 'ExpenseAmount'},
                      {field: "SpendersName"}
                      ]}
                    rowData={[
                      {date: "01-01-2022", ExpenseType: "Bajar", ExpenseAmount: 3600,SpendersName:"Riyad, Hasib" },
                      {date: "02-01-2022", ExpenseType: "Bajar", ExpenseAmount: 2400,SpendersName:"Raju, Zidan" },
                      {date: "03-01-2022", ExpenseType: "Bajar", ExpenseAmount: 1800,SpendersName:"Bygid, Rahat" },
                      {date: "04-01-2022", ExpenseType: "Bajar", ExpenseAmount: 1200,SpendersName:"Fahim, Tonmoy" },
                    ]}
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
              {field: 'Date'},
              {field: 'UserName'},
              {field: 'Rent'},
              {field: 'Wifi'},
              {field: 'CurrentBill'},
              {field: 'MealBudget'}
              ]}
            rowData={[
              {date: "02-01-2022", UserName: "Riyad", Rent: 2000, Wifi:250, CurrentBill: 50, MealBudget: 1500},
              {date: "01-01-2022", UserName: "Raju", Rent: 2000, Wifi:250, CurrentBill: 50, MealBudget: 1500},
              {date: "03-01-2022", UserName: "Zidan", Rent: 2000, Wifi:250, CurrentBill: 50, MealBudget: 1500},
              {date: "04-01-2022", UserName: "Hasib", Rent: 2000, Wifi:250, CurrentBill: 50, MealBudget: 1500},
            ]}
          />
          </div>
          <div className="text-start ms-3 mb-3">
            <Button variant="outline-success" onClick={() => setCreateBillModel(true)}>
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

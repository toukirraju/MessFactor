import React from "react";
import "./moderatorPage.css";
import {Button} from "react-bootstrap";

import CreateMess from "../../components/createMess/CreateMess";
import CreateExpense from "../../components/createExpense/CreateExpense";

const ModeratorPage = () => {
  const [messModalShow, setMessModalShow] = React.useState(false);
  const [ExpModalShow, setExpModalShow] = React.useState(false);
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
      <div className="moderatorWraper ">
        <div className="row container my-3">

          <div className="col-md-6">
            <Button variant="primary" onClick={() => setMessModalShow(true)}>
              Create Mess
            </Button>
            <CreateMess
              show={messModalShow}
              onHide={() => setMessModalShow(false)}
            />

            <div className="card mt-4 ">
              <div className="card-body row">
              <h5 className="card-title col-8 mb-5">Mess Informations</h5>
              <div className="text-end col-4">
                <button className="btn btn-success">Edit</button>
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
            <CreateExpense
              show={ExpModalShow}
              onHide={() => setExpModalShow(false)}
            />
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button className="btn btn-primary">Go somewhere</button>
              </div>
            </div>
            
          </div>
        </div>

        <button>All users
          <button>Create bill</button>
        </button>

      </div>
    </>
  );
};

export default ModeratorPage;

import React from 'react';
import BarChart from '../../components/usuals/BarChart';
import Cards from "../../components/usuals/Cards";
import LineChart from '../../components/usuals/LineChart';
import TableView from "../../components/Tables/Tables";
const Dashboard = () => {
    let tp=12500, tc=10500, ub=2500;
    let mb=12000, me=7450, tm=101;
    const data = {
        labels: "labels",
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <Cards
                            name="Total Payable"
                            value={tp}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Total Collected"
                            value={tc}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Remaining Amount"
                            value={tp-tc}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Utility Bill"
                            value={ub}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Meal Budget"
                            value={mb}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Total Meal Expense"
                            value={me}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Remaining Money"
                            value={mb-me}
                        />
                    </div>
                    <div className="col-md-3">
                        <Cards
                            name="Total Meal"
                            value={tm}
                        />
                    </div>
                    <div className="col-md-6 mt-5">
                        <BarChart data={data}/>
                    </div>
                    <div className="col-md-6 mt-5">
                        <LineChart data={data}/>
                    </div>
                    <div className="col-12 my-5">
                        <TableView
                            columnDefs={[
                                {field: 'UserName'},
                                {field: 'PhoneNo'},
                                {field: 'Morning'},
                                {field: 'Noon'},
                                {field: 'Night'}
                                ]}
                            rowData={[
                                {UserName: "Riyad", PhoneNo: 12345,Morning:1,Noon:1,Night:1},
                                {UserName: "Raju", PhoneNo: 12345,Morning:1,Noon:1,Night:1},
                                {UserName: "Zidan", PhoneNo: 12345,Morning:1,Noon:1,Night:1},
                                {UserName: "Hasib", PhoneNo: 12345,Morning:1,Noon:1,Night:1},
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
import React from 'react';
import Cards from "../../components/cards/Cards";

const Dashboard = () => {
    return (
        <>
            <div className="container row">
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
                <div className="col-md-3">
                    <Cards/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Tables = (props) => {
  const rowData = props.rowData;
  const columnDefs = props.columnDefs;

  return (
    <div className="ag-theme-alpine" style={{ height: "296px", width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default Tables;

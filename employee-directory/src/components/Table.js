import React from "react";

function DataTable(props) {
  return <div className={`table${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default DataTable;

import React from "react";
import TableBody from "./TableBody"


function DataTable(props) {
  return (
  <div className={`table${props.fluid ? "-fluid" : ""}`}>{props.children}
<TableBody/>
  
  </div>
   )
}

export default DataTable;

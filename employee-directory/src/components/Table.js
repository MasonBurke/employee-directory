import React from "react";
import TableBody from "./TableBody"


function DataTable({headings, users, handleSort}) {
  return (
    <div>
      <table>
        <thead>
        <tr>
          {headings.map(({name, width}) => {
            return (
              <th
              key={name}
              style={{width}}
              onClick={()=>{handleSort(name.toLowerCase())}}
        
              >
                {name}
                <span className="pointer">

                </span>
              </th>
            )
          })}
        </tr>

        </thead>
          <TableBody 
          users={users}/>

      </table>
    </div>
   )
}

export default DataTable;

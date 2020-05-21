import React from "react";
import API from "../utils/API"


function TableBody({users}) {
function formatDate(date) {
  const dateArray = date.split("-")
  const year = dateArray[0]
  const month = dateArray[1]
  const dayArray = dateArray[2].split("T")
  const day = dayArray[0]
  const formatDate = [month,day,year].join("-")
  return formatDate
}
  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({login, name, picture, phone, email, dob}) => {
          return(
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle"> 
              <img src={picture.medium} className="img-responsive"> </img>
              </td>
              <td data-th="Name" className="align-middle"> {name.first} {name.last}</td>
              <td data-th="Phone" className="align-middle"> {phone.cell}</td>
              <td data-th="Email" className="align-middle"> {email}</td>
              <td data-th="DOB" className="align-middle"> {dob.date}</td>
            </tr>
          )
        })  
      ) : (
        <>
        <h3>User not found</h3>
        </>
      ) }
    </tbody>
  );
}

export default TableBody;



// import this to table,
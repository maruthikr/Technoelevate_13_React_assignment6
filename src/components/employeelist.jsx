import React, { Component } from "react";
import EmployeeInfo from "./EmployeeInfo";

export default class employeelist extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "Arun", 
        designation: "SSD",
        salary: 45000,
      },
      {
        id: 2,
        name: "Prashant",
        designation: "HR",
        salary: 25000,

      },
      {
        id: 3,
        name: "Vijay",
        designation: "SSD",
        salary: 50000,

      },
      {
        id: 4,
        name: "kiran",
        designation: "HR",
        salary: 30000,

      },
      
    ],
  };


  render() {
    return (
      <div className="container">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col"> Employee ID </th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>


            </tr>
          </thead>
          <tbody>
              {
                  this.state.employees.map((data)=>{
                      return (
                          <EmployeeInfo info={data} key={data.id} />
                      )
                  })
              } 
          </tbody>
        </table>
      </div>
    );
  }
}

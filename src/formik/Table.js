import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export const Table = () => {
  //Getting data from redux store
  const newValue = useSelector((state) => state.loginCreate.data);

  return (
    <>
      <h1 style={{ color: "rgb(39,39,153)" }}>
        <i>Table</i>
      </h1>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={1} md={1}></Grid>
        <Grid item xs={10} md={10}>
          <table className="table table-striped  table-bordered ">
            <thead>
              <tr style={{ color: "rgb(39,39,153)" }}>
                <th scope="col">SL.NO</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping data after getting from redux store */}
              {newValue &&
                newValue.map((val, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td>{val.age}</td>
                    <td>{val.gender}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Grid>
        <Grid item xs={1} md={1}></Grid>
      </Grid>
    </>
  );
};

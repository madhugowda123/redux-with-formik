import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Table } from "./Table";

import {
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { loginActions } from "./Redux/reducer";

const useStyles = makeStyles({
  inputValue: {
    marginTop: "5%",
  },
  buttons: {
    margin: "5%",
  },
});

export const FormikForms1 = () => {
  const [arr, setArr] = useState([]);

  //useDispatch from react-redux
  const dispatch = useDispatch();

  //Styling
  const classes = useStyles();

  //Initial State
  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    terms: false,
  };

  //OnSubmit
  const onSubmit = (values, { resetForm }) => {
    setArr((prev) => [...prev, values]);
    resetForm({ values: "" });
  };

  //dispatch the action to reducer
  useEffect(() => {
    dispatch(loginActions.setData(arr));
  }, [arr]);

  //Validation useing yup library
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name Required")
      .min(2, "Min is 2")
      .max(50, "max is 50"),
    email: Yup.string().email("Invalid Formate").required("Email Required"),
    password: Yup.string()
      .min(2, "Min is 2")
      .max(8, "max is 8")
      .required("Password Required"),
    age: Yup.number().required("Age Required"),
    gender: Yup.string().required("Gender Required"),
    terms: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  });

  //useing useFormik()
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}></Grid>
        <Grid item xs={4} md={4}>
          <Card>
            <h1 style={{ color: "rgb(39,39,153)" }}>
              <i>Register Forms</i>
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div className={classes.inputValue}>
                <TextField
                  label="Name"
                  size="small"
                  variant="filled"
                  type="text"
                  id="name"
                  name="name"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.name}
                  {...formik.getFieldProps("name")}
                />
              </div>
              {formik.errors.name && formik.touched.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
              <div className={classes.inputValue}>
                <TextField
                  label="Email"
                  size="small"
                  variant="filled"
                  type="text"
                  id="email"
                  name="email"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.email}
                  {...formik.getFieldProps("email")}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <div className={classes.inputValue}>
                <TextField
                  label="Password"
                  size="small"
                  variant="filled"
                  type="text"
                  id="password"
                  name="password"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.password}
                  {...formik.getFieldProps("password")}
                />
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}

              <div className={classes.inputValue}>
                <FormControl
                  size="small"
                  style={{ width: "31.5vw", minWidth: 100, maxWidth: 225 }}
                >
                  <InputLabel
                    htmlFor="grouped-native-select"
                    style={{ marginTop: -10, marginLeft: 10 }}
                  >
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="Age"
                    name="age"
                    variant="filled"
                    {...formik.getFieldProps("age")}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {formik.errors.age && formik.touched.age ? (
                <div style={{ color: "red" }}>{formik.errors.age}</div>
              ) : null}
              <div className={classes.inputValue}>
                <FormControl>
                  <h6>Gender</h6>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    {...formik.getFieldProps("gender")}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {formik.errors.gender && formik.touched.gender ? (
                <div style={{ color: "red" }}>{formik.errors.gender}</div>
              ) : null}
              <div className={classes.inputValue}>
                <h6>Agree With Terms and Conditions</h6>
                <Checkbox
                  checked={formik.values.terms}
                  name="terms"
                  {...formik.getFieldProps("terms")}
                />
              </div>
              {formik.errors.terms && formik.touched.terms ? (
                <div style={{ color: "red" }}>{formik.errors.terms}</div>
              ) : null}
              <Button
                className={classes.buttons}
                type="submit"
                variant="contained"
                color="primary"
                // disabled={!formik.values.terms}
              >
                Submit
              </Button>
            </form>
          </Card>
        </Grid>
        <Grid item xs={4} md={4}></Grid>
      </Grid>
      <br />
      <Table />
    </div>
  );
};

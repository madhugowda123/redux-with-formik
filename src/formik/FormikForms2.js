import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormikForms2 = () => {
  const [arr, setArr] = useState([]);

  //Initial State
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  //OnSubmit
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    setArr((prev) => [...prev, values]);
    resetForm({ values: "" });
  };

  //Validation Manually
  // const validate = (values) => {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   }
  //   //  else if (!/^[A-Z0-9._%+-]+@[A-Z)-9.-]+\.[A-Z]{2-4}$/i.test(values.email)) {
  //   //     errors.name = "Invalid Formate";
  //   //   }
  //   if (!values.password) {
  //     errors.password = "Required";
  //   }

  //   return errors;
  // };
  //Validation useing yup library
  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),
    email: Yup.string()
      .email("Invalid Email Formate")
      .required("Email Required"),
    password: Yup.string().required("Password Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <>
              <h1 style={{ color: "blue" }}>
                <u>Formik form using useFormik</u>
              </h1>
              <Form>
                <label htmlFor="name">
                  <b>Name :</b>
                </label>
                <br />
                <Field type="text" id="name" name="name" />
                <br />
                <ErrorMessage name="name" />
                <br />
                <label htmlFor="email">
                  <b>Email :</b>
                </label>
                <br />
                <Field type="text" id="email" name="email" />
                <br />
                <ErrorMessage name="email" />
                <br />
                <label htmlFor="password">
                  <b>Password :</b>
                </label>
                <br />
                <Field type="text" id="password" name="password" />
                <br />
                <ErrorMessage name="password" />
                <br />
                <br />
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    height: 30,
                    width: 100,
                    borderRadius: 5,
                  }}
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  <b>Submit</b>
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
      {arr.map((newOne, i) => (
        <ul key={i}>
          <li>{newOne.name}</li>
          <li>{newOne.email}</li>
          <li>{newOne.password}</li>
        </ul>
      ))}
    </>
  );
};

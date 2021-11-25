import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import register from "../../api/auth";

import { Form, Input, Button, ErrorMessage } from "./styles";

const registerSchema = Yup.object().shape({
  username: Yup.string().required("Field if required"),
  email: Yup.string().email("Invalid email").required("Field if required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Field if required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});

const RegisterForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      await register({
        username: values.username,
        email: values.email,
        password: values.password
      });
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form>
            <Input type="text" name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" />

            <Input type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />

            <Input type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="confirmPassword" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;

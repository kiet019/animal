import React from "react";
import { TextField, Button, Grid, Container } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormTitle from "../components/title/form-title";

const SignupForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle submission logic here
    console.log("Form submitted with values:", values);
  };

  return (
    <Container maxWidth="xs">
      <FormTitle title={"Sign Up"}/>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Field
                  as={TextField}
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  error={errors.firstName && touched.firstName}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : ""
                  }
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  as={TextField}
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  error={errors.lastName && touched.lastName}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : ""
                  }
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username ? errors.username : ""
                  }
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary" fullWidth >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignupForm;

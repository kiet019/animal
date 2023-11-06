import React from "react";
import { TextField, Button, Grid, Container } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormTitle from "../components/title/form-title";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle submission logic here, for instance, you can make an API call to authenticate the user.
    console.log("Form submitted with values:", values);
  };

  return (
    <Container maxWidth="xs">
      <FormTitle title={"Login"}/>
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
                  name="email"
                  label="Email"
                  variant="outlined"
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;

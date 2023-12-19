import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const Login = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <p className="text-gray-600">
            Log in to your account to access exclusive content.
          </p>
        </div>

        <div className="bg-white p-8 rounded shadow-md max-w-md mt-4">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => console.log(values)}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-600 text-sm font-semibold mb-2"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    component="span"
                    name="password"
                    className="text-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
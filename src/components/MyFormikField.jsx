import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Required")
    .min(3, "Must be atleast 3 chars"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("abc@gmail.com"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  termsconditions: Yup.boolean().oneOf([true], "Please accept t&c"),
  subscription: Yup.string().required("Required"),
});
const MyFormikField = () => {
  return (
    <>
      <h1>MyFormik using Field</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          termsconditions: "",
          subscription: "",
          isshowTextArea: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form className="w-[500px]">
            {/* {console.log(formik)} */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <span className="text-red-400">
                    {formik.errors.firstName}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <div className="flex items-center space-x-4">
                <Field
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="text-blue-500"
                  checked={formik.values.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <Field
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="text-pink-500"
                  checked={formik.values.gender === "female"}
                />
                <label htmlFor="female">Female</label>
                <Field
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  className="text-blue-500"
                  checked={formik.values.gender === "other"}
                />
                <label htmlFor="other">Other</label>
                {formik.touched.gender && formik.errors.gender && (
                  <span className="text-red-400">{formik.errors.gender}</span>
                )}
              </div>
            </div>

            <div className="mb-2">
              <label
                htmlFor="subscription"
                className="block text-sm font-medium text-gray-600"
              >
                Subscription
              </label>
              <select
                id="subscription"
                name="subscription"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subscription}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="ultimate">Ultimate</option>
              </select>
              {formik.touched.subscription && formik.errors.subscription && (
                <span className="text-red-400">
                  {formik.errors.subscription}
                </span>
              )}
            </div>
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="termsconditions"
                className="text-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.termsconditions}
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-600"
              >
                I agree to the terms and conditions
              </label>

              {formik.touched.termsconditions &&
                formik.errors.termsconditions && (
                  <span className="text-red-400">
                    {formik.errors.termsconditions}
                  </span>
                )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyFormikField;

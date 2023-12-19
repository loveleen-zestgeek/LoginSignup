import { Formik } from "formik";
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
const MyFormikYup = () => {
  return (
    <>
      <h1>MyFormikYup </h1>

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
          <form
            action="#"
            method="post"
            onSubmit={formik.handleSubmit}
            className="w-[500px]"
          >
            {/* {console.log(formik)} */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <span className="text-red-400">
                    {formik.errors.firstName}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <span className="text-red-400">{formik.errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Gender
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="text-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="text-pink-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "female"}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  className="text-purple-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === "others"}
                />
                <label htmlFor="other">Other</label>
                {formik.touched.gender && formik.errors.gender && (
                  <span className="text-red-400">{formik.errors.gender}</span>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-400">{formik.errors.email}</span>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="tel"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <span className="text-red-400">
                  {formik.errors.phoneNumber}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-red-400">{formik.errors.password}</span>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="text-red-400">
                    {formik.errors.confirmPassword}
                  </span>
                )}
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
            <div className="mb-2 flex items-center">
              <input
                type="checkbox"
                id="isshowTextArea"
                name="isshowTextArea"
                className="text-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isshowTextArea}
              />
              <label
                htmlFor="isshowTextArea"
                className="ml-2 text-sm font-medium text-gray-600"
              >
                Show TextArea
              </label>

              {formik.touched.isshowTextArea &&
                formik.errors.isshowTextArea && (
                  <span className="text-red-400">
                    {formik.errors.isshowTextArea}
                  </span>
                )}
            </div>
            {formik.values.isshowTextArea && (
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4" // You can adjust the number of rows as needed
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default MyFormikYup;

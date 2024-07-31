import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const RegistrationForm = () => {
  const formRegistration = useFormik({
    initialValues: {
      username: "",
      email: "",
      gender: "",
      country: "USA",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required("Username không được để trống"),
      email: yup
        .string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng"),
      gender: yup.boolean().required("Gender không được để trống"),
      password: yup
        .string()
        .required("Password không được để trống")
        .min(8, "Password phải có ít nhất 8 ký tự"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className="w-[400px] px-3 py-5 rounded-lg shadow-2xl"
      onSubmit={formRegistration.handleSubmit}
    >
      <h1 className="font-bold text-2xl text-center mb-4">User Registration</h1>
      <div className="mb-3">
        <label htmlFor="username" className="text-gray-600">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="border w-full py-1 px-2 rounded-md focus:outline-blue-300"
          onChange={formRegistration.handleChange}
        />
        {formRegistration.errors.username && (
          <p className="text-red-600 border border-red-600 bg-red-200 px-2 py-1 mt-1 rounded-md">
            {formRegistration.errors.username}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="text-gray-600">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="border w-full py-1 px-2 rounded-md focus:outline-blue-300"
          onChange={formRegistration.handleChange}
        />
        {formRegistration.errors.email && (
          <p className="text-red-600 border border-red-600 bg-red-200 px-2 py-1 mt-1 rounded-md">
            {formRegistration.errors.email}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="" className="text-gray-600 block">
          Gender
        </label>
        <div className="inline-block me-3">
          <input
            type="radio"
            name="gender"
            id="male"
            value="true"
            onChange={formRegistration.handleChange}
          />
          <label htmlFor="male" className="ml-2">
            Male
          </label>
        </div>
        <div className="inline-block">
          <input
            type="radio"
            name="gender"
            id="female"
            value="false"
            onChange={formRegistration.handleChange}
          />
          <label htmlFor="female" className="ml-2">
            Female
          </label>
        </div>
        {formRegistration.errors.gender && (
          <p className="text-red-600 border border-red-600 bg-red-200 px-2 py-1 mt-1 rounded-md">
            {formRegistration.errors.gender}
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="text-gray-600">
          Country
        </label>
        <select
          className="border w-full py-1 rounded-md px-2 focus:outline-blue-300"
          id="country"
          name="country"
          onChange={formRegistration.handleChange}
        >
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
          <option value="australia">Australia</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="text-gray-600">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border w-full py-1 px-2 rounded-md focus:outline-blue-300"
          onChange={formRegistration.handleChange}
        />
        {formRegistration.errors.password && (
          <p className="text-red-600 border border-red-600 bg-red-200 px-2 py-1 mt-1 rounded-md">
            {formRegistration.errors.password}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md"
      >
        Redister
      </button>
    </form>
  );
};

export default RegistrationForm;

"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const formikschema = Yup.object({
  requistiontitle: Yup.string().required("please enter valid"),
  openings: Yup.number()
    .required("enter a number")
    .min(0, "please enter above valid"),
  gender: Yup.string().required("select gender please"),
  urgency: Yup.string().required("select a option"),
});
const Tab = () => {
  return (
    <div>
      <Formik
        initialValues={{
          requistiontitle: "",
          openings: "",
          gender: "",
          urgency: "",
        }}
        validationSchema={formikschema}
        onSubmit={(values) => {
            alert(JSON.stringify(values));
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
           <input
             type="text"
             onChange={props.handleChange}
             name="requistiontitle"
           />
           {props.errors.requistiontitle && <div id="feedback">{props.errors.requistiontitle}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Tab;

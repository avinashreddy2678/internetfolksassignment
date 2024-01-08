"use client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import * as Yup from "yup";
import React, { useState } from "react";
import { useFormik } from "formik";
import Preview from "./Preview";
const Main = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const requistionschema = Yup.object({
    requistiontitle: Yup.string().required("please enter valid"),
    openings: Yup.number()
      .required("enter a number")
      .min(0, "please enter above valid"),
    gender: Yup.string().required("select gender please"),
    urgency: Yup.string().required("select a option"),
  });
  const jobschema = Yup.object({
    jobtitle: Yup.string().required("please enter job title"),
    jobdetails: Yup.string().required("please enter job details"),
    joblocation: Yup.string().required("please enter job location"),
  });
  const interviewschema = Yup.object({
    interviewmode: Yup.string().required("please select interview Mode"),
    interviewduration: Yup.string().required("please enter interview duration"),
    interviewlanguage: Yup.string().required("please enter interview loaction"),
  });
  const requistiondetails = useFormik({
    initialValues: {
      requistiontitle: "",
      openings: "",
      gender: "",
      urgency: "",
    },
    validationSchema: requistionschema,
    onSubmit: (values) => {
      //   console.log(values);
      handleNextTab();
    },
  });
  const jobdetails = useFormik({
    initialValues: {
      jobtitle: "",
      jobdetails: "",
      joblocation: "",
    },
    validationSchema: jobschema,
    onSubmit: (values) => {
      //   console.log(values);
      handleNextTab();
    },
  });
  const interviewdetails = useFormik({
    initialValues: {
      interviewmode: "",
      interviewduration: "",
      interviewlanguage: "",
    },
    validationSchema: interviewschema,
    onSubmit: (values, { resetForm }) => {
      alert("Form submitted successfully");
      setCurrentTab(0);
      jobdetails.resetForm();
      requistiondetails.resetForm();
      resetForm();
    },
  });
  //console.log(jobdetails);
  const handleNextTab = () => {
    setCurrentTab((prevTab) => prevTab + 1);
  };
  return (
    <div>
      <Tabs variant="line" index={currentTab}>
        <TabList>
          <Tab>Requestion Details</Tab>
          <Tab>Job Details</Tab>
          <Tab>Interview Settings</Tab>
        </TabList>

        {/* for first tab */}
        <div className="flex">
          <div className="w-[60%]">
            <TabPanels>
              <TabPanel className="tab-1">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    requistiondetails.handleSubmit();
                  }}
                >
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="requistiontitle">
                      Requestion Title
                    </label>
                    <input
                      className={`border px-3 py-2 rounded-md`}
                      type="text"
                      id="requistiontitle"
                      name="requistiontitle"
                      onChange={requistiondetails.handleChange}
                      value={requistiondetails.values.requistiontitle}
                    />
                    <div className="text-red-700">
                      {requistiondetails.errors.requistiontitle &&
                      requistiondetails.touched.requistiontitle ? (
                        <p className="form-error">
                          {requistiondetails.errors.requistiontitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="openings">
                      No of openings
                    </label>
                    <input
                      className="border px-3 py-2 rounded-md"
                      type="text"
                      id="openings"
                      name="openings"
                      onChange={requistiondetails.handleChange}
                      value={requistiondetails.values.openings}
                    />
                    <div className="text-red-700">
                      {requistiondetails.errors.openings &&
                      requistiondetails.touched.openings ? (
                        <p className="form-error">
                          {requistiondetails.errors.openings}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="gender">
                      Gender
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      onChange={requistiondetails.handleChange}
                      onBlur={requistiondetails.handleBlur}
                      value={requistiondetails.values.gender}
                      className="border px-3 py-2 rounded-md"
                      style={{ display: "block" }}
                      defaultValue=""
                    >
                      <option value="" label="Select Gender" disabled>
                        Select Gender
                      </option>
                      <option value="Male" label="Male">
                        Male
                      </option>
                      <option value="Female" label="Female">
                        Female
                      </option>
                      <option value="Non-binary" label="Non-binary">Non-binary</option>
                    </select>
                  </div>
                  <div className="text-red-700">
                    {requistiondetails.errors.gender &&
                    requistiondetails.touched.gender ? (
                      <p className="form-error">
                        {requistiondetails.errors.gender}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="gender">
                      Urgency
                    </label>
                    <select
                      name="urgency"
                      id="urgency"
                      className="border px-3 py-2 rounded-md"
                      style={{ display: "block" }}
                      defaultValue=""
                      onChange={requistiondetails.handleChange}
                      onBlur={requistiondetails.handleBlur}
                      value={requistiondetails.values.urgency}
                    >
                      <option value="" label="Select Urgency" disabled>
                        Select Urgency
                      </option>
                      
                      <option value="Urgent" label="Urgent">
                        Urgent
                      </option>
                      <option value="Immediate" label="Immediate">
                        Immediate joining
                      </option>
                      <option value="Relaxed" label="Relaxed">
                      Relaxed
                      </option>
                    </select>
                  </div>
                  <div className="text-red-700">
                    {requistiondetails.errors.urgency &&
                    requistiondetails.touched.urgency ? (
                      <p className="form-error">
                        {requistiondetails.errors.urgency}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex mt-4 mr-4 justify-end">
                    <Button colorScheme="red" type="submit">
                      {" "}
                      Next
                    </Button>
                  </div>
                </form>
              </TabPanel>

              {/* second tab */}
              <TabPanel className="tab-1">
                <form onSubmit={jobdetails.handleSubmit}>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="jobtitle">
                      Job Title
                    </label>
                    <input
                      className="border px-3 py-2 rounded-md"
                      type="text"
                      id="jobtitle"
                      name="jobtitle"
                      onChange={jobdetails.handleChange}
                      value={jobdetails.values.jobtitle}
                    />
                    <div className="text-red-700">
                      {jobdetails.errors.jobtitle &&
                      jobdetails.touched.jobtitle ? (
                        <p className="form-error">
                          {jobdetails.errors.jobtitle}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="jobdetails">
                      Job Details
                    </label>
                    <input
                      className="border px-3 py-2 rounded-md"
                      type="text"
                      id="jobdetails"
                      name="jobdetails"
                      onChange={jobdetails.handleChange}
                      value={jobdetails.values.jobdetails}
                    />
                  </div>
                  <div className="text-red-700">
                    {jobdetails.errors.jobdetails &&
                    jobdetails.touched.jobdetails ? (
                      <p className="form-error">
                        {jobdetails.errors.jobdetails}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="joblocation">
                      Job Loaction
                    </label>
                    <input
                      className="border px-3 py-2 rounded-md"
                      type="text"
                      id="joblocation"
                      name="joblocation"
                      onChange={jobdetails.handleChange}
                      value={jobdetails.values.joblocation}
                    />
                  </div>
                  <div className="text-red-700">
                    {jobdetails.errors.joblocation &&
                    jobdetails.touched.joblocation ? (
                      <p className="form-error">
                        {jobdetails.errors.joblocation}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex mt-4 mr-4 justify-end">
                    <Button
                      onClick={() => setCurrentTab((pre) => pre - 1)}
                      className="btn btn-success mr-2"
                      type="button"
                    >
                      Previous
                    </Button>
                    <Button colorScheme="red" type="submit">
                      Next
                    </Button>
                  </div>
                </form>
              </TabPanel>
              {/* <tab-3></tab-3> */}
              <TabPanel className="tab-1">
                <form onSubmit={interviewdetails.handleSubmit}>
                  <div className="flex flex-col ">
                    <label className="my-2 font-bold" htmlFor="interviewmode">
                      Interview Mode
                    </label>
                    <select
                      name="interviewmode"
                      id="interviewmode"
                      className="border px-3 py-2 rounded-md"
                      style={{ display: "block" }}
                      defaultValue=""
                      onChange={interviewdetails.handleChange}
                      onBlur={interviewdetails.handleBlur}
                      value={interviewdetails.values.interviewmode}
                    >
                      <option
                        value=""
                        label="Select Interview Location"
                        disabled
                        defaultValue={"select"}
                      >
                        Interview Mode
                      </option>
                      <option value="Online" label="Online">
                        Online
                      </option>
                      <option value="Offline" label="Offline">
                        Offline
                      </option>
                    </select>
                  </div>
                  <div className="text-red-700">
                    {interviewdetails.errors.interviewmode &&
                    interviewdetails.touched.interviewmode ? (
                      <p className="form-error">
                        {interviewdetails.errors.interviewmode}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className="my-2 font-bold"
                      htmlFor="interviewduration"
                    >
                      Interview Duration
                    </label>
                    <select
                      className="border px-3 py-2 rounded-md"
                      id="interviewduration"
                      name="interviewduration"
                      onChange={interviewdetails.handleChange}
                      value={interviewdetails.values.interviewduration}
                      style={{ display: "block" }}
                      defaultValue=""
                      onBlur={interviewdetails.handleBlur}
                    >
                      <option
                        value=""
                        label="Select Interview Duration"
                        disabled
                        defaultValue={"select"}
                      >
                        Interview Mode
                      </option>
                      <option value="Short" label="Short">
                      Short
                      </option>
                      <option value="Medium" label="Medium">
                      Medium
                      </option>
                      <option value="Long" label="Long">
                      Long
                      </option>
                    </select>
                   
                  </div>
                  <div className="text-red-700">
                    {interviewdetails.errors.interviewduration &&
                    interviewdetails.touched.interviewduration ? (
                      <p className="form-error">
                        {interviewdetails.errors.interviewduration}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col ">
                    <label
                      className="my-2 font-bold"
                      htmlFor="interviewlanguage"
                    >
                      Interview Language
                    </label>
                    <select
                      name="interviewlanguage"
                      id="interviewlanguage"
                      className="border px-3 py-2 rounded-md"
                      style={{ display: "block" }}
                      defaultValue=""
                      onChange={interviewdetails.handleChange}
                      onBlur={interviewdetails.handleBlur}
                      value={interviewdetails.values.interviewlanguage}
                    >
                      <option
                        value=""
                        label="Select Interview Language"
                        disabled
                      >
                        Interview Mode
                      </option>
                      <option value="English" label="English">
                        English
                      </option>
                      <option value="Hindi" label="Hindi">
                        Hindi
                      </option>
                    </select>
                  </div>
                  <div className="text-red-700">
                    {interviewdetails.errors.interviewlanguage &&
                    interviewdetails.touched.interviewlanguage ? (
                      <p className="form-error">
                        {interviewdetails.errors.interviewlanguage}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex mt-4 mr-4 justify-end">
                    <Button
                      onClick={() => setCurrentTab((pre) => pre - 1)}
                      className="btn btn-success mr-2"
                      type="button"
                    >
                      Previous
                    </Button>
                    <Button className="btn btn-success" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </TabPanel>
            </TabPanels>
          </div>
          <div>
            <Preview
              formik={requistiondetails}
              jobdetails={jobdetails}
              interviewdetails={interviewdetails}
            />
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Main;

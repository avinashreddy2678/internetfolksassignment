"use client";
import React from "react";
const Preview: React.FC<{
  formik: any;
  jobdetails: any;
  interviewdetails: any;
}> = ({ formik, jobdetails, interviewdetails }) => {
 // console.log(formik.values);
  return (
    <div className="bg-gray-300 h-[100%] mb-10 w-[22vw] rounded-md">
      {/* top details */}
      <div className="top flex justify-between px-1">
        <div>
          <i>Draft</i>
        </div>
        <div className="bg-red-500 text-white px-2 py-1">
          <i>Preview</i>
        </div>
      </div>
      {/* in bluew color */}
      <div className="bg-[#3730a3] text-white mt-2 flex justify-between px-3 py-2 m-auto rounded-md w-[90%]">
        <div className="w-[40%]">{formik.values.requistiontitle}</div>
        <div className="w-[40%]">
          <h2>
            Openings:{" "}
            <span className="pl-2 font-bold">
              {" "}
              {formik.values.openings ? formik.values.openings : "-"}
            </span>
          </h2>
        </div>
      </div>
      {/* requestion details */}
      <div className="bg-white mt-5 px-3 py-2 m-auto rounded-md w-[90%]">
        <div>
          <h1>Requistion Details</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 mt-3 text-sm">Urgency</p>
            <span className="pl-2 mt-3 text-sm">
              {" "}
              {formik.values.urgency ? formik.values.urgency : " - "}
            </span>
          </div>
          <div>
            <p className="text-gray-500 mt-3 text-sm pr-3">Gender</p>
            <span className="pl-2 mt-3 text-sm">
              {" "}
              {formik.values.gender ? formik.values.gender : " - "}
            </span>
          </div>
        </div>
      </div>

      {/* job dtails */}
      <div className="bg-white mt-5 px-3 py-2 m-auto rounded-md w-[90%]">
        <div>
          <h1>Job Details</h1>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 mt-3 text-sm">Job Title</p>
            <span className="pl-2 mt-3 text-sm">
              {jobdetails.values.jobtitle ? jobdetails.values.jobtitle : " - "}
            </span>
          </div>
          <div className="w-[40%]">
            <p className="text-gray-500 mt-3 text-sm pr-3">Job Details</p>
            <span className="pl-2 mt-3 text-sm">
              {jobdetails.values.jobdetails
                ? jobdetails.values.jobdetails
                : " - "}
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mt-3 text-sm">Job Location</p>
          <span className="pl-2 mt-3 text-sm">
            {jobdetails.values.joblocation ? jobdetails.values.joblocation : " - "}
          </span>
        </div>
      </div>

 {/* interview dtails */}
 <div className="bg-white mt-5 px-3 py-2 m-auto rounded-md w-[90%]">
        <div>
          <h1>
            Interview Settings
          </h1>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 mt-3 text-sm">Interview Duration</p>
            <span className="pl-2 mt-3 text-sm">
              {interviewdetails.values.interviewduration ? interviewdetails.values.interviewduration : " - "}
            </span>
          </div>
          <div className="w-[40%]">
            <p className="text-gray-500 mt-3 text-sm pr-3">Interview Mode</p>
            <span className="pl-2 mt-3 text-sm">
              {interviewdetails.values.interviewmode ? interviewdetails.values.interviewmode : " - "}
            </span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 mt-3 text-sm">Interview Lanhguafe</p>
          <span className="pl-2 mt-3 text-sm">
          {interviewdetails.values.interviewlanguage   ? interviewdetails.values.interviewlanguage : " - "}
          </span>
        </div>
      </div>


    </div>
  );
};

export default Preview;

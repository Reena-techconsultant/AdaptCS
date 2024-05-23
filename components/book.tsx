"use client";

import { useState } from "react";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "../css/phoneInput.module.css";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  requester_name: yup.string().required("Name is required"),
  requester_email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  requester_phone_number: yup.string().required("required"),
  // .min(8, "too short")
  // .max(18, "too long")
  requester_company: yup.string().required("Company name is required"),
  requester_company_website: yup
    .string()
    .url("Invalid URL")
    .required("Company website is required"),
  message: yup.string().required("Message is required"),
});

export default function BookSection() {
  const [formData, setFormData] = useState({
    secret: "A;eJsfEgF+A'*e{D&Lx_l+L5ME#/uYWe",
    to_email: "info@adapta.earth",
    email: "",
    subject: "",
    message: "",
    html_message: "",
    name: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    data.request_type = "DEMO";
    console.log(data, "compdata");
    // "request_type": "INFO",
    // const subject = `Contact us from ${data.name} from ${data.companyName}`;
    try {
      // setFormData((prevData) => ({
      //   ...prevData,

      //   email: data.email,
      //   message: data.message,
      //   name: data.name,
      //   phone: data.phone,
      //   companyName: data.companyName,
      //   companyWebsite: data.companyWebsite,
      // }));

      const response = await axios.post(
        "https://api.adaptacs.com/emails/landing-page/request",
        data
      );
      const responseData = response.data;
      reset();
      toast.success(responseData.message);
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        id="hs-basic-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[1000] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col border shadow-sm rounded-xl bg-gray-800 border-gray-700 shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-700">
              <h3 className="font-bold  text-white">Book a Demo with us.</h3>
              <button
                onClick={() => reset()}
                type="reset"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2  focus:ring-offset-2  transition-all text-sm focus:ring-gray-700 focus:ring-offset-gray-800"
                data-hs-overlay="#hs-basic-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                  {/* Grid */}
                  <div>
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        className="border py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
                        placeholder="Name"
                        id="name"
                        {...register("requester_name")}
                      />{" "}
                      <p className="text-red-500 text-sm">
                        {errors.requester_name?.message}
                      </p>
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      className="border py-3 px-4 block w-full  rounded-md text-sm  focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
                      placeholder="Email"
                      id="email"
                      {...register("requester_email")}
                    />{" "}
                    <p className="text-red-500 text-sm">
                      {errors.requester_email?.message}
                    </p>
                  </div>
                  <div className={styles["my-phone-input"]}>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    {/* {...register("requester_phone_number")} */}
                    {/* <PhoneInput
                      className="w-full"
                      defaultCountry="ke"
                      inputClassName="w-full"
                      name="phone"
                    /> */}
                    <Controller
                      control={control}
                      name="requester_phone_number"
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                      }) => (
                        <PhoneInput
                          className="w-full"
                          defaultCountry="ke"
                          inputClassName="w-full"
                          name="phone"
                          onChange={onChange}
                        />
                      )}
                    />
                    <p className="text-red-500 text-sm">
                      {errors.requester_phone_number?.message}
                    </p>
                  </div>
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="sr-only">
                        Company Name
                      </label>
                      <input
                        type="text"
                        {...register("requester_company")}
                        className="border py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
                        placeholder="Company Name"
                        id="companyName"
                      />
                      <p className="text-red-500 text-sm">
                        {errors.requester_company?.message}
                      </p>
                    </div>
                    <div>
                      <label htmlFor="companyWebsite" className="sr-only">
                        Company Website
                      </label>
                      <input
                        type="url"
                        {...register("requester_company_website")}
                        className="border py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
                        placeholder="Company Website"
                        id="website"
                      />

                      <p className="text-red-500 text-sm">
                        {errors.requester_company_website?.message}
                      </p>
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="border py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
                      placeholder="Details"
                      id="message"
                    />
                    <p className="text-red-500 text-sm">
                      {errors.message?.message}
                    </p>
                  </div>
                </div>
                {/* End Grid */}

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2  transition py-3 px-4 focus:ring-offset-gray-800"
                  >
                    Book Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

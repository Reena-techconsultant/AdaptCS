"use client";

import { useState } from "react";
import axios from "axios";
import GoogleMapsComponent from "./GoogleMapsComponent";
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
  // .min(10, "too short")
  // .max(14, "too long"),
  requester_company: yup.string().required("Company name is required"),
  requester_company_website: yup
    .string()
    .url("Invalid URL")
    .required("Company website is required"),
  message: yup.string().required("Message is required"),
});

export default function ContactSection() {
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
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // const subject = `Contact us from ${data.name} from ${data.companyName}`;
    data.request_type = "INFO";
    console.log(data, "contact");
    try {
      // setFormData((prevData) => ({
      //   ...prevData,
      //   subject: subject,
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
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-16 mx-auto ">
          {/* Title */}
          <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
            <h2 className="block text-3xl font-bold  sm:text-4xl md:text-4xl text-white">
              Get in touch
            </h2>
            <p className="mt-2 mb-16  text-gray-400 text-xl">
              Our team would love to hear from you.
            </p>
          </div>
          {/* End Title */}
          <div className="flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <div className="absolute inset-0">
                <GoogleMapsComponent />
              </div>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Washington DC, Mexico City, Nairobi</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    info@adapta.earth
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2  bg-slate-900 flex flex-col md:ml-auto w-full md:mt-0">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-slate-700">
                <h2 className="mb-8 text-xl font-semibold  text-gray-200">
                  Contact Us
                </h2>
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
                          className="border py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
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
                        className="border py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
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
                        className="border py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-900 border-gray-700 text-gray-400"
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
                      className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 focus:ring-offset-gray-800"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

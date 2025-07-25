import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  message: yup.string().required("Message is required"),
  terms: yup.bool().oneOf([true], "You must accept the terms"),
});

export default function InquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center p-6">
      {isSubmitted && (
        <div className="absolute inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-gray-300">Thank you for your inquiry.</p>
          </div>
        </div>
      )}

      <div
        className={`max-w-5xl w-full grid md:grid-cols-2 gap-8 transition-all duration-300 ${
          isSubmitted ? "blur-sm" : ""
        }`}
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Inquire About Seaside Serenity Villa
          </h2>
          <p className="text-gray-400">
            Interested in this property? Fill out the form below, and our real
            estate experts will get back to you with more details, including
            scheduling a viewing and answering any questions you may have.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-zinc-900 p-6 rounded-lg shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">First Name</label>
              <input
                {...register("firstName")}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name</label>
              <input
                {...register("lastName")}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                {...register("email")}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                {...register("phone")}
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-1">Selected Property</label>
            <input
              value="Seaside Serenity Villa, Malibu, California"
              disabled
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              placeholder="Enter your Message here..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="mt-4 flex items-start gap-2">
            <input type="checkbox" {...register("terms")} />
            <label className="text-sm text-gray-300">
              I agree with{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </div>
  );
}

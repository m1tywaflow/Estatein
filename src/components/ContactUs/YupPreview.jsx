import React from "react";
import { useForm } from "react-hook-form";
import { formOptions } from "../../yup";
import { RotateCcw, SendHorizontal } from "lucide-react";

export function YupPreview() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <form
      className="relative bg-black text-white rounded-2xl p-6 md:p-10 w-full flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full ">
        {/* Username */}
        <label className="flex flex-col gap-2">
          <input
            {...register("username")}
            placeholder="Username"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <span className="text-red-400 text-sm">
              {errors.username.message}
            </span>
          )}
        </label>

        {/* Age */}
        <label className="flex flex-col gap-2">
          <input
            {...register("age")}
            type="number"
            placeholder="Age"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age && (
            <span className="text-red-400 text-sm">{errors.age.message}</span>
          )}
        </label>

        {/* Email */}
        <label className="flex flex-col gap-2">
          <input
            {...register("email")}
            placeholder="Email"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email.message}</span>
          )}
        </label>

        {/* Phone */}
        <label className="flex flex-col gap-2">
          <input
            {...register("phone")}
            placeholder="Phone"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <span className="text-red-400 text-sm">{errors.phone.message}</span>
          )}
        </label>
        {/* Password */}
        <label className="flex flex-col gap-2">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-400 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>

        {/* Confirm Password */}
        <label className="flex flex-col gap-2">
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <span className="text-red-400 text-sm">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
      </div>

      {/* Textarea (на всю ширину) */}
      <label className="flex flex-col gap-2">
        <textarea
          placeholder="Type your message here."
          className="bg-[#111] text-white border border-gray-600 rounded-xl px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </label>

      {/* Radio buttons */}

      {/* Checkbox */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("rememberMe")}
          checked={watch("rememberMe")}
          className="accent-blue-600"
        />
        I agree with Terms of Use and Privacy Policy
        {errors.rememberMe && (
          <span className="text-red-400 text-sm ml-2">
            {errors.rememberMe.message}
          </span>
        )}
      </label>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          type="submit"
          className="bg-purple-900 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-pink-300 transition duration-150 cursor-pointer"
        >
          <span>Send</span>
          <SendHorizontal className="w-5 h-5" />
        </button>

        <button
          type="button"
          className="text-white border border-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition duration-150 cursor-pointer disabled:opacity-50"
          disabled={!isSubmitted}
          onClick={() => reset()}
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>
    </form>
  );
}

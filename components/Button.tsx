"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  role,
}) => {
  const customClassName = "p-4 bg-black";
  const loading = false;

  const withTwMerge = twMerge(
    "p-3 rounded-md bg-sky-500 text-white    space-x-2",
    customClassName
  );

  const withOutTwMerge =
    "p-3 rounded-md bg-sky-500 text-white     space-x-2" + customClassName;

  console.log("(----with tw-merge----)", withTwMerge);

  console.log("(----without tw-merge----)", withOutTwMerge);

  return (
    <button
      type="submit"
      role={role && "submit"}
      disabled={disabled || loading}
      className={twMerge(
        "p-3 rounded-md bg-sky-500 text-white",
        className,
        loading && "bg-gray-500"
      )}
    >
      {loading ? "loading..." : children}
    </button>
  );
};

export default Button;

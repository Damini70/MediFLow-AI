import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  let baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500";
      break;
    case "secondary":
      variantClasses =
        "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400";
      break;
    case "outline":
      variantClasses =
        "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300";
      break;
    default:
      variantClasses = "bg-indigo-600 text-white";
  }

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;

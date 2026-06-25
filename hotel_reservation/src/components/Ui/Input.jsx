import React from "react";

const Input = ({
  leftIcon,
  leftIcon2,
  rightIcon,
  rightIcon2,
  placeHolder,
  type,
  ...props
}) => {
  return (
    <div className="relative w-fit">
      {/* Left Icons */}
      <div className="absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
        {leftIcon}
        {leftIcon2}
      </div>

      {/* Right Icons */}
      <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
        {rightIcon}
        {rightIcon2}
      </div>

      <input
        type={type}
        {...props}
        placeholder={placeHolder}
        className="pl-10 pr-11 w-full"
      />
    </div>
  );
};

export default Input;
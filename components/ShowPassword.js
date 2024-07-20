import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

export default function ShowPassword({
  isHidden = Boolean,
  setIsHidden = () => {},
  isHiddenPassword = Boolean,
  setIsHiddenPassword = () => {},
  isHiddenConfirmPassword = Boolean,
  setIsHiddenConfirmPassword = () => {},
  field = "",
}) {
  // 點擊時切換顯示隱藏
  const handleClick = () => {
    if (field === "r-password") {
      setIsHiddenPassword(!isHiddenPassword);
    } else if (field === "r-confirm") {
      setIsHiddenConfirmPassword(!isHiddenConfirmPassword);
    } else {
      setIsHidden(!isHidden);
    }
  };
  return (
    <label className="swap absolute right-3 bottom-2">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      {/* volume on icon */}
      <FaRegEye
        className="swap-on fill-current w-6 h-6"
        onClick={handleClick}
      />

      {/* volume off icon */}
      <FaRegEyeSlash
        className="swap-off fill-current w-6 h-6"
        onClick={handleClick}
      />
    </label>
  );
}

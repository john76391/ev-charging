import React from "react";

export default function PageTitle({ title, isOpen }) {
  return (
    <div
      className={`text-4xl pb-5 ${
        isOpen ? "border-b-transparent" : "border-b-gray-300"
      } border-b-4 `}
    >
      {title}
    </div>
  );
}

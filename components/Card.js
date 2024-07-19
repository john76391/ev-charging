import React from "react";

export default function Card({ data }) {
  return (
    <div className="shadow-md p-5 pb-10 space-y-5">
      {/* title */}
      <div className="text-xl lg:text-2xl text-gray-600">{data.title}</div>
      {/* content */}
      <div className="text-2xl lg:text-3xl font-black">{data.content}</div>
    </div>
  );
}

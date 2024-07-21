import React from "react";

export default function HistoryEntry() {
  return (
    <ul className="grid grid-cols-12 text-gray-200 text-sm xl:text-base bg-neutral-500 border-b border-b-gray-300 p-2 px-3 text-center">
      <li className="col-span-2 py-3">2022/01/01</li>
      <li className="col-span-3 py-3">汐止智興停車場</li>
      <li className="col-span-1 py-3">08:30:00</li>
      <li className="col-span-1 py-3">08:30:00</li>
      <li className="col-span-3 py-3">新北市八里區觀海大道36號</li>
      <li className="col-span-1 py-3">1h</li>
      <li className="col-span-1 py-3">$ 150</li>
    </ul>
  );
}

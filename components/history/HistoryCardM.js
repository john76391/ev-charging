import React from "react";

export default function HistoryCardM({ isOpen }) {
  return (
    <ul
      className={`shadow-md p-5 space-y-3 text-gray-200  rounded-md ${
        isOpen ? "bg-black/10" : "bg-neutral-500"
      }`}
    >
      <li className="flex justify-between">
        <div className="font-semibold">充電日期：</div>
        <div className="text-sm sm:text-base">2024/07/15</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">充電站名稱：</div>
        <div className="text-sm sm:text-base">林口停三立體停車場</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">開始時間：</div>
        <div className="text-sm sm:text-base">08:30:00</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">結束時間：</div>
        <div className="text-sm sm:text-base">08:30:00</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">充電站地址：</div>
        <div className="text-sm sm:text-base">新北市八里區觀海大道36號</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">持續時間：</div>
        <div className="text-sm sm:text-base">22分鐘</div>
      </li>
      <li className="flex justify-between">
        <div className="font-semibold">費用：</div>
        <div className="text-sm sm:text-base">$ 150 </div>
      </li>
    </ul>
  );
}

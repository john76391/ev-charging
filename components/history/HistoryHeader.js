import React from "react";

export default function HistoryHeader() {
  return (
    <ul className="grid grid-cols-12 text-base xl:text-lg  text-gray-200 bg-slate-600 p-2 px-3 rounded-t-md text-center">
      <li className="col-span-2">充電日期</li>
      <li className="col-span-3">充電站名稱</li>
      <li className="col-span-1">開始時間</li>
      <li className="col-span-1">結束時間</li>
      <li className="col-span-3">充電站地址</li>
      <li className="col-span-1">持續時間</li>
      <li className="col-span-1">費用</li>
    </ul>
  );
}

import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import PageTitle from "@/components/PageTitle";

export default function History() {
  return (
    <div className="sm:grid grid-cols-12">
      <div className="hidden sm:block col-span-3 lg:col-span-2">
        <SideBar />
      </div>
      {/* main content */}
      <div className="col-span-9 lg:col-span-10 p-8 space-y-6">
        <PageTitle title={"歷史紀錄"} />
        {/* charge history */}
        <div className="">
          {/* header */}
          <ul className="grid grid-cols-12 text-lg text-gray-200 bg-slate-600 p-2 px-3 rounded-t-md text-center">
            <li className="col-span-2">充電日期</li>
            <li className="col-span-3">充電站名稱</li>
            <li className="col-span-1">開始時間</li>
            <li className="col-span-1">結束時間</li>
            <li className="col-span-3">充電站地址</li>
            <li className="col-span-1">持續時間</li>
            <li className="col-span-1">費用</li>
          </ul>
          {/* body */}
          <ul className="grid grid-cols-12 text-gray-200 bg-neutral-500 border-b border-b-gray-300 p-2 px-3 text-center">
            <li className="col-span-2 py-3">2022/01/01</li>
            <li className="col-span-3 py-3">
              新北市板橋區華翠橋下H、I、K平面停車場
            </li>
            <li className="col-span-1 py-3">08:30:00</li>
            <li className="col-span-1 py-3">08:30:00</li>
            <li className="col-span-3 py-3">新北市八里區觀海大道36號</li>
            <li className="col-span-1 py-3">1h</li>
            <li className="col-span-1 py-3">150</li>
          </ul>
          <ul className="grid grid-cols-12 text-gray-200 bg-neutral-500 p-2 px-3 text-center rounded-b-md ">
            <li className="col-span-2 py-3">2024/07/15</li>
            <li className="col-span-3 py-3">林口停三立體停車場</li>
            <li className="col-span-1 py-3">08:30:00</li>
            <li className="col-span-1 py-3">08:52:00</li>
            <li className="col-span-3 py-3">新北市八里區觀海大道36號</li>
            <li className="col-span-1 py-3">22分鐘</li>
            <li className="col-span-1 py-3">150</li>
          </ul>
        </div>

        <div className="grid grid-cols-12"></div>
        {/* <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="">stationName</th>
              <th className="">startTime</th>
              <th className="">endTime</th>
              <th className="">stationAddress</th>
              <th className="">duration</th>
              <th className="">cost</th>
            </tr>
          </thead>
          <tbody>
            <th className="">八里永續教育中心</th>
            <th className="">08:30:00</th>
            <th className="">09:30:00</th>
            <th className="">新北市八里區觀海大道36號</th>
            <th className="">1h</th>
            <th className="">150</th>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

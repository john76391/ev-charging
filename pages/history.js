import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import PageTitle from "@/components/PageTitle";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryEntry from "@/components/history/HistoryEntry";
import HistoryCardM from "@/components/history/HistoryCardM";

export default function History() {
  return (
    <div className="sm:grid grid-cols-12 min-h-screen">
      <div className="hidden sm:block col-span-3 lg:col-span-2">
        <SideBar />
      </div>
      {/* main content */}
      <div className="col-span-9 lg:col-span-10 p-3 sm:p-8 space-y-6">
        <PageTitle title={"歷史紀錄"} />
        {/* charge history mobile */}
        <div className="block lg:hidden">
          <HistoryCardM />
        </div>
        {/* charge history desktop */}
        <div className="hidden lg:block">
          {/* header */}
          <HistoryHeader />
          {/* body */}
          {/* // TODO 一般的紀錄 border-b border-b-gray-300 */}
          {/* // TODO 最後一條 rounded-b-md */}
          <HistoryEntry />
          <HistoryEntry />
          <ul className="grid grid-cols-12 text-gray-200 text-sm xl:text-base bg-neutral-500 p-2 px-3 text-center rounded-b-md ">
            <li className="col-span-2 py-3">2024/07/15</li>
            <li className="col-span-3 py-3">林口停三立體停車場</li>
            <li className="col-span-1 py-3">08:30:00</li>
            <li className="col-span-1 py-3">08:52:00</li>
            <li className="col-span-3 py-3">新北市八里區觀海大道36號</li>
            <li className="col-span-1 py-3">22分鐘</li>
            <li className="col-span-1 py-3">$ 150</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

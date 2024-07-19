import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-full  p-3 bg-stone-800 h-screen space-y-10 flex flex-col items-center">
      <div className="">
        <Image
          src="/ev-charging-high-resolution-logo-transparent.png"
          alt=""
          className=""
          width={"250"}
          height={"250"}
        />
      </div>
      {/* links */}
      <ul className="text-white w-9/12 space-y-5">
        <li className="font-semibold">
          <Link href={"/"}>總覽</Link>
        </li>
        <li className="font-semibold text-sm">
          <Link href={"/history"}>歷史紀錄</Link>
        </li>
      </ul>
    </div>
  );
}

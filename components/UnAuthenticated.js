import React from "react";
import Link from "next/link";

export default function UnAuthenticated() {
  return (
    <div className="w-full h-screen flex flex-col space-y-3 justify-center items-center">
      <div className="text-4xl font-bold">登入以查看內容</div>
      <div className="">
        若畫面未自動跳轉請
        <Link
          href="/member/login"
          className="font-semibold underline underline-offset-2 text-blue-700"
        >
          點我登入
        </Link>
      </div>
    </div>
  );
}

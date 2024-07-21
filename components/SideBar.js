import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import axiosInstance from "@/services/axios-instance";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/use-auth";

export default function SideBar() {
  const router = useRouter();
  const { auth, setAuth } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/users/logout");

      // 成功登出的回應
      if (res.data.status === "success") {
        Swal.fire({
          title: "成功登出",
          icon: "success",
          didClose: () => {
            // 成功登出後導向登入頁面
            router.push("/member/login");
          },
        });
      } else {
        // 登出失敗的回應
        Swal.fire({
          title: res.data.message,
          icon: "error",
          didClose: () => {
            // 登出失敗後導向登入頁面
            router.push("/member/login");
          },
        });
      }

      // 登出成功與否都設定全域狀態
      setAuth({
        isAuthenticated: false,
        user: null,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full p-3 bg-stone-800 h-screen space-y-10 flex flex-col justify-between items-center">
      <div className="space-y-10">
        {/* logo */}
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
        <ul className="text-white w-8/12 mx-auto space-y-5">
          <li className="font-semibold">
            <Link href={"/"}>總覽</Link>
          </li>
          <li className="font-semibold text-sm">
            <Link href={"/history"}>歷史紀錄</Link>
          </li>
        </ul>
      </div>
      {/* 登出按鈕 */}
      <MdLogout
        onClick={handleLogout}
        className="w-7 h-7 text-white self-start cursor-pointer"
      />
    </div>
  );
}

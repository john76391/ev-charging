import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/use-auth";
import { MdLogout } from "react-icons/md";
import axiosInstance from "@/services/axios-instance";
import Swal from "sweetalert2";

export default function Logout() {
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
          didClose: async () => {
            // 成功登出後導向登入頁面
            await router.push("/member/login");
            // 設定全域狀態
            await setAuth({
              isAuthenticated: false,
              user: null,
            });
          },
        });
      } else {
        // 登出失敗的回應
        Swal.fire({
          title: res.data.message,
          icon: "error",
          didClose: async () => {
            // 登出失敗後導向登入頁面
            await router.push("/member/login");
            // 設定全域狀態
            await setAuth({
              isAuthenticated: false,
              user: null,
            });
          },
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      onClick={handleLogout}
      className="w-full cursor-pointer bg-slate-700 rounded-md p-2 flex justify-center items-center gap-4 group hover:bg-slate-600"
    >
      {/* 登出按鈕 */}
      <div className="text-white font-semibold">登出</div>
      <MdLogout className="w-7 h-7 text-white transition duration-200 group-hover:translate-x-1" />
    </div>
  );
}

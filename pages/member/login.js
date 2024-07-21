import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import ShowPassword from "@/components/ShowPassword";
import axiosInstance from "@/services/axios-instance";
import { useAuth } from "../../hooks/use-auth";

export default function Login() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  // 顯示或隱藏密碼
  const [isHidden, setIsHidden] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "john1234",
      password: "Test1234",
    },
  });

  const onSubmit = async (formValues) => {
    try {
      // 登入
      const res = await axiosInstance.post("/users/login", formValues);
      // 處理res結果，根據成功或失敗顯示訊息
      if (res.data.status === "success") {
        // 成功登入後顯示成功訊息
        Swal.fire({
          title: "成功登入",
          icon: "success",
          didClose: () => {
            // 成功登入後導向首頁
            router.push("/");
            // 成功登入後設定全域狀態
            setAuth({
              isAuthenticated: true,
              user: res.data.userData,
            });
          },
        });
      } else if (res.data.status === "error") {
        Swal.fire({
          title: res.data.message,
          icon: "error",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-12 px-8 sm:px-24  container md:max-w-3xl mx-auto  flex-col-center">
        <div className="text-3xl font-bold mb-8 text-center">登入</div>

        {/* 帳號密碼登入 */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-8 mb-10"
        >
          {/* username */}
          <div className="w-full">
            <div className="">帳號</div>
            <input
              {...register("username", {
                required: {
                  value: true,
                  message: "必填欄位",
                },
              })}
              type="text"
              className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
              placeholder="輸入帳號"
            />

            {/* 錯誤訊息 */}
            {errors.username?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.username.message}
              </div>
            )}
          </div>
          {/* password */}
          <div className="w-full ">
            <div className="">密碼</div>
            <div className="relative">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "必填欄位",
                  },
                })}
                type={isHidden ? "password" : "text"}
                className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
                placeholder="輸入密碼"
              />
              <ShowPassword isHidden={isHidden} setIsHidden={setIsHidden} />
            </div>

            {/* 錯誤訊息 */}
            {errors.password?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.password.message}
              </div>
            )}
          </div>

          {/* 登入按鈕 */}
          <button
            type="submit"
            className="w-full bg-slate-500 text-white p-2 px-4 rounded-md text-xs sm:text-sm hover:bg-slate-600"
          >
            登入
          </button>
        </form>

        {/* 分隔線 */}
        <div className="divider text-xs sm:text-sm text-gray-400 mb-8">
          EV Charging新朋友?
        </div>
        {/* 註冊會員連結 */}
        <div className="w-full">
          <Link
            href={"/member/register"}
            className="block text-center w-full border-2 border-gray-300 p-2 px-4 rounded-md text-xs sm:text-sm hover:bg-gray-100"
          >
            註冊新帳號
          </Link>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "@/services/axios-instance";
import Swal from "sweetalert2";
import ShowPassword from "@/components/ShowPassword";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  // react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 顯示與隱藏password
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);
  // 顯示與隱藏confirmPassword
  const [isHiddenConfirmPassword, setIsHiddenConfirmPassword] = useState(true);

  // 註冊成功後導向登入畫面的網址
  const [location, setLocation] = useState("");

  // 表單提交事件
  const onSubmit = async (formValues) => {
    try {
      const res = await axiosInstance.post("/users/register", formValues);
      // 處理res結果，根據成功或失敗顯示訊息
      if (res.data.status === "success") {
        Swal.fire({
          title: "註冊成功",
          icon: "success",
          didClose: () => {
            setLocation("/member/login");
          },
        });
      } else {
        Swal.fire({
          title: "註冊失敗",
          text: res.data.message,
          icon: "error",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 用來檢查密碼是否相同
  const password = watch("password");

  // 導向至會員中心
  useEffect(() => {
    if (location) {
      router.push("/member/login");
    }
  }, [location]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-12 px-8 container md:max-w-3xl mx-auto   sm:px-24 flex-col-center">
        <div className="text-3xl font-bold mb-4 text-center">註冊會員</div>
        {/* 表單內容 */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          {/* Name */}
          <div className="w-full">
            <div className="">姓名</div>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "必填欄位",
                },
              })}
              type="text"
              className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
              placeholder="輸入姓名"
            />
            {/* 錯誤訊息 */}
            {errors.name?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.name.message}
              </div>
            )}
          </div>
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
          {/* Email */}
          <div className="w-full">
            <div className="">信箱</div>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "必填欄位",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "請輸入正確的信箱格式",
                },
              })}
              type="email"
              className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
              placeholder="輸入信箱"
            />
            {/* 錯誤訊息 */}
            {errors.email?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.email.message}
              </div>
            )}
          </div>
          {/* password */}
          <div className="w-full ">
            <div className="">密碼</div>
            <div className="relative w-full">
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "必填欄位",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message:
                      "密碼須包含至少一個大寫字母、一個小寫字母和一個數字",
                  },
                  minLength: {
                    value: 8,
                    message: "密碼長度至少為 8 字元",
                  },
                })}
                type={isHiddenPassword ? "password" : "text"}
                className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
                placeholder="密碼長度至少為 8 字元，須包含至少一個大寫字母、一個小寫字母和一個數字"
              />
              <ShowPassword
                isHiddenPassword={isHiddenPassword}
                setIsHiddenPassword={setIsHiddenPassword}
                field={"r-password"}
              />
            </div>
            {errors.password?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          {/* re-enter password */}
          <div className="w-full">
            <div className="">再次輸入密碼</div>
            <div className="relative">
              <input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "必填欄位",
                  },
                  validate: (value) => value === password || "密碼不一致",
                })}
                type={isHiddenConfirmPassword ? "password" : "text"}
                className="w-full border-2 border-gray-400 p-2 px-4 rounded-md placeholder:text-xs sm:placeholder:text-sm"
                placeholder="再次輸入密碼"
              />
              <ShowPassword
                isHiddenConfirmPassword={isHiddenConfirmPassword}
                setIsHiddenConfirmPassword={setIsHiddenConfirmPassword}
                field={"r-confirm"}
              />
            </div>
            {/* 錯誤訊息 */}
            {errors.confirmPassword?.message && (
              <div className="text-red-500 mt-1 text-xs sm:text-sm">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          {/* 註冊按鈕 */}
          <button
            type="submit"
            className="w-full bg-slate-500 text-white p-2 px-4 rounded-md hover:bg-slate-600"
          >
            註冊
          </button>

          {/* 分隔線 */}
          <div className="divider text-xs sm:text-sm text-gray-400 mb-8">
            已經有帳號了?
          </div>

          {/* 註冊會員連結 */}
          <div className="w-full">
            <Link
              href={"/member/login"}
              className="block text-center w-full border-2 border-gray-300 p-2 px-4 rounded-md text-xs sm:text-sm hover:bg-gray-100"
            >
              登入
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

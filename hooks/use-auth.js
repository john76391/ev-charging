import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/services/axios-instance";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  // 初始未登入狀態
  const [auth, setAuth] = useState({
    isAuth: false,
    user: null,
  });

  // 驗證登入狀態
  const checkAuth = async () => {
    try {
      const res = await axiosInstance.get("/users/auth");
      // 登入狀態下才設定為登入，同時設定user資料
      if (res.data.status === "success") {
        setAuth({
          isAuthenticated: true,
          user: res.data.user,
        });
      } else {
        // 如果是登出狀態，設定為未登入，user資料為null，並導向登入頁面
        router.push("/member/login");

        setAuth({
          isAuthenticated: false,
          user: null,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 監聽路由變化，每次進到各個頁面都要驗證登入狀態，若是未登入就導向登入頁面
  useEffect(() => {
    checkAuth();
  }, [router.pathname, router.isReady]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import axiosInstance from "@/services/axios-instance";
import { useAuth } from "@/hooks/use-auth";
import UnAuthenticated from "@/components/UnAuthenticated";
import NavBarM from "@/components/NavBarM";

export default function Home() {
  const { auth } = useAuth();
  const data = [
    { title: "費用", content: "$ 500" },
    { title: "剩餘時間", content: "18 分鐘" },
    { title: "充電功率", content: "68.2 kwh" },
    { title: "電量", content: "76%" },
    { title: "充電站名稱", content: "永和秀朗樂活停車場" },
    { title: "充電器類型", content: "快充" },
  ];
  // 設定初始狀態
  const [cardData, setCardData] = useState([{ title: "", content: "" }]);

  // 切換側邊選單
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCardData(data);

    // 資料庫初始化
    const modelInit = async () => {
      try {
        const res = await axiosInstance("/db");
      } catch (e) {
        console.log(e);
      }
    };
    modelInit();
  }, []);

  return (
    <>
      {!auth.isAuthenticated ? (
        <UnAuthenticated />
      ) : (
        <div
          className={`sm:grid grid-cols-12 min-h-screen ${
            isOpen ? "bg-black/60" : ""
          }`}
        >
          <NavBarM isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="hidden sm:block col-span-3 lg:col-span-2">
            <SideBar />
          </div>
          {/* main content */}
          <div className="col-span-9 lg:col-span-10 p-8 space-y-6">
            <PageTitle title={"總覽"} isOpen={isOpen} />

            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3">
              {cardData.map((v, i) => {
                return <Card key={i} data={v} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

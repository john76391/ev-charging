import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import axios from "axios";

export default function Home() {
  const data = [
    { title: "費用", content: "$ 500" },
    { title: "剩餘時間", content: "30 Mins" },
    { title: "Energy", content: "68.2 kwh" },
    { title: "電量", content: "76%" },
  ];
  // 設定初始狀態
  const [cardData, setCardData] = useState([{ title: "", content: "" }]);

  useEffect(() => {
    setCardData(data);

    // 資料庫初始化
    const modelInit = async () => {
      try {
        const res = await axios("http://localhost:3000/api/db");
      } catch (e) {
        console.log(e);
      }
    };
    modelInit();
  }, []);

  return (
    <>
      <div className="sm:grid grid-cols-12">
        <div className="hidden sm:block col-span-3 lg:col-span-2">
          <SideBar />
        </div>
        {/* main content */}
        <div className="col-span-9 lg:col-span-10 p-8 space-y-6">
          <PageTitle title={"總覽"} />

          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {cardData.map((v, i) => {
              return <Card key={i} data={v} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

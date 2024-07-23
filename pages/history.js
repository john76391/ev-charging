import { useState, useEffect } from "react";
import SideBar from "@/components/SideBar";
import PageTitle from "@/components/PageTitle";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryEntry from "@/components/history/HistoryEntry";
import HistoryCardM from "@/components/history/HistoryCardM";
import { useAuth } from "@/hooks/use-auth";
import UnAuthenticated from "@/components/UnAuthenticated";
import NavBarM from "@/components/NavBarM";
import axiosInstance from "@/services/axios-instance";

export default function History() {
  const [historyList, setHistoryList] = useState([]);
  const { auth } = useAuth();

  // 切換側邊選單
  const [isOpen, setIsOpen] = useState(false);

  // 取得歷史紀錄
  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await axiosInstance.get("/history");
        // 設定歷史紀錄
        if (res.data.status === "success") {
          setHistoryList(res.data.history);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchTest();
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
          <div className="col-span-9 lg:col-span-10 p-3 sm:p-8 space-y-6">
            <PageTitle title={"歷史紀錄"} isOpen={isOpen} />
            {/* charge history mobile */}
            <div className="block lg:hidden">
              <HistoryCardM isOpen={isOpen} />
            </div>
            {/* charge history desktop */}
            <div className="hidden lg:block">
              {/* header */}
              <HistoryHeader />
              {/* body */}
              {/* // TODO 一般的紀錄 border-b border-b-gray-300 */}
              {/* // TODO 最後一條 rounded-b-md */}
              {historyList.length === 0 ? (
                <div className="text-center text-xl p-3 font-semibold">
                  無歷史紀錄
                </div>
              ) : (
                historyList.map((list, i) => {
                  return <HistoryEntry key={i} history={list} />;
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

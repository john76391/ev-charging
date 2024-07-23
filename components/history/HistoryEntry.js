import { useState, useEffect } from "react";

export default function HistoryEntry({ history }) {
  const [timeDiff, setTimeDiff] = useState("");

  useEffect(() => {
    let minutes = 0;
    let seconds = 0;
    const startTime = new Date(history.startTime);
    const endTime = new Date(history.endTime);
    const diff = endTime - startTime;
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setTimeDiff(`${minutes}分${seconds}秒`);
  }, [history]);

  return (
    <>
      <ul className="grid grid-cols-12 text-gray-200 text-sm xl:text-base bg-neutral-500 border-b border-b-gray-300 p-2 px-3 text-center">
        <li className="col-span-2 py-3">{history.chargingDate}</li>
        <li className="col-span-3 py-3">{history.stationName}</li>
        <li className="col-span-1 py-3">
          {history.startTime.split("T")[1].split(".")[0]}
        </li>
        <li className="col-span-1 py-3">
          {history.endTime.split("T")[1].split(".")[0]}
        </li>
        <li className="col-span-3 py-3">{history.address}</li>
        <li className="col-span-1 py-3">{timeDiff}</li>
        <li className="col-span-1 py-3">$ {history.cost}</li>
      </ul>
    </>
  );
}

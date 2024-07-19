import { useState, useEffect } from "react";
import axios from "axios";
import "dotenv/config";
import { MdSunny } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function WeatherCard() {
  // 主要天氣
  const [mainWeather, setMainWeather] = useState("");
  // 溫度
  const [temp, setTemp] = useState("");
  // 天氣icon
  const [weatherIcon, setWeatherIcon] = useState(<MdSunny />);

  // 取得天氣資料
  useEffect(() => {
    const fetchData = async () => {
      // 台北
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=25.0375198&lon=121.5636796&units=metric&lang=zh_tw&appid=22ff3d30857eea91aab270867bd6866b`
      );
      console.log(res.data);
      // 設定主要天氣
      setMainWeather(res.data.weather[0].main);
      // 設定溫度
      setTemp(res.data.main.temp);
    };
    fetchData();
  }, []);

  return <div className="w-full ">

  </div>;
}

import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

export default function NavBarM({ isOpen, setIsOpen }) {
  const offCanvasRef = useRef(null);
  const openBtnRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // 點擊其他地方關閉offcanvas
  const handleClickOutside = (event) => {
    if (
      isOpen &&
      offCanvasRef.current &&
      !offCanvasRef.current.contains(event.target) &&
      openBtnRef.current.childNodes[0] &&
      !openBtnRef.current.childNodes[0].contains(event.target)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="block sm:hidden relative">
      {/* 點開hamburgerMenu後的offcanvas */}
      <div
        className={`h-screen w-screen fixed transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-3/4" : "translate-x-full"
        }`}
      >
        <div
          ref={offCanvasRef}
          className="w-1/4 h-screen bg-stone-600 p-1 flex flex-col justify-between"
        >
          <div className=" space-y-2">
            <div className="">
              <IoCloseOutline
                onClick={handleClose}
                className="w-6 h-6  text-white"
              />
              {/* logo */}
              <div className="p-1">
                <Image
                  src="/ev-charging-high-resolution-logo-transparent.png"
                  alt=""
                  className=""
                  width={"250"}
                  height={"250"}
                />
              </div>
            </div>

            {/* menu */}
            <ul className="text-white w-8/12 mx-auto space-y-3">
              <li className="font-semibold text-sm">
                <Link href={"/"}>總覽</Link>
              </li>
              <li className="font-semibold text-sm">
                <Link href={"/history"}>歷史紀錄</Link>
              </li>
            </ul>
          </div>

          <div className="p-1">
            <Logout />
          </div>
        </div>
      </div>

      {/* 手機板NavBar */}
      <div className="h-14 bg-stone-800 flex justify-end items-center pr-2">
        <div className="" ref={openBtnRef}>
          <RxHamburgerMenu
            onClick={handleOpen}
            className="w-6 h-6 text-white "
          />
        </div>
      </div>
    </div>
  );
}

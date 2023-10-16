import React from "react";
import { BsSun } from "react-icons/bs";
import { PiBellRingingLight } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex justify-between items-center pt-2 w-[1300px]">
      <div className="flex items-center">
        <img src="/img/aryan.jpg" alt="armin" className="w-14 rounded-full" />
        <div className="pr-3">
          <h1 className="font-kalameB">آرین شوقی</h1>
          <h2 className="font-kalameB opacity-50">سرپرست سایت</h2>
        </div>
      </div>
      <div className="flex flex-row gap-6 h-10 items-center">
        <div className="bg-white rounded-full pr-6 flex flex-row  drop-shadow-md">
          <input
            type="text"
            placeholder="دنبال چی هستی ؟!"
            className="text-lg w-[300px] bn"
          />
          <button className="bg-blum-100 rounded-xl px-2 m-2 text-white text-lg hover:bg-blum-200 ">
            سرچش کن
          </button>
        </div>
        <button className="bg-blum-100 rounded-xl text-xl p-2 text-white hover:bg-blum-200 drop-shadow-md">
          <PiBellRingingLight />
        </button>
        <button className="bg-blum-100 rounded-xl text-xl p-2 text-white hover:bg-blum-200 drop-shadow-md">
          <BsSun />
        </button>
      </div>
    </div>
  );
}

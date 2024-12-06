import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/media/logoM.png";
export default function Navbar() {
  const location = useLocation();
  const isPeopleActive = location.pathname === "/people";

  return (
    <div class="flex justify-between font-sans pb-5">
      <div class="flex  gap-4 items-center">
        <div className="w-[38px] h-[36px]">
          <img src={logo} />
        </div>
        <div class="flex gap-1.5">
          <span class="text-[#1E1C1C] font-bold text-[18px] ">
            Available on
          </span>

          <span class="text-[#04C92F] font-bold text-[18px]">App Store</span>
          <span class="font-bold text-[18px]">&</span>
          <span class="text-[#04C92F] font-bold text-[18px]">Play Store</span>
        </div>
        <div class="">
          <h5 className="text-[#9A9A9A] text-[18px] font-bold">
            {isPeopleActive ? (
              <div class="h-[34px] w-[89px] bg-[#EDEAEA] rounded-[17px] flex justify-center items-center  ">
                Beta
              </div>
            ) : (
              <div class="h-[34px] w-[149px] bg-[#EDEAEA] rounded-[17px] flex justify-center items-center  ">
                Launching Jan
              </div>
            )}
          </h5>
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#1E1C1C]" : "text-[#1E1C1C66] font-bold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? "font-bold text-[#1E1C1C]" : "text-[#1E1C1C66] font-bold"
          }
        >
          People
        </NavLink>
        <div class="h-[34px] w-[108px] bg-[#1E1C1C] rounded-[9px] flex items-center justify-center ">
          <h5 class="text-[#FFFFFF] text-[18px] font-bold">Download</h5>
        </div>
      </div>
    </div>
    //test
  );
}

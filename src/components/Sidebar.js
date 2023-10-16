import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { LuShoppingBasket } from "react-icons/lu";
import { BiCommentDetail } from "react-icons/bi";
import { FiUsers, FiShoppingCart } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="bg-blum-100 fixed h-full w-44">
      <h1 className="text-white text-base p-2 pr-4 Bo">به داشبورد خود خوش آمدید</h1>
      <ul className="mt-2">
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/products' className="Sidebara">
            <AiOutlineHome className="ml-2"/>
            صفحه اصلی
          </Link>
        </li>
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/products' className="Sidebara">
            <LuShoppingBasket className="ml-2"/>
            محصولات
          </Link>
        </li>
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/comments' className="Sidebara">
            <BiCommentDetail className="ml-2"/>
            کامنت ها
          </Link>
        </li>
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/users' className="Sidebara">
            <FiUsers className="ml-2"/>
            کاربران
          </Link>
        </li>
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/orders' className="Sidebara">
            <FiShoppingCart className="ml-2"/>
            سفارشات
          </Link>
        </li>
        <li className="Sidebarli hover:bg-blum-200">
          <Link to='/offers' className="Sidebara">
            <MdOutlineLocalOffer className="ml-2"/>
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}

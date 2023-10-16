import React, { useState } from "react";
import { FiType } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsBag, BsImage, BsCurrencyDollar } from "react-icons/bs";

export default function AddNewProduct({ getAllProducts }) {
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewColors, setProductNewColors] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewsale, setProductNewsale] = useState("");
  const [productNewId, setProductNewId] = useState("");

  const emptyInputValue = () => {
    setProductNewTitle("");
    setProductNewPrice("");
    setProductNewColors("");
    setProductNewImg("");
    setProductNewPopularity("");
    setProductNewCount("");
    setProductNewsale("");
    setProductNewId("");
  };

  const addNewProduct = (e) => {
    e.preventDefault();

    const newProductInfos = {
      id: productNewId,
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewsale,
      colors: productNewColors,
    };

    fetch(`http://localhost:3004/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        getAllProducts();
        emptyInputValue();
      });
    console.log("Posted");
  };

  return (
    <div className="drop-shadow-lg mt-14">
      <h1 className="text-3xl font-kalameB mb-4">افزودن محصول جدید</h1>
      <form className="w-full bg-white rounded-2xl p-4 flex-1 text-left">
        <div className="grid grid-cols-2 gap-3">
          <div className="divInputProduct">
            <FiType />
            <input
              className="inputProduct"
              type="text"
              placeholder="اسم محصول را وارد کنید"
              value={productNewTitle}
              onChange={(e) => setProductNewTitle(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <BsCurrencyDollar />
            <input
              className="inputProduct"
              type="text"
              placeholder="قیمت محصول را وارد کنید"
              value={productNewPrice}
              onChange={(e) => setProductNewPrice(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <BsBag />
            <input
              className="inputProduct"
              type="text"
              placeholder="موجودی محصول را وارد کنید"
              value={productNewCount}
              onChange={(e) => setProductNewCount(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <BsImage />
            <input
              className="inputProduct"
              type="text"
              placeholder="آدرس عکس محصول را وارد کنید"
              value={productNewImg}
              onChange={(e) => setProductNewImg(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <SiGoogleanalytics />
            <input
              className="inputProduct"
              type="text"
              placeholder="میزان محبوبیت محصول را وارد کنید"
              value={productNewPopularity}
              onChange={(e) => setProductNewPopularity(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <SiGoogleanalytics />
            <input
              className="inputProduct"
              type="text"
              placeholder="میزان فروش محصول را وارد کنید"
              value={productNewsale}
              onChange={(e) => setProductNewsale(e.target.value)}
            />
          </div>

          <div className="divInputProduct">
            <IoColorPaletteOutline />
            <input
              className="inputProduct"
              type="text"
              placeholder="تعداد رنگ بندی محصول را وارد کنید"
              value={productNewColors}
              onChange={(e) => setProductNewColors(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={addNewProduct}
          className="bg-blum-100 rounded-xl p-2 px-3 m-2 text-white text-lg hover:bg-blum-200"
        >
          ثبت محصول
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import Deletemodal from "./Deletemodal";
import DetailsModal from "./DetailsModal";
import EditModal from "./EditModal";

import Errorbox from "./Errorbox";

export default function ProductsTable({ allProducts, getAllProducts }) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const [productID, setProductID] = useState(null);
  const [mainProductInfos, setMainProductInfos] = useState(null);

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewColors, setProductNewColors] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewCount, setProductNewCount] = useState("");

  const deleteModalCanselAction = () => {
    console.log("canseled");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log("submited");
    fetch(`http://localhost:3004/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((products) => {
        setIsShowDeleteModal(false);
        getAllProducts();
      });
  };
  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();

    const productNewInfos = {
      id: productID,
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: mainProductInfos.img,
      popularity: productNewPopularity,
      sale: mainProductInfos.sale,
      colors: productNewColors,
    };

    fetch(`http://localhost:3004/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json())
      .then((products) => {
        getAllProducts();
        setIsShowEditModal(false);
      });
    console.log("edited");
  };

  return (
    <>
      {allProducts.length ? (
        <table className="mt-7 w-full bg-white rounded-xl flex flex-col">
          <thead>
            <tr className="text-center flex justify-between pr-32 pl-[450px] py-5">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-8">
            {allProducts.map((product) => (
              <tr
                key={product.id}
                className="flex flex-1 justify-between items-center pl-20 pr-14"
              >
                <td>
                  <img src={product.img} alt="oil image" className="w-40" />
                </td>
                <td className="pl-10">{product.title}</td>
                <td className="pl-10">{product.price} تومان </td>
                <td>{product.count}</td>
                <td className="flex gap-5">
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductInfos(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductID(product.id);
                      setMainProductInfos(product);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewCount(product.count);
                      setProductNewColors(product.colors);
                      setProductNewPopularity(product.popularity);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg="هیچ محصولی یافت نشد" />
      )}

      {isShowDeleteModal && (
        <Deletemodal
          submitAction={deleteModalSubmitAction}
          canselAction={deleteModalCanselAction}
        />
      )}
      {isShowDetailModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>محبوبیت</th>
                <th>فروش</th>
                <th>رنگ بندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfos.popularity} از 10</td>
                <td>{mainProductInfos.sale} عدد</td>
                <td>{mainProductInfos.colors}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span className="opacity-30 text-lg">عنوان :</span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="bg-white-50"
              value={productNewTitle}
              onChange={(e) => setProductNewTitle(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span className="opacity-30 text-lg">قیمت :</span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="bg-white-50"
              value={productNewPrice}
              onChange={(e) => setProductNewPrice(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span className="opacity-30 text-lg">موجودی :</span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="bg-white-50"
              value={productNewCount}
              onChange={(e) => setProductNewCount(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span className="opacity-30 text-lg">تعداد رنگ بندی :</span>
            <input
              type="text"
              placeholder="رنگ بندی جدید را وارد کنید"
              className="bg-white-50"
              value={productNewColors}
              onChange={(e) => setProductNewColors(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span className="opacity-30 text-lg">میزان محبوبیت از 10 :</span>
            <input
              type="text"
              placeholder="میزان محبوبیت جدید را وارد کنید"
              className="bg-white-50"
              value={productNewPopularity}
              onChange={(e) => setProductNewPopularity(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10 text-center">
            <span className="opacity-30 text-lg">ادرس کاور</span>
            <input
              type="text"
              placeholder=" ادرس کاور جدید را وارد کنید"
              className="bg-white-50"
              value={mainProductInfos.img}
              readOnly
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

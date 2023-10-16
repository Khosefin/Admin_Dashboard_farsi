import React from "react";
import { useState } from "react";
import Deletemodal from "./Deletemodal";
import DetailsModal from "./DetailsModal";
import EditModal from "./EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { productsData } from "../datas/Products";
import Errorbox from "./Errorbox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState(productsData);

  const deleteModalCanselAction = () => {
    console.log("canseled");
    setIsShowDeleteModal(false);
  };
  const deleteModalSubmitAction = () => {
    console.log("submited");
    setIsShowDeleteModal(false);
  };
  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("edited");
  };

  return (
    <>
      {allProducts.length ? (
        <table className="mt-7 w-full bg-white rounded-xl flex flex-col">
          <thead>
            <tr className="text-center flex justify-between pr-16 pl-[450px] py-5">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr
                key={product.id}
                className="flex flex-1 justify-between items-center pl-20"
              >
                <td>
                  <img src={product.img} alt="oil image" className="w-40" />
                </td>
                <td className="pl-10">{product.tite}</td>
                <td className="pl-10">{product.price} تومان </td>
                <td>{product.count}</td>
                <td className="flex gap-5">
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => setIsShowDetailModal(true)}
                  >
                    جزییات
                  </button>
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => setIsShowDeleteModal(true)}
                  >
                    حذف
                  </button>
                  <button
                    className="bg-blum-100 rounded-xl p-2 px-4 text-white text-lg hover:bg-blum-200"
                    onClick={() => setIsShowEditModal(true)}
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
      {isShowDetailModal && <DetailsModal onHide={closeDetailsModal} />}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="bg-white-50 w-full"
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="bg-white-50 w-full"
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="bg-white-50 w-full"
            />
          </div>
          <div className="flex items-center bg-white-50 gap-3 px-3 rounded-lg my-5 h-10">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="bg-white-50 w-full"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}

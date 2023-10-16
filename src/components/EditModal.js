import React, { useEffect } from "react";

export default function EditModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const checkKey = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <div className="modal-parent active">
      <form className="w-[500px] p-4 bg-white text-center rounded-2xl">
        <h1 className="text-xl">لطفا اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="w-full px-2 py-1 bg-blum-100 hover:bg-blum-200 text-white" onClick={onSubmit}>
          تایید
        </button>
      </form>
    </div>
  );
}

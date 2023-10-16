import React from "react";
import ReactDOM from "react-dom";

export default function Deletemodal({ submitAction, canselAction }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="bg-white p-5 rounded-2xl">
        <h1 className="p-10 text-3xl">ایا از حذف اطمینان دارید ؟!</h1>
        <div className="flex justify-center gap-5">
          <button
            className="bg-red-600 rounded-xl p-1 px-10 text-white text-lg hover:bg-red-700"
            onClick={() => canselAction()}
          >
            خیر
          </button>
          <button
            className="bg-blum-100 rounded-xl p-1 px-10 text-white text-lg hover:bg-blum-200"
            onClick={() => submitAction()}
          >
            بله
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}

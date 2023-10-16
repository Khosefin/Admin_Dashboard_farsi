import React, { useEffect } from "react";

export default function DetailsModal({ onHide }) {
  useEffect(() => {
    const checkKey = (e) => {
      if (e.keyCode === 27) {
        onHide();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });
  return (
    <div className="modal-parent active">
      <table className="cms-table">
        <thead>
          <tr>
            <th>اسم</th>
            <th>قیمت</th>
            <th>محبوبیت</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>لبتاب</td>
            <td>12.000.000 تومان</td>
            <td>91%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

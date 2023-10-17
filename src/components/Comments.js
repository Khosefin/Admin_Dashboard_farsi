import React, { useEffect, useState } from "react";
import Errorbox from "./Errorbox";
import DetailsModal from "./DetailsModal";
import Deletemodal from "./Deletemodal";
import EditModal from "./EditModal";

export default function Comments() {
  const [allcomments, setAllcomments] = useState([" "]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainComment, SetMainComment] = useState("");
  const [commentID, setCommentID] = useState("");
  const [hourComment, setHourComment] = useState("");
  const [dateComment, setDateComment] = useState("");
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [nameComment, setNameComment] = useState("");
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const getAllComments = () => {
    fetch("http://localhost:3004/comments/")
      .then((res) => res.json())
      .then((comments) => {
        setAllcomments(comments);
      });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };

  const updateCommentInfos = (event) => {
    event.preventDefault();

    const productNewInfos = {
      id: commentID,
      body: mainComment,
      hour: hourComment,
      date: dateComment,
      userId: userId,
      productId: productId,
      name: nameComment,
    };

    fetch(`http://localhost:3004/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productNewInfos),
    })
      .then((res) => res.json())
      .then((products) => {
        getAllComments();
        setIsShowEditModal(false);
      });
    console.log("edited");
  };

  return (
    <div className="mt-10">
      {allcomments.length ? (
        <table className="cms-table-comments">
          <thead>
            <tr className="text-center">
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {allcomments.map((comment) => (
              <tr className="text-center" key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.productId}</td>
                <td className="w-22 p-0 m-0">
                  <button
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      SetMainComment(comment.body);
                    }}
                    className="buttonPrimry"
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td className="w-16">
                  <button
                    className="buttonPrimry"
                    onClick={() => {
                      setIsShowEditModal(true);
                      SetMainComment(comment.body);
                      setCommentID(comment.id);
                      setNameComment(comment.name);
                      setDateComment(comment.date);
                      setHourComment(comment.hour);
                      setUserId(comment.userId);
                      setProductId(comment.productId);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
                <td className="w-16">
                  <button className="buttonPrimry">پاسخ</button>
                </td>
                <td className="w-16">
                  <button className="buttonPrimry ml-14">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Errorbox msg={"هیچ کامنتی ثبت نشده است"} />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <p className="bg-white p-10 w-[500px] rounded-xl">{mainComment}</p>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateCommentInfos}
        >
          <textarea
            className="w-full h-40"
            value={mainComment}
            onChange={(e) => SetMainComment(e.target.value)}
          />
        </EditModal>
      )}
    </div>
  );
}

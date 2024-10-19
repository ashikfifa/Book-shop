import React, { useState } from "react";
import heartIcon from "../assets/heartIcon.svg";
import heartIconWithoutFill from "../assets/heartIconWithoutFill.svg";
import { useNavigate } from "react-router-dom";

const BookListWithInfo = (props) => {
  const {
    isMarked = false,
    onMark = false,
    item,
    wishListPage = false,
  } = props;

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/book-details", { state: item });
  };

  return (
    <div className="bookInfo">
      <div className=" h-[400px]">
        <div className=" relative group"onClick={handleDetails}>
          <img
            className="cursor-pointer  w-[200px] group-hover:opacity-50 transition-opacity duration-300"
            src={item?.formats?.["image/jpeg"]}
            onClick={handleDetails}
            alt="coverImg"
          />
          <button onClick={handleDetails} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 text-white font-semibold">
            Add to Cart
          </button>
        </div>
      </div>

      <div className=" h-[160px]">
        <div className="bookTitle" onClick={handleDetails}>
          {item?.title.length > 30 ? (
            <span title={item?.title}>{item?.title.slice(0, 30)}...</span>
          ) : (
            item?.title
          )}
        </div>
        <div className="authorNameStyle">{item?.authors[0]?.name}</div>
      </div>
      <div className=" h-[200px] overflow-hidden">
        {" "}
        <span className="genreFont">Genre:</span>{" "}
        {item?.subjects?.map((item, index) => (
          <li key={index}> {item}</li>
        ))}{" "}
      </div>
      <div className="listHeader">
        <span className="genreFont">Id: {item?.id} </span>

        <div className="imgCursor">
          {wishListPage == "forHomePage" && (
            <img
              onClick={() => onMark(item)}
              src={isMarked ? heartIcon : heartIconWithoutFill}
              alt={isMarked ? "heartIcon" : "heartIconWithoutFill"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookListWithInfo;

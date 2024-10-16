import React, { useState } from "react";
import heartIcon from "../assets/heartIcon.svg";
import heartIconWithoutFill from "../assets/heartIconWithoutFill.svg";
import { useNavigate } from "react-router-dom";

const BookListWithInfo = (props) => {
  const {
    coverImg,
    authorName,
    title,
    genre,
    isMarked,
    onMark,
    id,
    bookListState,
    index,
  } = props;

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/book-details", { state: bookListState[index] });
    console.log('7777777', bookListState[index]);
  };

  return (
    <div className="bookInfo">
      <img
        className=" cursor-pointer"
        height={"100%"}
        width={"200px"}
        src={coverImg}
        onClick={handleDetails}
        alt="coverImg"
      />
      <div className="bookTitle" onClick={handleDetails}>
        {title}
      </div>
      <div className="authorNameStyle">{authorName}</div>
      <div>
        {" "}
        <span className="genreFont">Genre:</span> {genre}{" "}
      </div>
      <div className="listHeader">
        <span className="genreFont">Id: {id} </span>

        <div className="imgCursor">
          <img
            onClick={() => onMark(title)}
            src={isMarked ? heartIcon : heartIconWithoutFill}
            alt={isMarked ? "heartIcon" : "heartIconWithoutFill"}
          />
        </div>
      </div>
    </div>
  );
};

export default BookListWithInfo;

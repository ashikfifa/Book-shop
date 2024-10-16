import React, { useState } from "react";
import heartIcon from "../assets/heartIcon.svg";
import heartIconWithoutFill from "../assets/heartIconWithoutFill.svg";

const BookListWithInfo = (props) => {
  const { coverImg, authorName, title, genre, isMarked, onMark, id } = props;

  return (
    <div className="bookInfo">
      <img height={"100%"} width={"200px"} src={coverImg} alt="coverImg" />
      <div className="bookTitle">{title}</div>
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

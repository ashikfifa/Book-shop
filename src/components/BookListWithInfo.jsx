import React from "react";

const BookListWithInfo = (props) => {
  const { coverImg, authorName, title, genre, id } = props;
  return (
      
       
          <div className="bookInfo">
          <img height={'100%'} width={'200px'} src={coverImg} alt="coverImg" />
            <div>{title}</div>
            <div>{authorName}</div>
            <div>{genre}</div>
            <div>{id}</div>
          </div>
        
     
  );
};

export default BookListWithInfo;

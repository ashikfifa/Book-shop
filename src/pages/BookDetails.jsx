import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const bookDetails = location.state;
  console.log("989889", bookDetails);

  return (
    <div className="boxParentPadding">
      <h3 className=" text-center"> {bookDetails?.title} </h3>
      <p className=" text-center">
        {bookDetails?.authors[0]?.name} ({bookDetails?.authors[0]?.birth_year}{" "}
        {`-`} {bookDetails?.authors[0]?.death_year}){" "}
      </p>
      <div className="flex justify-between 	mt-10">
        <div>
          <p className=" font-semibold text-base underline  underline-offset-2 pb-2">
            Bookshelves
          </p>
          {bookDetails?.bookshelves?.map((item) => (
            <li> {item}</li>
          ))}
        </div>

        <div>
          <p className=" font-semibold text-base underline  underline-offset-2 pb-2">
            Subjects
          </p>
          {bookDetails?.subjects?.map((item) => (
            <li> {item}</li>
          ))}
        </div>

        <div>
         <span className=" font-semibold">Download count:</span>  {bookDetails?.download_count} <br />
         <span className=" font-semibold">Id:</span>  {bookDetails?.id}
        </div>
      </div>

      <div className=" flex justify-center mt-8">
        <img src={bookDetails?.formats?.["image/jpeg"]} alt=""/>
      </div>
    </div>
  );
};

export default BookDetails;

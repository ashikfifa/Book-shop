import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const bookDetails = location.state;
  console.log("989889", bookDetails);

  return <div></div>;
};

export default BookDetails;

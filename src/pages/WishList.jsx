import React from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const wishList = useSelector((state) => state.wishlist);

  return (
    <div className="boxParentPadding">
      <h3>WishList</h3>

      {wishList?.map((item) => (
        <li> {item} </li>
      ))}
    </div>
  );
};

export default WishList;

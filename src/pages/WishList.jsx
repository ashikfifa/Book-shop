import React from "react";
import { useSelector } from "react-redux";
import BookListWithInfo from "../components/BookListWithInfo";

const WishList = () => {
  const wishlistItem = useSelector((state) => state.wishlist.items);

  return (
    <div className="boxParentPadding">
      <div className="boxParent">
        {wishlistItem?.map((item, index) => (
          <div key={index} className="boxChild">
            <BookListWithInfo wishListPage={"forWishListPage"} item={item} />
          </div>
        ))}
      </div>
      {wishlistItem?.length === 0 && <> No Book Founds </>}
    </div>
  );
};

export default WishList;

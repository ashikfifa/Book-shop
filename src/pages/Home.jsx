import { useEffect, useState } from "react";
import { bookListData } from "../common/api";
import BookListWithInfo from "../components/BookListWithInfo";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../common/redux/loadingSlice";
import LoadersComponent from "../components/Loader";
import Pagination from "../components/Pagination";
import HeaderList from "../components/HeaderList";
import {
  addToWishlist,
  removeFromWishlist,
} from "../common/redux/wishListSlice";

const Home = () => {
  const [bookListState, setBookListState] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem("searchQuery") || "";
  });

  const [selectedGenre, setSelectedGenre] = useState(() => {
    return localStorage.getItem("selectedGenre") || "";
  });

  const loading = useSelector((state) => state.loading);
  const wishList = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleMark = (title) => {
    if (wishList?.includes(title)) {
      dispatch(removeFromWishlist(title));
    } else {
      dispatch(addToWishlist(title));
    }
  };

  //Store wishlist in localStorage
  localStorage.setItem("wishList", JSON.stringify(wishList));

  const getBookList = async () => {
    try {
      dispatch(setLoading(true));
      const result = await bookListData();
      setBookListState(result?.results);
      setFilteredBooks(result?.results);
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getBookList();
  }, []);

  //For filter by Genre and Search
  useEffect(() => {
    if (selectedGenre === null) {
      setSelectedGenre("");
    }
    const filtered = bookListState.filter((book) => {
      const matchesTitle = book?.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre
        ? book?.subjects?.some((subject) => subject.includes(selectedGenre))
        : true;
      return matchesTitle && matchesGenre;
    });
    setFilteredBooks(filtered);

    localStorage.setItem("searchQuery", searchQuery);
    localStorage.setItem("selectedGenre", selectedGenre);
  }, [searchQuery, bookListState, selectedGenre]);

  //For pagination
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = filteredBooks.slice(firstBookIndex, lastBookIndex);

  return (
    <div className="boxParentPadding">
      <HeaderList
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedGenre={setSelectedGenre}
        selectedGenre={selectedGenre}
      />
      {loading ? (
        <LoadersComponent />
      ) : (
        <div className="boxParent">
          {currentBooks?.map((item, index) => (
            <div key={index} className="boxChild">
              <BookListWithInfo
                coverImg={item?.formats?.["image/jpeg"]}
                authorName={item?.authors[0]?.name}
                title={item?.title}
                genre={item?.subjects}
                id={item?.id}
                isMarked={wishList?.includes(item.title)}
                onMark={handleMark}
                bookListState={bookListState}
                index={index}
              />
            </div>
          ))}

          {currentBooks?.length === 0 && <> No Books Founds </>}
        </div>
      )}
      <Pagination
        totalBook={filteredBooks?.length}
        booksPerPage={booksPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;

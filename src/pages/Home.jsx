import { useEffect, useState } from "react";
import { bookListData } from "../common/api";
import BookListWithInfo from "../components/bookListWithInfo";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../common/redux/loadingSlice";
import LoadersComponent from "../components/Loader";
import Pagination from "../components/Pagination";
import HeaderList from "../components/HeaderList";
import {
  addToWishlist,
  removeFromWishlist,
} from "../common/redux/wishListSlice";
import { bookListMock } from "../Utils";

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
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleMark = (item) => {
    const itemInWishlist = wishlist.find((wishItem) => wishItem.id === item.id);
    if (itemInWishlist) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const isMarked = (item) => {
    return wishlist.some((wishItem) => wishItem.id === item.id);
  };

  const getBookList = async () => {
    try {
      dispatch(setLoading(true));
      const result = await bookListData();
      // const result = await bookListMock();
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
                isMarked={isMarked(item)}
                onMark={handleMark}
                item={item}
                wishListPage={"forHomePage"}
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

import { useEffect, useState } from "react";
import { bookListData } from "../common/api";
import BookListWithInfo from "../components/bookListWithInfo";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../common/redux/loadingSlice";
import LoadersComponent from "../components/Loader";

const Home = () => {
  const [bookListState, setBookListState] = useState([]);

  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const getBookList = async () => {
    try {
      dispatch(setLoading(true));
      const result = await bookListData();
      setBookListState(result?.results);
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };
  useEffect(() => {
    getBookList();
  }, []);
  return (
    <div className="boxParentPadding">
      <h3>List of books</h3>
      {loading ? (
        <LoadersComponent />
      ) : (
        <div className="boxParent">
          {bookListState?.map((item, index) => (
            <div key={index} className="boxChild">
              <BookListWithInfo
                coverImg={item?.formats?.["image/jpeg"]}
                authorName={item?.authors?.name}
                title={item?.title}
                genre={item?.subjects}
                id={item?.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { bookListData } from "../common/api";

const Home = () => {
  const [bookListState, setBookListState] = useState([]);
  const getBookList = async () => {
    try {
      const result = await bookListData();
      console.log("5555555555555", result);
      setBookListState(result?.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);
  return (
    <div>
      {bookListState?.map((item, index) => (
        <li key={index}> {item?.title} </li>
      ))}
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import { bookListData } from "../common/api";

const Home = () => {
  const getBookList = async () => {
    try {
      const result = await bookListData();
      console.log("5555555555555", result);
    } catch (error) {
      console.log(error);
    }
    console.log('66666666666666666666666');
    
  };

  useEffect(() => {
    getBookList();
  }, []);
  return <div></div>;
};

export default Home;

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";
import WishList from "./pages/WishList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/book-details" element={<BookDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

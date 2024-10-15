import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./common/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;

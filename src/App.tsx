import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Eatery from "./pages/Eatery/Eatery";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/eatery" element={<Eatery />} />
      <Route path="/book/:movietitle" element={<Book />} />
    </Routes>
  );
};

export default App;

import "./App.css";
import Header from "./components/content/header";
import Home from "./components/content/internal/products/GetAllProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/content/internal/singlePage";
// import Home from "./components"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

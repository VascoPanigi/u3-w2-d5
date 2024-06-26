import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Belandi from "./components/Belandi";
import MyNavbar from "./components/MyNavbar";
import ResultPage from "./components/ResultPage";
import { useState } from "react";

function App() {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <MyNavbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/results/:cityName" element={<ResultPage />} />
            <Route path="*" element={<Belandi />} />
          </Routes>
        </main>

        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

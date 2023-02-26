// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:video/:videoId/" element={<VideoPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

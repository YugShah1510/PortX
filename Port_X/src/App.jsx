import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";   // ✅ ADD THIS
import Home from "./pages/Home";

import Login from "./pages/Login";
import Template from "./components/Template";

import AuthPage from "./components/AuthPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ ALWAYS VISIBLE */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/templates" element={<Template />} />

        <Route path="/login" element={<AuthPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
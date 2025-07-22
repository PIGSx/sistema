import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PageNotFound from "../components/PageNotFound";

import Header from "../components/Header";

export default function RoutsPage() {
  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

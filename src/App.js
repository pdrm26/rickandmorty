import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import Favourites from "./pages/Favourites";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { favouriteActions } from "store/favourite";

import Header from "components/Header";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";
import Favourites from "./pages/Favourites";

export default function App() {
  const dispatch = useDispatch();
  const favCharsOnLocalStorage = localStorage.getItem("favChars");

  useEffect(() => {
    if (favCharsOnLocalStorage !== null) {
      dispatch(favouriteActions.set(JSON.parse(favCharsOnLocalStorage)));
    }
  }, []);

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

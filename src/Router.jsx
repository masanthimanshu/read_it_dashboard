import "./style.css";
import { CssBaseline } from "@mui/material";
import { CheckAuth } from "./auth/checkAuth";
import { LoginKeeper } from "./auth/loginKeeper";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Books, AddBook, NotFound, EditBook } from "./pages";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<LoginKeeper />}>
          <Route index element={<Login />} />
        </Route>
        <Route element={<CheckAuth />}>
          <Route path="home" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="edit-book/:id" element={<EditBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

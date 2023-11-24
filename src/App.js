import React from "react";
import Header from "./components/Header";
import { Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Book from "./components/Book/Books";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return <React.Fragment>
      <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/add" element={<AddBook/>} exact />
        <Route path="/books" element={<Book/>} exact />
        <Route path="/books/:id" element={<BookDetail/>} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
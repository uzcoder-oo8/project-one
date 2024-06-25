import React from "react";
import "./slider.css";
import { Routes, Route } from "react-router-dom";
import BookonePage from "./booksonepages";
import BookonePage1 from "./booksthepages";

export default function Bookone() {
  return (
    <section>
      <div>
        <Routes>
          <Route path="/" element={<BookonePage />} />
          <Route path="/book/aaaaa" element={<BookonePage1 />} />
        </Routes>
      </div>
    </section>
  );
}

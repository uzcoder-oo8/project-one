import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/Inner.jsx";
import BlogOne from "./pages/BlogOne.jsx";
import Book from "./pages/Book.jsx";
import BookonePage1 from "./components/Books/booksthepages.jsx";
import Player from "./components/Books/Player.jsx";
import Payment1 from "./components/Books/Payment1.jsx";
import Click from "./components/Books/Click.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogone" element={<BlogOne />} />
        <Route path="/book" element={<Book />} />
        <Route path="TimeSlot" element={<BookonePage1 />} />
        <Route path="/player" element={<Player />} />
        <Route path="/payment" element={<Payment1 />} />
        <Route path="click" element={<Click />} />
      </Routes>
    </div>
  );
}

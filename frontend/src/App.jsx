import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hotel from "./pages/Hotel";
import Login from "./components/Login";
import Boooking from "./components/Boooking";
import Table from "./components/table";
import PopularDestinations from "./components/PopularDestinations";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import FeedbackForm from "./pages/FeedbackForm";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Boooking />} />
        <Route path="*" element={<Error />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

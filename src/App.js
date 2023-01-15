import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleMovieCard from "./components/SingleMovieCard";
import Error from "./components/Error";
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovieCard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;

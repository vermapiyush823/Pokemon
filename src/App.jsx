import axios from "axios";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import PokeShow from "./Components/PokeShow";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<PokeShow />}/>
    </Routes>
    </>
  );
}

export default App;

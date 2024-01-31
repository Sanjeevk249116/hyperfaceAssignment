import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../components/Home";
import Player from "../components/Player";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/audio" element={<Player/>} />
    
    </Routes>
  );
}

export default Router;

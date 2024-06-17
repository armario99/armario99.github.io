import { Routes, Route } from "react-router-dom";
import React, { useState} from'react';

import LoginPage from "./pages/Login/Login/Login";
import JoinPage from "./pages/Login/Join/Join";

function App() {
  return (
    <div className="App">
      <Routes> 
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Join" element={<JoinPage/>} />
      </Routes>
    </div>
  );
}

export default App;
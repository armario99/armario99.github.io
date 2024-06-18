import { Routes, Route } from "react-router-dom";
import React, { useState} from'react';

import LoginPage from "./pages/Login/Login/Login";
import JoinPage from "./pages/Login/Join/Join";
import MyPage from "./pages/Mypage/MyPage/Mypage";
import InformPage from "./pages/Mypage/InformPage/inform";
function App() {
  const [selectedImage, setSelectedImage] = useState('/logo512.png');
  const [Nickname, setNickname] = useState('');
  return (
    <div className="App">
      <Routes> 
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/Join" element={<JoinPage/>} />
          <Route path="/MyPage" element={<MyPage/>} />
          <Route path="/InformPage" element={<InformPage />} />
      </Routes>
    </div>
  );
}

export default App;
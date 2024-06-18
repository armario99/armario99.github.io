import React, { useState,useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from './Header_func';
export default function Header() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_Token');
  const [user_name, setUser_name] = useState(localStorage.getItem('Nickname'));
  const [user_Lv, setUser_Lv] = useState(10);//useState(localStorage.getItem('LV'));
  
  const nav_Logout = () =>{
    const logout_result = logout(navigate);
    console.log(logout_result);
    if(logout_result){
      navigate('/Login');
    }
  }
  const Link_MyPage = () => {
    navigate('/MyPage');
  }
  const Login = () => {
    navigate('/Login');
  }

  const Main = () => {
    navigate('/');
  }

  return (
    <nav className='nav_body'>
      <div className="Header">
        <div className="WebIde" onClick={() => Main()} >WEB IDE</div>
        {accessToken ? (
          <div className="Header_user_box" onClick={() => Link_MyPage()}>
            <div className="Header_user_box_Text">{user_name}</div>
            <img className="Header_user_box_Image" src={localStorage.getItem('image') ? localStorage.getItem('image') : 'https://via.placeholder.com/350x350'} alt="Profile" />
            <div className="Level1">Level {user_Lv}</div>
            <div className="Logout" onClick={() => nav_Logout()}>로그아웃</div>
          </div>
        ) : (
          <div className="Header_Login_box">
            <div className="Header_Login" onClick={() => Login()}>로그인</div>
          </div>
        )}
        
      </div>
    </nav>

  )
}

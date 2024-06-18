import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header.js';
import { checkAccessTokenValidity } from './Mypage_func.js';
import './Mypage.css';
function MyPage() {
    const [user_name, setUser_Name] = useState(localStorage.getItem('Nickname'));
    const [user_level, setUser_Level] = useState(10);
    const [total_exp,setTotal_Exp] = useState(100);
    const [user_exp,setUser_Exp] = useState(70);

    const navigate = useNavigate();
    const [dataList, setDataList] = useState([  { id: 1, name: 'Item 1', date: '2024-06-16', difficulty: 'High', Lang: 'Java' },
                                                { id: 2, name: 'Item 2', date: '2024-06-17', difficulty: 'Medium', Lang: 'Java' },
                                                { id: 3, name: 'Item 3', date: '2024-06-18', difficulty: 'Low', Lang: 'Python' },
                                                { id: 4, name: 'Item 4', date: '2024-06-18', difficulty: 'Low', Lang: 'Python' },
                                                { id: 5, name: 'Item 5', date: '2024-06-18', difficulty: 'Low', Lang: 'Python' },
                                                { id: 6, name: 'Item 6', date: '2024-06-18', difficulty: 'Low', Lang: 'Python' }

                                            ]);
    
    useEffect(() => {
        const access_Token = localStorage.getItem('access_Token');
        if (!access_Token) {
            navigate('/Login');
        }
    }, []);

    const handleinformClick = () => {
        navigate('/InformPage');
    };

    const handleinformClick2 = () => {
        navigate('/CodePage');
    };

    const addNewItem = () => {
        const newItem = {
        id: dataList.length + 1,
        name: `Item ${dataList.length + 1}`,
        date: new Date().toISOString().slice(0, 10),
        difficulty: 'Medium',
        misc: 'Lorem ipsum'
        };
        setDataList([...dataList, newItem]);
    };

    return (
        <div className='MyPage_container'>
            <Header/>
            <div className="MyPage">
                <div className="MyPage_Proflie">
                    <img className="MyPage_Proflie_img" src={localStorage.getItem('image') ? localStorage.getItem('image') : 'https://via.placeholder.com/350x350'} alt="프로필 사진" />
                    <div className="MyPage_User_name">{user_name}</div>
                    <div className="MyPage_Lv">Lv.{user_level}</div>
                    <div className="MyPage_Exp">
                        <div className="MyPage_TotalExp" style={{ width: `${total_exp}%` }} ></div>
                        <div className="MyPage_NowExp" style={{ width: `${user_exp}%` ,maxWidth: '100%' }}></div>
                    </div>
                    <button
                        type="button"
                        className='MyPage_button'
                        onClick={handleinformClick}
                    >
                        개인 정보 변경
                    </button>
                </div>

                <div className="MyPage_RecentWork">
                    <div className="MyPage_RecentWork_title">Recent work</div>
                    <div className="MyPage_Group38">
                        <div className="MyPage_Rectangle26">
                            <div>프로젝트</div>
                            <div>언어</div>
                            <div>종류</div>
                            <div>날짜</div>
                        </div>
                        <div className="MyPage_Rectangle3">
                        {dataList.map(item => (
                            <div key={item.id} className="Mypage_item" onClick={handleinformClick2} >
                                <div className="Mypage_item-name">{item.name}</div>
                                <div className="Mypage_item-Lang">{item.Lang}</div>
                                <div className={"Mypage_item-difficulty"}>{item.difficulty}</div>
                                <div className="Mypage_item-date">{item.date}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;

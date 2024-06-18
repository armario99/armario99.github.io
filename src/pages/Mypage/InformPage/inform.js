import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './inform.css';
import { handleDeleteAccount,Change_user_Inform } from './inform_func.js';
import Header from '../../../components/Header/Header.js';
import Modal from './Modal'; // Modal 컴포넌트 import

function InformPage({selectedImage,setSelectedImage}) {
  const navigate = useNavigate();
  const [Nickname, setNickname] = useState('');
  const [Password, setPassword] = useState('');
  const [Passwordcheck, setPasswordcheck] = useState('');
  const [DeleteAccount, setDeleteAccount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가
  //const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const access_Token = localStorage.getItem('access_Token');
    if (!access_Token) {
      //navigate('/Login');
    }
  }, []);

  // 모달 열기 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 모달에서 이미지 선택 처리 함수
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    console.log('선택된 이미지:', imageUrl);
    closeModal(); // 모달 닫기
  };

  return (
    <div className='Inform_body'>
      <Header selectedImage ={selectedImage} setSelectedImage= {setSelectedImage} />
      <div className='Inform_container'>
        <div className="Inform_Page">
          {/* 프로필 이미지 영역 */}
          <div className="Inform_profile-section">
            <img className="Inform_profile-image" src={selectedImage ? selectedImage : 'https://via.placeholder.com/350x350'} />
            <div className="Inform_profile-button-container">
              <button className="Inform_Pic_Btn" onClick={openModal}>프로필 사진 변경</button>
            </div>
          </div>

          {/* 그 외 영역 */}
          <div className="Inform_other-section">
            <div className="Inform_info-container">
              <div className="Inform_info-background">
                <div className="Inform_nickname-section">
                  <div className="Inform_label">닉네임</div>
                  <div className="Inform_input-container">
                    <input
                      type="text"
                      className="Inform_input-background"
                      placeholder="입력해주세요"
                      value={Nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Inform_password-section">
                  <div className="Inform_label">비밀번호</div>
                  <div className="Inform_input-container">
                    <input
                      type="text"
                      className="Inform_input-background"
                      placeholder="입력해주세요"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Inform_confirm-password-section">
                  <div className="Inform_label">비밀번호 확인</div>
                  <div className="Inform_input-container">
                    <input
                      type="password"
                      className="Inform_input-background"
                      placeholder="입력해주세요"
                      value={Passwordcheck}
                      onChange={(e) => setPasswordcheck(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Inform_save-button-container">
                  <button className="Inform_Rectangle12" onClick={Change_user_Inform(Nickname,Password,Passwordcheck)}>저장</button>
                </div>
                <div className="Inform_withdraw-instruction">회원 탈퇴 하시려면 “회원 탈퇴”를 입력해주세요.</div>
                <div className="Inform_confirm-password-section">
                  <div className="Inform_input-container">
                    <input
                      type="text"
                      className="Inform_input-background"
                      placeholder="입력해주세요"
                      value={DeleteAccount}
                      onChange={(e) => setDeleteAccount(e.target.value)}
                    />
                    <div className="Inform_icon-container">
                      <button onClick={() => handleDeleteAccount(DeleteAccount)} className="Inform_Rectangle12">탈퇴</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로필 사진 변경 모달 */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelect={handleImageSelect}
      />
    </div>
  );
}

export default InformPage;

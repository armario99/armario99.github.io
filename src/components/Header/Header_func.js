// 로그아웃 함수
export const logout = async (navigate,url = 'https://salgoo9.site/api/logout') => {
  //쿠키에 Refresh 토큰 담아서 주면됨
  try {
    fetch(url, {
      method: 'POST',
      credentials: 'include'
    })
    .then(async response => {
        // 응답 데이터를 Promise로 반환
        const responseData = await response.json();
        return responseData;
    })
    .then(responseData  => {
      const logout = handleLogoutResponse(responseData,navigate);
      return logout
    });
    
} catch (error) {
    console.error('오류 발생:', error);
}
};

// 로그아웃 응답 처리 함수
const handleLogoutResponse = (responseData,navigate) => {
  const statusCode = responseData.status.code;
  const message = responseData.status.message;
  

  if (statusCode === 200) {
      console.log('로그아웃 성공:', message);

      // 프론트엔드에서 access 토큰 제거
      localStorage.removeItem('accessToken');
      window.location.reload(); // 현재 페이지를 새로고침
      navigate('/login');
      return true;
  } else {
      console.error('로그아웃 실패:', message);
      return false;
  }
};
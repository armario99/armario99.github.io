export const checkAccessTokenValidity = (navigate) => {
    // 로컬 스토리지에서 엑세스 토큰 가져오기
    const accessToken = localStorage.getItem('access_Token');

    // 엑세스 토큰이 없는 경우
    if (!accessToken) {
        console.log('엑세스 토큰이 없습니다.');
        // 여기에서 로그인 페이지로 이동하거나 다른 처리를 할 수 있습니다.
        navigate('/');
        return;
    }
    
    console.log('Access token: ' + accessToken);

    /*
    // 엑세스 토큰이 있는 경우, 서버로 엑세스 토큰을 전송하여 유효성을 확인합니다.
    // 이 부분은 서버에서 엑세스 토큰의 유효성을 확인하는 API를 호출하는 코드로 대체되어야 합니다.
    fetch('http://example.com/validateToken', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (response.ok) {
            // 유효한 엑세스 토큰인 경우, 다음 페이지로 이동하거나 다른 처리를 할 수 있습니다.
            console.log('엑세스 토큰이 유효합니다.');
            // 여기에서 다음 페이지로 이동하는 코드를 추가합니다.
        } else {
            // 유효하지 않은 엑세스 토큰인 경우
            console.log('엑세스 토큰이 유효하지 않습니다.');
            // 여기에서 로그인 페이지로 이동하거나 다른 처리를 할 수 있습니다.
        }
    })
    .catch(error => {
        console.error('엑세스 토큰을 확인하는 동안 오류가 발생했습니다:', error);
        // 오류 처리
    });*/
}
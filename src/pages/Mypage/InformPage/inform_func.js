//회원탈퇴 기능 함수
export const handleDeleteAccount = (DeleteAccount) => {
    if (DeleteAccount !== "회원 탈퇴") {
      alert('회원탈퇴를 입력해주세요');
      return;
    }
    
    /*
    if (user) {
      try {
        await deleteUser(user);
        setSuccess(true);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSuccess(false);
      }
    } else {
      setError("No user is signed in");
    }*/
  };

export const Change_user_Inform = (Nickname,Password,Passwordcheck) =>{
  localStorage.setItem('Nickname', Nickname);
}
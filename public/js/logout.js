const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};
let logOutBtn = document.getElementById('logout')

logOutBtn.addEventListener('click', logout)


let logOutBtnMobile = document.getElementById('logout-mobile')

logOutBtnMobile.addEventListener('click', logout)
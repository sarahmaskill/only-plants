
const newPostBtn = document.getElementById('newPostBtn')
newPostBtn.addEventListener('click', (e) => {
  e.preventDefault()
  createNewPost()
})


const createNewPost = async () => {
  const newPostInput = document.getElementById('newPostInput').value.trim()
  
  const response = await fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({newPostInput}),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Your post request failed');
  }
}


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
console.log(logOutBtn)
logOutBtn.addEventListener('click', logout)
      
     
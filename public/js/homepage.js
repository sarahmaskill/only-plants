const emptyCircle = document.getElementById('emptyCircle')
console.log(emptyCircle)
const rootContainer = document.getElementById('roots')
console.log(rootContainer)



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



const emptyCircle = document.getElementById('emptyCircle')
const todaysForecast = document.getElementById('todaysForecast')
 


//javascript document ready 
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const rootContainer = document.getElementsByClassName('roots')
  

  for(let i = 0; i < rootContainer.length; i++){
    rootContainer[i].addEventListener('click', (e) => {
    rootContainer[i].style.color = 'Green'
    let postId = e.currentTarget.getAttribute('data-id')
    window.location.reload()
    addRoot(postId) 
  })
    const addRoot = async (id) =>{
      await fetch(`/api/post/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
      
      })
      
    }}
  console.log(typeof rootContainer)
    })



const userCity = async () => {
  let response = await fetch('/api/users/profile', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
   response = await response.json()
   retrieveData(response)
}



function retrieveData (response){
  console.log(response.city)
  
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + response.city + "&units=imperial&appid=18c94be380dd6c1b79b8d296cad1794d"
  fetch(url)
  .then(function (response) {
      if (response.ok){
          
          return response.json();
      }
      else {
          alert('Please insert a valid City Name')
      }
  })
  .then(function (data) {
      
      updateHTMLPage(data)
  })}   
function updateHTMLPage(data) {
  
    day1Temp = document.getElementById('day1Temp').innerText = data.list[1].main.temp
    day1Wind = document.getElementById('day1Wind').innerText = data.list[1].wind.speed + 'MPH'
    day1Humidity = document.getElementById('day1Humidity').innerText = data.list[1].main.humidity + '%'
    var iconCode = data.list[0].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode + ".png");
    var iconImage = document.createElement('img')
    iconImage.setAttribute('src', iconUrl)
    iconImage.setAttribute('alt','An icon representative of type of weather for this particular day.')
    todaysForecast.appendChild(iconImage)
    
}


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



userCity()
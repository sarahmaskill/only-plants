

const emptyCircle = document.getElementById('emptyCircle')

const rootContainer = document.querySelectorAll('roots')

const userCity = async () => {
  const response = await fetch('/api/users/profile', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  if(response.ok){
    console.log('It was a good response')
    console.log(response.text())
    
  }else {
    console.log(e)
  }

}


function retrieveData (userPick){
  
  
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + userPick + "&units=imperial&appid=18c94be380dd6c1b79b8d296cad1794d"
  
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
  }
  )
  if(userLocationInput){
      userLocationInput.value = ''
      userLocationInput = ""
  }
}   
function updateHTMLPage(data) {
  dateDay1 = document.getElementById('dateDay1').innerText = moment().add(1, 'days').format('L')
    day1Temp = document.getElementById('day1Temp').innerText = data.list[1].main.temp
    day1Wind = document.getElementById('day1Wind').innerText = data.list[1].wind.speed + 'MPH'
    day1Humidity = document.getElementById('day1Humidity').innerText = data.list[1].main.humidity + '%'
    var iconCode = data.list[0].weather[0].icon
    var iconUrl = ("http://openweathermap.org/img/w/" + iconCode + ".png");
    var iconImage = document.createElement('img')
    iconImage.setAttribute('src', iconUrl)
    iconImage.setAttribute('alt','An icon representative of type of weather for this particular day.')
    weatherIcon1.appendChild(iconImage)
    
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
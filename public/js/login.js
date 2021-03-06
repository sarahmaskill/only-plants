
const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.getElementById('userName-login').value.trim();
  const password = document.getElementById('password-login').value.trim();


  if (userName && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.getElementById('username-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();
  const state = document.getElementById('inputGroupSelect01').value
  const city = document.getElementById('city-registration').value
  console.log(state)
 

  if (userName && email && password && state && city) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password, state, city }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

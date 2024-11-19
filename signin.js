document.getElementById('signup-form').addEventListener('submit', function(event) {//+
  event.preventDefault(); // Prevent form submission//+
//+
  // Read the inputs//+
  let name = document.querySelector('input[type="text"]').value;//+
  let email = document.querySelector('input[type="email"]').value;//+
  let password = document.querySelector('input[type="password"]').value;//+
//+

});//+
// Assuming you have a backend API endpoint for sign-in at '/api/signin'

const data = {
  name: name,
  email: email,
  password: password
};

// Send the data to the Django server
fetch('/your-django-endpoint/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': getCookie('csrftoken') // Include CSRF token for security
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (response.ok) {
    return response.json(); // Parse the JSON response
  }
  throw new Error('Network response was not ok.');
})
.then(data => {
  console.log('Success:', data);
  // Handle success (e.g., show a success message)
})
.catch((error) => {
  console.error('Error:', error);
  // Handle error (e.g., show an error message)
});


// Function to get CSRF token from cookies
function getCookie(name) {
let cookieValue = null;
if (document.cookie && document.cookie !== '') {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if this cookie string begins with the name we want
    if (cookie.substring(0, name.length + 1) === (name + '=')) {
      cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
      break;
    }
  }
}
return cookieValue;
}
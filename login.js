
const mysql = require('mysql');

// Replace with your MySQL connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'investmentdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('mail').value;
  const password = document.getElementById('password').value;

      
  connection.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        alert('Login successful');
        window.open('/buffer.html', '_blank');
      } else {
        alert('Login Failed');
      }
    }
  );
}

   
document.getElementById('btn').addEventListener('click', handleLogin);
document.getElementById('btn').addEventListener('click', handleLogin);


  
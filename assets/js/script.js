document.getElementById('reservationForm').addEventListener('submit', function(event) {
    var product = document.getElementById('product').value;
    var reservationDate = document.getElementById('reservationDate').value;
    var agenda = document.getElementById('agenda').value;

    if (product === '' || reservationDate === '' || agenda.trim() === '') {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
    else{
        alert("You have booked now, please check your account regulary to get notification from admin!")
        window.location.href = 'index.html';
    }
});

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple client-side authentication for demonstration purposes
            if (email === 'email' && password === 'pass') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                document.getElementById('errorMessage').innerText = 'Invalid username or password';
            }
        });
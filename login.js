document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            window.location.href = 'store.html';
        }
    });
});
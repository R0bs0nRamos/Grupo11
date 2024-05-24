//Formulario grupo 11
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simulación de autenticación (aquí puedes agregar lógica de autenticación real)
    if (email === 'grupo11@teste.com' && password === 'grupo11') {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerText = `Login exitoso, ¡Bienvenido ${username}!`;
        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerText = '¡Correo o contraseña incorrectos!';
    }
});

// Complete previamente el formulario si el usuario elige recordar la contraseña
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedEmail && savedPassword) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('email').value = savedEmail;
        document.getElementById('password').value = savedPassword;
        document.getElementById('rememberMe').checked = true;
    }
}


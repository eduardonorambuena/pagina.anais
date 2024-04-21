document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simulación de autenticación
    if (username === 'admin' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página index.html
        window.location.href = 'index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

document.getElementById('clienteBtn').addEventListener('click', function() {
    // Redirigir a la página cliente.html
    window.location.href = 'cliente.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = "Lütfen tüm alanları doldurun!";
        errorMessage.style.display = "block";
        return;
    }

    if (username === "salih" && password === "123") {
        window.location.href = "anasayfa.html";
    } else {
        errorMessage.textContent = "Geçersiz kullanıcı adı veya şifre!";
        errorMessage.style.display = "block";
    }
});

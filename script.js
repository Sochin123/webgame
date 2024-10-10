function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
    }
}
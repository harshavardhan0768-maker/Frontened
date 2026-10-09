// Hardcoded static credentials for demo purposes
const VALID_EMAIL = "admin@example.com";
const VALID_PASSWORD = "password123";

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const errorText = document.getElementById('error-text');
const togglePassword = document.getElementById('toggle-password');

// Toggle Password visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Switch eye icon style
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});

// Handle Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page from reloading

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear old errors
    errorMessage.classList.add('hidden');

    // Simulate basic validation check
    if (email === "" || password === "") {
        showError("Please fill in all fields.");
        return;
    }

    // Static Authentication Check
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        // Success state
        alert("Login successful! Redirecting...");
        // window.location.href = "dashboard.html"; // Redirect to dashboard if you have one
        loginForm.reset();
    } else {
        // Failure state
        showError("Invalid email address or password.");
    }
});

function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
}
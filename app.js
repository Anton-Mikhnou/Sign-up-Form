const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const form =document.querySelector('form'); 
form.addEventListener('submit', function() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('invalid')
        return; 
    } else confirmPassword.classList.remove('invalid')
    this.submit(); 
});
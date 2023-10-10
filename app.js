const form = document.querySelector('form'); 
form.addEventListener('submit', (event) => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    let correctPassword = password.value
    console.log(correctPassword)
    
    if (confirmPassword !== confirmPassword.value) {
        confirmPassword.classList.add('invalid')
        event.preventDefault();
    } else {
        confirmPassword.classList.remove('invalid')
        return
    }
    console.log(confirmPassword.value)

});
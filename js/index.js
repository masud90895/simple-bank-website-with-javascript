document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const inputValue =inputEmail.value;
    
    const inputPassword =document.getElementById('input-password');
    const passwordValue = inputPassword.value;
    if(inputValue === 'masudhossainmbs129@gmail.com' && passwordValue === '123456789'){
        window.location.href ='website.html';
    }
    else{
        alert('Please Input Right Email Or Password')
    }
})
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('senha')
const passwordConfirmation = document.getElementById('password_confimation')


form.addEventListener("submit",(e) =>{
    e.preventDefault()
})
function checkInputs(){
    const usernamevalue = username.value;
    const emailvalue = email.value;
    const passwordvalue = password.value;
    const passwordConfirmationvalue = passwordConfirmation.value;
    if(username === ''){
        setErrorFor(username, "O nome de usuario é obrigatório");
    }

    function setErrorFor(input, message){
        
    }
}
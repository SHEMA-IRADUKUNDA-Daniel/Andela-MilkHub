const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('.button');
const errorMassageEmail = document.querySelector('.error');
const errorMassagePassword = document.querySelector('.error2');


button.addEventListener('click',()=>{
    //email validation

    const emailVal = email.value
    if(!emailVal.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        errorMassageEmail.innerHTML = 'Invalid email address'
        email.style.border = '2px solid red'

        if(emailVal.length == '' || emailVal.length == null){

            errorMassageEmail.innerHTML = 'Email address must be filled'
            email.style.border = '2px solid red'
        }
    }else{
        email.style.border = '2px solid green'
        errorMassageEmail.innerHTML = ''
    }



    // password validation
    if (password.value == '' || password.value == null){
        errorMassagePassword.innerHTML = 'Password can not be empty'
        password.style.border = '2px solid red'

        // const passwordVal = '';
        // if(passwordVal.length<0){
        //     errorMassagePassword.innerHTML = 'Password must be 6 characters'
        // }
    }else{
        errorMassagePassword.innerHTML = ''
        password.style.border = '2px solid green'
        alert ('Login successfully')
    }
})




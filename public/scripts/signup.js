let signupBtn = document.getElementById('signupBtn')
let signUpForm = document.forms['signUpForm']
let errormsg = document.querySelector('.errormsg')

function isValid(str) {
    str = str.replace(/^\s+|\s+$/gm, '')
    if (str === '')
        return false
    return true
}

signupBtn.addEventListener('click', () => {
    errormsg.innerHTML = ""
    errormsg.style.display = "none"
    let username = signUpForm.username.value
    let userName = signUpForm.userName.value
    let password = signUpForm.password.value
    let confirmPassword = signUpForm.confirmPassword.value

    if (isValid(username)) {
        let rx = new RegExp(/^[a-z][a-z0-9_\.]+$/gm)
        if (!rx.test(username)) {
            showErr("Username should begin with lowercase characters and contain only lowercase characters,digits, dot(.) and underscore(_).")
            return;
        }
    }
    else {
        showErr("Please enter username")
        return
    }
    if (isValid(userName)) {
        let rx = new RegExp(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/gm)
        if (!rx.test(userName)) {
            showErr("Name should only consists of letters")
            return;
        }
    }
    else {
        showErr("Please enter Name")
        return
    }
    
    if(password != confirmPassword){
        showErr("Password Mismatch")
        return
    }
    else if(!checkPassword(password)){
        showErr("Minimum Length: 8 characters. Password should contain atleast One Capital Letter, one small letter, one digit, one special character - !@#$%^&*")
        return
    }

    console.log("Success!!")
    signUpForm.submit()
})

function showErr(errmsg) {
    errormsg.innerHTML = errmsg
    errormsg.style.display = "block"
}

function checkPassword(pass){
    let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return reg.test(pass)
}
const name = document.getElementById('userName');
const password = document.getElementById('passWord');
const errorfeild = document.getElementById('error');
const errorDiv = document.getElementById('error-div')
const loginbtn = document.getElementById('login-btn');
const closeIcon =  document.querySelector('i');
const loginDiv  = document.getElementById("LoginDiv");
const SignUpDiv  = document.getElementById("SignUpDiv");


const showSignUpBtn =  document.getElementById("ShowSignUP");
const showLoginBtn = document.getElementById("ShowLogin")

loginbtn.addEventListener('click',() => {
    let errors = [];
    if(name.value == "" || name.value == null){
        errors.push("name is required");
    }
    if(password.value == "" || password.value == null){
        errors.push("password cant be empty")
    }
    

    if(errors.length > 0){
        errorDiv.style.display = "block"
        errorfeild.innerHTML = errors.join(",")
    }
})


closeIcon.addEventListener('click',() =>{
    errorDiv.style.display = "none";
})


showSignUpBtn.addEventListener("click",() =>{
    console.log("LoginShow")
    if(loginDiv.style.display == "block"){
        loginDiv.style.display == "none"
    }
})





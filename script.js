const username = document.querySelector('#userName');
const password = document.querySelector('#passWord');
const email = document.querySelector('#userEmail');
const errorfeild = document.querySelector('#error');
const errorDiv = document.querySelector('#error-div')
const loginbtn = document.querySelector('#login-btn');
const signUpbtn = document.querySelector('#Sign-btn');
const closeIcon =  document.querySelector('i');
const loginDiv  = document.querySelector("#LoginDiv");
const SignUpDiv  = document.querySelector("#SignUpDiv");



const showSignUpBtn =  document.getElementById("ShowSignUP");
const showLoginBtn = document.getElementById("ShowLogin")

loginbtn.addEventListener('click',() => {
    let errors = [];
    if(username.value == "" || username.value == null){
        errors.push("username is required");
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


let containerHeight = document.getElementById("LoginContainerWrapper");
let newHeight = containerHeight.clientHeight + 60
showSignUpBtn.addEventListener("click",() =>{
    if(SignUpDiv.style.display === "none"){
        SignUpDiv.removeAttribute('style')
        loginDiv.style.display = "none";
        containerHeight.style.height = newHeight + "px"
    }else{
        SignUpDiv.style.display = "none"
        loginDiv.style.display = "block"
        
    }
})

showLoginBtn.addEventListener('click',() =>{
    if(loginDiv.style.display === "none"){
        loginDiv.removeAttribute('style')
        SignUpDiv.style.display = "none"
        containerHeight.removeAttribute('style');
    }else{
        loginDiv.style.display = "none"
        SignUpDiv.style.display = "block"
    }
})



//TODO -  Need to add API integration,Need to add proper validations,Need to use AXIOS instead of FETCH OR AJAX.


async function userAdvice(){
    const response = await axios("https://api.adviceslip.com/advice");
    const data = await response.data.slip.advice
    console.log(data);
    adviceTemplate(data)
}



setInterval(()=>{
    userAdvice();
},9000)


function adviceTemplate(innerText){
    let html = document.querySelector(".nav-mid-content");
    html.innerHTML = innerText
}


async function userSignUp(e){
    let signUpUser = document.getElementById("SignuserName").value;
    let signUpEmail = document.getElementById("SignuserEmail").value;
    let signUpPass = document.getElementById("SignpassWord").value;
    console.log(signUpUser,signUpEmail,signUpPass)

    e.preventDefault()
    const response = await axios.post("http://localhost:8000/api/signup",{
        
            username:signUpUser,
            email:signUpEmail,
            password:signUpPass
        
    })

    const data = response.data
    console.log(data);
    if(!data){
        alert("user not register")
    }
    else{
        alert("user register back to login");
    }
}

signUpbtn.addEventListener("click",userSignUp)




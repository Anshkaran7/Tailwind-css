const Container =document.getElementById("container")
const BtnsignUP = document.getElementById("sign-up")
const Login =document.getElementById("log-in")

BtnsignUP.addEventListener("click",()=>{
    Container.classList.add("signup-mode")
})
Login.addEventListener("click",()=>{
    Container.classList.remove("signup-mode")
})
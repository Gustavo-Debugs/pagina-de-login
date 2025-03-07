var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.bntColor')

document.querySelector('#btnSignin').addEventListener('click', () => {
    formSignin.style.left = '0%'
    formSignup.style.left = '100%'
    btnColor.style.left = '0px'
})

document.querySelector('#btnSignup').addEventListener('click', () => {
    formSignin.style.left = '-100%'
    formSignup.style.left = '0%'
    btnColor.style.left = '110px'
})

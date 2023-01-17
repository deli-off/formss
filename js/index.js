let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')
let succesInps = document.querySelectorAll('.box-inp')
let succesCounter = document.querySelector('.counter')
let errorCounter = document.querySelector('.error-counter')
let allInps = document.querySelectorAll('input')

allInps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    phone: /^998[012345789][0-9]{8}$/,
    momsName: /^[a-z ,.'-]+$/i,
    papsName: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,3}$/,
    aboutYou: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    car: /^ [a - z,.'-]+$/i
}



function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}


exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false



    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        inp.nextElementSibling.innerHTML = 'Need to fill';
        inp.nextElementSibling.style.color = 'grey'
        inp.previousElementSibling.style.color = 'blue'
        if (inp.value.length === 0) {
            inp.classList.add('error')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
            inp.nextElementSibling.innerHTML = 'Please enter your email adress';
            inp.nextElementSibling.style.color = 'red'
            inp.previousElementSibling.style.color = 'red'

        }


    })

    if (isError === true) {

    } else {
        onSubmit()
    }
}

function onSubmit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


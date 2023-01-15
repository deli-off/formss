let exampleForm = document.forms.example_form
let errorIcon = document.querySelectorAll('.icon')
let requiredInps = document.querySelectorAll('.required')



exampleForm.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    requiredInps.forEach((inp) => {
        inp.classList.remove('error')
        inp.nextElementSibling.nextElementSibling.classList.remove('error-icon-active')
        inp.nextElementSibling.innerHTML = 'Need to fill';
        inp.nextElementSibling.style.color = 'grey'
        if (inp.value.length === 0) {
            inp.classList.add('error')
            isError = true
            inp.nextElementSibling.nextElementSibling.classList.add('error-icon-active')
            inp.nextElementSibling.innerHTML = 'Please enter your email adress';
            inp.nextElementSibling.style.color = 'red'
        }
    })

    if (isError === true) {

    } else {
        onSubmit()
    }
}x

function onSubmit() {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value

    })

    console.log(user);
}


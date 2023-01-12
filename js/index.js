let exampleForm = document.forms.example_form
let errorIcon = document.querySelector('.icon')

exampleForm.onsubmit = (event) => {
    let user = {}
    let fm = new FormData(exampleForm)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user)
}

function requiredInput() {
    exampleForm.onsubmit = () => {
        const myInpit = document.querySelector('.required')
        myInpit.setAttribute('required', 'required')
        errorIcon.getElementsByClassName.display = 'block'
    }
}
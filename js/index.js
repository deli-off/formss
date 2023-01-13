let exampleForm = document.forms.example_form
let errorIcon = document.querySelector('.icon')

exampleForm.onsubmit = (event) => {
    let user = {}
    let fm = new FormData(exampleForm)
    event.preventDefault()

    fm.forEach((value, key) => {
        user[key] = value
        const myInpit = document.querySelector('.required')
        if (myInpit.value === '') {
            errorIcon.style.display = 'block'
        }
    })

    console.log(user)
}


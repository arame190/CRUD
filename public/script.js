let usName = document.getElementById('usName');
let usSurname = document.getElementById('usSurname');
let usAge = document.getElementById('usAge');
let usPassword = document.getElementById('usPassword');
let usPhoneNumber = document.getElementById('usPhoneNumber');
let usEmail = document.getElementById('usEmail');

function getVal() {
    fetch("/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: usName.value, Surname: usSurname.value, Age: usAge.value, password: usPassword.value,PhoneNumber: usPhoneNumber.value, email: usEmail.value})
    })

}

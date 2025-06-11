const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
})

function setError(element, message) {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error");

    displayError.innerHTML = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const displayError = inputControl.querySelector(".error");

    displayError.innerHTML = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}


function validateInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
   

    if(nameValue === ""){
        setError(name, "Name is required");
    }
    else {
        setSuccess(name);
    }

    if(emailValue === ""){
        setError(email, "Email is required");
    }
    else {
        setSuccess(email);
    }

    if(contactValue === ""){
        setError(contact, "Contact is required");
    }
    else {
        setSuccess(contact);
    }

}
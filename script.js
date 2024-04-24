const email = document.querySelector("#email")
const country = document.querySelector("#country")
const postcode = document.querySelector("#postcode")
const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")
const form = document.querySelector("form")

const emailError = document.querySelector("#email + span.error")
const countryError = document.querySelector("#country + span.error")
const postcodeError = document.querySelector("#postcode + span.error")
const passwordError = document.querySelector("#password + span.error")
const passwordConfirmError = document.querySelector("#password-confirm + span.error")

email.addEventListener("input",  (e) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error"
    } else {
        showEmailError()
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is required"
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email"
    }
    emailError.className = "error active"
}

country.addEventListener("input",  (e) => {
    if (country.validity.valid) {
        countryError.textContent = "";
        countryError.className = "error"
    } else {
        showCountryError()
    }
})

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = "Country is required"
    } else if (country.validity.tooLong) {
        countryError.textContent = "Please enter a valid country"
    }
    countryError.className = "error active"
}

postcode.addEventListener("input", (e) => {
    if (postcode.validity.valid) {
        postcodeError.textContent = "";
        postcodeError.className = "error";
    } else {
        showPostcodeError();
    }
});

function showPostcodeError() {
    if (postcode.validity.valueMissing) {
        postcodeError.textContent = "Postcode is required";
    } else if (postcode.validity.patternMismatch) {
        postcodeError.textContent = "Postcode format invalid";
    }
    postcodeError.className = "error active";
}

password.addEventListener("input", (e) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        showPasswordError();
    }
});

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password is required";
    }
    passwordError.className = "error active";
}

passwordConfirm.addEventListener("input", (e) => {
    if (passwordConfirm.validity.valid && passwordConfirm.value === password.value) {
        passwordConfirmError.textContent = "";
        passwordConfirmError.className = "error";
    } else {
        showPasswordConfirmError();
    }
});

function showPasswordConfirmError() {
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "Please confirm your password";
    } else if (passwordConfirm.value != password.value) {
        passwordConfirmError.textContent = "Passwords do not match";
    }
    passwordConfirmError.className = "error active";
}

function showErrors() {
    if (!email.validity.valid) {
        showEmailError()
    }
    if (!country.validity.valid) {
        showCountryError()
    }
    if (!postcode.validity.valid) {
        showPostcodeError()
    }
    if (!password.validity.valid) {
        showPasswordError()
    }
    if (!password.validity.valid || passwordConfirm.value != password.value) {
        showPasswordConfirmError()
    }
}

form.addEventListener("submit", (e) => {
    if (!email.validity.valid ||
        !country.validity.valid ||
        !postcode.validity.valid ||
        !password.validity.valid ||
        !password.validity.valid ||
        passwordConfirm.value != password.value
    )
    showErrors()
    e.preventDefault()
})
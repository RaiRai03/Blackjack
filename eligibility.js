const signUpButton = document.querySelector("#btn-sign-up");
signUpButton.addEventListener('click', validate);

function validate() {
    const elements = {
        fullName: document.querySelector("#full-name-input"),
        username: document.querySelector("#username-input"),
        age: document.querySelector("#age-input"),
        birthDate: document.querySelector("#birth-date-input"),
        password: document.querySelector("#password-input"),
        confirmPassword: document.querySelector("#confirm-password-input"),
        legalCheckbox: document.querySelector("#legal-checkbox"),
        termsCheckbox: document.querySelector("#terms-checkbox")
    };

    console.log(`Full Name: ${elements.fullName.value}`);
    console.log(`Username: ${elements.username.value}`);
    console.log(`Age: ${elements.age.value}`);
    console.log(`Birth Date: ${elements.birthDate.value}`);
    console.log(`Enter Password: ${elements.password.value}`);
    console.log(`Confirm Password: ${elements.confirmPassword.value}`);

    if (elements.legalCheckbox.checked) {
        console.log("The user has checked the legal checkbox");
    } else {
        console.log("The user has not checked the legal checkbox");
    }

    if (elements.termsCheckbox.checked) {
        console.log("The user has checked the terms checkbox");
    } else {
        console.log("The user has not checked the terms checkbox");
    }

    if (
        elements.password.value === elements.confirmPassword.value &&
        parseInt(elements.age.value, 10) >= 13 &&
        elements.legalCheckbox.checked &&
        elements.termsCheckbox.checked &&
        elements.fullName.value &&
        elements.username.value &&
        elements.age.value &&
        elements.birthDate.value &&
        elements.password.value &&
        elements.confirmPassword.value
    ) {
        console.log("The user is eligible");
    } else {
        console.log("The user is ineligible");
    }
}

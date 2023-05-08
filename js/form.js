const dataCode = document.getElementById("form__country").addEventListener("change", function (e) {
  document.getElementById("form__code").value = this.querySelector('option[value="' + this.value + '"]').dataset.code;
});

const form = document.querySelector(".main__form");
const formName = form.querySelector("#form__name");
const formSecondname = form.querySelector("#form__secondname");
const formEmail = form.querySelector("#form__email");
const formPassword = form.querySelector("#form__password");
const formCountry = form.querySelector("#form__country");
const formPhone = form.querySelector("#form__phone");
const formPhoneCode = form.querySelector("#form__code");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const formNameArrayError = [
  `This field is required`,
  `Name must be more than 2 characters`,
  `You can't use special characters (^@()_#*+/ \“?!=.{}~\`&) and spaces`,
  `Name must not be more than 25 characters`,
];
formName.addEventListener("input", function () {
  let minCharacters = 3;
  let maxCharacters = 25;

  checkLengthRegx(formName, formNameArrayError, minCharacters, maxCharacters);
});

const formSecondnameArrayError = [
  `This field is required`,
  `Second name must be more than 2 characters`,
  `You can't use special characters (^@()_#*+/ \“?!=.{}~\`&) and spaces`,
  `Second name must not be more than 25 characters`,
];
formSecondname.addEventListener("input", function () {
  let minCharacters = 3;
  let maxCharacters = 25;
  checkLengthRegx(formSecondname, formSecondnameArrayError, minCharacters, maxCharacters);
});
const formEmailArrayError = [
  `This field is required`,
  `Email address must be more than 1 characters`,
  `"@" - Email address must be a valid`,
  `You can't use special characters (^@()_#*+/ \“?!=.{}~\`&) and spaces`,
];

formEmail.addEventListener("input", function () {
  let format = /@/;
  if (formEmail.value.length < 2) {
    addClassInvalid(formEmail);
    addErrorMessage(formEmail, formEmailArrayError[1]);
  }

  if (format.test(formEmail.value)) {
    addClassValid(formEmail);
    removeErrorMessage(formEmail);
  } else {
    addClassInvalid(formEmail);
    addErrorMessage(formEmail, formEmailArrayError[2]);
  }
});

const formPasswordArrayError = [

  `This field is required`,

  `Password must be more than 8 characters`,

  `You can't use special characters (^@()_#*+/ \“?!=.{}~\`&) and spaces`,

  `Password must not be more than 12 characters`,

  `Small letters are obligatory`,

  `Capital letters are mandatory`,

  `Numbers are mandatory`,

  `The password must be in English only`,

];
formPassword.addEventListener("input", function () {

  let minCharacters = 8;

  let maxCharacters = 12;

  checkLengthRegx(formPassword, formPasswordArrayError, minCharacters, maxCharacters);

  if (/^[a-zA-Z0-9А-Яа-я]+$/.test(formPassword.value)) {

    if (!formPassword.value.match(/[a-zа-я]+/)) {

      addClassInvalid(formPassword);

      addErrorMessage(formPassword, formPasswordArrayError[4]);

    }

    if (!formPassword.value.match(/[A-ZА-Я]+/)) {

      addClassInvalid(formPassword);

      addErrorMessage(formPassword, formPasswordArrayError[5]);

    }

    if (!formPassword.value.match(/[0-9]+/)) {

      addClassInvalid(formPassword);

      addErrorMessage(formPassword, formPasswordArrayError[6]);

    }

  } else {

    addClassInvalid(formPassword);

    addErrorMessage(formPassword, formPasswordArrayError[7]);

  }

});

const formCountryArrayError = [`Please select your country`];

formCountry.addEventListener("change", function () {
  if (formCountry.value === 0) {
    addClassInvalid(formCountry);
  } else {
    addClassValid(formCountry);
  }
});

const formPhoneArrayError = [
  `This field is required`,
  `Number must be more than 7 characters`,
  `You can't use special characters (^@()_#*+/ \“?!=.{}~\`&) and spaces`,
  `Number must not be more than 11 characters`,
];
formPhone.addEventListener("input", function () {

  formPhone.value = formPhone.value.replace(/\D/g, "");
  let minCharacters = 7;
  let maxCharacters = 11;
  checkLengthRegx(formPhone, formPhoneArrayError, minCharacters, maxCharacters);
});

// var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
function checkLengthRegx(input, arrayNumError, minCharacters, maxCharacters = 100) {
  if (input.value.length >= minCharacters) {
    // valid
    addClassValid(input);
  } else {
    addClassInvalid(input);
    addErrorMessage(input, arrayNumError[1]);
  }
  if (input.value.length > maxCharacters) {
    addClassInvalid(input);
    addErrorMessage(input, arrayNumError[3]);
  }
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (format.test(input.value)) {
    addClassInvalid(input);
    addErrorMessage(input, arrayNumError[2]);
  }
}

function addClassValid(input) {
  if (input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }
  removeErrorMessage(input);
  input.classList.add("valid");
}
function addClassInvalid(input) {
  if (input.classList.contains("valid")) {
    input.classList.remove("valid");
  }
  input.classList.add("invalid");
}

function addErrorMessage(input, message) {
  removeErrorMessage(input);
  const errorElem = document.createElement("p");
  errorElem.classList.add("invalid-text");
  errorElem.textContent = message;
  let parentInput = input.parentNode;
  if (parentInput.classList.contains("form__input")) {
  } else {
    parentInput = parentInput.parentNode;
  }
  parentInput.append(errorElem);
}
function removeErrorMessage(input) {
  let parentInput = input.parentNode;
  if (parentInput.classList.contains("form__input")) {
  } else {
    parentInput = parentInput.parentNode;
  }
  const errorMessage = parentInput.querySelector(".invalid-text");

  if (errorMessage) {
    errorMessage.remove();
  }
}

function checkBlankField(input, arrayNumError) {
  if (input.value.length <= 0) {
    addClassInvalid(input);
    addErrorMessage(input, arrayNumError);
  }
}
function checkEmailInput(inputEmail, arrayNumError) {
  let format = /@/;
  if (!format.test(inputEmail.value)) {
    addClassInvalid(inputEmail);
    addErrorMessage(inputEmail, arrayNumError);
  }
}
function checkCountry(input, arrayNumError) {
  if (input.value == 0) {
    addClassInvalid(input);
    addErrorMessage(input, arrayNumError);
  }
}

function openModal(modal) {
  modal.classList.add("active");
}
function closeModal(modal) {
  modal.classList.remove("active");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formSend(form);
});

async function formSend(form) {
  checkBlankField(formName, formNameArrayError[0]);
  checkBlankField(formSecondname, formSecondnameArrayError[0]);
  checkBlankField(formPassword, formPasswordArrayError[0]);
  checkBlankField(formPhone, formPhoneArrayError[0]);
  checkBlankField(formEmail, formEmailArrayError[0]);
  checkEmailInput(formEmail, formEmailArrayError[0]);
  checkCountry(formCountry, formCountryArrayError[0]);
  // error validate
  let errorCount = form.querySelectorAll(".invalid").length;
  let formData = new FormData(form);
  let contryForm = formCountry.querySelector(`[value="${formCountry.value}"]`).textContent;

  let phone = `${formPhoneCode.value}${formPhone.value}`;

  formData.append("phone", phone);
  formData.append("сountry", contryForm);
  if (errorCount === 0) {
    fetch("send.php", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      let result = await response.json();

      if (!response.ok) {
        throw new Error("Error message not sent!");
      }

      if (result.result == "success") {
        form.reset();
        const rempveClassValid = form.querySelectorAll(".valid");
        rempveClassValid.forEach((item) => {
          item.classList.remove("valid");
        });
        openModal(modal);
        openModal(overlay);
        setTimeout(() => {
          closeModal(modal);
          closeModal(overlay);
        }, 3000);
      }
      if (result.result == "error") {
        alert("Ошибка");
      }
    });
  }
}

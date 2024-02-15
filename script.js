let inp = document.querySelector("#input-email");
let inp2 = document.querySelector("#input-username");
let inp3 = document.querySelector("#input-number");

let error = document.querySelector(".submit");

let arr = [".com", ".ru", ".uz"];



function email() {
    if (!inp.value.includes("@")) {
      error.innerHTML = "Email must contain @ symbol";
      error.style.border = "2px solid red";


    } else {
      let domen = inp.value.trim();
      let pravilniy = false;

      for (let i = 0; i < arr.length; i++) {
        if (domen.endsWith(arr[i])) {
          pravilniy = true;
        }
      }
      if (!pravilniy) {
        error.innerHTML = "Invalid kabachok ";
        error.style.border = "2px solid red";
      } else {
        error.textContent = "Login";
        error.style.border = "none";
      }
    }
  }

  function validateUsername() {
    let username = inp2.value.trim();
    if (username.length < 2 || username.length > 20) {
        error.innerHTML = "Username is not correct";
        error.style.border = "2px solid red";
    } else {
        error.innerHTML = "Login";
        error.style.border = "none";
    }
}

function validateNumber() {
    let phoneNumber = inp3.value.trim();
    if (!phoneNumber.startsWith("+998") || phoneNumber.length == 13) {
        error.innerHTML = "Kabachok govorit chto nomer invalid";
        error.style.border = "2px solid red";
    } else {
        error.textContent = "Login";
        error.style.border = "none";
    }
}

inp.onfocus = () => {
  console.log("focus");
};

inp.onblur = () => {
  email();
};
inp2.onblur = () => {
  validateUsername();
};
inp3.onblur = () => {
  validateNumber();
};

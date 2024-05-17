// Image swapping logic
let mainImage = document.getElementById("mainImage");
let smallImgOne = document.getElementById("smallImgOne");
let smallImgTwo = document.getElementById("smallImgTwo");
let smallImgThree = document.getElementById("smallImgThree");
let smallImgFour = document.getElementById("smallImgFour");

smallImgOne.addEventListener("click", () => {
  ChangeImage(smallImgOne);
});
smallImgTwo.addEventListener("click", () => {
  ChangeImage(smallImgTwo);
});
smallImgThree.addEventListener("click", () => {
  ChangeImage(smallImgThree);
});
smallImgFour.addEventListener("click", () => {
  ChangeImage(smallImgFour);
});

function ChangeImage(smallImageRecived) {
  let bigImageUrl = mainImage.src;
  mainImage.src = smallImageRecived.src;
  smallImageRecived.src = bigImageUrl;
}

const myUserNameElement = document.getElementById("name");
const myUserEmailElement = document.getElementById("email");
const myNumberElement = document.getElementById("tlf");
const myPostcodeElement = document.getElementById("postCode");
const myAddressElement = document.getElementById("address");

const submitButton = document.getElementById("submitButton");

let isUsernameValid = false;
let isEmailValid = false;
let isNumberValid = false;
let isAddressValid = false;
let isPostCodeValid = false;

submitButton.disabled = true;

myUserNameElement.addEventListener("keyup", (e) => {
  let username = myUserNameElement.value;
  let usernameRegEx = /^[\w\d.-]{4,12}$/;
  isUsernameValid = usernameRegEx.test(username);

  if (isUsernameValid) {
    myUserNameElement.style.border = "2px solid green";
    console.log("valid username");
  } else {
    myUserNameElement.style.border = "2px solid orange";
    console.log("invalid username");
    const wrongUsername = document.getElementById("labelUsername");
    wrongUsername.innerText = "Username: needs to be 4 to 12 characters long";
  }
  validateForm();
});

myUserEmailElement.addEventListener("keyup", (e) => {
  let email = myUserEmailElement.value;
  let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  isEmailValid = emailRegEx.test(email);

  if (isEmailValid) {
    myUserEmailElement.style.border = "1px solid green";
    console.log("valid email");
  } else {
    myUserEmailElement.style.border = "1px solid red";
    console.log("invalid email");
    const wrongEmail = document.getElementById("labelEmail");
    wrongEmail.innerText = "Email: needs to be a valid email";
  }
  validateForm();
});

myNumberElement.addEventListener("keyup", (e) => {
  let number = myNumberElement.value;
  let numberRegex = /^[0-9]{8}$/;

  isNumberValid = numberRegex.test(number);
  if (isNumberValid) {
    myNumberElement.style.border = "1px solid green";
    console.log("valid number: " + number);
  } else {
    myNumberElement.style.border = "1px solid red";
    console.log("invalid number");
    const wrongNumber = document.getElementById("labelTlf");
    wrongNumber.innerText = "Number: needs to be a valid 8-digit number";
  }
  validateForm();
});

myAddressElement.addEventListener("keyup", (e) => {
  let address = myAddressElement.value;
  let addressRegex = /^[a-zA-Z\s]{4,}$/;

  isAddressValid = addressRegex.test(address);
  if (isAddressValid) {
    myAddressElement.style.border = "1px solid green";
    console.log("valid address: " + address);
  } else {
    myAddressElement.style.border = "1px solid red";
    console.log("invalid address");
    const wrongAddress = document.getElementById("labelAddress");
    wrongAddress.innerText = "Address: needs to be at least 4 characters long";
  }
  validateForm();
});

myPostcodeElement.addEventListener("keyup", (e) => {
  let postCode = myPostcodeElement.value;
  let postCodeRegex = /^[0-9]{4}$/;

  isPostCodeValid = postCodeRegex.test(postCode);
  if (isPostCodeValid) {
    myPostcodeElement.style.border = "1px solid green";
    console.log("valid postnummer: " + postCode);
  } else {
    myPostcodeElement.style.border = "1px solid red";
    console.log("invalid postnummer");
    const wrongPostCode = document.getElementById("labelPostCode");
    wrongPostCode.innerText = "Postnummer: needs to be at least 4 long";
  }
  validateForm()
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted successfully!");
});

function validateForm() {
  console.log(isUsernameValid, isNumberValid, isEmailValid, isAddressValid, isPostCodeValid);
  if (isUsernameValid && isNumberValid && isEmailValid && isAddressValid && isPostCodeValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}


const cookieSubmit = document.getElementById("cookieSubmit");
cookieSubmit.addEventListener("click", (e) => {
  let cookiePolicy = document.getElementById("cookiePolicy");
  cookiePolicy.style.top = "-1000px"
})
// User data
const userName = ("Bella");
const passWord = ("qwe123");
// DOM elements
const inputUserName = document.getElementById("inputUserName");
const inputPassWord = document.getElementById("inputPassWord");
let inputBtn = document.getElementById("inputBtn");
let setTag = document.querySelector(".set");
let loggOutBtn = document.createElement("button");
let backBtn = document.createElement("button");
// Check if user is already logged in
window.addEventListener("load", function () {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername === userName && storedPassword === passWord) {
        createLoggOutBtn();
        welcomeInput();
        clearLoggInBtn();
    }
});
// Event listener for the login button click
inputBtn.addEventListener("click", function(){
    if(userName === inputUserName.value && passWord === inputPassWord.value){
        localStorage.setItem("username", inputUserName.value);
        localStorage.setItem("password", inputPassWord.value);
        createLoggOutBtn();
        welcomeInput();
        clearLoggInBtn();
    } 
    else {
        createBackBtn();
        errorMassageInput();
        clearLoggInBtn()
    } 
});
// Functions
function welcomeInput() {
    let divNametag = document.createElement("div");
    let divNametagText = document.createTextNode(" Välkommen, du är nu inloggad");
    divNametag.appendChild(divNametagText);
    setTag.appendChild(divNametag);
}

function errorMassageInput() {
    let divNametag = document.createElement("div");
    let divNametagText = document.createTextNode(" Nu blev det fel! Tryck på tillbaka och försök igen");
    divNametag.appendChild(divNametagText);
    setTag.appendChild(divNametag);
}

function createLoggOutBtn()  {
    let loggOutBtnText = document.createTextNode("Logga ut");
    loggOutBtn.appendChild(loggOutBtnText);
    setTag.appendChild(loggOutBtn);
}

function createBackBtn()  {
    let backBtnText = document.createTextNode("Tillbaka");
    backBtn.appendChild(backBtnText);
    setTag.appendChild(backBtn);
}

function clearScreen() {
    document.body.innerHTML = " ";
    location.reload();
}
// Function to clear the input fields when logged in
function clearInputFields() {
    const inputUserName = document.getElementById("inputUserName");
    const inputPassWord = document.getElementById("inputPassWord");
    
    if (inputUserName && inputPassWord) {
        inputUserName.value = "";
        inputPassWord.value = "";
    }
}
// Function to clear the login button and input fields
function clearLoggInBtn(){
    document.querySelector("#inputBtn").remove();
    clearInputFields();
}
// Event listener for the Log Out button click
loggOutBtn.addEventListener("click", function(){
    localStorage.clear();
    clearScreen();
})
// Event listener for the Back button click
backBtn.addEventListener("click",function(){
    clearScreen();
})

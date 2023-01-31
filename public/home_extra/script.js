//Tube Time Menu
document.getElementById("tube-time-heading").addEventListener("click", function(){
    var dropdown = document.getElementById("tube-time-dropdown");
    dropdown.style.display = "block";
});

const closeButtonTT = document.getElementById("close-button-tube-time");
const dropdownTT = document.getElementById("tube-time-dropdown");

closeButtonTT.addEventListener("click", () => {
    dropdownTT.style.display = "none";
});

//Server Side 
document.getElementById("server-side-heading").addEventListener("click", function(){
    var dropdown = document.getElementById("server-side-dropdown");
    dropdown.style.display = "block";
});

const closeButtonSS = document.getElementById("close-button-server-side");
const dropdownSS = document.getElementById("server-side-dropdown");

closeButtonSS.addEventListener("click", () => {
    dropdownSS.style.display = "none";
});

//Python
document.getElementById("python-download-heading").addEventListener("click", function(){
    var dropdown = document.getElementById("python-download-dropdown");
    dropdown.style.display = "block";
});

const closeButtonPY = document.getElementById("close-button-python-download");
const dropdownPY = document.getElementById("python-download-dropdown");

closeButtonPY.addEventListener("click", () => {
    dropdownPY.style.display = "none";
});


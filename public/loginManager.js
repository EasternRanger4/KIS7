function LGMv1() {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log("User is logged in with details:", userDetails);
        const toDisplay = `<span id="acc-heading" onclick="userAccount()"> <i class="fa-regular fa-user"></i> </span>
        <div id="acc-dropdown" class="dropdown-content">
                <button class="close-button" id="close-button-acc">X</button>
                <a href="#">Account</a>
                <a href="#">Setings</a>
                <span id="spanhead" onclick="logout()"><a href="#">Logout</a></span>
              </div>
              `
        document.getElementById("login").innerHTML= toDisplay;
    } else {
        console.log("User is not logged in");
        const toDisplay0 = `<a href="login.html"><span id="login">Login</span></a> `
        document.getElementById("login").innerHTML = toDisplay0;
    }
};

function userAcccount() {
    const menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.top = "50%";
    menu.style.left = "50%";
    menu.style.transform = "translate(-50%, -50%)";
    menu.style.backgroundColor = "white";
    menu.style.padding = "20px";
    menu.innerHTML = `
      <p>Your account information</p>
      <button onclick="closeMenu()">Close</button>
    `;
    document.body.appendChild(menu);
  }
  
  function closeMenu() {
    const menu = document.querySelector("div");
    menu.remove();
}

function userAccount() {
    document.getElementById("acc-heading").addEventListener("click", function(){
        var dropdown = document.getElementById("acc-dropdown");
        dropdown.style.display = "block";
    });
    
    const closeButtonSS = document.getElementById("close-button-acc");
    const dropdownSS = document.getElementById("acc-dropdown");
    
    closeButtonSS.addEventListener("click", () => {
        dropdownSS.style.display = "none";
    });
}

function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userDetails");
    location.reload();
}

  
LGMv1();

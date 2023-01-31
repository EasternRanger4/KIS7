async function onStart() {
    const ip = await getClientIp();
    const response = await fetch("/pageProtocall", {
      method: "POST",
      headers: {
        "Content-Type": "application/json ",
      },
      body: JSON.stringify({
        ip: ip,
      }),
    });
    const data = await response.json();
    console.log(data);
}
//<img src="https://via.placeholder.com/40x40" alt="User Avatar">

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify({
      username: username,
      password: password
    }),
  });
  const data = await response.json();
  console.log(data);
  if (data.message == true) {
    const userDetails = {
      fname: data.user.more.firstname,
      sname: data.user.more.secondname,
      sname: data.user.username
    };
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    LGMv1();
  } else if (data.message == false) {
    alert("Passowrd or username inccorect");
  }
  
}
const loginUser = async (event) => {
  event.preventDefault();
  console.log("runs function");

  const userEmail = document.querySelector("#userEmail").value.trim();
  const userPassword = document.querySelector("#userPassword").value.trim();
  console.log(userEmail + userPassword);

  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Login attempt failed, please try again");
  }
};

document.querySelector("#login-btn").addEventListener("click", loginUser);

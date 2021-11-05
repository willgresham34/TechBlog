const loginUser = async (event) => {
  event.preventDefault();

  const existingEmail = document.querySelector("#userEmail");
  const existingPassword = document.querySelector("#userPassword");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email: existingEmail.value,
      password: existingPassword.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Login attempt failed, please try again");
  }
};

document.querySelector("#login-form").addEventListener("submit", loginUser);

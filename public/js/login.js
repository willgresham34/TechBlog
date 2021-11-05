const loginUser = async (event) => {
  event.preventDefault();

  const existingEmail = document.querySelector("#userEmail").value.trim();
  const existingPassword = document.querySelector("#userPassword").value.trim();

  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: existingEmail,
      password: existingPassword,
    }),
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Login attempt failed, please try again");
  }
};

document.querySelector("#login-form").addEventListener("click", loginUser);

const signUpUser = async (event) => {
  event.preventDefault();

  const userEmail = document.querySelector("#userEmail");
  const username = document.querySelector("#username");
  const userPassword = document.querySelector("#userPassword");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      email: userEmail.value,
      username: username.value,
      password: userPassword.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    fetch(`api/user/email/${userEmail.value}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    document.location.replace("/homepage");
  } else {
    alert("Sign up failed");
  }
};

document.querySelector("#signup-form").addEventListener("submit", signUpUser);

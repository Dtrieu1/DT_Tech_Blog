const loginFormHandler = async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector("#email-login").value.trim();
    const passwordInput = document.querySelector("#password-login").value.trim();
  
    if (emailInput && passwordInput) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ emailInput, passwordInput }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in");
      }

    }
};

document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
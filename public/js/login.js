const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
  
    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password}),
        logged_in: req.session.logged_in,
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/submit");
      } else {
        alert("Failed to log in");
      }

    }
};

document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

    //Can not figure out login process
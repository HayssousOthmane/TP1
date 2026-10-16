document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("username");
    const password = document.getElementById("password");

    const message = document.getElementById("message");

    if (email.value.trim() !== "" && password.value.trim() !== "") {
        message.style.color = "green";
        message.textContent = "Formulaire envoyé !";
    } else {
        message.style.color = "red";
        message.textContent = "Veuillez saisir un nom d'utilisateur et un mot de passe.";
    }
});
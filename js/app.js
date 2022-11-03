function sendEmail() {
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'kasongodan24@gmail.com',
        From : entreprise.value,
        Subject : objet.value,
        Body : message.value
    }).then(
        message => alert(message)
    );
}
let send = document.getElementById("send");
send.addEventListener("click", () => {
    sendEmail();
});
let nom = document.getElementById("nom");
let objet = document.getElementById("objet");
let message = document.getElementById("message");
let entreprise = document.getElementById("entreprise");
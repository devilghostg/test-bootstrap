// console.log("je suis premier");

// let mess = document.getElementById("message");
// let btn = document.getElementById("btn")

// mess.addEventListener("input", function() {
//     btn.innerHTML = mess.value;
// });


// let div = document.getElementsByClassName("col1");
// let students = ['lou', 'Jeremy', 'Dorian', 'Jerome'];
// let i;

// for(i = 0; i < students.length; i++) {
//     div[i].innerHTML = students[i];
// }


const password = document.getElementById("inputPassword3");
const confirmPassword = document.getElementById("inputPasswordConfirmation");
const infoMessage = document.getElementById("info");
const btn = document.getElementById("btn");
const form = document.getElementById("form")
const input = document.querySelector("input")


confirmPassword.addEventListener("input", function() {

    if (password.value.trim() === "" || confirmPassword.value.trim() === "") {
        infoMessage.textContent = ""; 
        btn.setAttribute("disabled", "true"); 
    } else if (password.value.trim() === confirmPassword.value.trim()) {
        infoMessage.textContent = "Les mots de passe correspondent";
        infoMessage.className = "text-success";
        btn.removeAttribute("disabled"); 
    } else {
        infoMessage.textContent = "Les mots de passe ne correspondent pas";
        infoMessage.className = "text-danger";
        btn.setAttribute("disabled", "true"); 
    }
});
form.addEventListener('submit', function(event) {
    input.value = input.value.replace(/\s+/g, ''); 
});

password.addEventListener("input", function() {

    confirmPassword.dispatchEvent(new Event('input'));
});
let message = "";
let lowerCaseRegex = /^(?:\s*[a-z]+\s*)?$/;

function encrypt() {
<<<<<<< HEAD
    message = document.getElementById('input-mensaje').value.trim();
=======
    message = document.getElementById('input-mensaje').value;
    console.log(lowerCaseRegex.test(message));
>>>>>>> development
    /*
    Create an if else or something related to verify the regex or display an alert
    */
};
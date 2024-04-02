//Variables
let message = "";
let lowerCaseRegex = /^(?:\s*[a-z]+\s*)?$/;
const encryptButton = document.getElementById('encriptar');
const decryptButton = document.getElementById('desencriptar');

//Event listeners
encryptButton.addEventListener('click', verifyInput.bind(null, 'encrypt'));
decryptButton.addEventListener('click', verifyInput.bind(null, 'decrypt'));

//Functions
    //This is the function called when the encrypt or decrypt buttons are clicked
function verifyInput(action) {

    message = document.getElementById('input-mensaje').value;

    if (lowerCaseRegex.test(message)) { // After checking the validity of the message, it will return the result of another function depending on what action the user chose 
        if (action === 'encrypt') {
            return encrypt(message);
        } else if (action === 'decrypt') {
            return decrypt(message);
        };
    };

    return false; /*Aqui cambiar a uno alerta o alga asi yo k c */
};

    //function used to encrypt the user's message
function encrypt(message) {
    const messageArray = message.split(''); //make a copy of the original message
    console.log(messageArray);

    const encryptedMessage = messageArray.reduce((accumulator, currentValue) => {
        switch (currentValue) {
            case 'a':
                return accumulator.concat('ai');
            case 'e':
                return accumulator.concat('enter');
            case 'i':
                return accumulator.concat('imes');
            case 'o':
                return accumulator.concat('ober');
            case 'u':
                return accumulator.concat('ufat');
            default:
                return accumulator.concat(currentValue);
            };
    }, '');

    return encryptedMessage;
};

    //function used to decrypt the user's message
function decrypt(message) {
    console.log('desencriptar!');
};
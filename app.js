//Variables
let message = "";
const encryptButton = document.getElementById('encriptar');
const decryptButton = document.getElementById('desencriptar');

//Event listeners
encryptButton.addEventListener('click', verifyInput.bind(null, 'encrypt'));
decryptButton.addEventListener('click', verifyInput.bind(null, 'decrypt'));

//Functions
//this is the function called when the encrypt or decrypt buttons are clicked
function verifyInput(action) {
    //variables
    let lowerCaseRegex = /^[a-z\s.,!?]+$/;
    message = document.getElementById('input-mensaje').value;

    //function's body
    if (lowerCaseRegex.test(message)) { // After checking the validity of the message, it will return the result of another function depending on what action the user chose

        const processedMessage = action === 'encrypt'
            ? encrypt(message)
            : decrypt(message);
        modifyDisplay(processedMessage);
        
    };

    return false; /*Aqui cambiar a uno alerta o alga asi yo k c */
};

function modifyDisplay(message) {
    //variables
    const ilustration = document.getElementById('muñeco-alura');
    const defaultOutput = document.getElementById('output-default');
    const processedOutput = document.getElementById('output-procesado');
    const copyOutputButton = document.getElementById('copiar-output');

    //function's body
    ilustration.style.display = 'none';
    defaultOutput.style.display = 'none';
    processedOutput.style.display = 'block';
    processedOutput.value = message;
    copyOutputButton.style.display = 'block';

}

//function used to encrypt the user's message
function encrypt(message) {
    //variables
    const messageToEncrypt = message.split(''); //split the message letter by letter and store it in an array

    //function's body
    const encryptedMessage = messageToEncrypt.reduce((accumulator, currentLetter) => { //reduce method applied to the unencrypted message, it finds the target letters and returns their encrypted equivalent
        switch (currentLetter) {
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
                return accumulator.concat(currentLetter);
            };
    }, '');

    console.log(encryptedMessage);
    return encryptedMessage;
};

//function used to decrypt the user's message
function decrypt(message) {
    //variables
    let encryptedStringRegex = /ai|enter|imes|ober|ufat/g
    const messageToDecrypt = message.slice(''); //make a copy of the original message
    const stringsToDecrypt = { //A dictionory with its keys set to the encrypted strings, and its values to the decrypted equivalent
        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    };

    //function's body
    const decryptedMessage = messageToDecrypt.replace(encryptedStringRegex, (match) => stringsToDecrypt[match]); //a variable in which we store the value returned of the replace method run into the encrytped message
    console.log(decryptedMessage);
    return decryptedMessage;
};
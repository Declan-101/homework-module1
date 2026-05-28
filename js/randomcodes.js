/* ------ RANDOM CODES ------ */

//Function to generate combination of characters
function generateCode() {

    //Create variables
    var code = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$";

    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {

        var char = Math.random() * str.length;

        code += str.charAt(char);
    }

    return code;
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {

    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();
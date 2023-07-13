// Change

var btnClick = document.querySelector('.btnClick');
var btnReset = document.querySelector('.btnReset');
var body = document.querySelector('#main');
var mainClick = document.querySelector('.main__click');

body.style.backgroundColor =  '#000000';

btnClick.onclick = function(){

     // The maximum value: FFFFFF 
    //In JavaScript, add 0x before a hexadecimal number
    var maxVal = 0xFFFFFF; // 16777215

    var randomNumber = Math.random() * maxVal;
    // convert the floating number to an integer 
    randomNumber = Math.floor(randomNumber);

    //convert integer to hex
    var randomColor = randomNumber.toString(16);
    body.style.backgroundColor = "#" + randomColor;
    body.style.transition = '1s';
    btnReset.className = 'd-block btn__button col-4';
    mainClick.style.justifyContent = 'space-between';

}

btnReset.onclick = function(){
    body.style.backgroundColor =  '#000000';
    body.style.transition = '1s';
    btnReset.className = 'd-none';
    mainClick.style.justifyContent = "center"

}
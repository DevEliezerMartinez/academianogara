function insert(num) {


    // insert a number into the display
    if (display.value.length < 20) {

        if (isNaN(num)) {
            display.value += num
        } else if (display.value.length == 1 && display.value[0] == 0) {
            display.value = num
        } else {
            display.value += num
        }
    } else {
        return
    }
}

function clean() {
    //if there is a syntax error, toggle the variable to false (reset)
    SyntaxError = false
        //clear the display value 
    display.value = "0";

}

function equal() {
    var exp = display.value
    var flag = false //boolean variable to check condicionals 

    for (i = 0; i < exp.length; i++) {
        if (isNaN(exp[i]) && isNaN(exp[i + 1])) {
            if (exp[i] != "+" && exp[i] != "-") {
                //if there are two operators together, toggle syntaxerror to true
                display.value = "Syntax Error"
                SyntaxError = true
            }

        }
    }

    if (flag == false) { //if there is no  errors, calculate the expression normaly
        var answer = eval(exp)

        if (isFinite(answer)) {
            display.value = answer
        } else {
            display.value = "Math Error" // if is infinity 
            SyntaxError = true
        }
    }


}

function back() {
    //if there is syntax error, return the function
    if (SyntaxError) {
        return
    }

    display.value = display.value.substring(0, display.value.length - 1)

    if (display.value == "") {
        display.value = "0"
    }

}

//selecting display
const display = document.querySelector('.display')
    //selecting all numbers
const numbers = document.querySelectorAll('.number')
    //adding event listener for each number in "numbers"
numbers.forEach((button) => {
        button.addEventListener('click', calculate)
    })
    //selecting all operators
const operators = document.querySelectorAll('.operator')
    //adding event listener for each operator in "operators"
operators.forEach((button) => {
        button.addEventListener('click', calculate)
    })
    // adding event listener to the keyboard
window.addEventListener('keypress', check)

function check(key) {
    let keyValue = key.key
    if (key.keyCode) {
        if (!isNaN(keyValue)) {
            insert(keyValue)
        } else {
            if (display.value.length == 1 && display.value[0] == 0) {
                return
            } else {
                for (i = 0; i < operators.length; i++) {
                    if (keyValue == operators[i].value) {
                        if (keyValue == "c") {
                            clean()
                        } else if (keyValue == "<") {
                            back()
                        } else if (keyValue == "=") {
                            equal()
                        } else {
                            display.value += keyValue
                        }
                    }
                }
            }
        }
    }
}

//boolean variable to check if there is syntax error
var SyntaxError = false

function calculate(event) {
    var buttonValue = event.target.value


    if (!isNaN(buttonValue) || (isNaN(buttonValue) && buttonValue != "=" && buttonValue != "<" && buttonValue != "c")) {
        if (buttonValue == "x") {
            buttonValue = "*" //changing the "x" into "*" to calculate normally
        }

        //insert the buttonValue 
        insert(buttonValue)

    } else if (buttonValue == '=') {
        equal() //calling the equal() function
    } else if (buttonValue == "<") {
        back() //calling the back() function
    } else if (buttonValue == "c") {
        clean() //calling the clean() function
    }

}





/* console.log("js");
let numGlobal = 0;

function actualizar(numeroa_a_actualizar) {

    let numeroConcatenado;
    numeroConcatenado = document.getElementById("pantalla").innerText;
    let resultado = numeroConcatenado + numeroa_a_actualizar;
    document.getElementById("pantalla").innerText = resultado;

    return resultado;
}

function num() {
    let btnPulsado = document.getElementsByClassName("btnNum");
    for (let index = 0; index < btnPulsado.length; index++) {
        btnPulsado[index].addEventListener('click', function() {

            actualizar(btnPulsado[index].innerText);


        });

    }
}

function btn() {
    let btnOp = document.getElementsByClassName("operacion");
    for (let index = 0; index < btnOp.length; index++) {

        btnOp[index].addEventListener('click', function() {
            let operacion = btnOp[index].innerText;

            switch (operacion) {
                case "+":

                    botn();
                    ig("+");

                    break;


                case "-":
                    botn();
                    ig("-");

                    break;

                case "x":
                    botn();
                    ig("x");

                    break;


                case "/":
                    botn();
                    ig("/");

                    break;


                case "=":
                    ig("=");

                    break;





                default:
                    break;
            }



        });

    }
}

num();
btn();

/* 6-2
 

function botn() {
    //guarda el numero escrito
    let num1 = document.getElementById("pantalla").innerText;

    numGlobal = parseFloat(numGlobal);
    num1 = parseFloat(num1);
    //asigna el numero al global
    if (numGlobal == 0) {
        numGlobal = num1

    } else {
        numGlobal = numGlobal + num1

    }

    //resetea el valor
    document.getElementById("pantalla").innerText = "";
}



function ig(operador) {

    switch (operador) {
        case "+":
            console.log("+");
            


            break;

        case "-":
            console.log("-");

            break;


        case "x":
            console.log("x");

            break;

        case "/":
            console.log("/");

            break;

        case "=":
            console.log("=");

            

            break;

        default:
            console.log("defaul");
            break;
    }
    //
    /*  let num2 = document.getElementById("pantalla").innerText;

     num2 = parseFloat(num2)
     numGlobal = parseFloat(numGlobal);
     let resultado = numGlobal - num2;
     console.log(resultado);
     document.getElementById("pantalla").innerText = "";
     actualizar(resultado);
     numGlobal = 0; 

}

/* 2 mas3ig  */
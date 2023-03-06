let userInput= document.querySelector(".userInput");
let expression = "";

function press(num){
    expression += num;
    userInput.value = expression;
    console.log(expression)
};

function equal(){
    userInput.value = eval(expression);
    expression = "";
}

function erase(){
    expression= "";
    userInput.value = expression;
}
function erase1(){
   expression =  expression.slice(0,-1);
   userInput.value = expression;
}


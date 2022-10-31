// attempt 2 

let mainDisplayValue = '';
let secondaryDisplayValue = '';
let operator = '';
let lastOperation = '';

function updateDisplay(){
    const firstDisplay = document.querySelector('.first-display');
    const secondDisplay = document.querySelector('.second-display');
    firstDisplay.textContent = mainDisplayValue;
    if(lastOperation != ''){
    firstDisplay.textContent = `${lastOperation} = ${mainDisplayValue}`;}
    secondDisplay.textContent = secondaryDisplayValue;
}

function operate(number1,number2,operand){
    
    number1 = Number(number1);
    number2 = Number(number2);

    lastOperation = `${number1} ${operand} ${number2}`

    switch (operand) {
        case '+':
            return (number1+number2).toFixed(2);
            break;
        case '-':
            return (number1-number2).toFixed(2);
            break;
        case "/":
            return (number1/number2).toFixed(2);
            break;
        case "*":
            return (number1*number2).toFixed(2);
            break;
        default:
            lastOperation = '';
            return 'no operator chosen, please clear calculator'
        break;
    }
}

function btnFunction(e){
    if(secondaryDisplayValue.indexOf('.') != '-1' && e.target.textContent == '.'){
        return;
    }
    secondaryDisplayValue = secondaryDisplayValue + e.target.textContent; 
    updateDisplay();   
}

function oprFunction(e){
    if( mainDisplayValue == ''){
        mainDisplayValue = secondaryDisplayValue;
        secondaryDisplayValue = ''
        updateDisplay()
    }
    operator = e.target.textContent;

    if (secondaryDisplayValue != ''){
        sumFunction()
    }
}

function sumFunction(){
   mainDisplayValue = operate(mainDisplayValue,secondaryDisplayValue,operator);
   secondaryDisplayValue = '';
   updateDisplay();

}

function removeFunction(){
secondaryDisplayValue = secondaryDisplayValue.slice(0,-1);
updateDisplay()
}

function clearFunction(){
    mainDisplayValue = '';
    secondaryDisplayValue = '';
    lastOperation = '';
    operator ='';
    updateDisplay();
}

function changeFunction(){
    if (secondaryDisplayValue[0] == '-'){
        secondaryDisplayValue = secondaryDisplayValue.slice(1,)
        updateDisplay()
    } else {
    secondaryDisplayValue = '-'+secondaryDisplayValue;
    updateDisplay()}
}

const btn = Array.from(document.querySelectorAll('.number'));
btn.forEach(btn => btn.addEventListener('click', btnFunction))

const opr = Array.from(document.querySelectorAll('.operator'));
opr.forEach(opr => opr.addEventListener('click', oprFunction))

const sum = Array.from(document.querySelectorAll('.sum'));
sum.forEach(sum => sum.addEventListener('click', sumFunction))

const remove = Array.from(document.querySelectorAll('.remove'));
remove.forEach(remove => remove.addEventListener('click', removeFunction))

const clear = Array.from(document.querySelectorAll('.clear'));
clear.forEach(clear => clear.addEventListener('click', clearFunction))

const change = Array.from(document.querySelectorAll('.change'));
change.forEach(change => change.addEventListener('click', changeFunction))





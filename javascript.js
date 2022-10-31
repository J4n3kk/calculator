let screenContent = ''

function updateScreen(){
    let screen = document.querySelector('.screen');
    console.log(screen)
    screen.textContent = screenContent;
}

const btn = Array.from(document.querySelectorAll('.number, .operator'));

btn.forEach( btn => btn.addEventListener('click',function (e){
    if(Array.from(screenContent).some(letter => ['*','/','+','-'].includes(letter)) && ['*','/','+','-'].includes(e.target.textContent)){
        return
    }


    screenContent = screenContent + e.target.textContent;
    updateScreen();
}))

updateScreen();

const clear = document.querySelector('.clear')
console.log(clear)
clear.addEventListener('click', function clearScreen(e){
    screenContent = '';
    updateScreen();
})

const remove = document.querySelector('.remove')
console.log(remove)
remove.addEventListener('click', function(e){
    screenContent = screenContent.slice(0, -1)
    console.log(screenContent+'after')
    updateScreen();
})

const equals = document.querySelector('.equals');
console.log('equals is '+equals)
equals.addEventListener('click', calculate )

function calculate(){
    const correctOperator = operatorToExecute(screenContent);
    console.log(correctOperator)
    if (correctOperator == false){
        console.log('operator is false')
        return
    }
    numbersToCompare = screenContent.split(/[^0-9.]/);

    
    switch (correctOperator) {
        case '*':
            screenContent = Number(numbersToCompare[0])*Number(numbersToCompare[1]);
            break;
        case '/':
            screenContent = Number(numbersToCompare[0])/Number(numbersToCompare[1]);
            break;
        case '+':
            screenContent = Number(numbersToCompare[0])+Number(numbersToCompare[1]);
            break;
        case '-':
            screenContent = Number(numbersToCompare[0])-Number(numbersToCompare[1]);
            break;
    }
    updateScreen();
}


function operatorToExecute(expression){
   return Array.from(expression).find(sign => sign.match(/[^0-9.]/))
}
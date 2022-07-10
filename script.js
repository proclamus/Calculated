const calculator = document.querySelector('.calculadora')
const keys = calculator.querySelector('.teclas')

keys.addEventListener("click", e => {

    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        if (!action) {
            console.log('number key!')
        }
        if (
            action === 'somar' ||
            action === 'subtrair' ||
            action === 'multiplicar' ||
            action === 'dividir'
        ) {
            console.log('operator key!')
        }
        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calcular') {
            console.log('equal key!')
        }
    };
});

const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
    
    if(!action){
        if(displayedNum === '0') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
    }
    if(action === 'decimal')
    {
        display.textContent = displayedNum + '.'
    }
    if(
        action === 'somar' ||
        action === 'subtrair' ||
        action === 'multiplicar' ||
        action === 'dividir'
    ) {
        display.textContent = displayedNum + keyContent
    }
}
})



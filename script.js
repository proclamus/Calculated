const calculator = document.querySelector('.calculadora')
const keys = calculator.querySelector('.teclas')
const display = document.querySelector('.calculator__display')

const calcular = (n1,operator,n2) =>
{
    let resultado = ''

    if(operator === 'somar')
    {
        resultado = parseFloat(n1) + parseFloat(n2);
    }
    if(operator === 'dividir')
    {
        resultado = parseFloat(n1) / parseFloat(n2);
    }
    if(operator === 'multiplicar')
    {
        resultado = parseFloat(n1) * parseFloat(n2);
    }
    if(operator === 'subtrair')
    {
        resultado = parseFloat(n1) - parseFloat(n2);
    }
    if(operator === undefined)
    {
        return parseFloat(n2)
    }

    return resultado
}

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        
        const previousKeyType = calculator.dataset.previousKeyType
        
    if(!action){
        console.log('number key!')
        calculator.dataset.previousKeyType = 'key-number'
        if(displayedNum === '0' || previousKeyType === 'key-operator'){
            display.textContent = keyContent
        } else {
            display.textContent = displayedNum + keyContent
        }
    }
    if(action === 'decimal')
    {
        display.textContent = displayedNum + '.'
        console.log('decimal key!')
        calculator.dataset.previousKeyType = 'key-decimal'
    }
    if(
        (action === 'somar' ||
        action === 'subtrair' ||
        action === 'multiplicar' ||
        action === 'dividir')
    ) {
        console.log('operator key!')       
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        calculator.dataset.previousKeyType = 'key-operator'
       
    }

    if(action==='calcular'){
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        console.log('equal key!')
        display.textContent = calcular(firstValue,operator,secondValue)
        
    }

    if(action === 'clear')
    {
        console.log('clear key!')
        display.textContent = '0'
        firstValue = undefined
        secondValue = '0'
        operator = undefined
    }
}
})



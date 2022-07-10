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

        if (action === 'calculate') {
            console.log('equal key!')
        }
    };
});



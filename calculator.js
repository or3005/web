document.addEventListener("DOMContentLoaded", function () {
    const calcKeys = document.querySelector('.calc-keys');
    const resultDisplay = document.querySelector('.result');

    calcKeys.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            handleButtonClick(event.target.textContent);
        }
    });

    function handleButtonClick(value) {
        
        switch (value) {
            case '=':
                calculateResult();
                break;
            case 'AC':
                clearResult();
                break;
            case 'DEL':
                deleteLastCharacter();
                break;
            case 'sqrt':
                applySquareRoot();
                break;
            case 'x^2':
                applySquare();
                break;
            case 'x^y':
                appendToResult('**');
                break;
            case 'sin':
                appendToResult( Math.sign(resultDisplay.textContent));
            case 'cos':
                appendToResult(Math.cos(resultDisplay.textContent));
            case 'tan':
                appendToResult( Math.tan(resultDisplay.textContent));
            case 'log':
                appendToResult(Math.log(resultDisplay.textContent));
            case 'ln':
                appendToResult(Math.ln(resultDisplay.textContent));
                break;
            default:
                appendToResult(value);
                break;
        }
    }

    function calculateResult() {
        try {
            const result = eval(resultDisplay.textContent);
            setResult(`${result}`);
        } catch (error) {
            setResult('Error');
        }
    }

    function clearResult() {
        setResult('');
    }

    function deleteLastCharacter() {
        const currentText = resultDisplay.textContent;
        setResult(currentText.slice(0, -1));
    }

    function appendToResult(value) {
        setResult(resultDisplay.textContent + value);
    }

    function applySquareRoot() {
        setResult(`Math.sqrt(${resultDisplay.textContent})`);
    }

    function applySquare() {
        setResult(`Math.pow(${resultDisplay.textContent}, 2)`);
    }

    function setResult(value) {
        resultDisplay.textContent = value;
        document.getElementById('myDiv').textContent = value;
    }
});

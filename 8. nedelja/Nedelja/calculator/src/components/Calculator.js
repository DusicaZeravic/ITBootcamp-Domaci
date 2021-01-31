import { useState } from 'react';

const Calculator = () => {
    let [result, setResult] = useState(0);
    const [inputNumber, setInputNumber] = useState('')
    const [operation, setOperation] = useState('');
    const [steps, setSteps] = useState('');

    const calculate = () => {
        if (inputNumber === 0) {
            setResult(0)
        } else {
            switch (operation) {
                case '+':
                    setResult(result += inputNumber);
                    break;
                case '-':
                    setResult(result -= inputNumber);
                    break;
                case '*':
                    setResult(result *= inputNumber);
                    break;
                case '/':
                    setResult(result /= inputNumber);
                    break;
                default:
                    setResult(inputNumber);
                    break;
            }
        }
        setInputNumber('');
        setSteps(previous => `${previous}${operation}${inputNumber}`);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Calculator</h1>
            <input type='text' value={result} readOnly />
            <input value={inputNumber} type='number' onChange={(e) => {
                setInputNumber(Number(e.target.value))
            }} placeholder='Enter number...' />
            <button value='+' onClick={(e) => {
                setOperation(e.target.value)
                calculate()
            }}>+</button>
            <button value='-' onClick={(e) => {
                setOperation(e.target.value)
                calculate()
            }}>-</button>
            <button value='*' onClick={(e) => {
                setOperation(e.target.value)
                calculate()
            }}>*</button>
            <button value='/' onClick={(e) => {
                setOperation(e.target.value)
                calculate()
            }}>/</button>
            <button onClick={() => {
                setResult(0);
                setSteps('');
            }}>Clear</button>
            <p>Steps: {steps}</p>
        </div>
    )
}

export default Calculator

import React, { useState } from 'react';

function Roman() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleConversion = () => {
        if (input.match(/^[IVXLCDM]+$/)) {
            const a = input.split('');
            let total = 0;

            for (let i = 0; i < a.length; i++) {
                let value = rtn(a[i]);

                if (value === 1) {
                    if (a[i + 1] === 'V') {
                        value = 4;
                        i++;
                    } else if (a[i + 1] === 'X') {
                        value = 9;
                        i++;
                    }
                } else if (value === 10) {
                    if (a[i + 1] === 'C') {
                        value = 90;
                        i++;
                    } else if (a[i + 1] === 'L') {
                        value = 40;
                        i++;
                    } else if (a[i + 1] === 'D') {
                        setErrorMessage('Invalid input');
                        return;
                    }
                } else if (value === 100) {
                    if (a[i + 1] === 'D') {
                        value = 400;
                        i++;
                    } else if (a[i + 1] === 'M') {
                        value = 900;
                        i++;
                    }
                }
                total += value;
            }
            setResult(total);
            setErrorMessage('');
        } else {
            setErrorMessage('Enter valid input with uppercase letters');
        }
    };

    const rtn = (x) => {
        var b = 0;
        switch (x) {
            case "I":
                b = 1;
                break;
            case "V":
                b = 5;
                break;
            case "X":
                b = 10;
                break;
            case "L":
                b = 50;
                break;
            case "C":
                b = 100;
                break;
            case "D":
                b = 500;
                break;
            case "M":
                b = 1000;
                break;
        }
        return b;
    };

    return (

        
        <div className='roman-container'>
            <div className='roman-box'>
                <h1>ROMAN-NUMERAL CONVERTION</h1>
                <input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleConversion}>Convert</button>
                {errorMessage && <p className='error'>{errorMessage}</p>}
                {!errorMessage && <p>Result: {result}</p>}
            </div>
        </div>
    );
}

export default Roman;

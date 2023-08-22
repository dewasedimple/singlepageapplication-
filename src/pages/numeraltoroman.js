import React, { useState } from 'react';

function NumeralToRoman() {
    const [numeral, setNumeral] = useState("");
    const [result, setResult] = useState("");

    const handleClick = () => {
        let num = parseInt(numeral);
        if ( num <= 0 ) {
            setResult("Invalid input");
            return;
        }

        const romanNumerals = [
            { value: 1000, symbol: 'M' },
            { value: 900, symbol: 'CM' },
            { value: 500, symbol: 'D' },
            { value: 400, symbol: 'CD' },
            { value: 100, symbol: 'C' },
            { value: 90, symbol: 'XC' },
            { value: 50, symbol: 'L' },
            { value: 40, symbol: 'XL' },
            { value: 10, symbol: 'X' },
            { value: 9, symbol: 'IX' },
            { value: 5, symbol: 'V' },
            { value: 4, symbol: 'IV' },
            { value: 1, symbol: 'I' }
        ];

        let roman = '';
        for (const numeralData of romanNumerals) {
            while (num >= numeralData.value) {
                roman += numeralData.symbol;
                num -= numeralData.value;
            }
        }

        setResult(roman);
    };

    return (
        <>    
        <div className='number_container'>
        <div className='number_box'>
            <h1>NUMERAL-ROMAN CONVERSION</h1>
            <input type="number" value={numeral} onChange={(e) => setNumeral(e.target.value)} />
            <button className='numbtn' onClick={handleClick}>Convert</button>
            <p className='result'>Result: {result}</p>
        </div>
    </div>
        </>
    );
}

export default NumeralToRoman;

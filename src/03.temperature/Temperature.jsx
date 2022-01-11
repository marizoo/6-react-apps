import React, { useState } from 'react'
import './TemperatureStyle.css'

const Temperature = () => {
    const [temp, setTemp] = useState(24);
    const [displayColor, setDisplayColor] = useState('cold');

    const handleDecrease = () => {
        const newTemp = temp - 1;
        if(newTemp <= 15) return;
        if(newTemp < 27) {setDisplayColor('cold')}
        setTemp(newTemp)
    }

    const handleIncrease = () => {
        const newTemp = temp + 1;
        if(newTemp >= 35) return;
        if(newTemp > 27) {setDisplayColor('hot')}
        setTemp(newTemp);

        
    }

    return (
        <div className='temp'>
            <div className="tempCard">
                <div className="tempCard__top">
                    
                    <div 
                    className={displayColor === 'cold' ? 'tempCard__top__display cold' : 'tempCard__top__display hot'}
                    >{temp}&deg;c</div>
                </div>
                <div className="tempCard__bottom">
                    <span onClick={handleDecrease} className="tempCard__bottom__decrease">-</span>
                    <span onClick={handleIncrease} className="tempCard__bottom__increase">+</span>
                </div>
            </div>
        </div>
    )
}

export default Temperature

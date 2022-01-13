import React,{useState} from 'react'
import './tempStyleTwo.css'

const TempTwo = () => {
    const [temp, setTemp] = useState(26);
    const [color, setColor] = useState('hot');

    const handleDecrease = () => {
        const newTemp = temp - 1;
        if(newTemp <= 15) return;
        if(newTemp < 24) {setColor('cold')};
        setTemp(newTemp);

    }

    const handleIncrease = () => {
        const newTemp = temp + 1;
        if(newTemp >= 35) return;
        if(newTemp > 26) {setColor('hot')};
        setTemp(newTemp);

    }

    return (
        <div className='tempTwo'>
            <div className="tempTwo__card">
                <div className="tempTwo__cardTop">
                    <div className={color === 'cold' ? 'tempTwo__cardTop__display display--cold' : 'tempTwo__cardTop__display display--hot'}>{temp}&deg;c</div>
                </div>
                <div className="tempTwo__cardBottom">
                    <span onClick={handleDecrease} className='tempTwo__cardBottom_decrease'>-</span>
                    <span onClick={handleIncrease} className='tempTwo__cardBottom_increase'>+</span>
                </div>
            </div>
        </div>
    )
}

export default TempTwo

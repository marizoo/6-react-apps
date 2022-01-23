import React, {useState} from 'react';
import './aTempStyle.css';

const ATemperature = () => {
    const [temp, setTemp] = useState(25);
    const [color, setColor] = useState('cold');

    const handleMin = () => {
        const newTemp = temp - 1;
        if(newTemp <= 14) return;
        if(newTemp <= 25) {setColor('cold')};
        setTemp(newTemp);
    }


    const handlePlus = () => {
        const newTemp = temp + 1;
        if(newTemp >= 37) return;
        if(newTemp >= 26) {setColor('hot')};
        setTemp(newTemp);
    }

  return (
  <div className='aTemp'>
      <div className="aTemp__top">
          <div className={color === 'cold' ? 'aTemp__top__circle cold' : 'aTemp__top__circle hot' }>{temp}&#8451;</div>
          {/* <div className='aTemp__top__circle'>{temp}&#8451;</div> */}
      </div>
      <div className="aTemp__bottom">
          <div onClick={handleMin} className="aTemp__bottom__min"> - </div>
          <div onClick={handlePlus} className="aTemp__bottom__plus"> + </div>
      </div>
  </div>
  )
};

export default ATemperature;

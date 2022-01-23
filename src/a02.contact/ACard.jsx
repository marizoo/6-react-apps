import React from 'react';
import './aCardStyle.css'

const ACard = ({data}) => {
  return (
  <div className='aCard'>
      <div className="aCard__left">
          <img className='aCard__img' src={data.picture.large} alt="avatar" />
      </div>
      <div className="aCard__right">
          <h3 className='aCard__desc'>Name: {data.name.first} {data.name.last}</h3>
          <h3 className='aCard__desc'>Email: {data.email}</h3>
          <button className='aCard__button'>Contact Me</button>
      </div>
  </div>
  );
};

export default ACard;

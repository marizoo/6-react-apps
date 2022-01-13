import React from 'react'

const CardTwo = ({result}) => {
    return (
        <div className='card02'>
            <div className="card02__left">
                <img className='card02__left__img' src={result.picture.large} alt="profile photo" />
            </div>
            <div className="card02__right">
                <h3 className='card02__right__desc'>Name: {result.name.first} {result.name.last}</h3>
                <h3 className='card02__right__desc'>Email: {result.email}</h3>
                <button className='card02__right__button'>Contact Me</button>
            </div>
        </div>
    )
}

export default CardTwo

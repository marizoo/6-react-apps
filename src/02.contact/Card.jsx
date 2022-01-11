import React from 'react'
import './contact-Styles.css'

const Card = ({data}) => {
    return (
            <div className='card02'>
                <div className="card02__left">
                    <img src={data.picture.large} alt="profile image" className="card02__left__img" />
                </div>
                <div className="card02__right">
                    <h3 className="card02__right__desc">Name: {data.name.first} {data.name.last}</h3>
                    <h3 className="card02__right__desc">Email: {data.email}</h3>
                    <button className="card02__right__button">Contact Me</button>
                </div>
            </div>
    )
}

export default Card

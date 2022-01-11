import React, {useState} from 'react'
import './loginStyle.css'

const LoginForm = ({onLoginHandle, error}) => {

    const [details, setDetails ] = useState({name: '', email: '', password: ''});

    const handleName = (ev) => setDetails({...details, name: ev.target.value});
    const handleEmail = (ev) => setDetails({...details, email: ev.target.value});
    const handlePassword = (ev) => setDetails({...details, password: ev.target.value});

    const handleLogin = (ev) => {
        ev.preventDefault();

        onLoginHandle(details);
    }

    return (
        <form className='Form01' onSubmit={handleLogin}>
            <h2 className='Form01__title'>Login</h2>
            {(error !== '')
            ? (<div className='Form01__error'>{error}</div>)
            : ''
            }

            <label className='Form01__label' htmlFor="name">Name</label>
            <input className='Form01__input' required type="text" placeholder='Your Name' value={details.name} onChange={handleName}/>
            <label className='Form01__label' htmlFor="email">Email</label>
            <input className='Form01__input' required  type="email" placeholder='Your Email' value={details.email} onChange={handleEmail}/>
            <label className='Form01__label' htmlFor="password">Password</label>
            <input className='Form01__input' required type="password" placeholder='Your Password' value={details.password} onChange={handlePassword}/>
            <button type="submit" className='Form01__button'>Login</button>
        </form>
    )
}

export default LoginForm

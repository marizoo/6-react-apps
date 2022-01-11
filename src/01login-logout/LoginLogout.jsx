import React, {useState} from 'react'
import LoginForm from './LoginForm'
import './loginStyle.css'

const LoginLogout = () => {
    const [user, setUser] = useState({name: '', email: ''});
    const [error, setError] = useState('');

    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123'
    }

    const loginHandle = (details) => {
        if(details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                name: details.name,
                email: details.email,
            })
        } else {
            setError('Sorry, details does not match')
        }
    }

    const logoutHandle = () => {
        setUser({
            name: '',
            email: ''
        });
    }

    return (
        <div className='Login01'>
            {(user.email !== '')
            ?   ( 
                <div className="Login01__welcome">
                    <h2 className="Login01__welcomeTitle">Welcome, <span>{user.name}</span></h2>
                    <button className='Login01__welcome__button' onClick={logoutHandle}>Logout</button>
                </div>
                )
            : ( <LoginForm onLoginHandle={loginHandle} error={error}/> )
            }
           
            
        </div>
    )
}

export default LoginLogout

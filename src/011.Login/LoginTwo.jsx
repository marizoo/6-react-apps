import React, {useState} from 'react';
import LoginFormTwo from './LoginFormTwo';
import './loginStyleTwo.css'

const LoginTwo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState({name:''})

    const userAdmin = {
        email: 'admin@admin.com',
        password: 'admin123',
    }

    const handleLogin = (values) => {
        if(values.email === userAdmin.email && values.password === userAdmin.password) {
            setIsLoggedIn(true);

            const userName = {name: values.name};
            setUser(userName);
            
        } else {
            setError('Sorry darling, details don\'t match');
        }

    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className='loginTwo'>
            {isLoggedIn && (
                <div className='loginTwo__loggedin'>
                <h2 className='loginTwo__loggedin__title'>Welcome, {user.name}</h2>
                <button onClick={handleLogout} className='loginTwo__loggedin__BtnLogin'>Logout</button>
            </div>
            )}
            {!isLoggedIn && (
                <LoginFormTwo onHandleLogin={handleLogin} error={error}/>
            )}
        </div>
    )
}

export default LoginTwo

import React, { useState } from 'react'
import LoginFormTwo from './LoginFormTwo'
import './loginStyleTwo.css'

const LoginTwo = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({name:'', email:''})
    const [error, setError] = useState('')

    const adminUser = {
        email: 'admin@admin.com',
        password: 'admin123',
    }

  

    const handleSubmitFormTwo = (values) => {
       
        if(values.email === adminUser.email && values.password === adminUser.password) {
            setUser({
                name: values.name,
                email: values.email,
            })

            const saveValue = {
                name: values.name,
                email: values.email, 
            }

            setIsLoggedIn(true);
            console.log(saveValue);
        } else {
            setError('Sorry dear, details does not match')
            setIsLoggedIn(false);
        }
        
    }

    const handleLogout = () => {
        setUser({name:'', email:''})
        setIsLoggedIn(false);
    }

    return (
        <div className='loginTwo'>
            {isLoggedIn 
            ? (
                <>
                    <h2 className='loginTwo_title'>Welcome, {user.name}</h2>
                    <button className='loginTwo_buttonLogout' onClick={handleLogout}>Logout</button>
                </>
            )
            : (
                <LoginFormTwo error={error} onHandleSubmitForm={handleSubmitFormTwo} />   
            )
            }
            
        </div>
    )
}

export default LoginTwo

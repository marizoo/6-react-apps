import React, { useState } from 'react'
import styled from 'styled-components';
import LoginForm from './LoginForm';

const MainContainer = styled.div``

const LoginLogout = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:'', email: ''});
    const [error, setError] = useState('');

    const Login = (details) => {
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged IN");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            console.log('details does not match')
        }
        console.log(details);   
    }

    const Logout = () => {
        console.log("logOut")
    }

    return (
        <MainContainer>
            {(user.email != "") 
                ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
                )
                : (<LoginForm Login={Login} error={error}/>)
        }
            
        </MainContainer>
    )
}

export default LoginLogout

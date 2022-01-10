import React, { useState } from 'react'
import styled from 'styled-components';

const Form = styled.form``

const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({name:"", email:"", password: ""});

    const submitHandler = (ev) => {
        ev.preventDefault();

        Login(details);
    }

    return (
        <Form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* {ERROR} */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' id='name' onChange={(ev) => setDetails({...details, name: ev.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id='email' onChange={(ev) => setDetails({...details, email: ev.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' id='password' onChange={(ev) => setDetails({...details, password: ev.target.value})} value={details.password}/>
                </div>
                <input type="submit" value='LOGIN' />
            </div>
        </Form>
    )
}

export default LoginForm

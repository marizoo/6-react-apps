import React,{useState} from 'react'
import './loginStyleTwo.css'


const LoginFormTwo = ({onHandleLogin, error}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleName = (ev) => {
        setValues({...values, name:ev.target.value})
    }
    const handleEmail = (ev) => {
        setValues({...values, email:ev.target.value})
    }
    const handlePassword = (ev) => {
        setValues({...values, password:ev.target.value})
    }

    //? HANDLE SUBMIT FORM
    const handleSubmit = (ev) => {
        ev.preventDefault()

        const userInput = {
            name: values.name,
            email : values.email,
            password: values.password,
        }

        setValues(userInput);
        console.log(userInput);
        onHandleLogin(userInput);
        setValues({name: '', email: '', password: ''})
    }
   
    
    return (
        <form className='formTwo' onSubmit={handleSubmit}>
            {error && <h2 className='formTwo__title error'>{error}</h2> }
            {!error && <h2 className='formTwo__title'>Please enter details</h2> }
            <label className='formTwo__label' htmlFor="name">Name:</label>
            <input onChange={handleName} value={values.name} className='formTwo__input' name='name' type="text" placeholder='Your Name...' />
            <label className='formTwo__label' htmlFor="email">Email:</label>
            <input onChange={handleEmail} value={values.email} className='formTwo__input' name='email' type="email" placeholder='Your Email...' />
            <label className='formTwo__label' htmlFor="password">Password:</label>
            <input onChange={handlePassword} value={values.password} className='formTwo__input' name='password' type="password" placeholder='Your Password...' />
            <button className='formTwo__btnLogin' type='submit'>Login</button>
        
        </form>
    )
}

export default LoginFormTwo

import React, {useState} from 'react'

const LoginFormTwo = ({onHandleSubmitForm, error}) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleName = (ev) => {setValues({...values, name: ev.target.value})};
    const handleEmail = (ev) => {setValues({...values, email:ev.target.value})};
    const handlePassword = (ev) => {setValues({...values, password: ev.target.value})};

    const handleSubmitForm = (ev) => {
        ev.preventDefault();

        onHandleSubmitForm(values);
    }

    return (
        <form className='loginTwo__form' onSubmit={handleSubmitForm}>
            {error && <div className='loginTwo__form__error'>{error}</div>}
            <label className='loginTwo__form__label' htmlFor="name">Name:</label>
            <input onChange={handleName} value={values.name} className='loginTwo__form__input' type="text" placeholder='Your Name'/>
            <label className='loginTwo__form__label' htmlFor="email">Email:</label>
            <input onChange={handleEmail} value={values.email} className='loginTwo__form__input' type="email" placeholder='Email...'/>
            <label className='loginTwo__form__label' htmlFor="name">Password:</label>
            <input onChange={handlePassword} value={values.password} className='loginTwo__form__input' type="password" placeholder='Password'/>
            <button type='submit' className='loginTwo__form__buttonLogin'>Login</button>
        </form>
    )
}

export default LoginFormTwo

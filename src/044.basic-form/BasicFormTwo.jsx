import React,{useState} from 'react'
import './basicFormTwo.css'

const BasicFormTwo = () => {
    const [success, setSuccess] = useState(false);

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email:'',
    });

    const handleFirstName = (ev) => {
        setValues({...values, firstName: ev.target.value})
    }

    const handleLastName = (ev) => {
        setValues({...values, lastName: ev.target.value})
    }

    const handleEmail = (ev) => {
        setValues({...values, email: ev.target.value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const newInput = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email
        }

        setValues(newInput);
        console.log(newInput);
        setSuccess(true);
        setValues({
            firstName: '',
            lastName: '',
            email:'',
        })
    }

    return (
        <form onSubmit={handleSubmit} className='basicFormTwo'>
            {success && ( <h2 className='basicFormTwo__title'>Thank You for registering!</h2>
           )}
           {!success && (<h2 className='basicFormTwo__title'>Enter to register</h2>)}
            
            <label className='basicFormTwo__label' htmlFor="firstName">First Name:</label>
            <input onChange={handleFirstName} value={values.firstName} className='basicFormTwo__input' type="text" placeholder='First Name...' />
            <label className='basicFormTwo__label' htmlFor="firstName">Last Name:</label>
            <input onChange={handleLastName} value={values.lastName} className='basicFormTwo__input' type="text" placeholder='Last Name...' />
            <label className='basicFormTwo__label' htmlFor="firstName">Email:</label>
            <input onChange={handleEmail} value={values.email} className='basicFormTwo__input' type="email" placeholder='Email...' />
            <button type="submit" className='basicFormTwo__button'>Register</button>
        </form>
    )
}

export default BasicFormTwo

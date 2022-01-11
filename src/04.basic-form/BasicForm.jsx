import React, {useState} from 'react'
import './BasicStyle.css'

const BasicForm = () => {

    const [values, setValues] = useState({firstName: '', lastName:'', email:''});
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleFirstName = (ev) => {
         setValues({...values, firstName: ev.target.value})
    };

    const handleLastName = (ev) => {
         setValues({...values, lastName: ev.target.value})
    };

    const handleEmail = (ev) => {
         setValues({...values, email: ev.target.value})
    };


    const handleSubmit = (ev) => {
        ev.preventDefault();

        if(values.firstName && values.lastName && values.email) {setValid(true)};

        const newData = {values};
        console.log(newData);
        setSuccess(true);
        setValues({firstName: '', lastName:'', email:''});
    }

    return (
        <div className='basicFormWrapper' onSubmit={handleSubmit}>
            <form className="basicForm">
                <h2 className="basicForm__title">Enter your details.</h2>
                {success && valid 
                ? (<button className='basicForm__button blueFont'>Success, Thank you for registering</button>)
                : null}
                <input required className='basicForm__input' type="text" placeholder='First Name' value={values.firstName} onChange={handleFirstName}/>
                <input required className='basicForm__input' type="text" placeholder='Last Name' value={values.lastName} onChange={handleLastName}/>
                <input required className='basicForm__input' type="email" placeholder='Email' value={values.email} onChange={handleEmail}/>
                <button className='basicForm__button' type="submit">Register</button>
            </form>
        </div>
    )
}

export default BasicForm

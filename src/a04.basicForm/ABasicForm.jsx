import React, {useState} from 'react';
import './aBasicFormStyle.css'

const ABasicForm = () => {
    const [success, setSuccess] = useState(false)
    const [datas, setDatas] = useState({
        firstName: '',
        lastName: '',
        email: '',
    })

   

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const newData = {
            firstName: datas.firstName,
            lastName: datas.lastName,
            email: datas.email,
        }

        setSuccess(true);
        setDatas(newData);
        console.log(newData);
    }

  return (
  <div className='aBasicForm'>
      {!success && (
          <>
            <h2 className='aBasicForm__title'>Enter your details</h2>
            <form className='aBasicForm__form' onSubmit={handleSubmit}>
                    <input required onChange={(ev) => setDatas({...datas, firstName: ev.target.value})} value={datas.firstName} type="text" className='aBasicForm__input' placeholder='First Name'/>
                    <input required onChange={(ev) => setDatas({...datas, lastName: ev.target.value})} value={datas.lastName} type="text" className='aBasicForm__input' placeholder='Last Name'/>
                    <input required onChange={(ev) => setDatas({...datas, email: ev.target.value})} value={datas.email} type="email" className='aBasicForm__input' placeholder='Email'/>
                    <button type='submit' className='aBasicForm__button'>Sign Up</button>
            </form>
          </>
      )}
      {success && (
        <h2 className='aBasicForm__title success'>Thank You for registering</h2>
      )}
  </div>
  )};

export default ABasicForm;

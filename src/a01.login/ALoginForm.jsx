import React, {useState} from 'react';
import './ALoginStyle.css'


const ALoginForm = ({onHandleLogin, error}) => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submitHandle = (ev) => {
        ev.preventDefault();

        const loginInput = {
            name: details.name,
            email: details.email,
            password: details.password,
        }

        setDetails(loginInput);
        onHandleLogin(loginInput);

        setDetails({
            name: "",
            email: "",
            password: ""
        })
    }


  return (
  <form className='aLoginForm' onSubmit={submitHandle}>
      {!error && (<h2 className="aLoginForm__title">Login</h2>)}
      {error && (<h2 className="aLoginForm__title">Sorry Babe! email & password dont' match</h2>)}
      {/* Name */}
      <label htmlFor="name" className="aLoginForm__label">Name</label>
      <input type="text" className="aLoginForm__input" placeholder="Name" value={details.name} onChange={(ev) => setDetails({...details, name: ev.target.value})}/>
      {/* Email */}
      <label htmlFor="email" className="aLoginForm__label">Email</label>
      <input type="email" className="aLoginForm__input" placeholder="Email" value={details.email} onChange={(ev) => setDetails({...details, email: ev.target.value})}/>
      {/* Password */}
      <label htmlFor="password" className="aLoginForm__label">Password</label>
      <input type="password" className="aLoginForm__input" placeholder='password' value={details.password} onChange={(ev) => setDetails({...details, password: ev.target.value})}/>
      <button className='aLoginForm__button' type="submit">Login</button>
  </form>
  );
};

export default ALoginForm;

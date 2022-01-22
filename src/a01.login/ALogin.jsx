import React, {useState} from 'react';
import ALoginForm from './ALoginForm';
import './ALoginStyle.css'

const ALogin = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [error, setError] = useState(false);
const [user, setUser] = useState('');

const userAdmin = {
    email: 'admin@admin.com',
    password: 'admin123',
}

const handleLogin = (datas) => {
    if(datas.email === userAdmin.email && datas.password === userAdmin.password) {
        setIsLoggedIn(true);
        setUser(datas.name);
    } else {
        setError(true);
    }
}



const handleLogout = () => {
    setIsLoggedIn(false);
    setError(false);
}

  return (
  <div className='aLogin'>
      {!isLoggedIn && ( <ALoginForm onHandleLogin={handleLogin} error={error}/> )}
      
      {isLoggedIn && (
        <div className="aLogin__loggedIn">
            <h2 className="aLogin__loggedIn__title">Welcome, {user} baby! </h2>
            <button className='aLogin__loggedIn__btnLogout' onClick={handleLogout}>Logout</button>
        </div>
      )}
      
  </div>
  );
};

export default ALogin;

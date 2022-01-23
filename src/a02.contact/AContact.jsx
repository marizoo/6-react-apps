import React, {useEffect, useState} from 'react';
import ACard from './ACard';
import './aCardStyle.css'


const AContact = () => {

    const [datas, setDatas] = useState([]);

    

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=3')
        .then(response => response.json())
        .then(users => setDatas(users.results))
        .catch(err => console.log('ERROR IS:', err.message))  
    },[])

  

  return (
  <div className='aContact'>
      {datas.map(data => (
        <ACard key={data.id.value} data={data}/>
      ))}
  </div>
  );
};
export default AContact;

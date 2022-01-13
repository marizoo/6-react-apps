import React,{useState, useEffect} from 'react'
import CardTwo from './CardTwo'
import './contactStyleTwo.css'

const ContactTwo = () => {

    const [results, setResults] = useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=3')
            .then(response => response.json())
            .then(data => setResults(data.results))
            .catch(err => console.log(err.message))
    },[])

    return (
        <div className='contact02'>
            {results.map((result, index) => (

            <CardTwo key={index} result={result}/>
            ))}
        </div>
    )
}

export default ContactTwo

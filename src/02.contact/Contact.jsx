import React, {useState, useEffect} from 'react'
import Card from './Card'
import './contact-Styles.css'

const Contact = () => {

    const [results, setResults] = useState([])

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => setResults(data.results))
            .catch( err => {console.log(err.message)} )
    }, [])

    return (
        
            <div className="contact">
            {results.map((result, index) => (
                    <Card key={index} data={result}/>
                    ))}
            </div>
        
    )
}

export default Contact

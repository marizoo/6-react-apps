import React,{useState} from 'react'
import './shoppingStyle.css'
import {nanoid} from 'nanoid'

const DATA = {
    id: 123,
    text: 'eggplant',
}

const ShoppingList = () => {

    const [newInput, setNewInput] = useState('');
    const [items, setItems] = useState([DATA])

    const newInputHandle = (ev) => {
        ev.preventDefault();

        const newItem = {
            id: nanoid(),
            text: newInput,
        }

        const newItems = [...items, newItem];
        setItems(newItems);
        setNewInput('');

    }

    return (
        <div className='shopping'>
            <div className="shoppingCard">
                <form className="shoppingCard__inputBox" onSubmit={newInputHandle}>
                    <input 
                    type="text" 
                    className="shoppingCard__inputBox__input" 
                    placeholder='Add an item...'
                    value={newInput}
                    onChange={ev => setNewInput(ev.target.value)}
                    />
                    <button type="text" className="shoppingCard__inputBox__button" >+</button>
                </form>
                
                    <ul className="shoppingCard__list">
                        {items.map((item,index) => (
                            
                                <li className='shoppingCard__listItem' key={index}>{item.text}</li>
                                
                            
                        ))}
                    </ul>
                
            </div>
        </div>
    )
}

export default ShoppingList
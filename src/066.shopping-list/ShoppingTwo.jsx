import React, {useState} from 'react';
import './shoppingTwoStyle.css';
import {nanoid} from 'nanoid';
import { FaChevronCircleLeft, FaChevronCircleRight, FaPlus } from "react-icons/fa";

const DATA = {
    id: 123,
    name: 'pretzels',
    quantity: 3,
    isCompleted: true,
}

const ShoppingTwo = () => {
    const [newInputs, setNewInputs] = useState('');
    const [items, setItems] = useState([DATA])

 

    const handleSubmitInput = (ev) => {
        ev.preventDefault();

        const newItem = {
            id: nanoid(),
            name: newInputs,
            quantity: 1,
            isCompleted: false,
        }

        const newItems = [...items, newItem];

        setItems(newItems);
        setNewInputs('')
    }
    return (
        <div className='shoppingTwo'>
            <h2 className='shoppingTwo__title'>Shopping List</h2>
            <form onSubmit={handleSubmitInput} className='shoppingTwo__form'>
                <div className="shoppingTwo__form__box">
                    <input onChange={(ev)=>setNewInputs(ev.target.value)} value={newInputs} className='shoppingTwo__form__input' type="text" placeholder='add items...' />
                    <button className='shoppingTwo__form__button'><FaPlus /></button>
                </div>
            </form>

            <div className="shoppingTwo__list">
                <h3 className="shoppingTwo__list__title">Your List</h3>
                {items.map((item,index) => (
                    <div key={index} className='shoppingTwo__listBox'>
                        <div className='shoppingTwo__listBox__name'>{item.name}</div>
                        <div className='shoppingTwo__listBox__quantity'>
                            <FaChevronCircleLeft />
                            {item.quantity}
                            <FaChevronCircleRight />
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShoppingTwo

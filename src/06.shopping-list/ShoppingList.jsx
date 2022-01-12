import React,{useState} from 'react'
import './shoppingStyle.css'
import {nanoid} from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

const DATA = {
    id: 123,
    text: 'eggplant',
    quantity: 3,
    isSelected: true
}

const ShoppingList = () => {

    const [newInput, setNewInput] = useState('');
    const [items, setItems] = useState([DATA]);
    const [totalQuantity, setTotalQuantity] = useState(3);

    const newInputHandle = (ev) => {
        ev.preventDefault();

        const newItem = {
            id: nanoid(),
            text: newInput,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...items, newItem];
        setItems(newItems);
        setNewInput('');
    }

    //? ADD & REDUCE BUTTON
    const handleDecrease = (index) => {
        const newQuantity = [...items];
        newQuantity[index].quantity--;
        if(newQuantity[index].quantity < 1) return;

        setItems(newQuantity);
        calculateTotal();
    }

    const handleIncrease = (index) => {
        const newQuantity = [...items];
        newQuantity[index].quantity++;
        if(newQuantity[index].quantity > 10) return;

        setItems(newQuantity);
        calculateTotal();
    }


    //? DELETE BUTTON
    const handleDelete = (clickedId) => {
       const newList= items.filter(item => item.id !== clickedId)

       calculateTotal();
       setItems(newList);
    }

    //? CALCULATE TOTAL
    const calculateTotal = () => {
        const totalQuantityCount = items.reduce((total, item) => {
            return total + item.quantity;
        },0)

        setTotalQuantity(totalQuantityCount);
    }

    //? TOGGLE COMPLETED
    const toggleComplete = (index) => {
        const newItems = [...items];

        newItems[index].isSelected = !newItems[index].isSelected;

        setItems(newItems);
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
                            <div className="shoppingCard__listBox"
                            
                            > 
                            {item.isSelected 
                            ? (
                                <>
                                <FontAwesomeIcon icon={faCheckCircle} onClick={()=>toggleComplete(index)}/>
                                <li 
                                 className='shoppingCard__listBox__item completed' key={index}>{item.text}</li> 
                                </>
                            )
                            : (
                                <>
                                <FontAwesomeIcon onClick={()=>toggleComplete(index)} icon={faCircle} />
                                <li className='shoppingCard__listBox__item' key={index}>{item.text}</li> 
                                </>
                            )
                        }   
                                 
                                <div className='shoppingCard__listBox__quantity'>
                                    <button className='shoppingCard__listBox__quantity__button'
                                    onClick={()=>handleDecrease(index)}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button className='shoppingCard__listBox__quantity__button'
                                     onClick={()=>handleIncrease(index)}
                                    >+</button>
                                </div>
                                <button className='shoppingCard__listBox__button' onClick={() => handleDelete(item.id)}>x</button>            
                            </div>             
                        ))}
                    </ul>
                
                    <div className="shoppingCard__totalQuantity">
                        Total Items: {totalQuantity}
                    </div>
            </div>
        </div>
    )
}

export default ShoppingList
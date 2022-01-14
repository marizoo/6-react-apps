import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import { FaPlusCircle, FaChevronCircleLeft, FaChevronCircleRight, FaTrash } from "react-icons/fa";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import './shoppingTwoStyle.css'

const DATA = {
    id: 123,
    name: 'bagels',
    quantity: 3,
    isCompleted: true,
};

const ShoppingTwo = () => {

    const [newInput, setNewInput] = useState('');
    const [items, setItems] = useState([DATA]);
    const [totalQuantityCount, setTotalQuantityCount] = useState(3);

    const handleNewInput = (ev) => {
        ev.preventDefault();

        const newInputItem = {
            id : nanoid(),
            name: newInput,
            quantity: 1,
            isCompleted: false,
        };

        const newItems = [...items, newInputItem];

        const add1 = totalQuantityCount + 1;
        setTotalQuantityCount(add1);
        setItems(newItems);
        setNewInput('')
    }

    // ? Toggle isCompleted
    const handleCompleted = (index) => {
        const newItems = [...items]
        newItems[index].isCompleted = !newItems[index].isCompleted
        setItems(newItems);
    } 

    // ? Decrease and Increase
    const handleDecrease = (index) => {
        const newQuantity = [...items];
        newQuantity[index].quantity --;
        if(newQuantity[index].quantity < 1) return;

        setItems(newQuantity);

        calculateTotal();
    }
    const handleIncrease = (index) => {
        const newQuantity = [...items];

        newQuantity[index].quantity ++;
        if(newQuantity[index].quantity > 6) return
        setItems(newQuantity);

        calculateTotal();
    }

    // ? Calculate Total
    const calculateTotal = () => {
       const totalCount = items.reduce((total, item) => {
            return total + item.quantity;
        },0)

        setTotalQuantityCount(totalCount);
    }

    //? Delete
    const handleDelete = (clickedIndex) => {

        const minusDeleted = totalQuantityCount - items[clickedIndex].quantity;
        setTotalQuantityCount(minusDeleted);

        // the delete doesnt work here! why la....
        const copyItems = [...items];
        const newItems = copyItems.filter(item => item.id !== clickedIndex);
        setItems(newItems);
    }


    return (
        <div className='shoppingTwo'>
            <h2 className='shoppingTwo__title'>Shopping List</h2>
            <form onSubmit={handleNewInput} className='shoppingTwo__form'>
                <div className='shoppingTwo__formBox'>
                <input value={newInput} onChange={(ev) => setNewInput(ev.target.value)} type="text" className='shoppingTwo__formBox__input' />
                <FaPlusCircle />
                </div>
            </form>

            <section className='shoppingTwo__list'>
                <h2 className='shoppingTwo__list__title'>Your List</h2>
                
                {items.map((item,index) => (
                    <div className='shoppingTwo__listBox' key={index}>
                        {item.isCompleted && (
                            <div className='shoppingTwo__list__completedBox' onClick={() => handleCompleted(index)}>
                                <div className='shoppingTwo__list__completed'><ImCheckboxChecked /></div>
                                <div className="shoppingTwo__list__item completedStrike">{item.name}</div>
                            </div>
                        )}
                        {!item.isCompleted && (
                            <div className='shoppingTwo__list__completedBox' onClick={() => handleCompleted(index)}>
                                <div className='shoppingTwo__list__completed'><ImCheckboxUnchecked /></div>
                                <div className="shoppingTwo__list__item">{item.name}</div>
                            </div>
                        )}
                       
                        <div className="shoppingTwo__list__quantityBox">
                            <FaChevronCircleLeft onClick={()=>handleDecrease(index)} style={{cursor:'pointer'}} />
                            <span className='shoppingTwo__list__quantityBox__quantity'>{item.quantity}</span>
                            <FaChevronCircleRight onClick={()=>handleIncrease(index)} style={{cursor:'pointer'}}/>
                        </div>
                        <div onClick={() => handleDelete(index)} className="shoppingTwo__list__trash">
                            <FaTrash />
                        </div>
                    </div>
                    
                ))}
                
            </section>

            <section className='shoppingTwo__total'>
                <h3 className='shoppingTwo__total__title'>
                Total items: {totalQuantityCount}
                </h3>
                </section>
        </div>
    )
}

export default ShoppingTwo

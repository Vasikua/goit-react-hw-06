import css from './SearchBox.module.css';
import { useState } from 'react';    
import { useDispatch } from 'react-redux';
 
export default function SearchBox() {
    const dispatch = useDispatch();
    
    const search = (values, action) => {
    
    }
    

   
    return (
        <div className='css.container'>
            <p className = {css.label}> Find contacts by name </p>
            <input 
                className={css.input} 
                type="text"
                onChange={(e) =>dispatch( search(e.target.value))}
            />
        </div>
    );
}
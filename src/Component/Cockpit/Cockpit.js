import React from 'react';
import style from './Cockpit.module.css';
const cockpit = (props) => {
    
    return (
        <div className = {style.Cockpit}>
            <input type= 'text' onChange={(event) => props.change(event)} value={props.input} placeholder='Enter Item Name...' />
            <button onClick = {props.click}>+</button>
        </div>
    );
}

export default cockpit;
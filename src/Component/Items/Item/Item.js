import React from 'react';
 import style from './Item.module.css';
function item(props){
    let val = (props.index+1)+'. '+props.item;    
    return(
        <div className = {style.Item}>
            <input type= 'text' value = {val} />
            <button onClick = {props.clicked}>X</button>            
        </div>
    );
}

export default item;
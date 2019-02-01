import React from 'react';
import Item from './Item/Item';
import style from './Items.module.css';
const items = (props) => {
    let itemBorder ='';
    if(props.items.length!==0){
        itemBorder = style.ItemStyle;
    }
    
    return (
        <div className={itemBorder}>
           { props.items.map((item,index)=>{
            return <Item item = {item} index = {index} key = {index} clicked = {() => props.click(index)}/>
        })}
        </div>
         
    );
      
}

export default items;
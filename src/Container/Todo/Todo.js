import React, { Component } from 'react';
import style from './Todo.module.css';
import Cockpit from '../../Component/Cockpit/Cockpit';
import Items from '../../Component/Items/Items';

class Todo extends Component {
  state = {
    Items:[],
    input:''
  }
  deleteItem = (itemIndex) => {
      const Items = [...this.state.Items];
      Items.splice(itemIndex,1);
      this.setState({Items:Items});
  }
  getItem = (event) => {
    const value = event.target.value;
    this.setState({input:value})
  }
  addItem =() => {    
    const input = this.state.input;
    const Items = [...this.state.Items];
    if(input !== ''){
      Items.push(input);
      this.setState({Items:Items,input:''}); 
    }
      
 }

   render() {
     let itemList = null;
     if(this.state.Items.length !== -1){
      itemList  = (<Items items = {this.state.Items} click = {this.deleteItem}/>);
     }
    
    return (
      <div className={style.Todo}>
          <h2>Simple To Do List</h2>
          <Cockpit input = {this.state.input} change={this.getItem} click = {this.addItem}/>
          {itemList}
      </div>
    );
  }
}

export default Todo;
